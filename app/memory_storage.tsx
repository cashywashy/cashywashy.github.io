'use server'
interface Dictionary<T> {
  [key:string]: T;
}
let datas : Dictionary<any> = {}

export async function setData(key:string, data:any) {
  'use server'
  datas[key] = data;
}

export async function getData(key:string) {
  'use server'
  return datas[key];
}
