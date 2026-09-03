---
title: "Come funziona davvero un computer? Dall’elettricità a 0 e 1"
description: "Testi, immagini, video e programmi sembrano molto diversi, ma dentro un computer tutto parte da segnali elettrici e due valori: 0 e 1. Vediamo come si arriva da un semplice impulso a un computer moderno."
date: 2026-09-03
cover: "/images/blog/come-funziona-davvero-un-computer.webp"
readingTime: 8
tag: "web notes"
draft: false
---


Un computer può fare cose molto diverse: può mostrare un film, far partire un videogioco, aprire un sito, riprodurre una canzone, modificare una fotografia o rispondere a una domanda con l’intelligenza artificiale.

Eppure, andando abbastanza in profondità, alla base di tutto troviamo qualcosa di sorprendentemente semplice:
**segnali elettrici e due valori, 0 e 1.**

Ma come si passa dall’elettricità a una fotografia sullo schermo?

Per capirlo dobbiamo partire proprio dal livello più basso.

## Un computer non capisce parole, immagini o video

Quando scriviamo:

> Ciao

noi vediamo quattro lettere.

Il computer no.
Per lui quel testo deve essere rappresentato attraverso dei numeri.

Lo stesso succede con tutto il resto.

Una fotografia diventa una serie di numeri.

Una canzone diventa una serie di numeri.

Un video diventa una quantità enorme di numeri.

Anche le istruzioni dei programmi diventano numeri.

Il computer può quindi trattare cose completamente diverse perché, alla fine, riesce a trasformarle tutte in dati.
E alla base di quei dati ci sono i **bit**.

## Perché proprio 0 e 1?

Un computer funziona grazie a circuiti elettronici.

Dentro questi circuiti possiamo distinguere due condizioni.
In modo molto semplificato possiamo immaginarle come:

- segnale presente;
- segnale assente.

A queste due condizioni assegniamo due simboli: **1** e **0**.

Sono un modo con cui noi rappresentiamo due stati fisici differenti.
Ed è proprio perché distinguere tra due stati è relativamente semplice e affidabile che i computer utilizzano il **sistema binario**.

## Cos’è un bit?

Un bit è la più piccola unità di informazione digitale.

Può avere soltanto due valori:

`0`

oppure

`1`

Un singolo bit può quindi rappresentare pochissime informazioni, ma possiamo mettere più bit uno accanto all’altro.

Per esempio:

`01001101`

A quel punto le combinazioni possibili diventano molte di più.
Con 8 bit otteniamo quello che chiamiamo **byte**.

Ed è da qui che arrivano termini che sentiamo continuamente:

- kilobyte;
- megabyte;
- gigabyte;
- terabyte.

Quando diciamo che una fotografia pesa 5 MB, stiamo in pratica parlando di una quantità enorme di bit utilizzati per rappresentare quell’immagine.

## Come si rappresentano i numeri con 0 e 1?

Noi normalmente utilizziamo il sistema decimale.

Abbiamo dieci cifre:

0, 1, 2, 3, 4, 5, 6, 7, 8 e 9.

Nel sistema binario ne abbiamo soltanto due.

0 e 1.

Per questo, dopo `1`, non possiamo scrivere `2`.

Passiamo a:

`10`

Poi:

`11`

Poi:

`100`

È semplicemente un modo diverso di rappresentare gli stessi numeri.

Per noi è meno intuitivo perché siamo abituati al sistema decimale.
Per un computer è perfetto.

## E le lettere?

A questo punto possiamo fare un altro passo.

Se il computer sa rappresentare numeri, possiamo decidere che determinati numeri rappresentino determinati caratteri.
Per esempio, possiamo associare un numero alla lettera A, un altro alla B, un altro ancora a un punto interrogativo.

Esistono degli standard proprio per fare questo, affinchè computer diversi possano interpretare gli stessi dati nello stesso modo.

Quindi una parola, vista dal computer, diventa una sequenza di numeri.

E quei numeri, a loro volta, diventano 0 e 1.

## E una fotografia?

Anche un’immagine può essere trasformata in numeri.
Una fotografia digitale è composta da tantissimi piccoli punti chiamati **pixel**.

Ogni pixel deve avere un colore.

Il computer può rappresentare quel colore attraverso dei valori numerici.
Per esempio può indicare quanta componente rossa, verde e blu deve esserci in quel punto.

Quindi una fotografia può essere vista come una gigantesca lista del tipo:

> pixel 1 = questo colore  
> pixel 2 = quest’altro colore  
> pixel 3 = quest’altro ancora

Naturalmente nella realtà i formati delle immagini fanno molte altre cose, soprattutto per comprimere i dati.
Ma il concetto di base rimane questo: **l’immagine viene trasformata in numeri.**

## Anche il suono diventa numeri

Con l’audio succede qualcosa di simile.

Un suono nel mondo reale è un’onda.
Un microfono può trasformare quell’onda in un segnale elettrico.

Il computer misura il segnale moltissime volte e salva quei valori.
In questo modo crea una rappresentazione digitale del suono.

Quando riproduciamo il file, il processo avviene al contrario: i numeri vengono utilizzati per ricostruire un segnale che, attraverso gli altoparlanti, torna a diventare suono.

Quindi testo, immagini e musica sembrano completamente diversi a noi.

Per il computer sono tutti dati.

## Ma chi controlla questi 0 e 1?

Qui arriviamo a uno degli elementi fondamentali dell’informatica moderna: il **transistor**.

Possiamo immaginare un transistor come un interruttore elettronico piccolissimo.
Può permettere o bloccare il passaggio di un segnale.

Quindi può contribuire a rappresentare quei due stati che chiamiamo 0 e 1.

La cosa impressionante è la dimensione.
Dentro i processori moderni ci sono quantità enormi di transistor minuscoli che possono cambiare stato in modo super veloce.

## Da piccoli interruttori ai calcoli

Un singolo transistor non fa cose particolarmente interessanti, ma possiamo collegarne molti insieme.
In questo modo possiamo creare dei circuiti capaci di effettuare semplici operazioni logiche.

Per esempio possiamo costruire una regola del tipo:
> se questo segnale è presente E anche quest’altro è presente, restituisci 1.

Oppure:
> se almeno uno dei due è presente, restituisci 1.

Questi piccoli sistemi vengono chiamati **porte logiche**.

Tra le più conosciute ci sono:

- AND;
- OR;
- NOT.


Queste porte, combinando enormi quantità di operazioni semplici, possono costruire sistemi molto complessi.

## Da una porta logica a una CPU

Collegando tra loro moltissimi circuiti possiamo iniziare a costruire componenti capaci di:

- sommare numeri;
- confrontarli;
- conservarli temporaneamente;
- spostare dati;
- prendere decisioni.

Da qui arriviamo alla **CPU**, il processore del computer, che esegue continuamente delle istruzioni.

In modo molto semplificato, fa qualcosa del tipo:

1. prende un’istruzione;
2. capisce cosa deve fare;
3. la esegue;
4. passa alla successiva.

E lo fa a una velocità enorme.

## Ma chi dà le istruzioni alla CPU?

I programmi.

Quando apriamo un’applicazione, stiamo chiedendo al computer di eseguire una serie di istruzioni.

Noi programmatori, però, non scriviamo normalmente lunghissime sequenze di 0 e 1, utilizziamo linguaggi molto più comprensibili, come JavaScript, Python, C o tanti altri.

Poi altri programmi traducono quelle istruzioni in una forma che il computer può realmente eseguire.

Quindi potremmo immaginare diversi livelli:

**linguaggio umano → linguaggio di programmazione → istruzioni macchina → operazioni elettroniche**

Più scendiamo, più ci avviciniamo all’hardware.

## RAM e memoria non fanno la stessa cosa

Durante l’esecuzione di un programma il computer ha bisogno anche di conservare informazioni.

Ma esistono diversi tipi di memoria.

La **RAM** viene utilizzata per tenere rapidamente a disposizione i dati che servono in quel momento.
Per esempio, se hai aperto il browser, una parte delle informazioni necessarie al browser si trova nella RAM.
Quando spegni il computer, quel contenuto viene perso.

SSD e altri sistemi di archiviazione, invece, servono a conservare i dati anche dopo lo spegnimento.
È lì che rimangono fotografie, documenti, programmi e sistema operativo.

## E il sistema operativo?

Windows, macOS, Linux e gli altri sistemi operativi stanno in mezzo tra noi, i programmi e l’hardware.

Gestiscono moltissime cose.

* Memoria
* File
* Dispositivi
* Schermo
* Tastiera
* Processi
* Permessi

Quando un’applicazione vuole salvare un file, per esempio, normalmente non deve conoscere ogni dettaglio fisico dell’SSD, può chiedere al sistema operativo di occuparsene.

È uno dei motivi per cui possiamo creare programmi complessi senza dover ripartire ogni volta dai transistor.


## E da qui arriviamo a Internet

Una volta che abbiamo trasformato qualcosa in bit, possiamo anche **trasmetterlo**.

Quegli stessi 0 e 1 possono essere rappresentati attraverso segnali elettrici in un cavo, impulsi di luce dentro una fibra ottica oppure onde radio.
Ed è proprio qui che il computer incontra Internet.

Un messaggio WhatsApp, per esempio, parte come informazione sul tuo telefono, viene trasformato in dati e poi attraversa reti che possono portarlo anche dall’altra parte del pianeta.

Di questo, però, ne parlerò in seguito.