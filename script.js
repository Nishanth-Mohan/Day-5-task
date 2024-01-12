// // For the given JSON, iterat eover all the loops(for, for in, for of, forEach)

var request = new XMLHttpRequest();
request.open("GET", "script.json");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);

  //1)  for loop:

   let value = Object.values(result);
   for(let i=0; i<value.length; i++){
    console.log(value[i]);
   }
 //-----------------------------------------
 // 2)  for-in loop:

   for(var a in result){
    console.log(result[a]);
   }
 //-----------------------------------------
 // 3)  for-of loop:

  for(let a of Object.values(result)){
    console.log(a);
  }
 //-----------------------------------------
 //4)  forEach loop:
  Object.values(result).forEach(value => {
    console.log(value);
  });



};
