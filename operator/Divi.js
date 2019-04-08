class division {
    operate(numberA,numberB) {
        if (numberB == 0 ) {
            throw 'divi by zero'
        } else
        return numberA / numberB
    }
}
module.export = division;