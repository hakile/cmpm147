// project.js - purpose and description here
// Author: Your Name
// Date:

function main() {
  const fillers = {
    stock: ["Orange", "Michaelsoft", "Sonny", "Googol", "Mvidia", "Entel", "BMD", "Somsung", "Nantendo", "Amazone", "Tezla", "Infra", "Adube", "McRonald's"],
    stock2: ["Boomberg", "Volve", "Huawoi"],
    dir: ["up", "down"],
    num1: ["0.001", "0.01", "0.03", "0.04", "1", "1.5", "2", "3.5", "3.8", "5", "11", "17", "17.1", "24", "28.5", "30", "43", "44.6", "51.6", "55", "60", "64", "68.2", "78.7", "80.6", "82", "93.4", "99", "100", "101", "2147483647", "NaN", "by... nothing", "any", "16 Star"],
    num2: ["3,759.40", "704.32", "557.31", "223.22", "7,019.62", "5,193.95", "51,273.37", "77,389.90", "39,376.54", "0.01", "999,999,999", "1", "1.01"],
    msg: [
      "You got $­$num2, lucky you!",
      "You got $­$num2, you can finally pay off your student loans!",
      "You got $­$num2, but somehow you're still in debt.",
      "You got $­$num2, time to go gamble!",
      "You lost $­$num2, too bad.",
      "You lost $­$num2, guess you're not getting that PS5.",
      "You lost $­$num2, I think it's time to find a job...",
      "You lost $­$num2, but did you know that 99% of gamblers stop right before they win?",
      "You're now in debt, oh no!",
      "You have so much money that it doesn't even matter!",
    ],
    msg2: ["", "", "", "", "", "", "",
      "\nThere's rumors of $stock2 going public soon!\n",
      "\nOop, $stock just went bankrupt.\n",
      "\nReminder that you put all your life savings into these.\n",
    ],
  };

  const template = `Let's see how the stock market is doing now...
  
  $stock went $dir $num1%, $stock went $dir $num1%, and $stock went $dir $num1%.
  $msg2
  $msg
  `;

  // STUDENTS: You don't need to edit code below this line.

  const slotPattern = /\$(\w+)/;

  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }

  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }

    /* global box */
    $("#box").text(story);
  }

  /* global clicker */
  $("#clicker").click(generate)

  generate();
}

// let's get this party started - uncomment me
main();
