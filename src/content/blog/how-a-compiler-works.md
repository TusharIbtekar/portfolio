---
title: "How a Compiler Works: A Simple Breakdown"
description: "Ever wondered how your code gets converted into something a computer can actually run?"
date: 2024-09-09
tags: []
---

Ever wondered how your code gets converted into something a computer can actually run? That's where a compiler comes in! Think of it like a translator, turning your high-level code (which humans understand) into machine code (which computers understand).

In this blog, we'll walk through the stages of a compiler with a simple example. By the end, you'll have a clearer picture of what's going on under the hood when you hit "run."


### Our Example Code
```
x = 10 + y * z;
```

This is a basic expression that assigns a value to `x`. But before `x` can hold the result, the compiler must break this down step-by-step.

![Image description](/images/blog/how-a-compiler-works-1.png)

### The Steps of a Compiler

1. **Lexical Analysis**
The compiler reads your code and breaks it into tokens - basic units like keywords, variables, and operators. For example, in `x = 10 + y * z;`, the tokens are `x`, `=`, `10`, `+`, `y`, `*`, `z`.

2. **Parsing**
The tokens are organized into an Abstract Syntax Tree (AST), showing the structure and order of operations. This tree represents how the operations in your code are related.
The compiler creates a symbol table to track variables and their details. It keeps track of which variables exist and their types.
3. **Semantic Analysis**
The compiler checks the AST for logical correctness. It ensures variables are declared and used properly, and that operations are valid, updating the symbol table as necessary.
4. **Intermediate Representation (IR)**
The AST is converted into an Intermediate Representation (IR). This is a simplified version of your code, breaking down complex operations into more manageable steps.
5. **Optimizer**
The Optimizer tries to optimize the intermediate generated code.
6. **Code Generation**
Finally, the compiler translates the IR into machine code or assembly code that the CPU can execute. This low-level code consists of direct instructions for the computer's hardware.

### Wrapping Up
The process - from tokenizing your code to generating machine code - ensures your program is correctly interpreted and executed by the computer. Each step plays a crucial role in transforming your high-level instructions into something the machine can understand.
