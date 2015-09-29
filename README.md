# App in Jade/Sass/Js + GruntJS + Cordova/Phonegap.
------------------------  
#### Questa app è stata realizzata in Jade Sass e Js.<br>Compilazione preprocessori tramite gruntjs.<br>Compilazione App tramite cordova su Android.

Questa applicazione è definibile come hybrid app che in sostanza è una sorta di ponte tra le app native e un applicativo web.  
Sono presenti preprocessori Jade e Sass elaborati da GruntJs per il render finale in HTML/CSS  
L'applicazione completa, poi, viene compilata tramite phogap/cordova per i Sistemi Operativi Richiesti (in questo caso Android API 14 min)  

**Scopo Primario:** Servirà da semplice testing per una sempre più complessa applicazione.  

**Descrizione App:** Il compito della seguente è quello di contare punteggi e di generare tiri di dadi di varia tipologia
------------------------  
# Installazione Componenti Base
##### Questa procedura è per coloro che vogliono costruire la propria app da questo codice


## Software Richiesti
Per seguente test sono richiesti:
* [Nodejs][] - Installatelo tranquillamente per tutte le piattaforme. Controllate se funge da terminale / console digitando  
` node -v `
* [cordova][] - Per installarlo usate npm di node tramite questo comando  
` npm install -g cordova `
* [phonegap][] - Come per il precedente codice usate sempre npm
` npm install -g phonegap `
* [Java JDK][] - Scaricate e installate la versione per la vostra piattaforma
* [Android SDK][] - In questo caso scaricate e installate la versione per la propria piattaforma
* [Apacke ANT][] - Fondamentale per la compilazione. Anche questa potete trovarla per la vostra piattaforma
* [Ryby + RubyGem][] - Fondamentale per l'elaborazione di JADE SASS e altri componenti. Anche in questo caso installazione cross platform

------------------------  

## Settaggi Richiesti  
Prima di poter procedere con la VOSTRA compilazione mi raccomando di configurare correttamente le variabili d'ambiente per i seguenti package  
* JAVA -> JAVA (percorso JAVA)  
* ANDROID -> ANDROID_HOME (percorso ANDROID SDK)  
* APACHE ANT -> ANT (percorso APACHE ANT)  

------------------------  

## Installazione Gems  
Da terminale/console installiamo le seguenti gem usando la serie di comandi sotto:  
` gem install sass `  
` gem install jade `  
*su linux/mac va preceduta da* ` sudo `  

------------------------  

## Installazione Componenti NPM e BOWER  
Da terminale/console installiamo le seguenti package globali:  

` npm install -g bower grunt-cli `  

*su linux/mac va preceduta da* ` sudo `. ` -g ` sta per globale e lo si può scrivere come ` --globals `

------------------------  

------------------------  

# Installazione Componenti APP  
#### Questa parte riguarda l'installazione delle componenti interne  

Avendo fatto quanto detto sopra, dovreste essere in possesso di npm e bower.  
L'applicazione possiede dei moduli interni che vanno installati. 
Per farlo basta seguire questa semplice procedura:

1. Installiamo i moduli npm tramite il comando:   
` npm install `
2. Facciamo lo stesso per le componenti bower:  
` bower install `

Queste due aperazioni provvederanno a scaricare tutti i componenti fondamentali 
che usa la stessa app per essere compilata in codice utile alla poi compilazione
effettiva come app in formato *qualcosa.apk* nel caso di Android.

------------------------  

------------------------  

# Building su Cordova/Phonegap  
Per contruire la nostra applicazione dobbiamo, come prima cosa, inserire la nostra piattaforma
ovvero il sistema per cui vogliamo compilare. Usiamo quindi questo comando:  

` cordova platform add android `  

Fatto questo passiamo alla ultima fase per la costruzione della nostra app (in questo caso su Android)  

` cordova build android `  

Fatto ciò potremo (finalmente) trovare nella cartella della nostra piattaforma.  
Nel caso di Android questa sarà visibile in:  

` platforms\android\build\outputs\apk `

[Nodejs]: https://nodejs.org/en/ "NodeJs"
[cordova]: http://cordova.apache.org/ "Cordova"
[phonegap]: http://phonegap.com/ "Phonegap"
[Java JDK]: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
[Android SDK]: https://developer.android.com/sdk/index.html "Android SDK"
[Apacke ANT]: http://ant.apache.org/ "Apache ANT"
[Ryby + RubyGem]: https://www.ruby-lang.org/it/downloads/ "Ryby + RubyGem"