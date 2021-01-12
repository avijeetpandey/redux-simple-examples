const {
    compose,
    combineReducers,
    createStore,
    applyMiddleware,
    bindActionCreators,
} = require('redux');

/**
 * Demonstration of compose
 */

const sayLouder = (string) => string.toUpperCase();
const sayThreeTimes = (string) => string.repeat(3);
const sayBold = (string) => string.bold();

const SayItWithCompose = compose(sayBold, sayThreeTimes, sayLouder);

console.log(SayItWithCompose('Hello'));
