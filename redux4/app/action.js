/*
import fetch from 'isomorphic-fetch';
const getWeather = (url,params)=>{
    return (dispatch,getState) =>{
        //发送服务器请求
        fetch(url,params)
            .then(result =>{
                //请求成功
                dispatch({
                    type:'GET_WEATHER_SUCCESS',
                    paload:result
                });
            })
            .catch(err=>{
                //请求失败
                dispatch({
                    type:'GET_WEATHER_ERROR',
                    error:err
                });
            });
    };
};*/
import fetch from 'isomorphic-fetch';

const LOGGER = 'LOGGER';

const succ = message =>{
    return{
        type:'SUCC',
        message
    }
};

const faild = err =>{
    return{
        type:'FAILD',
        err
    }
};


const asynLog = ()=>{
    return dispatch =>{
        const url='/redux4/data.json';
        // const url = 'http://api.bing.com/qsonhs.aspx?type=cb&q=abc';
        fetch(url,{
        })
            .then((response)=>{
                return response.json();
            })
            .then(data=>{
                dispatch(succ(data.message));
            })
            .catch(err=>{
                dispatch(faild(err));
            });
    };

    /*fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "请求参数"
    }).then(function(res) {
        console.log("Response succeeded?", JSON.stringify(res.ok));
        console.log(JSON.stringify(res));
    }).catch(function(e) {
        console.log("fetch fail", JSON.stringify(params));
    });*/

};

export {
    LOGGER,
    asynLog
};