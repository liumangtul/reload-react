const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const onIncrement = (count) => {
    return{
        type:INCREMENT,
        count
    }
};
const onDecrement = (count) => {
    return{
        type:DECREMENT,
        count
    }
};

export {INCREMENT,DECREMENT,onIncrement,onDecrement};