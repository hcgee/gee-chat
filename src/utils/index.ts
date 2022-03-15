/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:51:12
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-15 20:55:22
 */

/**
 * 获取缓存
 * @param key
 * @returns
 */
export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * 设置缓存
 * @param key
 * @param value
 */
export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

/**
 * 清除缓存
 */
export const clearLocalStorage = () => {
  localStorage.clear();
};

/**
 * 防抖
 * @param callback
 * @param delay
 */
export const debounce = (callback: any, delay: number) => {
  if (typeof callback !== "function") {
    throw new TypeError("请传入正确的函数参数");
  }
  let timer: any = null;
  return function () {
    // 存储触发当前事件的this
    let _this = this;
    // 存储event对象
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(_this, args);
    }, delay);
  };
};

/**
 * 节流
 * @param callback
 * @param delay
 */
export const throttle = (callback: any, delay: number) => {
  if (typeof callback !== "function") {
    throw new TypeError("请传入正确的函数参数");
  }
  let prev = Date.now();
  return function () {
    let curr = Date.now();
    if (curr - prev >= delay) {
      setTimeout(callback, delay);
      prev = curr;
    }
  };
};
