/*
    Autor : Marcos Henrique
    Links úteis : https://linktr.ee/robotica_e_desafios
    Canal : Robótica e desafios
    
*/


var counter = false; //Variável que define em que modo o usuário vai estar

const interval = setInterval(() => { //intervalo de tempo de validação

  const header = document.querySelector("._3auIg"); //busca o cabeçalho

  if(header){ //se existir ...

      console.log(header);//debug
      clearInterval(interval);//acaba com o intervalo

      const button = document.createElement("button"); //cria um novo elemento
    
      button.innerHTML = "Theme"; //defini o texto do botão
    
      button.classList.add("darkMode");//adiciona uma class darkMode ao botão

      button.addEventListener("click" , () => { //Quando o evento click ocorrer ...

        if(counter == false) { //se o usuário está com tema light

          document.querySelector("body").classList.add("dark"); //adiciona a class dark
          
          counter = true; // e seta para próxima validação que o tema atual é dark
          
        }else { //se não
          
          document.querySelector("body").classList.remove("dark"); //Remove a class dark , deixando o tema branco
          
          counter = false; // e seta para próxima validação que o tema atual é light
        }
       

      });

      header.appendChild(button); //cria o botão no cabeçalho
  }
}, 1000); //define o tempo do loop

// -------------------------------------  Fim do Código  -------------------------------------------------

