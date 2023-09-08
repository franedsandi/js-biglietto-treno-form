
/* general */
const ticket =  document.getElementById('ticket');
const inputname =  document.getElementById('name');
const inputdistance = document.getElementById('distance');
km = 0.21;
//  bottoni
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
let textVisible = true;

button1.addEventListener('click', function(){
 /* display ticket */
  const ticket = document.querySelector('#ticket');
  ticket.classList.remove('d-none');
  /* name */
  console.log(inputname.value);
  const name = inputname.value;
  document.querySelector('.name').innerHTML = name;
  /* trin number */
  mintrain = 1 ;
  maxtrain = 10 ;
  const trainnumber = (Math.floor (Math.random() * (maxtrain - mintrain + 1 )) + mintrain) ;
  document.querySelector('.train').innerHTML = trainnumber;
  /* code */
  mincode = 10000 ;
  maxcode = 99999 ;
  const code = (Math.floor (Math.random() * (maxcode - mincode + 1 )) + mincode);
  document.querySelector('.code').innerHTML = code ;
  /* agegap */
  var selectElement = document.getElementById("age");
  var ofertDiv = document.querySelector(".ofert");
  var selectedValue = selectElement.value;
  var mensaje = "";
  switch (selectedValue) {
    case "1":
      message = "Junnior Scount";
      break;
    case "2":
      message = "Standard Price";
      break;
    case "3":
      message = "Silver Scount";
      break;
    }
    /* price */
    ofertDiv.textContent = message;
    if (message == "Silver Scount"){
      const cost = Math.abs (inputdistance.value * km * 0.6).toFixed(2);
      document.querySelector('.cost').innerHTML = cost +"€";
    }
    else if (message == "Junnior Scount"){
      const cost = Math.abs (inputdistance.value * km * 0.8).toFixed(2);
      document.querySelector('.cost').innerHTML = cost +"€";
    }
    else{
      const cost = Math.abs (inputdistance.value * km).toFixed(2);
      document.querySelector('.cost').innerHTML = cost +"€";
    }
});

button2.addEventListener('click', function(){

  const ticket = document.querySelector('#ticket');
  ticket.classList.add('d-none');
  
 });
 
