//leetify v1.0 by surajk95

function leetifyRoutine(firstString){
  var leetifyDiv = document.getElementById('leetify');
  let index = parseInt(Math.random()*firstString.length);
  let options = codes[firstString[index]];
  let secondString = firstString;
  //console.log(`${index} and ${firstString[index]} and ${options} and ${firstString}`);
  secondString[index]=options[parseInt(Math.random()*options.length)];

  const finalString=firstString.join('');
  leetifyDiv.innerHTML=`${finalString}`;
}

function leetify(inputString, color='white', fontSize='32px'){
  console.log(`leetifying...`);
  var leetifyDiv = document.getElementById('leetify');
  leetifyDiv.style.color=`${color}`;
  leetifyDiv.style.fontSize=`${fontSize}`;
  var baseString=inputString.split('');
  var firstString=baseString;
  //console.log(`int ${firstString}`);
  setInterval(leetifyRoutine, 35, firstString);
  //leetifyRoutine(firstString);


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
