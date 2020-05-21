
var counter = false;

const interval = setInterval(() => {

  const header = document.querySelector("._3auIg");

  if(header){

      console.log(header);
      clearInterval(interval);

      const button = document.createElement("button");
      button.innerHTML = "Theme";
      button.classList.add("darkMode");

      button.addEventListener("click" , () => {

        if(counter == false) {

          document.querySelector("body").classList.add("dark");
          counter = true;
        }else {
          
          document.querySelector("body").classList.remove("dark");
          counter = false;
        }
       

      });

      header.appendChild(button);
  }
}, 1000);



