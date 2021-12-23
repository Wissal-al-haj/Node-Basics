
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
 
function onDataReceived(text) {
  if (text === 'quit\n' || text ==='exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if(text.slice(0,5) === 'hello'){
    helloo(text.slice(5));
  }
  else if(text=== 'help'){
    help();
  }
  else if (text === 'array\n'){
    arraylist();
    
  }
  else if(text.trim().split(" ")[0] === 'add'){
    add(text);
  }
  else if(text === 'last\n'){
    last();
  }
  else if(text === 'remove 2\n'){
    second();

  }
  else if(text === 'remove 1\n'){
    first();

  }
  else{
    unknownCommand(text);
  }
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}
function helloo(a){
  let w = a.trim()
  console.log("hello "+w+"!")

}
/**
 * help command
 *
 * @returns {void}
 */
function help(){
  console.log("hello:print hello\n quit:quit the program\n exit:quit the program\n hello x:print hello and the word you write")
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**arraylist */
let list=["wissal","21","akkar al atika"]
function arraylist(a){
  for(i=0;i<=list.length-1;i++)
  console.log (`${i}-${list[i]}`)
}
function add(text){

  let n=text.slice(4);
  if(n.length > 0){
  list.push(n.trim());
  console.log(n);

  }
  else{
    console.log('Error you need to add a word')
  }
  
}

//delete last elem
function last(){
  tasks.pop();
  console.log(list);
}

//remove second elem
function second(){
  list.splice(1, 1);
  console.log(list);
}

//remove first elem
function first(){
  list.shift();
  console.log(list);
}


// The following line starts the application
startApp("wissal al haj")