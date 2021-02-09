// Let's review our loops

// While loops

// Write a while loop that outputs all integers from 0 to 100


count = 0;
while (count <= 100) {
    console.log(count);
    count++;
}



// Write a while loop that outputs all integers from 10 to 0 and outputs Done!

var count1 = 10;
while (count1 >= 0 ){
  console.log(count1)
  count1--;
}


// For loops - Great for outputing

// Write a for loop that outputs all integers from 0 to 50

for (var i=0; i <= 50; i++) {
  console.log(i);
}


// Write a for loop that outputs all even integers from 0 to 300.

for (var i = 0; i <= 300; i+=2){
  console.log(i)
}

// For each loops (great for outputting a content of list)

// Write a for each loop that outputs all elements of an array (list)


var flavors = ["Strawberry", "Chocolate", "Rocky Road", "Chocolate Chip", "Raspbery Crunch"];

for (var flavor of flavors){
  console.log(flavor);
}

