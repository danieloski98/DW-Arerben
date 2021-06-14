import {atom} from 'recoil';
import { IUser } from '../Types/User.type';

const data: IUser = { email: '', first_name: '', access: '', refresh: '', id: ''};

export const UserAtom = atom({
    key: 'UserDetails',
    default: data,
})
