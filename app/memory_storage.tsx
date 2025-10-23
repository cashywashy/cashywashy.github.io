import 'server-only';
interface Dictionary<T> {
  [key:string]: T;
}

'use server'
let datas : Dictionary<any> = {}

export function setData(key:string, data:any) {
  'use server'
  datas[key] = data;
}

export function getData(key:string) {
  'use server'
  return datas[key];
}
