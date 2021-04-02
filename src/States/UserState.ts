import {atom} from 'recoil';

export const UserAtom = atom({
    key: 'User Details',
    default: {email: '', last_name: '', first_name: ''}
})