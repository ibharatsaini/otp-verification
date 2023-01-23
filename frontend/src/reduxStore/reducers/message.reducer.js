import { ERROR_MESSAGE, LOADING_MESSAGE, UPDATE_MESSAGE } from "../actions/message.actions"

const initialState = {
    messages:[],
    loading:false,
    error:false
}

export const messageReducer = (state=initialState,actions)=>{
    switch(actions.type){
        case LOADING_MESSAGE:
            return {
                ...state,
                loading:true,
                error:false
            }
        
        case ERROR_MESSAGE:
            return {
                ...state,
                loading:false,
                error:true
            }

        case UPDATE_MESSAGE:
            return {
                ...state,
                loading:false,
                error:false,
                messages:[actions.payload,...state.messages]
            }

        default:
            return state
    }
}