 class Operator {
       operate(){}
 }
 
 

 class Add extends Operator {
       operate(NumberA,NumberB){
             return NumberA + NumberB
       }
   
  }


 class Subtraction extends Operator{
       operate(NumberA,NumberB{
             return NumberA - NumberB
       }
 
  }


 class Multiplication extends Operator{
       operate(NumberA,Numberb){
             return NumberA * NumberB
        }

  }
 
  class Division extends Operator{
        operate(NumberA,NumberB){
              if (NumberB = 0){
                 throw "Division by zero";
               } else
                   return NumberA / NumberB; 
        }

  }

  class Caculator {
        constructor(){
              this.operator = {
                  '+' : new Addition(),
                  '-' : new Subtraction(),
                  '*' : new Multiplication(),
                  '/' : new Division(),
         }

  }



  const caculator = new Caculator();
  const result = caculator.Caculator('+','5', 5);
  console.log(result); 
