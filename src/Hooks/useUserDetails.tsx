import React from 'react'
import { View, Text } from 'react-native'
import {useRecoilState} from 'recoil'
import { UserAtom } from '../States/UserState'

export interface IUSer {
    email: string;
    first_name: string;
    last_name: string;
    id: string;
    access: string;
    refresh: string;
}

export default function useUserDetails() {
    const [user, setUser] = useRecoilState(UserAtom);

    const setUserAtom = (user: IUSer) => {
        setUser(user);
    }
    return {
        user, setUserAtom
    }
}
