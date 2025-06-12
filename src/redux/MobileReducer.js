import { BUY_MOBILE } from "./MobileType";

//State 
const initialStock = {
    noOfMobiles: 10
}

//reducer

const mobileReducer = (state = initialStock, action) => {
    switch (action.type) {
        case BUY_MOBILE:
            return {
                noOfMobiles: state.noOfMobiles - 1
            }
        default:
            return state;
    }
}


export default mobileReducer