import { GET_JASONPLACEHOLDER_REQUEST,
         GET_JASONPLACEHOLDER_SUCCESS,
         GET_JASONPLACEHOLDER_FAILURE } from "./types"

//// NOTES: Sample of passing parameters
//export const getJasonPlaceHolder = (parm1, parm2) => ({ type: GET_JASONPLACEHOLDER_REQUEST, parm1, parm2 });
export const getJasonPlaceHolder = () => ({ type: GET_JASONPLACEHOLDER_REQUEST});
export const getJasonPlaceHolderSuccess = data => ({ type: GET_JASONPLACEHOLDER_SUCCESS, data });
export const getJasonPlaceHolderFailed = error => ({ type: GET_JASONPLACEHOLDER_FAILURE, error });