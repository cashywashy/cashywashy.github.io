import 'server-only';
import { setData } from '../memory_storage';

export async function data_store(formData:FormData) {
    'use server'
    let bro_said = formData.get('bro_said');
    setData('bro_said', bro_said);
}
