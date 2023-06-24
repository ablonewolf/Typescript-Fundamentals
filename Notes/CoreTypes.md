# TypeScript Core Types

Several core types are there in TypeScript. They are:

- number: includes integers and floats
- string: all text values
- boolean: true, false, no truthy or falsy values unlike javascript
- object: any JavaScript object. Even objects of specific types are also included.
- arrays: any JavaScript array. Type can be flexible or strict.
- tuples: fixed-length array. Once declared or initialized, length of tuple cannot be changed.
- enum: same to that of Java. It automatically enumerates global constant identifiers.
- any: refers to any kind of value. It has no specific type assignment. It should be only used when we are sure of the type of the data or variable.
- unknown: can be called as the somewhat more strict version of any. Unlike any, when a variable is declared as unknown, typescript compiler ensures its typesafety. Type assertion is only possible through type casting or narrowing down the type.
  <b>Key Difference:</b> in Javascript, types are set dynamically during runtime; whereas in Typescript, types are set statically during development.
