<link rel="stylesheet" href="Asset/css/Body.css">
<div class="container">
    <div class="row">
        <div class="col-6">
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img class="flip-vertical-right" src="Asset/Images/carteRecto.jpg">
                        <div id="BankCardTitulaire"></div>
                        <div id="BankCardNum"></div>
                        <div id="BankDate"></div>
                        
                    </div>
                    <div class="flip-box-back">
                        <img class="flip-vertical-right" src="Asset/Images/carteVerso.jpg">
                        <div id="BankSecure"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <form action="#" >
                <div class="row">
                    <div class="col-6">
                        <label for="Number">Numéro de la carte</label>
                        <input type="text" name="Number" id="Number"></textarea>
                        <label for="Titulaire">Titulaire de la carte</label>
                        <input type="text" name="Titulaire" id="Titulaire">
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <label for="Date">Date d'expiration</label>
                        <input type="text" id="Date" value="" placeholder="MM/YY">
                    </div>
                    <div class="col-3">
                        <label for="Cryptogramme">Cryptogramme</label>
                        <input type="text" id="Cryptogramme" value="" placeholder="XXX">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>