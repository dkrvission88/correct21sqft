import { REGISTER_FAILURE,REGISTER_SUCCESS,REGISTER_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,EDIT_REQUEST,EDIT_FAILURE,EDIT_SUCCESS,LOGOUT } from "../Constant/constant";
const initialState = {
  loading: false,
  error: null,
  success: false,
  data: null,

  // isAuthenticated:true,
  // user: action.payload,

  isAuthenticated: false,
  user: null,
  token: null,
 
};

export const reduce01 = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state, 
        loading: false,
        success: true,
        data: action.payload
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false
      };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null

        //   console.log(action.payload)
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload

        };

        case EDIT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case EDIT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
        };
      case EDIT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };


      //   case LOGOUT:
      // return {
      //   ...state,
      //   token: null,
      // };

      case LOGOUT:
      return { ...state, loading: false, success: true };



    default:
      return state;
  }
};

