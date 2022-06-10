const Num = document.getElementById('Number');
const Bank = document.getElementById('BankCardNum');
const BankTitulaire = document.getElementById('BankCardTitulaire');
const Titulaire = document.getElementById('Titulaire');
const BankDate = document.getElementById('BankDate');
const BankSecure = document.getElementById('BankSecure');
const Date = document.getElementById('Date');
const Cryptogramme = document.getElementById('Cryptogramme');
const FlipBox = document.createElement('FlipBox');
FlipBox.className = 'flip-box-front';
//const Flip = document.getElementsByClassName('flip-box-front');
//const FlipBack = document.getElementsByClassName('flip-box-back');

Num.addEventListener('keyup', function() {  
    // logMessage(`${e.key}`);
    Bank.innerHTML=Num.value;  
});

Titulaire.addEventListener('keyup', function() {  
    // logMessage(`${e.key}`);
    BankTitulaire.innerHTML=Titulaire.value;  
});

Date.addEventListener('keyup', function() {  
    // logMessage(`${e.key}`);
    BankDate.innerHTML=Date.value;  
});

Cryptogramme.addEventListener('keyup', function() {  
    // logMessage(`${e.key}`);

    BankSecure.innerHTML=Cryptogramme.value;  
});

Cryptogramme.addEventListener('click', function(){
    FlipBox.classList.replace('flip-box-front','flip-box-back');
    console.log(alert(`J'ai bien détecté le click`));
});

