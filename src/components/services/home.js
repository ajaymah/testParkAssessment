import axios from 'axios';
import * as commonActions from '../../store/common/action'

export const parkList = (dispatch,statusCose) => {
    dispatch(commonActions.setLoader(true))
    const params = { 
        headers: {'Content-Type':'application/json'} 
    };
    axios.get(`https://developer.nps.gov/api/v1/parks?api_key=BbC8IYuEhKVVCvzJAtdxr5ilaA8eLCbknDOuNluO${statusCose}`,params ).then((response) => {
        if (response.data) {
           dispatch(commonActions.setLoader(false))
           dispatch({type:'PARK_LIST',parkList:response.data.data, totalCount:response.data.total})
        
        }
    }).catch((err) => {
	});
}

export const parkListById = (dispatch,id) => {
    dispatch(commonActions.setLoader(true))
    const params = { 
        headers: {'Content-Type':'application/json'} 
    };
    axios.get(`https://developer.nps.gov/api/v1/parks?api_key=BbC8IYuEhKVVCvzJAtdxr5ilaA8eLCbknDOuNluO&id=${id}`,params ).then((response) => {
        if (response.data) {
            dispatch(commonActions.setLoader(false))
            dispatch({type:'PARK_LIST',parkList:response.data.data})        
        }
    }).catch((err) => {
	});
}

export default {
	parkList,
    parkListById
};