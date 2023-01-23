export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const SELECT_CONTACT = 'SELECT_CONTACT'

export const fetchContacts=()=>{
    return {
        type: FETCH_CONTACTS,
    }
}

export const selectContact = (data)=>{
    return {
        type: SELECT_CONTACT,
        payload:data
    }
}