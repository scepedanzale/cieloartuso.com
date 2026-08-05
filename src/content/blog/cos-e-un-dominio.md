---
title: "Cos’è un dominio web? Differenza tra dominio, hosting e sito"
description: "Scopri cos’è un dominio web, a cosa serve e qual è la differenza tra dominio, hosting, DNS e sito internet, con un esempio semplice."
date: 2026-06-10
cover: "/images/blog/cos-e-un-dominio/cover.webp"
readingTime: 8
tag: "web notes"
draft: false
---

Quando si parla di creare un sito web, vengono spesso nominati termini come **dominio, hosting e DNS** quasi come se indicassero la stessa cosa.

In realtà sono elementi diversi, che svolgono funzioni differenti ma lavorano insieme ogni volta che apriamo un sito.

In questo articolo cercherò di spiegare nel modo più semplice possibile:

* cos'è un dominio;
* a cosa serve l'hosting;
* cosa contiene realmente un sito;
* il ruolo dei DNS;
* cosa succede quando scriviamo un dominio nel browser.

## Cos'è un dominio

Il **dominio** è il nome attraverso cui possiamo raggiungere un sito web.

Ad esempio, il dominio di questo sito è:

`cieloartuso.com`

Possiamo pensarlo come una sorta di indirizzo facilmente comprensibile dalle persone.

In questo caso:

* `cieloartuso` è il nome scelto;
* `.com` è l'estensione del dominio.

Esistono moltissime estensioni, come `.it`, `.org`, `.net`, `.dev` e tante altre.

Il punto importante, però, è che **il dominio non contiene il sito e non è il sito stesso**.

Serve semplicemente a permetterci di raggiungerlo utilizzando un nome facile da ricordare, invece di dover utilizzare direttamente l'indirizzo numerico del server sul quale si trova.

Di questo indirizzo numerico parleremo tra poco.

### Dominio e URL sono la stessa cosa?

No, dominio e URL non sono esattamente la stessa cosa.
Il dominio è una parte dell'URL.

Ad esempio:

* **Dominio:** `cieloartuso.com`

* **URL:** `https://cieloartuso.com/blog/quanto-costa-un-sito-web`

Un URL identifica una risorsa precisa sul web.

Se il sito fosse una casa e l'URL fosse l'indirizzo completo (via, numero civico e interno) il dominio sarebbe la parte principale che ci permette di capire verso quale edificio dobbiamo dirigerci.

Il resto dell'URL può invece indicare una pagina o una risorsa specifica all'interno del sito.

Per esempio:

`cieloartuso.com` ci porta al sito.

Mentre:

`cieloartuso.com/blog` indica una sezione precisa dello stesso sito.

## Perché il dominio non è il sito

Aver acquistato un dominio non significa aver creato un sito web.

Tornando al paragone con la casa, conoscere l'indirizzo di un'abitazione non significa che quella casa sia già stata costruita.

Il dominio ci dice **come raggiungere il sito**, ma da qualche parte devono comunque esistere tutti gli elementi che lo compongono.

Un sito web può essere formato, ad esempio, da:

* file;
* codice;
* immagini;
* font;
* video;
* database.

La struttura cambia molto in base alla tecnologia utilizzata.

Un piccolo sito statico potrebbe essere composto semplicemente da alcuni file, mentre un'applicazione web complessa può avere database, API, sistemi di autenticazione e diversi servizi che comunicano tra loro.

La domanda che sorge spontanea a questo punto è quindi:

**dove si trovano fisicamente tutti questi elementi?**

## Cos'è l'hosting

Se il dominio è l'indirizzo della casa, l'hosting è **lo spazio in cui il sito viene ospitato**.

Quando acquistiamo un servizio di hosting, stiamo essenzialmente pagando per avere a disposizione delle risorse su un **server** collegato a Internet.
Un server è, semplificando molto, un computer progettato per fornire dati e servizi ad altri computer attraverso una rete, ma poi ne parleremo meglio in un altro articolo.

Quando visiti un sito, il tuo dispositivo richiede determinate informazioni a un server e quest'ultimo risponde inviandogli ciò che ha chiesto.

Sul server possono quindi trovarsi i file che compongono il sito, le immagini, eventuali database e tutto ciò che serve per permettere al sito di funzionare.

Dominio e hosting sono quindi due cose separate: **il dominio ci permette di indicare dove vogliamo andare, mentre l'hosting mette a disposizione lo spazio in cui si trova il sito.**

## Come sono collegati dominio e hosting?

Ma come fa il browser a capire quale server deve contattare quando scriviamo: `cieloartuso.com`?

Il dominio, da solo, non indica direttamente al computer dove si trova fisicamente quel server.
Serve qualcosa che permetta di tradurre un nome comprensibile per noi in un indirizzo utilizzabile dai computer.

Ed è qui che entrano in gioco i **DNS**.

## Cosa sono i DNS?

DNS significa *Domain Name System* e il suo compito principale è permettere di **associare un dominio a un indirizzo IP**.

Quando scriviamo `cieloartuso.com`, noi utilizziamo un nome facile da leggere e ricordare.
Dietro quel nome, però, esiste un indirizzo numerico che permette di individuare il server da contattare.

Questo indirizzo viene chiamato **indirizzo IP**, il quale, ad esempio, può avere una forma simile a questa: `192.0.2.10`


Per capire il concetto, però, possiamo immaginare il DNS come una grande rubrica.

Noi conosciamo il nome `cieloartuso.com` e chiediamo:

*Qual è l'indirizzo associato a questo dominio?*

Il sistema DNS ci permette di ottenere l'informazione necessaria per raggiungere il server corretto.
È un po' come cercare il nome di una persona nella rubrica per recuperare il suo numero di telefono.

### Quindi Internet funziona attraverso numeri?

In buona parte sì.

Noi siamo abituati a vedere nomi come:

`google.com`<br>
`wikipedia.org`<br>
`cieloartuso.com`

perché sono molto più semplici da ricordare.

I dispositivi collegati alla rete, però, hanno bisogno di sistemi di indirizzamento che permettano di capire dove inviare i dati.<br>
Gli indirizzi IP servono proprio a questo.

Il dominio è quindi uno strato più comodo per noi esseri umani: ci evita di dover ricordare una serie di numeri ogni volta che vogliamo visitare un sito.

Dietro a tutto questo ci sono poi molti altri livelli: protocolli, router, pacchetti di dati, cavi, fibra ottica, onde radio e, andando ancora più in profondità, segnali elettrici e luminosi che permettono materialmente alle informazioni di viaggiare.

Ma quella è un'altra storia.

## Cosa succede quando digiti un dominio nel browser

In sintesi quando scrivi `cieloartuso.com` nella barra degli indirizzi del browser, avvengono diversi passaggi.

In maniera molto semplificata:

1. scrivi il dominio nel browser;
2. il browser deve capire quale server è associato a quel dominio;
3. viene effettuata una ricerca attraverso il sistema DNS;
4. viene individuato l'indirizzo IP corrispondente;
5. il browser può contattare il server;
6. il server riceve la richiesta;
7. il server restituisce i dati necessari;
8. il browser interpreta questi dati e mostra la pagina sullo schermo.

Naturalmente dietro a questi pochi passaggi succedono molte più cose: sistemi di cache, protocolli di rete, certificati, richieste HTTP e diversi altri meccanismi.

Ma il concetto generale è questo: **dominio → DNS → indirizzo IP → server → sito**


![Funzionamento DNS](/images/blog/cos-e-un-dominio/funzionamento-dns.webp)

## Devo comprare dominio e hosting insieme?

No.

Dominio e hosting possono essere acquistati dallo stesso fornitore oppure da aziende completamente diverse.

Molti servizi permettono di acquistare entrambi nello stesso momento perché rende più semplice la configurazione, soprattutto per chi non vuole occuparsi degli aspetti tecnici.<br>
Non è però obbligatorio.

Potresti, ad esempio, avere:

* il dominio registrato presso un'azienda;
* il sito ospitato sui server di un'altra;
* i DNS gestiti attraverso un ulteriore servizio.

La scelta dipende dal progetto, dalle esigenze tecniche e dai servizi utilizzati.

Questo permette anche di capire una cosa importante: **spostare il sito e trasferire il dominio non sono necessariamente la stessa operazione.**

È possibile cambiare hosting lasciando il dominio dove si trova e modificando semplicemente la configurazione necessaria per farlo puntare verso il nuovo server.

Allo stesso modo, è possibile trasferire la gestione del dominio senza dover modificare necessariamente il sito.

## Chi dovrebbe essere il proprietario del dominio?

Il dominio di un'attività dovrebbe essere **registrato a nome del proprietario dell'attività**, non del web developer o dell'agenzia che ha realizzato il sito.

Un professionista può tranquillamente occuparsi di:

* registrazione;
* configurazione;
* DNS;
* collegamento all'hosting;
* rinnovi;
* messa online del sito.

Il controllo del dominio dovrebbe però rimanere al cliente.

Questo perché il dominio rappresenta una parte importante della presenza online di un'attività.<br>
Può essere utilizzato non soltanto per il sito, ma anche per indirizzi email.

Perdere il controllo del dominio può quindi creare problemi molto più grandi della semplice indisponibilità del sito.

## Quanto costano dominio e hosting?

Dominio e hosting rappresentano generalmente solo una parte del costo complessivo necessario per avere un sito web online.

**Il dominio** ha normalmente un costo di registrazione e successivamente un rinnovo periodico.

**L'hosting**, invece, viene generalmente pagato attraverso un abbonamento che può essere mensile o annuale.

I prezzi possono cambiare molto in base al servizio utilizzato e soprattutto alle risorse necessarie. Un piccolo sito vetrina ha esigenze molto diverse rispetto a un e-commerce con migliaia di visitatori o a una web app che deve elaborare continuamente dati.

Per questo motivo non esiste un'unica soluzione adatta a tutti.

Dominio e hosting sono comunque soltanto una parte del costo di un progetto web.

Se vuoi approfondire l'argomento, ho spiegato [quanto costa realizzare un sito web](/blog/quanto-costa-un-sito-web) e quali sono gli elementi che incidono maggiormente sul prezzo.

## Dominio, hosting e DNS in breve

Possiamo quindi riassumere tutto in quattro elementi.

**Dominio**
È il nome che utilizziamo per raggiungere il sito, come `cieloartuso.com`.

**DNS**
Permette di collegare quel nome all'indirizzo IP necessario per individuare il server.

**Hosting**
È il servizio che mette a disposizione lo spazio e le risorse necessarie per ospitare il sito.

**Sito web**
È l'insieme di file, codice, contenuti e dati che il browser riceve e utilizza per mostrarci le pagine.

Sono elementi diversi, ma ogni volta che apriamo un sito lavorano insieme senza che normalmente ce ne accorgiamo.
