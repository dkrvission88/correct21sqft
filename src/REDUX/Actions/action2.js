// import { LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT } from '../Constant/constant'; 

// import axios from 'axios';

// export const login = (name, password) =>
    
//     async dispatch => {
//   try {
//     const response = await axios.post('http://localhost:8000/api/auth/contractor-login', {
//       name,
//       password
//     });
//     dispatch({ type: LOGIN_SUCCESS,

//          payload: response.data
        
//         });
//   } catch (error) {

//     dispatch({ type: LOGIN_FAILURE, 
        
//         payload: error.message });
//   }
// };

// console.log();

// export const logout = () => {
//   return { type: LOGOUT };
// };
