import fetch from 'isomorphic-fetch';

const FETCH_ENTRY_PENDING = 'FETCH_ENTRY_PENDING';
const FETCH_ENTRY_SUCCESS = 'FETCH_ENTRY_SUCCESS';
const FETCH_ENTRY_FAILD   = 'FETCH_ENTRY_FAILD';

const fetchEntryPending =()=>{
    return {
        type:FETCH_ENTRY_PENDING
    }
};

const fetchEntrySuccess =(data)=>{
    return {
        type:FETCH_ENTRY_SUCCESS,
        data
    }
};

const fetchEntryFaild =(error)=>{
    return {
        type:FETCH_ENTRY_FAILD,
        error
    }
};

const fetchEntry =()=>{
    return (dispatch,getState) =>{
        const isFetching = getState().data.isFetching;
        if(isFetching)return;
        dispatch(dispatch(fetchEntryPending()));
        setTimeout(()=>{
            return fetch('./asyn2/data/simple.json')
                .then(response=>response.json())
                .then(data=>dispatch(dispatch(fetchEntrySuccess(data))))
                .catch(error=>dispatch(dispatch(fetchEntryFaild(error))));
        },3000);
    }
};

export {
    FETCH_ENTRY_PENDING,
    FETCH_ENTRY_SUCCESS,
    FETCH_ENTRY_FAILD,
    fetchEntry
};