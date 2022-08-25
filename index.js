let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', function(e){
      
      if(e.target.innerHTML == '='){
          a = eval(string);
          document.querySelector('.text').innerHTML = string + "  =  " + a;
          string=a;
      }
      else if(e.target.innerHTML == 'C'){
        string = document.querySelector('.text').innerHTML;
        string = string.substring(0,string.length-1);
        document.querySelector('.text').innerHTML = string;
    }
      else if(e.target.innerHTML == 'AC'){
          string = ""
          document.querySelector('.text').innerHTML = string;
      }
      else{
          string = string + e.target.innerHTML;
          if(string.length > 16){
              string = "e               "
          }
          document.querySelector('.text').innerHTML = string;
      }
  })
})

// Keyboard Input
document.addEventListener('keydown', function(event) {
    if(event.key == 1 || event.key == 2 ||event.key == 3||event.key == 4||event.key == 5||event.key == 6||event.key == 7||event.key == 8||event.key == 9||event.key == 0 || event.key == "+" ||event.key == "-" ||event.key == "*" ||event.key == "/") {
        string = string+event.key;
        if(string.length > 16){
            string = "e               " 
        }
        document.querySelector('.text').innerHTML = string;
    }
    else if(event.key == "=" || event.key == "Enter"){
        a = eval(string);
        document.querySelector('.text').innerHTML = string + "  =  " + a;
        string=a;
    }
    else if(event.key == "Backspace"){
        string="";
        document.querySelector('.text').innerHTML = string;
    }
});


