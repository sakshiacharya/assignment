const initialState = {
    mobileNumber : [],
    
};

const loginReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN' : 
        return {
            ...state,
            mobileNumber: action.payload,

        }
        default: 
        return state;
    }
}
export default loginReducers