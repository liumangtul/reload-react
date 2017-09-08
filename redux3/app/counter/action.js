const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const onIncrement = (counter) =>{
    return{
        type:INCREMENT,
        counter
    }
};

const onDecrement = (counter) =>{
    return{
        type:DECREMENT,
        counter
    }
};

export {
    INCREMENT,
    DECREMENT,
    onIncrement,
    onDecrement
};