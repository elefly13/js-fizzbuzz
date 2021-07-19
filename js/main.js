//Scrivi un programma che stampi i numeri da 1 a 100,
//var insieme_numeri = 100;

//for (var i = 0; i < insieme_numeri; i++) {
//    console.log(i + 1);
//}

//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

for (var i = 1; i <= 100; i++) {
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.//
   if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    }
    //per i multipli di 3 stampi “Fizz” al posto del numero
    else if (i % 3 == 0) {
        console.log("Fizz");
    }  
    //per i multipli di 5 stampi Buzz al posto del numero 
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}



