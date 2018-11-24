import axios from 'axios';

const myAction={
    getRequestDATA:(url,actions)=>(dispatch, getState)=>{
        dispatch({
            type:"PROMISE",
            actions:actions,
            promise: axios.get(url).then(res => res.data)
        })
    }/*,
    getRequestDATA1:(url)=>(dispatch, getState)=>{
        dispatch({
            type:"PROMISE",
            actions:[REQ_POST,SUC_POST,ERR_POST],
            promise: fetch(url).then(res=>res.json())
        })
    }*/
}

export default myAction;