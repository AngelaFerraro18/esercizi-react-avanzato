# ESERCIZIO 1: Contatore con useReducer
Obiettivo: creare un contatore che può essere incrementato, decrementato e resettato.

Requisiti:
+ aumenta il conteggio

- diminuisce il conteggio

Reset lo riporta a 0

Suggerimenti:
Stato iniziale: { count: 0 }

Azioni: 'increment', 'decrement', 'reset'


# ESERCIZIO 2: Gestione di un form con useReducer
Obiettivo: gestire l'input di un modulo con più campi (nome, email, password).

Requisiti:
Aggiorna lo stato ogni volta che un campo viene modificato

Pulsante "Invia" mostra lo stato attuale (es. via console.log)

Suggerimenti:
Stato iniziale: { name: "", email: "", password: "" }

Azione: { type: 'update', field: 'name', value: 'Mario' }


# ESERCIZIO 3: Todo List con useReducer
Obiettivo: creare una lista di todo con aggiunta, rimozione e toggle "completato".

Requisiti:
Aggiungi todo

Rimuovi todo

Marca come completato/non completato

Stato:
js
Copia
Modifica
[{ id: 1, text: "Studiare React", completed: false }, ...]

