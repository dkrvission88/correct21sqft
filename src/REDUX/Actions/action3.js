// import { useDispatch } from "react-redux";

// import { EDIT_FAILURE,EDIT_SUCCESS,EDIT_REQUEST } from "../Constant/constant";
// import axios from "axios";





// const editRequest = () => ({
//     type: EDIT_REQUEST,
//   });
  
//   const editSuccess = () => ({
//     type: EDIT_SUCCESS,
//   });
  
//   const editFailure = (error) => ({
//     type: EDIT_FAILURE,
//     error,
//   });

// THUNK IMPLEMENT

// export const edit=(data)=>async(dispatch)=>{

//     try{
//         dispatch(editRequest())
//         const response=await axios.put('http://localhost:8000/api/auth/contractor-edit',{
//             method: 'PUT',

//             headers: {
//                 'Content-Type': 'application/json',
//               },

//               body: JSON.stringify(data),

//         })

//         if (!response.ok) {
//             throw new Error('Failed to edit supplier');
//           }
//           dispatch(editSuccess());


//     }catch(error){
//         dispatch(editFailure(error.message))
//     }

// }