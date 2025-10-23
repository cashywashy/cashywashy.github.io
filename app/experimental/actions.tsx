import 'server-only';
import * as fs from 'fs'

export async function setData(file:string, value: any) {
  fs.writeFileSync(file,value);
}

export async function data_store(formData:FormData) {
    'use server'
    let bro_said = formData.get('bro_said');
    setData('persistent_storage/goobers.txt', bro_said);
}
