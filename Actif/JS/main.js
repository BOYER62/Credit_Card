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

var cleave = new Cleave('.ClassNumber', {
    creditCard: true,
    delimiters: [' ', ' ', ' '],
    blocks: [4, 4, 4, 4],
    uppercase: true
});

Num.addEventListener('keyup', function() {
        
        Bank.innerHTML=Num.value;
        

});

Titulaire.addEventListener('keyup', function() {  
    
    BankTitulaire.innerHTML=Titulaire.value.toUpperCase();  
});

var cleave = new Cleave('.ClassDate', {
    date: true,
    delimiter: '/',
    datePattern: ['m', 'Y']
});

Date.addEventListener('keyup', function() {  
    // logMessage(`${e.key}`);
    BankDate.innerHTML=Date.value;  
});

Cryptogramme.addEventListener("keyup", detectTabKey);

function detectTabKey(e) {
    if (e.keyCode == 9) {
        FlipFront.classList.toggle('flip-box-back');
        FlipFront.classList.toggle('flip-vertical-right');
    }
}

Cryptogramme.addEventListener('keyup', function() {  
    // logMessage(`${e.key}`);
    if(parseInt(Cryptogramme.value)){
    BankSecure.innerHTML=Cryptogramme.value; 
    }
});

Cryptogramme.addEventListener('click', function(){
    FlipFront.classList.toggle('flip-box-back');
    FlipFront.classList.toggle('flip-vertical-right');
});

