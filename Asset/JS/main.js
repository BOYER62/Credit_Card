const Num = document.getElementById('Number');
const Bank = document.getElementById('BankCardNum');
const BankTitulaire = document.getElementById('BankCardTitulaire');
const Titulaire = document.getElementById('Titulaire');
const BankDate = document.getElementById('BankDate');
const BankSecure = document.getElementById('BankSecure');
const Date = document.getElementById('Date');
const Cryptogramme = document.getElementById('Cryptogramme');
const Flip = document.getElementsByClassName('flip-box')

Num.addEventListener('keydown', function() {  
    // logMessage(`${e.key}`);
    Bank.innerHTML=Num.value;  
});

Titulaire.addEventListener('keydown', function() {  
    // logMessage(`${e.key}`);
    BankTitulaire.innerHTML=Titulaire.value;  
});

Date.addEventListener('keydown', function() {  
    // logMessage(`${e.key}`);
    BankDate.innerHTML=Date.value;  
});

Cryptogramme.addEventListener('keydown', function() {  
    // logMessage(`${e.key}`);

    BankSecure.innerHTML=Cryptogramme.value;  
});

$(document).ready(function(){
    $('.flip-card').click(function(){
    $(this).toggleClass('hover');
  })
});