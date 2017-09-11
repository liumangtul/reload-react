const CREMENT = 'CREMENT';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const handleCrement = (counter,filter)=>{
  return{
      type:CREMENT,
      counter,
      filter
  }
};

export {
    CREMENT,
    INCREMENT,
    DECREMENT,
    handleCrement
};