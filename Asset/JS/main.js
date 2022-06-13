const Num = document.getElementById('Number');
const NumVerif = document.getElementById("Number").value;
const Bank = document.getElementById('BankCardNum');
const BankTitulaire = document.getElementById('BankCardTitulaire');
const Titulaire = document.getElementById('Titulaire');
const BankDate = document.getElementById('BankDate');
const BankSecure = document.getElementById('BankSecure');
const Date = document.getElementById('Date');
const Cryptogramme = document.getElementById('Cryptogramme');
const FlipFront = document.querySelector('.flip-box-inner');

Num.addEventListener('keyup', function() {

        Bank.innerHTML=Num.value;
    

});

Titulaire.addEventListener('keyup', function() {  
    
    BankTitulaire.innerHTML=Titulaire.value.toUpperCase();  
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
    FlipFront.classList.toggle('flip-box-back');
    FlipFront.classList.toggle('flip-vertical-right');
});

