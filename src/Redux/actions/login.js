export const login = (mobileNumber) => {
    return async (dispatch) => {
            localStorage.setItem('MobileNumber', mobileNumber)
      
        
          

            const getMobile = localStorage.getItem('MobileNumber')
       
        

        dispatch({
            type: 'LOGIN',
            payload: {
                getMobile
            }
        })
    }
}