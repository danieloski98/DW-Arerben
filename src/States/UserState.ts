import {atom} from 'recoil';

export const UserAtom = atom({
    key: 'User Details',
    default: {email: '', last_name: '', first_name: '', id: '', access: '', refresh: '', location: 0, sex: '', date_of_birth: '', marital_status: '', nationality: '', contact_address: '', contact_state: '', contact_city: '', occupation: '', source_of_income: '', office: '', bank: 0,profile_pic: '', identity_pic: '', agent: 0, required_doc: ''},
})
