//leetify v1.0 by surajk95

function leetifyRoutine(firstString, index){
  var index=(index+3)%firstString.length;
  var leetifyDiv = document.getElementById('leetify');
  let options = codes[firstString[index]];
  let secondString = firstString;
  secondString[index]=options[parseInt(Math.random()*options.length)];
  const finalString=firstString.join('');
  leetifyDiv.innerHTML=`${finalString}`;
  setTimeout(leetifyRoutine, 25, firstString, index);
}

function leetify(inputString, color='white', fontSize='32px', speed='25'){
  console.log(`leetifying...`);
  var leetifyDiv = document.getElementById('leetify');
  leetifyDiv.style.color=`${color}`;
  leetifyDiv.style.fontSize=`${fontSize}`;
  var baseString=inputString.split('');
  var firstString=baseString;
  leetifyRoutine(firstString, 0);
}

var codes={
  "A":["A","4","@"],
  "B":["B","8","3"],
  "C":["C","<"],
  "D":["D"],
  "E":["E","3"],
  "F":["F","#"],
  "G":["G","C","9"],
  "H":["H","#"],
  "I":["I","!","1"],
  "J":["J","!"],
  "K":["K","X"],
  "L":["L","7"],
  "M":["M"],
  "N":["N"],
  "O":["O","0"],
  "P":["P","9"],
  "Q":["Q","O","&"],
  "R":["R"],
  "S":["S","5","$"],
  "T":["T","7","1"],
  "U":["U","V"],
  "V":["V","U"],
  "W":["W"],
  "X":["X","K"],
  "Y":["Y","V"],
  "Z":["Z","2"],
  "0":["0","O"],
  "1":["1","I","J"],
  "2":["2","Z"],
  "3":["3", "E"],
  "4":["4", "A"],
  "5":["5","S"],
  "6":["6"],
  "7":["7", "T"],
  "8":["8", "B"],
  "9":["9","P"],
  "@":["@","A","4"],
  "<":["<","C"],
  "#":["#","F","H"],
  "!":["!","I","1","J"],
  "&":["&","Q","O"],
  "$":["$","S","5"]
}
