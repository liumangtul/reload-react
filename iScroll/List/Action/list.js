import fetch from 'isomorphic-fetch';

const LIST_PENDING = 'LIST_PENDING';
const LIST_SUCCESS = 'LIST_SUCCESS';
const LIST_ERROR   = 'LIST_ERROR';

const listPending = ()=>{
    return {
        type:LIST_PENDING
    }
};

const listSuccess = (json)=>{
    return {
        type:LIST_SUCCESS,
        list:json.data,
        err:json.err
    }
};

const listError = (err)=>{
    return {
        type:LIST_ERROR,
        err
    }
};

const listFetch = url =>{
    return (dispatch,getState)=>{
        dispatch(listPending());
        return fetch(url)
            .then(res=>res.json())
            .then(json=>dispatch(listSuccess(json)))
            .catch(err=>dispatch(listError(err)));
    };
};

export {
    LIST_PENDING,
    LIST_SUCCESS,
    LIST_ERROR,
    listFetch
};