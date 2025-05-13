// import { clear } from "console"
import { clear } from "console";
import { useState, useEffect } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : !value);
//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object: Object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce=(func,delay)=>{
//     let timeout;
//     return () =>{
//         if(timeout){
//             clearTimeout(timeout)
//         }
//         timeout=setTimeout(function(){
//             func();
//         },delay);
//     }
// }

//后面用泛型修正
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
export const useArray = <A>(initialArray: A[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: A) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
