Vue To Do List
===
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
## svolgimento
- creo un array di oggetto ed ogni oggetto avrà due proprietà
- stampo gli item in html tenedo conto della proprietà done
- creo un data da associare con il v-model all'input 
- al clic sul bottone aggiungi aggiungo un nuovo oggetto che inseriro nell'array todoList e ne stampo in pagina il text stampo in pagina 
- creo una funzione che rimuove dall'array l'oggetto con indice corrispondente 
- passo la funzione al click del bottone 'cestino'
- aggiungo un data error con stringa vuota 
- aggiungo alla funzione addTask un if in cui come condizione imposto una lughezza minima della stringa inserita 
- altrimenti il data error assumerà un messaggio di conseguenza 
- aggiungo un toggle che inverte il valore di done al clic sull'li
- inserisco un v-if e un v-else ceh controllano se è presente almeno un oggetto nell'array altrimenti stampano un messaggio