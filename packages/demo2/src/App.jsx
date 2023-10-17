import logo from './logo.svg';
import './App.scss';
import demo1, { a } from "demo1";
import React from "react";



function Person () {
  this.a = 1;
}
function createNew(Fn,...args) {
	// 创建空对象
	let newObj = null
	// 获取Fn构造函数
	// 这里由于argumens虽然是类数组类型，但并没有数组中的方法，因此使用call将数组的shift()方法绑定给arguments
	// 这里constructor为Fn，arguments为...args,即需传入构造函数中的参数。
	let constructor = Array.prototype.shift.call(arguments)
	let result = null
	// 判断构造函数的函数类型
	if(typeof constructor !== 'function')  {
		console.log('type error')
		return
	}
	// 原型链链接
	newObj = Object.create(constructor.prototype)
	// 绑定this，执行构造函数，接收构造函数返回值
	result = constructor.apply(newObj,args)
	// 若result为引用类型，返回；否则返回newObj;
	return result instanceof Object ? result : newObj;
}

console.log(createNew(Person))
console.log(new Person())

demo1();
a();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div style={{ clear: 'both'}}></div> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
