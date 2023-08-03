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



    }

    clearEntry(){

    }

    addOperation(value){
        this._operation.push(value)
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
                this.clearAll();
            break;

            case 'soma':
                this.clearAll();
            break;

            case 'subtracao':
                this.clearAll();
            break;

            case 'divisao':
                this.clearAll();
            break;

            case 'multiplicacao':
                this.clearAll();
            break;

            case 'porcento':
                this.clearAll();
            break;

            case 'igual':
                this.clearAll();
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