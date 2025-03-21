/* ------------------- Challenge 1: Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/
let message ="I'm almost out of coffee";
function panic(msg){
   return  msg.replace(/ /g," 😱 ").toUpperCase() + "!";
}
// Test your function
console.log("Challenge 1: ",panic(message)); 
console.log("Challenge 1: ",panic("winter is coming"));

/* ----------------------------- Challenge 2: Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(sentence){
    return  "shh... " + sentence.replace(/!($)/,"").toLowerCase();
}

console.log("Challenge 2: ",whisper("The KITTENS are SLEEPING!"));
console.log("Challenge 2: ",whisper("PLEASE STOP SHOUTING."));
console.log("Challenge 2: ",whisper("MA'AM, this is a Wendy's!"));

/* ------------------------------ Challenge 3: Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    let newStr="";
    for( let i =0; i<str.length; i++){
        (i%2===0) ? newStr+= str[i].toUpperCase() : newStr+= str[i];
    }
    return newStr;
}

console.log("Challenge 3: ",altCaps("I'm so happy it's Monday"));
console.log("Challenge 3: ",altCaps("When you visit Portland you have to go to VooDoo Donuts"));

/* Challenge 4: toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

/*  
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    return str.split(" ").map(capitalizeWord).join(" ");
}

console.log("Challenge 4: ",capitalizeWord("pumpkin"));
console.log("Challenge 4: ",toTitleCase("pumpkin pranced purposefully across the pond"));

/* --------------- Challenge 5: Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!
 */

function awardBonuses(){
    let bonus=0;
    const bonuses = [
        ":(",
        "Vacation!",
        "$100,000 bonus!",
        "JACKPOT! 1 Million and a Yacht!"
    ];
    for (let i=1; i<=100; i++){
        if(i%3===0){
            bonus+=1;
        }
        if(i%5===0){
            bonus+=2;
        }    
        console.log(`${i} - ${bonuses[bonus]}`);
        bonus=0;
    }

}

awardBonuses();

/* ---------------Challenge 6: Emojify! 

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){
    let key="";
    if (word.startsWith(":")){
        if(word.endsWith(":")){
            key = word.slice(1,word.length-1);
            if (emojis[key]){
                return emojis[key];
            }
            else{
                return key;
            }
        }
    }
    return word;
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
    const words = phrase.split(" ");
    const emojiPhrase = words.map(emojifyWord);
    return emojiPhrase.join(" ");
}

console.log("Challenge 6: ",emojifyWord(":cat:"));
console.log("Challenge 6: ",emojifyWord("cat:"));
console.log("Challenge 6: ",emojifyWord(":flower:"));
console.log("Challenge 6: ",emojifyWord("elephant"));

console.log("Challenge 6: ",emojifyPhrase("I :heart: my :cat:"));
console.log("Challenge 6: ",emojifyPhrase("I :heart: my :elephant:"));

/* ---------------Challenge 7: Is it an Anagram? 
Definition: Anagram = Same Letters, Different Words (differente arrange)
angel - glean
cider - cried
inch - chin
elbow - below
state - taste
save - vase
night - thing
bored - robed

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false
*/ 
/* TODO: Try to use array methods for version 2. Also I don't like the idea of
	go through the arrays two times.
 */
//I'm assuming that str1 != str2 and both are the same length
 function haveSameLetters(str1, str2){
    const str1Array = str1.split("");
    const str2Array = str2.split("");
    for(let letter in str1Array){
        
        if(!str2Array.includes(str1Array[letter])){
            return false;
        }
    }
    for(let letter in str2Array){
        
        if(!str1Array.includes(str2Array[letter])){
            return false;
        }
    }
    return true;
} 

function isAnagram(str1, str2){
    //check they are the same size
    if(str1.length == str2.length){
        //check they are not the same word
        if(str1 !== str2){
            //check they have the same letters
            return haveSameLetters(str1,str2);
        }
    }
    return false;
}

const words = [
    "angel", "glean",
    "cider","cried",
    "inch","chin",
    "elbow","below",
    "state", "taste",
    "save","vase",
    "night","thing",
    "bored","robed",
    "allergy","gallery",
    "treasure", "measure",
    "rainbow","crossbow"
];

for (let i=0; i< words.length; i+=2){
    console.log(`Challenge 7: ${words[i]} - ${words[i+1]} is Anagram?  ${isAnagram(words[i], words[i+1])}`);
}


/* ------------------------------Challenge 8: We Come in Peace!   
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseString(str){
    let newString="";
    for (let i = str.length-1; i>=0; i--){
        newString+=str[i];
    }
    return newString;
}
function reverseString2(str){
    return str.split("").reverse().join("");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
    return arr.map(item => reverseString2(item));
}

console.log("Challenge 8: ", reverseString("!htrae ot emocleW"));
console.log("Challenge 8: ", reverseString(title));
console.log("Challenge 8: ", reverseString2("!htrae ot emocleW"));
console.log("Challenge 8: ", reverseString2(title));
console.log("Challenge 8: ", reverseStringsInArray(messages));

/* -----------------------Challenge 9
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
    return (str === reverseString(str));
}
const c9Words =[
    "motorbike",
    "rotator",
    "kayak",
    "racecar",
    "noon",
    "solos",
    "tenet",
    "wow",
    "radar",
    "abba",
    "civic",
    "octopus",
    "pumpkins",
    "madam"
];


// Test your function
for(let word of c9Words){
    console.log(`Challenge 9: is ${word} a Palindrome? ${isPalindrome(word)}`);
}

/*------------------------- Challenge 10: Save Grandpa's password
  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    const arrayOfChars = chars.split("");
    const noDuplicates = [...new Set(arrayOfChars)].join("");
    return(noDuplicates);
}

console.log(`Challenge 10: aabbccb1212 : ${removeDupeChars("aabbccb1212")}`);
console.log(`Challenge 10: ${password} : ${removeDupeChars(password)}`);

/* --------------------- Challenge 11: 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str){
    let tempStr = str.replaceAll(/\s/g,"").toLowerCase();
    let tempStrToArray =  tempStr.split("");

    const histogram = {};
    for (let letter of (removeDupeChars(tempStr).split(""))){
        histogram[`${letter}`] = tempStrToArray.filter((item) => item === letter).length;
    }

    return histogram;
}

console.log("Challenge 11: Peggy Porth :",countChars("Peggy Porth"));
console.log("Challenge 11: Arturo Mena :",countChars("Arturo Mena"));

/* ------------------------ Challenge 12 : Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr){
    return  [...new Set(arr)];
}

console.log(`Challenge 12: ${eggScrambleRecipe}\nChallenge 12: ${removeDupesFromArray(eggScrambleRecipe)}`);

/* ------------------------ Challenge 13 : Count the scrimba students 
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    return arr.reduce((accumulator, item) => {
            return accumulator += item;
         });
}

console.log(`Challenge 13: ${sumArray(studentCount)}`);

/* --------------------------------Challenge: 14   Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    const keys=Object.keys(obj);
    let winner = 0;
    let winnerKey ="";
    for (let key of keys){
        if(obj[key] >= winner){
            winner = obj[key];
            winnerKey = key;
        }
    }
    return winnerKey;
}

console.log(`Challenge 14: ${findTheWinner(gameNightFood)}`);

// ------------------------------------ Challenge 15: Free podcasts
import podcasts15 from "./data15.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data){
    return data.reduce((acc,item) => {
        if(!item.paid){
            const {title, rating, paid} = item;
            acc.push({title, rating, paid});
        }
        return acc;
    }, []) 
}

console.log("Challenge 15: ",getFreePodcasts(podcasts15));

/*-------------------Challenge 16: 
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

import products from "./data16.js";

function getSaleItems(data){
    const sweets = data.filter(item => item.type === "sweet");
    return sweets.map((obj) => {
        const {item, price} = obj;
        return {item,price};
    })
};
const shoppingCart = getSaleItems(products);
console.log("Challenge 16: ",shoppingCart);



/*  -------------------------- Challenge 17
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

import shoppingCart2 from "./data17.js";

function total(arr){
    const total = arr.reduce((acc,item) => acc += item.price,0);
    return Math.round(total *100)/100;
}

console.log("Challenge 17: ",total(shoppingCart2));

/* ----------------------------- Challenge 18: 

    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

import products2 from "./data18.js";

function sortProducts(data){
    let sortedData = data.sort((item1, item2) => item1.price - item2.price);
    return sortedData.map(obj => {  
        const {product, price} = obj;
        return [product, price];
    });

}

console.log("Challenge 18: ",sortProducts(products2));


/* ---------------------- Challenge 19: Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

import mediaData from "./data19.js";

function getUniqueTags(data){
    return [...new Set(data.map(obj => obj.tags).flat())];
}

console.log("Challenge 19: ",getUniqueTags(mediaData));

/* ----------------------- Challenge 20:  Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/
import podcasts20 from "./data20.js";

function sortByDuration(data, flightLength){

  let sortedPodcasts;
  let podcastList;
  if(flightLength <= 60){
          sortedPodcasts = data.sort((item1, item2) => item1.duration - item2.duration);
        }
    else {
          sortedPodcasts = data.sort((item1, item2) => item2.duration - item1.duration);
    }
  
    podcastList= sortedPodcasts.map((obj, index) => {  
		return (`${index+1} ${obj.title}, ${obj.duration} minutes`); 
  });
  console.log(podcastList);

}
console.log("Challenge 20:");
sortByDuration(podcasts20, 100);
sortByDuration(podcasts20, 60);

/* --------------------- Challenge 21: Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

import postData21 from "./data21.js";

function calcAverageLikes(data){
  return data.reduce((acc, obj) => acc+= obj.likes,0)/data.length;
} 

console.log(`Challenge 21: ${calcAverageLikes(postData21)}`);



/* Challenge 22: Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 

import podcasts22 from "./data22.js";

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

/* function getHosts(data){
   return (data.reduce((acc, obj) => acc.push(obj.hosts),[])).flat();
} */
function getHosts(data){
   return (data.reduce((acc, obj)=>{
    acc.push(obj.hosts);
    return acc;
   },[])).flat();
}

function genRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function assignAwards(data){
 return data.map((item) => awards[genRandInt(0,4)] + " " + item);
}


console.log("Challenge 22:",getHosts(podcasts22));
console.log("Challenge 22:",assignAwards(getHosts(podcasts22)));

/* ----------------- Challenge 23: 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
        }
        ...
        ]
        
        If the podcast has more than one host, you can display only the first host.
        
        Stretch goal: Display all three hosts in the description, seperated with commas: 
        
        Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
        
*/ 

import podcasts23 from "./data23.js";

function formatHosts(hostList){
    let size = hostList.length;
    let formatedString = "";
    if(size >1 ){
        for (let i=0; i<= size-2; i++){
            formatedString +=hostList[i] + ", ";
        }
        formatedString += "and " + hostList[size-1] + ".";
    } else{
        formatedString += hostList[size-1] + ".";
    }
    return formatedString;
}

function createDescriptionsFor(data){
    return data.map((item) => {
        item['description'] = `${item.title} is a ${item.duration} minute ${item.genre} podcast hosted by ${formatHosts(item.hosts)}`;  
        return item;
    });
}

console.log("Challenge 23:",createDescriptionsFor(podcasts23));

/* ------------- Challenge 24: Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber",
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]

function isAnagramInArray(anagram, arr){
    const newAnagram = anagram.replace(/ /g,"").toLowerCase();
    const newArr = arr.map(string => string = string.replace(/ /g,"").toLowerCase());
    const anagramArray =[];
    for (let i =0; i< arr.length; i++){
        if (isAnagram(newAnagram, newArr[i]))
        {
            anagramArray.push(arr[i]);
        }
    }
    return anagramArray;
}

console.log("Challenge 24: Bob Ziroll Scrimba Teacher: ",isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));
console.log("Challenge 24: Per Harald Borgen Scrimba Teacher",isAnagramInArray("Harald Borgen Scrimba Teacher", anagrams));
console.log("Challenge 24: James Q Quick Scrimba Teacher",isAnagramInArray("Per Harald Scrimba Teacher", anagrams));
console.log("Challenge 24: Guil Hernandez Scrimba Teacher",isAnagramInArray("Per Borgen Scrimba Teacher", anagrams));
console.log("Challenge 24: Tom Chant Scrimba Teacher: ",isAnagramInArray("Tom Chant Scrimba Teacher", anagrams));
const test =  ["tater", "tree", "teart", "tetra", "heart", "hamster"];
console.log("Challenge 24: treat",isAnagramInArray("treat", test));

/* ------------------------- Challenge 25 :
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/ 

// For answer check index.html file