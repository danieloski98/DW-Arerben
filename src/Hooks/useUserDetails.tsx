import React from 'react'
import { View, Text } from 'react-native'
import {useRecoilState} from 'recoil'
import { UserAtom } from '../States/UserState'
import { IUser } from '../Types/User.type';

export default function useUserDetails() {
    const [user, setUser] = useRecoilState(UserAtom);

    const setUserAtom = (user: IUser) => {
        setUser(user);
    }
    return {
        user, setUserAtom
    }
}
