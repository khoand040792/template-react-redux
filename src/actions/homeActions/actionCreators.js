import { HOME_INCREASE_NUMBER } from '../../actions/homeActions/actionName.js';

/*
* @param: number: number //  number to increase
*
*/
export default function increaseNumber(number) {
    return {
        type: HOME_INCREASE_NUMBER,
        number: number
    }
}