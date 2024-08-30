/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { useState, useEffect } from "react";
import { Button } from "antd";

const CP1: React.FC<any> = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count改变才会执行");
  }, [count]);

  return (
    <>
      <div>
        number: {number} count: {count}
      </div>
      <Button type="primary" onClick={() => setNumber((v) => v + 1)}>
        number + 1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => setCount((v) => v + 1)}
      >
        count + 1
      </Button>
    </>
  );
}

const CP2: React.FC<any> = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("只要数据源发生变化（不限于自身中），该函数都会执行");
  },);

  return (
    <>
      <div>
        number: {number} count: {count}
      </div>
      <Button type="primary" onClick={() => setNumber((v) => v + 1)}>
        number + 1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => setCount((v) => v + 1)}
      >
        count + 1
      </Button>
    </>
  );
}

const App: React.FC<any> = () => {

  return (
    <>
      <CP1></CP1>
      <hr />
      <CP2></CP2>
    </>
  )
};

export default App;