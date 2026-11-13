export type Experience = {
  company: string;
  role: string;
  period: string;
  summary?: string;
  project?: { name: string; description: string };
  tags: string[];
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Strativ AB',
    role: 'Senior Software Engineer',
    period: 'Apr 2024 - Present',
    summary:
      "I own backend services and lead the React/TypeScript frontend and the five-person engineering team on Alent Dynamic. Across Strativ, I drive the AI transformation: Claude Code adoption across teams, agent skills and CLAUDE.md conventions, and OpenTelemetry-based observability for LLM usage.",
    project: {
      name: 'Alent Dynamic',
      description:
        'A multi-tenant IoT platform that monitors and controls 200+ wood-drying kilns at 110+ sawmill sites. A cloud control plane of 30+ Go services talks to on-premise edge sites over bidirectional gRPC and keeps working through network outages.',
    },
    tags: ['go', 'typescript', 'react', 'grpc', 'redis', 'influxdb', 'postgresql', 'parquet', 's3', 'aws', 'docker'],
    highlights: [
      'Own a slice of the 30+ service Go platform: the public REST API, internal gRPC gateway, cloud-to-site config sync, kiln process engine, and identity and access control.',
      'Designed and built the Parquet archive for long-term telemetry on S3, sized on a real 2.4M-reading kiln-day: about 25 GB/year fleet-wide. Then opened archive reads back out of S3 with per-customer billing, where a 4 MB read buffer cut S3 GETs for the same query from 804 to 68.',
      'Hardened ingestion: migrated six Redis Streams consumers from at-most-once to at-least-once delivery and closed the dead-letter path that could still lose a message; found and fixed tunnel saturation that was costing about 50x in write overhead and dropping readings.',
      'Two-tier InfluxDB downsampling, cutting slow history queries about 9x (4.7 s to under 500 ms); restructured the tag model, taking untyped catch-all writes from 59% to about 1%.',
      'Stopped an InfluxDB host from being OOM-killed by tuning its WAL flush: memory use over 80% lower (from 5 to 7 GB to under 1 GB), write cache 97% smaller, and a query that timed out at 20 s now answers in 175 ms, on the same machine.',
      'Engineered the on-premise edge service that streams up to 1.5M points/day per kiln from Redis Streams over WebSocket and sends control commands over Redis Pub/Sub; keeps working when the cloud link drops.',
      "Built the Synchronization Handler, the service that coordinates a site's kilns from the cloud, and designed the event-driven cloud-to-edge state sync behind it, since reused across the platform.",
      'Lead the React/TypeScript operator dashboard: live equipment monitoring, real-time WebSocket charts, hierarchical role-based access control, and i18n.',
    ],
  },
  {
    company: 'Spring Rain Software Ltd.',
    role: 'Software Engineer',
    period: 'Jan 2024 - Mar 2024',
    tags: ['nodejs', 'typescript', 'azure-functions', 'cosmos-db', 'react'],
    highlights: [
      'Built five Node.js/TypeScript microservices on Azure Functions and Cosmos DB for Turf Forensics, which uses real-time weather data to predict golf-turf conditions and recommend treatments; also built its React frontend.',
    ],
  },
  {
    company: 'Brain Station 23',
    role: 'Associate Software Engineer',
    period: 'Nov 2021 - Nov 2022',
    tags: ['react', 'typescript', 'redux-toolkit', 'chrome-extension'],
    highlights: [
      'Built features for TimeTackle, a time-management web app and Chrome extension, in React/TypeScript; migrated state management to Redux Toolkit and set up a testing pipeline that cut manual testing by about 20%.',
    ],
  },
  {
    company: 'Dast Inc.',
    role: 'Frontend Developer',
    period: 'Jan 2021 - Jun 2021',
    tags: ['angular', 'sass'],
    highlights: ['Built an online exam system in Angular.'],
  },
];
