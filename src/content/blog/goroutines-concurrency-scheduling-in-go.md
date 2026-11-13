---
title: "Understanding Goroutines, Concurrency, and Scheduling in Go"
description: "If we talk about go, one of the most powerful features that go gives us is probably Go’s concurrency."
date: 2025-08-06
tags: [go, goroutines, webdev, architecture]
---

If we talk about go, one of the most powerful features that go gives us is probably Go’s concurrency. But what exactly happens under the hood when we spawn goroutines? Specially on modern multi-core processors? Let’s dive deep: 

## Concurrency vs Parallelism

Before diving into Go’s internal, let’s get this out of the way -

- **Concurrency** is the ability to structure a program as independently executing tasks. These tasks may not actually run at the same time, but they are designed to make progress independently. Concurrency, along with context switching, gives us a flavor of parallelism, where it makes us think processes are running at the same time, but when in actual case, it’s just jumping between processes while saving their states in Process Control Block(PCB) or Thread Control Block (TCB). How our CPU does this, is a tale of another day.
- **Parallelism** means actually executing multiple tasks simultaneously.

Go enables **concurrency by default** via goroutines. Whether this results in parallelism depends on our hardware and the Go runtime’s configuration via `GOMAXPROCS` 

## Goroutine

Let’s lift the lid. What exactly is a goroutine? Its a lightweight, user-managed thread of execution. But here’s the catch, this is not like OS threads. Key differences are below:

- Extremely cheap to create (initial stack ~2KB)
- Scheduled cooperatively by the Go runtime, not by the OS
- Capable of scaling into the millions without overwhelming the system

When we write:

```go
go doWork()
```

We’re instructing the Go scheduler to start a new goroutine that will run `doWork` concurrently.

## Go’s Scheduler: G, M, P Model

Go uses **M:N Scheduler**. Many goroutines(`G`) are multiplexed onto a smaller number of OS threads(`M`), which are coordinated using logical processors(`P`)

### Components:

- **G:** Goroutine
- **M**: Machine (an actual OS thread)
- **P**: Processor (logical context needed to execute Go code)

Only an M with an associated P can execute go code.

## High-Level Diagram

![Image description](/images/blog/goroutines-concurrency-scheduling-in-go-1.png)

### How They Work Together

- Each **P** manages a **local queue** of runnable goroutines.
- Each **P** is attached to **at most one M** (OS thread) at a time.
- An **M** runs one goroutine (`G`) at a time.
- If a goroutine blocks (e.g. on I/O), the M detaches, and the P is reassigned to another available M to continue execution.

## What Happens When We Start Many Goroutines?

Suppose, we are spawning 100,000 goroutines:

```go
for i := 0; i < 1000000; i++ {
	go doWork(i)
}
```

On a machine with 16 logical CPUs (Logical CPUs are what we know as CPU threads - like 8 core processor has 16 threads), Go:

- Initializes 16 `P`s (by default `GOMAXPROCS` = 16)
- Creates some `M`s (OS threads) to execute goroutines
- Distributes goroutines to the `P`s’ local run queues

Each `P` runs one goroutine at a time using an `M`. As goroutines block or finish, the `P` selects the next goroutine in its queue.

## Concurrency Through Context Switching

### Context Switching Explained

Since the number of goroutines is often much greater than the number of available `P`s or CPU threads, Go uses **context switching** to simulate concurrent execution.

- When a goroutine blocks (e.g., on I/O or a channel), it is paused.
- The scheduler saves its state (program counter, stack pointer, etc.), also known as TCB
- The `P` picks another runnable goroutine and resumes it.
- All of this is done in **user space**, without needing a system call, making it fast.

### Single Core Example

Even with just one CPU core:

- Only one goroutine can run at a time.
- Go scheduler switches between goroutines, giving the illusion of concurrency.
- This is achieved by cooperative and preemptive scheduling, context switching rapidly between runnable goroutines.

## Ratios and Limits

### P:M (Processor to Thread)

- **1:1 at a time**: A `P` is bound to one `M` (OS thread) at a time.
- If an `M` blocks, the Go scheduler finds another idle `M` to attach the `P` to.

### P:G (Processor to Goroutines)

- **1:many**: Each `P` maintains a queue of many runnable `G`s.
- Only one runs at a time on the `P`, but others wait in the queue.

### M:G (Thread to Goroutines)

- **1:1 at a time**: Each `M` executes one goroutine at a time.
- The `M` is not aware of the queue — the `P` hands it a goroutine to run.

## Work Stealing and Global Queue

If a `P`’s local queue is empty, it can:

1. **Steal work** from the queue of another `P`.
2. **Pull work** from the global run queue (used as a fallback).

This ensures that all processors stay busy and that goroutines are distributed evenly across available resources.

## Parallelism with Multi-Core CPUs

On a processor that has 8 cores and 16 logical cores:

- Go sets `GOMAXPROCS = 16` by default.
- This means up to **16 goroutines can be running in true parallel** at any moment — one per logical core.
- The rest of the goroutines are scheduled cooperatively.

So Go programs benefit from both **parallelism (when hardware allows)** and **concurrency (even when limited to one core)**.

## Conclusion

Whether we are running Go on a Raspberry Pi or a 32-core server, the same model adapts gracefully, letting us write clean concurrent code without worrying about locks, thread pools, or race conditions (beyond correctness).

If you're curious to dig deeper, tools like `runtime/trace`, `pprof`, and `go tool trace` can help you visualize how goroutines behave during execution.
