class CalcController {

     constructor(){

        this._operation = []
        this._locale = 'pt-BR';
        this._dateEl = document.querySelector('#data');
        this._hourEl = document.querySelector('#hora');
        this._dispayEl = document.querySelector('#display');
        this._currDate;
        this.init();
        this.initButton();

     }

     init(){

        
        setInterval(()=>{
           
            this.displayDate = this.currDate.toLocaleDateString(this._locale);
            this.displayTime = this.currDate.toLocaleTimeString(this._locale);

        }, 1000)

     }

     addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);
        
        })
     }

    clearAll(){
        console.log('AC')
        this._operation = []

    }

    clearEntry(){
        console.log('CE')
        this._operation.pop()

    }

    getLastOperation(){

        return this._operation[this._operation.length-1]


    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value

    }

    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    pushOperation(value){

        this._operation.push(value);

        if(this._operation.length > 3){


            this.calc()



        }

    }

    calc(){

        let last = this._operation.pop()

        let result = eval(this._operation.join(""))

        this._operation = [result, last]

        this.setLastNumberToDisplay()
    
    }

    setLastNumberToDisplay(){

        let lastNumber;

        for(let i = this._operation.length-1 ; i >= 0 ; i--){

            if(!this.isOperator(this._operation[i])){
                lastNumber = this._operation[i];
                break;
            }

        }
            this.displayCalc = lastNumber;
    }

    addOperation(value){

        if(isNaN(this.getLastOperation())){

            if(this.isOperator(value)){

                this.setLastOperation(value);

            } else if (isNaN(value)){

                console.log(`outra coisa: ${value}`)

            }else {

            this.pushOperation(value)

            this.setLastNumberToDisplay()

            }

        } else {

            if(this.isOperator(value)){

                this.pushOperation(value);
                

            }else {


                if(this.isOperator(value)){

                    this._isOperator(value)

                } else {

                    let newValue = this.getLastOperation().toString() + value.toString();
                    this.setLastOperation(parseInt(newValue));

                    this.setLastNumberToDisplay()
 
                    
                    }
       

            }

  
        }

    }

    setError(){
        this.displayCalc = 'Error'
    }

    execBtn(value){

        switch (value){
            
            case 'ac':
                this.clearAll();
            break;

            case 'ce':
                this.clearEntry();
            break;

            case 'soma':
                this.addOperation('+')
            break;

            case 'subtracao':
                this.addOperation('-')
          
            break;

            case 'divisao':
                this.addOperation('/')
               
            break;

            case 'multiplicacao':
                this.addOperation('*')

            break;

            case 'porcento':
                this.addOperation('%')
                
            break;

            case 'igual':
                
                
            break;

            case 'ponto':
                this.addOperation('.')

            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
            break;

            default:
                this.setError();
            break;
        }

    }



     initButton(){

        let buttons = document.querySelectorAll('#buttons > g, #parts > g')
        
        buttons.forEach((btn, index)=>{
            
            this.addEventListenerAll(btn, 'click drag', e=>{

                let textBtn = btn.className.baseVal.replace("btn-", "")

                this.execBtn(textBtn);
            
            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e=>{

                btn.style.cursor = 'pointer'
            
            })

        })
    }


     get displayTime(){
        
        return this._hourEl.innerHTML;
    
     }

     set displayTime(value){
        
        return this._hourEl.innerHTML = value
    
     }

     get displayDate(){

        return this._dateEl.innerHTML;

     }

     set displayDate(value){

        return this._dateEl.innerHTML = value;

     }

     get displayCalc(){
     
        return this._dispayEl.innerHTML;

     }

     set displayCalc(valor){
        
        this._dispayEl.innerHTML = valor;

     }

     get currDate(){

        return new Date();

     }

     set dataAtual(valor){

        this._dataAtual = valor;

     }

}