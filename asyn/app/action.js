import fetch from 'isomorphic-fetch';
const FETCH_POSTS = 'FETCH_POSTS';

const fetching = (json)=>{
    return{
        type:FETCH_POSTS,
        status:json.status,
        response:json.response
    }
};

const fetchPosts = ()=>{
    return dispatch =>{
        dispatch(fetching({
            status:1
        }));
        //发起请求
        return fetch('./asyn/data/test1.json')
            .then(res=>res.json())
            .then(json=>{
                //请求成功
                dispatch(fetching({
                    status:2,
                    response:json
                }));
            })
            .catch(err=>{
                //请求失败
                dispatch(fetching({
                    status:3,
                    err
                }));
            });
    }
};

export {
    FETCH_POSTS,
    fetchPosts
}