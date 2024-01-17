import {
	SIGN_OUT,
	SIGN_IN,
	REGISTRATION,
} from '../actions/types';

const initialState = {
    dataUser: null,
}

export default function apiReducer(state = initialState, action) {
    switch (action.type) {

        case REGISTRATION: {
            const { data } = action.payload
 
            return {
                ...state,
                dataUser: data,
            }
        }

        case SIGN_IN: {
            const { data } = action.payload
 
            return {
                ...state,
                dataUser: data,
            }
        }

        case SIGN_OUT: {
            return {
                ...state,
                dataUser: [],
            }
        }

        default:
            return state
    }
}
