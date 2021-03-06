# eval5

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bplok20010/eval5/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eval5)](https://www.npmjs.com/package/eval5)
[![npm bundle size](https://img.shields.io/bundlephobia/min/eval5)](https://raw.githubusercontent.com/bplok20010/eval5/master/umd/eval5.min.js)

基于 JavaScript 编写的 JavaScript 解释器;A JavaScript interpreter, written completely in JavaScript;

> 解决在不支持`eval`或`Function`的执行环境下执行 JavaScript 代码。例如：微信小程序 [示例](https://github.com/bplok20010/eval5-wx-demo)。

## Usage

`npm install --save eval5`

```javascript
import { evaluate, Function, vm, Interpreter } from "eval5";

// 设置默认作用域
Interpreter.global = window;

//或 evaluate("1+1", Object.create(window));
evaluate("1+1", window); // 2

const func = new Function("a", "b", "return a+b;");

console.log(func(1, 1)); // 2

const interpreter = new Interpreter(ctx, {
	timeout: 1000,
});

let result;

try {
	result = interpreter.evaluate("1+1");
	console.log(result); //2
} catch (e) {
	//..
}
```

## Interpreter

### static `version`

VERSION

### static `global`

`object` 默认：`Object.create(null)`

设置默认作用域对象

例如:

```javascript
Interpreter.global = window;
```

### static `eval`

`readonly`

替代原有的`eval`占位符

> 如果执行环境支持 eval 函数建议使用原生的 eval，除非 eval 需要使用局部变量时，如下情况：

```javascript
const ctx = Object.create(window);

ctx.eval = Interpreter.eval;

const interpreter = new Interpreter(ctx);

interpreter.evaluate(`
    function test(){
        var a = 1;
        return eval('a+1')
    }
    test();
`); // output 2
```

### static `Function`

`readonly`

替代原有的`Function`占位符

作用同`Interpreter.eval`

> 除非不支持`Function`的环境，否则不建议使用

### `constructor`(ctx: {}, options?: { timeout?: number})

构造函数

```javascript
var interpreter = new Interpreter(window);
```

### `evaluate`(code: string): any

返回脚本中执行的最后一个表达式结果

```javascript
var interpreter = new Interpreter(window);
interpreter.evaluate("alert(1+1)");
```

### appendCode(code: string): any

作用同`evaluate`

### setExecTimeout(timeout: number)

单位：ms

## evaluate(code: string, ctx?: {})

执行给定的字符串脚本,返回脚本中执行的最后一个表达式结果

```javascript
evaluate("console.log(1+1)", { console: console });
```

## Function

同 js 原生的 Function

```javascript
const func = new Function("a", "b", "return a+b;");
console.log(func(1, 2));
```

## vm

参考 `node.js vm`

支持 api 列表:

-   vm.createContext
-   vm.compileFunction
-   vm.runInContext
-   vm.runInNewContext
-   vm.Script

## License

MIT

## Support

-   ECMA5

## Related

[evaljs][]
[closure-interpreter][]

[evaljs]: https://github.com/marten-de-vries/evaljs
[closure-interpreter]: https://github.com/int3/closure-interpreter
