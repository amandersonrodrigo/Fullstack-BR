function criaCalculadora() {
   return {
      display: document.querySelector('.display'),
      
      inicia() {
         this.cliqueBotoes();
         this.pressionaEnter();
      },

      pressionaEnter() {
         this.display.addEventListener('keydown', (evento) => {
            if (evento.key === 'Enter') {
               this.realizaConta(); 
            }
         });
      },

      realizaConta() {
         let conta = this.display.value;

         try {
            conta = eval(conta);
            if(!conta) {
               alert('Conta inválida!');
               return;
            }
               this.display.value = String(conta);
         }catch(error) {
            alert('Conta inválida!');
            return;
         }
      },

      apagaUm() {
         this.display.value = this.display.value.slice(0, -1);
      },

      clearDisplay() {
         this.display.value = '';
      },

      cliqueBotoes() {
         document.addEventListener('click', (evento) => {
            const element = evento.target;

            if(element.classList.contains('btn-num')) {
               this.btnParaDisplay(element.innerText);
            }
            
            if(element.classList.contains('btn-clear')) {
               this.clearDisplay();
            }

            if(element.classList.contains('btn-del')) {
               this.apagaUm();
            }

            if(element.classList.contains('btn-eq')) {
               this.realizaConta();
            }

            this.display.focus();
         });
      },

      btnParaDisplay(valor) {
         this.display.value += valor;
      },

   };
}

const calculadora = criaCalculadora();
calculadora.inicia();
