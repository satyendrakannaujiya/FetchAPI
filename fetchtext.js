
//FETCHING THE TEXT USING FETCH API


/*fetch('sat1.txt').then(function(response) {
	
	return response.text();
}).then(function(data){
	console.log(data + "hello");
});*/


//FETCHING THE JSON FILE USING FETCH API

/*fetch('Fetchjson.json').then(function(response){

   return response.json();

}).then(function(data){

	 // const people[] = data;

  //        people.forEach(person in people){
  //        	  console.log(person.id);
  //        }


     data.forEach(function(person){
         console.log(person.id);
         console.log(person.name);
         console.log(person.age);
     });
});*/


//FETCHING THE IMAGE USING FETCHAPI


function myfunction()
{

//console.log('hello');
 for(i=1;i<=56;i++)
 {
fetch(`./images/${i}.jpg`).then(function(response){

          return response.blob();

}).then(function(data){

   // var image = new Image();
    var documentimg = document.querySelector('#image');

    const url = URL.createObjectURL(data);

    documentimg.innerHTML+=`<img src="${url}">`;



   // documentimg.appendChild = url;

});

}
}