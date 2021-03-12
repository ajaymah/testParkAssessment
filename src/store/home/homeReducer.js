const INITIAL_STATE = {
	parkList:[],
	totalCount: 0
}
const HomeReducer = (state = INITIAL_STATE, action)=>{
	switch(action.type){
		case 'PARK_LIST': 	
		return {
			...state,			
			parkList:action.parkList,
			totalCount:action.totalCount
		}		
		default:
		return state       	
	}
    return state;
}
export default HomeReducer;