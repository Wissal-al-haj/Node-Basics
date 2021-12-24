
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

/**all camand */
function onDataReceived(text) {
  if (text === 'quit\n' || text ==='exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if (text.trim().split(" ")[0] === "hello") {
    hello(text);
  }
  else if(text=== 'help\n'){
    help();
  }
  else if (text === 'array\n'){
    arraylist();
    
  }
  else if(text.trim().split(" ")[0] === 'add'){
    add(text);
  }
  else if(text.trim().split(" ")[0] == 'remove'){
    remove(text.trim().split(" ")[1]);
  } 
  else if(text.trim().split(" ")[0] == 'edit'){
    edit(text.trim().split(" ")[1]);
  } 
  else if(text.trim().split(" ")[0] === 'check'){
    check(text);
   }
   else if(text.trim().split(" ")[0] === 'uncheck'){
     uncheck(text)
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
function hello(text)
{
  var msg=text.slice(6);
  if(msg.length > 0)
  {
    console.log(`hello ${msg}`);
  }
  else
  {
    /**added the handling empty state  */
    console.log('hello')
  }
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit()
{
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**arraylist */
let list=["wissal","21","akkar al atika"]
function arraylist()
{
  for(i=0;i<=list.length-1;i++)
  console.log (`${i}-${list[i]}`)
}

/**add */
function add(text)
{
  let n=text.slice(4);
  if(n.length > 0)
  {
  list.push(n.trim());
  console.log(n);
  }
  else
  {
    console.log('Error you need to add a word')
  }
}

/**remove */
function remove(item)
{
 for(i=0;i<list.length;i++)
 {
   if(item == (i))
   {
    list.splice((i-1),1);
    console.log(list)
  }
 }
 if(item > i)
 console.log("index not found");
}

/**edit */
function edit(index,item)
{
  for(i=0;i<list.length;i++)
  {
    if(index == (i))
    {
      list.splice((i-1),1,(""+item));
      console.log(list)
    }
  }
  if(index>i || index<i)
  {console.log("index incorrect or unavailble")}
  
} 

/**chech and uncheck */
let Status =[true,false];
let taskString;
function ElementStatus()
{
  list.forEach((element,index) =>
  {
    if(Status[index]===true)
    {
      taskString="[✓]";
    }
    else
    {
      taskString="[ ]";
    }
    console.log(`${index}-${taskString} ${list[index]}`)
  });
}

/**check */
function check(text)
{
  var index = text.trim().split(" ")[1];
  Status[index] = true;
}

/**uncheck */
function uncheck(text)
{
  var index = text.trim().split(" ")[1];
  Status[index] = false;
}

/**
 * help command
 *
 * @returns {void}
 */
 function help(){
  console.log("hello:print hello\n\nquit:quit the program\n\nexit:quit the program\n\nhello x:print hello and the word you write\n\narray:show your elements\n\nadd:add an element to your array\n\nremove:remove your last element\n\nremove i:remove the element in the index\n\ncheck:to put check the item you want\n\nuncheck:to remove the check\n\nedit:to edit an element in your array" )
}

// The following line starts the application
startApp("wissal al haj")