import { FLASH_EVEN_COUNT, FLASH_ODD_COUNT, FLASH_ZERO_COUNT } from "../actions/flash";

const initialState = {
    message: 'ZERO',
};

export default function(state = initialState, action){
    switch(action.type){
        case FLASH_EVEN_COUNT:
            return { message : 'EVEN NUMBER'};
        case FLASH_ODD_COUNT:
            return { message: 'ODD NUMBER'};
        case FLASH_ZERO_COUNT:
            return { ...initialState } ;
        default:
            return state;
    }
}