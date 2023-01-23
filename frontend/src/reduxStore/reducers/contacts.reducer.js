import fake from '../../Components/fakeContact.json'
import { FETCH_CONTACTS, SELECT_CONTACT } from '../actions/contacts.actions'

const initialState = {
    contacts : [...fake],
    selected : null
}


export const contactReducer = (state=initialState,actions)=>{
        switch(actions.type){
            case FETCH_CONTACTS:
                return {
                    ...state
                }
            case SELECT_CONTACT:
                return {
                    ...state,
                    selected :actions.payload
                }

            default :
               return state
        }
}