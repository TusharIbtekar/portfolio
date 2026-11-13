---
title: "Building a High-Performance Real-Time Chart in React: Lessons Learned"
description: "Real-time data visualization is tricky."
date: 2025-08-05
tags: [react, typescript, websocket, chartjs]
---

Real-time data visualization is tricky. While many tutorials show you how to create basic charts, they often skip over the challenges of handling continuous data streams efficiently. Here's how I built a production-ready solution that handles thousands of data points while maintaining smooth performance.

## The Common Pitfalls

Most basic real-time chart implementations look something like this:

```
const BasicChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // DON'T DO THIS
    websocket.on('newData', (value) => {
      setData(prev => [...prev, value]);
      chartRef.current?.update();
    });
  }, []);

  return <Line data={data} />;
};
```

This approach has several problems:

- Every data point triggers a re-render
- Memory usage grows indefinitely
- Chart animations cause jank
- CPU usage spikes with frequent updates

## A Better Architecture

The actual implementation uses a combination of WebSocket updates and REST API calls for initial data loading. This is a generalized version.

#### 1. Smart Data Management

First, let's define our constants and types:
```
// constants.ts
export const CHART_CONFIG = {
  UPDATE_DELAY: 100,        // Debounce delay in ms
  INITIAL_RANGE: 600000,    // Initial time window (10 minutes)
  POINT_LIMIT: 1000,        // Maximum points to fetch initially
  POINT_THRESHOLD: 3000,    // Threshold before data cleanup
  CHANGE_THRESHOLD: 1       // Minimum change to record new point
};

interface TimeseriesData {
  metric: string;
  values: number[];
  timestamps: number[];
}
```

#### 2. Intelligent Data Processing
The `processNewDataPoint` function handles both new WebSocket data and existing metrics
Here's how we handle new data points:
```
const processNewDataPoint = (
  existingData: TimeseriesData,
  newValue: number
): void => {
  const lastValue = existingData.values[existingData.values.length - 1];

  // Only record significant changes
  const hasSignificantChange = Math.abs(newValue - lastValue) > CHART_CONFIG.CHANGE_THRESHOLD;

  if (hasSignificantChange) {
    existingData.values.push(newValue);
    existingData.timestamps.push(Date.now());
  } else {
    // Update the last timestamp without adding duplicate data
    existingData.timestamps[existingData.timestamps.length - 1] = Date.now();
  }
};
```

#### 3. Optimized Chart Component
The chart updates are optimized using `chartRef.current?.update('none')` to skip animations. 
   Here's our main chart component with performance optimizations:

```
const RealTimeChart: FC<RealTimeChartProps> = ({ metrics, dataSource }) => {
  const chartRef = useRef<ChartJS>();
  const [activeMetrics, setActiveMetrics] = useState<string[]>([]);

  // Debounced chart update
  const updateChart = useCallback(
    debounce(() => {
      chartRef.current?.update('none');
    }, CHART_CONFIG.UPDATE_DELAY),
    []
  );
  
  // Cleanup the chart instance and debounced function when the component unmounts
	useEffect(() => {
		return () => {
			// Cleanup the chart instance
			if (chartRef.current) {
				chartRef.current.destroy();
			}
			// Cleanup the debounced function
			updateChart.cancel();
		};
	}, [updateChart]);

  useEffect(() => {
    if (!dataSource) return;

    const handleNewData = (newData: MetricUpdate) => {
      // Process each metric
      metrics.forEach(metric => {
        if (!activeMetrics.includes(metric.id)) return;

        processNewDataPoint(metric, newData[metric.id]);
      });

      // Check if we need to clean up old data
      const shouldCleanup = metrics.some(
        metric => metric.values.length > CHART_CONFIG.POINT_THRESHOLD
      );

      if (shouldCleanup) {
        cleanupHistoricalData();
      }

      updateChart();
    };

    dataSource.subscribe(handleNewData);
    return () => dataSource.unsubscribe(handleNewData);
  }, [metrics, activeMetrics, dataSource]);

  return (
    <ChartContainer>
      <Line
        ref={chartRef}
        data={getChartData(metrics, activeMetrics)}
        options={getChartOptions()}
      />
      <MetricSelector
        metrics={metrics}
        active={activeMetrics}
        onChange={setActiveMetrics}
      />
    </ChartContainer>
  );
};
```

#### 4. Performance-Optimized

Chart Configuration

```
export const getChartOptions = (): ChartOptions<'line'> => ({
  responsive: true,
  maintainAspectRatio: false,

  // Optimize animations
  animation: false,

  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'minute',
        displayFormats: {
          minute: 'HH:mm'
        }
      },
      // Optimize tick display
      ticks: {
        maxTicksLimit: 8,
        source: 'auto'
      }
    },
    y: {
      type: 'linear',
      // Optimize grid lines
      grid: {
        drawBorder: false,
        drawTicks: false
      }
    }
  },

  elements: {
    // Disable points for performance
    point: {
      radius: 0
    },
    line: {
      tension: 0.3,
      borderWidth: 2
    }
  },

  plugins: {
    // Optimize tooltips
    tooltip: {
      animation: false,
      mode: 'nearest',
      intersect: false
    }
  }
});
```

## Key Optimizations Explained

#### 1. Selective Data Recording

   Instead of recording every data point, we only store values when there's a significant change:
   - Reduces memory usage
   - Maintains visual accuracy
   - Improves processing performance

#### 2. Efficient Updates

   The debounced update pattern prevents excessive renders:
   - Groups multiple data updates into a single render
   - Reduces CPU usage
   - Maintains smooth animations

#### 3. Data Cleanup

   Implementing a point threshold system prevents memory issues:
   - Monitors total data points
   - Triggers cleanup when threshold is reached
   - Maintains consistent performance over time

#### 4. Chart.js Optimizations

   Several Chart.js-specific optimizations improve performance:

   - Disabled point rendering for smoother lines
   - Removed unnecessary animations
   - Optimized tooltip interactions
   - Reduced tick density
   - Simplified grid lines

## Results

This implementation has several advantages over simpler approaches:

- Memory Efficient: Only stores necessary data points
- CPU Friendly: Minimizes renders and calculations
- Smooth Updates: No visual jank during updates
- Scale-Ready: Handles thousands of points efficiently
- User Friendly: Maintains responsive interactions

## Future Optimizations

While the current implementation is well-optimized for typical use cases, there are several potential future enhancements:

1. **Web Workers Integration**
   - Offload data processing to a separate thread
   - Improve main thread performance for larger datasets
   - Enable more complex data transformations without UI impact

2. **Progressive Loading**
   - Implement virtual scrolling for historical data
   - Load data chunks based on viewport
   - Improve initial load performance

## Conclusion

Building an efficient real-time chart requires careful consideration of data management, render optimization, and user experience. While the implementation is more complex than basic examples, the benefits in performance and reliability make it worthwhile for production applications.
The key is finding the right balance between:

- Update frequency vs. performance
- Data accuracy vs. memory usage
- Visual quality vs. render speed

This solution provides a solid foundation that can be adapted for various real-time visualization needs while maintaining excellent performance characteristics.

Any suggestions for further improvements would be appreciated 😀
