const INITIAL_STATE = {
	loginUser:{},
	tokin:'',
	userList:[],
	userListGoRest:[]
}
const LoginReducer = (state = INITIAL_STATE, action)=>{
	switch(action.type){
        case 'LOGIN_USERS': 	
		return {
			...state,			
			loginUser:action.payLoad
		};
		case 'LOGIN_USERS_TOKIN': 	
		return {
			...state,			
			tokin:action.payLoad
		}
		case 'USERS_LIST': 	
		return {
			...state,			
			userList:action.list
		}
		case 'USERS_LIST_GOREST': 	
		return {
			...state,			
			userListGoRest:action.list
		}
		default:
		return state       	
	}
    return state;
}
export default LoginReducer;