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
