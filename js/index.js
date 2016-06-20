var list1 = [1,2,3,4,5,6,7,8]

var listTen = [
  "Nick Bervar",
  "Rian Blakeney",
  "Ryan Dang",
  "Trent Hamura",
  "Luc Lambert",
  "Torin Lund",
  "Aidan Lyum",
  "Nathan Lyum",
  "Eli Martin",
  "Ryan Megorden",
  "Colin Morita",
  "Micah Murakami",
  "Kainoa Paul",
  "Henry Payne",
  "Jazz Priester",
  "Brody Robinson",
  "Katie Rudolf",
  "Chloe Saito",
  "Aidan Sibley",
  "Sungmin Sohn",
  "Jason Takao",
  "David Tilker",
  "Aidan Tune",
  "Zach White",
  "Naomi Yokoo",
  "John Chock",
  "","","",""
]

var listTwelve = [
  "Dean Ahearn",
  "Kai Erickson",
  "Rinny Fan",
  "Justin Frattarelli",
  "Ethan Goo",
  "Ross Hagino",
  "Marcus Herrera",
  "Everett Higa",
  "Dawson Hose",
  "Alicia Kim",
  "Andre Ku",
  "Anna Lerner",
  "Duke Mobley",
  "Taylor Moody",
  "Haley Muramatsu",
  "Ian Ogata",
  "Hudson Sakai",
  "Alex Tong",
  "Kaito Yamanaka",
  "Noa Yoo",
  "","","","","","","","","",""
]



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function sort(listName) {
  document.getElementById('list').innerHTML = "";
  shuffle(listName);

  var html='';
  for (var i=0; i<listName.length; i++) {
      var number = i+1;
      html+='<div>'+number+"   "+listName[i]+'</div>';
  }
  document.getElementById('list').innerHTML+= html;
}

function Ten() {
  sort(listTen);
}

function Twelve() {
  sort(listTwelve);
}
