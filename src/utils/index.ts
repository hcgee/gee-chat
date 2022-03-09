/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:51:12 
 * @Last Modified by:   huhanchi 
 * @Last Modified time: 2022-03-09 22:51:12 
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
