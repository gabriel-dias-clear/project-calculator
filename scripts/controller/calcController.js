class CalcController {

     constructor(){
        this._locale = 'pt-BR'
        this._dateEl = document.querySelector('#data');
        this._hourEl = document.querySelector('#hora');
        this._dispayEl = document.querySelector('#display')
        this._currDate;
        this.init();

     }

     init(){

        
        setInterval(()=>{
           
            this.displayDate = this.currDate.toLocaleDateString(this._locale);
            this.displayTime = this.currDate.toLocaleTimeString(this._locale);

        }, 1000)

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