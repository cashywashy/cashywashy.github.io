interface Dictionary<T> {
  [key:string]: T;
}
let datas : Dictionary<any> = {}

export async function setData(key:string, data:any) {
  datas[key] = data;
}

export async function getData(key:string) {
  return datas[key];
}
