import { SIGN_OUT, SIGN_IN, REGISTRATION } from '../actions/types'

export const signOut = () => ({
    type: SIGN_OUT,
})

export const signIn = (data) => ({
    type: SIGN_IN,
    payload: {
        data,
    },
})

export const registration = (data) => ({
    type: REGISTRATION,
    payload: {
        data,
    },
})

