﻿function createHome() {
	
	sessionCheck(function(ret) { // sessioncheck deve restituire l'id dell'utente da passare a createloggedhome o 0 se la sessione non esiste nel DB
						var id_utente = ret;
						alert(id_utente);
						if (id_utente != 0 && !isNaN(id_utente)) {
							// SE IL COOKIE E LA SESSIONE ESISTONO E GLI ID CORRISPONDONO
							//Inizializza la home per l'utente loggato
							createLoggedHome();
							//chiude il menù laterale al click sull'icona <<
							document.getElementById("closeDrawer").addEventListener("click", function(){
								$( 'div[class^="mdl-layout__obfuscator"]' ).trigger( "click" );
							});
						} else {
							// SE LA SESSIONE NON ESISTE
							//Inizializza la home per l'utente non loggato
							createNotLoggedHome();
						}
				});
}
