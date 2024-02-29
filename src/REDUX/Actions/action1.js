import { REGISTER_FAILURE,REGISTER_SUCCESS,REGISTER_REQUEST,EDIT_FAILURE,EDIT_SUCCESS,EDIT_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT } from "../Constant/constant";

import axios from "axios";

// Supplier.jsx
export const registerS = (formData) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const response = await axios.post('http://localhost:8000/api/auth/contractor-register',{
        

        headers: {
            'Content-Type': 'application/json',
          },

          // body: JSON.stringify(formData),
          
      } );

      console.log(response);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.message
      });
    }
  };
};



// Supplylogin.jsx
export const login = (name, password) =>
    
    async dispatch => {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/contractor-login', {
          name,
          password
          }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        dispatch({ 
          type: LOGIN_SUCCESS,
          payload: response.data
        });
      } catch (error) {

    dispatch({ type: LOGIN_FAILURE, 
        
        payload: error.message });
  }
};


// EditProfileSupplier.jsx


const editRequest = () => ({
  type: EDIT_REQUEST,
});

const editSuccess = () => ({
  type: EDIT_SUCCESS,
});

const editFailure = (error) => ({
  type: EDIT_FAILURE,
  error,
});


export const edit=(data)=>async(dispatch)=>{

  try{
      dispatch(editRequest())
      const response=await axios.put('http://localhost:8000/api/auth/contractor-edit',{
          method: 'PUT',

          headers: {
              'Content-Type': 'application/json',
            },

            // body: JSON.stringify(data),

      })
      console.log(response);

      if (!response.ok) {
          throw new Error('Failed to edit supplier');
        }
        dispatch(editSuccess());


  }catch(error){
      dispatch(editFailure(error.message))
  }

}



export const logout = (data) => async (dispatch) => {
  
    const response = await axios.get('http://localhost:8000/api/auth/contractor-logout', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({
      type: LOGOUT
      // payload: response.data 
    });

  // } catch (error) {
    // Handle error here
    // console.error('Error during logout:', error);
  
}

























// import * as constant from  "../Constant/constant";
// import {CONTRACTOR_OR_SUPPLIRE_LOGIN} from  "../Constant/constant";




// export const getSupplierL=(data)=>{
//   return{
//     type:CONTRACTOR_OR_SUPPLIRE_LOGIN,
//     payload:data
//   }
// }



// export const login = (username, password) => {
//   return async (dispatch) => {
//     dispatch({ type: constant.LOGIN_REQUEST });
//     try {
     
//       const user = await fakeApiLogin(username, password);
//       dispatch({ type: constant.LOGIN_SUCCESS, payload: { user } });
//     } catch (error) {
//       dispatch({ type: constant.LOGIN_FAILURE, payload: { error } });
//     }
//   };
// };

// export const logout = () => {
//   return { type: constant.LOGOUT };
// };


// const fakeApiLogin = async (username, password) => {
  
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   return { username }; 
// };