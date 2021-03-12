const INITIAL_STATE = {
	 loading: false
}
const commonReducer = (state = INITIAL_STATE, action)=>{
	switch(action.type){
        case 'LOADING_LOADER': 	
		return {
		     ...state,
            loading: action.flag
		};
		default:
		return state       	
	}
    return state;
}
export default commonReducer;