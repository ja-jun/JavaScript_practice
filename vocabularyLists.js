let myVoca = {
 addVoca: function (key, value) {
   myVoca[key] = value;
 },
 deleteVoca:function (word) {
   delete myVoca[word];
 },
 printVoca: function (word) {
   console.log(`"${word}"의 뜻은 "${myVoca[word]}"입니다.`);
 }
};

myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

myVoca.printVoca('property');