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


var listMine =[
  "Mila Becker",
  "Diego Eann",
  "Ross Hagino",
  "Kaden Hiraoka",
  "Sam Huelsnitz",
  "Trevor Hyun",
  "Nick Kaneshiro",
  "Ethan Kim",
  "Harry Kim",
  "Kellee Lagondino",
  "Ethan Lee",
  "Lura Looper",
  "Carson Loughridge",
  "Noah Lum",
  "Lindsay Minami",
  "Kaitlyn Miyasato",
  "Judith Nichols",
  "Grant Ogata",
  "Ian Ogata",
  "Miu Okuda",
  "Takuma Osaka",
  "Eugene Park",
  "Katie Rudolf",
  "Aidan Sibley",  
  "Andrew Su",
  "Kai Teranishi-Guay",
  "Jacob Villa-Abiva",
  "Jack Winter",
  "Beren Wong",
  "Nakoa Young-Kingsbury"
]



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function sort(listName) {
  shuffle(listName);

  var html='';
  for (var i=0; i<listName.length; i++) {
      var number = i+1;
      html ='<div>'+number+"   "+listName[i]+'</div>';
      document.getElementById(number).innerHTML = html;
  }
  
}
