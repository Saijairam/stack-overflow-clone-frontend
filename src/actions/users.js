import * as api from '../api';

export const fetchAllusers = ()=>async(dispatch)=>{
    try {
        const {data} = await api.fetchAllusers();
        dispatch({type:"FETCH_USER",payload:data});
         
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProfile = (id ,updateData) => async(dispatch)=>{
   try {
     const {data} = await api.updateProfile(id,updateData);
     dispatch({type:'UPDATE_CURRENT_USER',payload:data});
   } catch (error) {
     console.log(error)
   }
}