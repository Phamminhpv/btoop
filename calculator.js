const operator = require ('./operator/operators');

class calculator {
    constructor() {
        this.operators = {
            '+' : new operators.Add,
            '/' : new operators.Divi,
        };

    }
    do(operator,numberA,numberB) {
        if(this.operators.hasOwnProperty(operator)){
            throw new Error ('no support');
        } else 
        return this.operators[operator].operate(numberA,numberB)
    }
}
module.exports = calculator;