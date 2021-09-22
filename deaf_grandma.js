// function deafGrandma() {
var prompt = require('prompt');
//
// Start the prompt
//
prompt.start();

let goodByeCount = 0;

function deafGrandma() {

  prompt.get(['input'], function (err, result) {
    const input = result.input;
    console.log('  input: ' + result.input);

    //If you don't input anything (just hit enter) she responds with `WHAT?
    if (input === ''){
      console.log("WHAT?!")
      deafGrandma();
    } 
    //The second time you say `GOODBYE!` she says `LATER, SKATER!` and the program exits.
    else if (input === "GOODBYE" && goodByeCount === 1){
      return console.log(`LATER SKATER!`)
    }
    //The first time you say `GOODBYE!` she says `LEAVING SO SOON?`
    else if (input === "GOODBYE"){
      console.log("LEAVING SO SOON?")
      goodByeCount++;
      deafGrandma();
    }
    //If you talk to her in all upper-case letters
    else if (input === input.toUpperCase()){
      console.log("NO, NOT SINCE 1946!")
      // console.log(goodByeCount)
      deafGrandma();
    } 
    //If you ask a question with any lower-case letters, she responds with `SPEAK UP, KID!`
    else {
      console.log("SPEAK UP, KID!")
      deafGrandma();
    }

    // Get two properties from the user: username and email
  //
  // prompt.get(['username', 'email'], function (err, result) {
  //   //
  //   // Log the results.
  //   //
  //   console.log('Command-line input received:');
  //   console.log('  username: ' + result.username);
  //   console.log('  email: ' + result.email);
  });

}


// }

deafGrandma();
