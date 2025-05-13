import React from "react";
import { useState } from "react";
import { useMount, useArray } from "utils";
interface PersonType {
  name: string;
  age: number;
}
export const TsReact = () => {
  const persons: PersonType[] = [
    { name: "jack", age: 18 },
    { name: "rose", age: 20 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {});
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 18 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginLeft: "20px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person, index) => (
        <div style={{ marginBottom: "30px" }}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
