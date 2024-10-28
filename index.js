function casa(age,hastickets){
    if(age>18 && hastickets === true){
        return true
    }
    else{
      return  false
    }

}

console.log (casa(19,false))

function check(word ){
    if ( word.includes('a')){
        return true
    }
    else {
        return false
    }
}
console.log(check ('yssine'))

function isteenager(age){
    if(age >=13 && age <=15 ){
        return true
    }
    else{
        return false
    }
    

}
console.log (isteenager('15'))


function calculatedis(price,member){
    if(price>100 && member===true  ){
        return price*0.2
    }
    else if(price<=100 && member===true){
        return price*0.1
    }
    else {
    return "there is no discount applied"
    }
        
    

}
console.log (calculatedis('190',true))


function checkdivisibelity(nunn){
    if (nunn %4 === 0 && nunn %6=== 0){
        return 'divisble by both 6 and 4'
    }
    else if(nunn %4===0){
        return 'divisble by 4'
    }
    else if(nunn %6===0){
        return 'divisbel by 6'
    }
    else {
        return 'not divisble by both'
    }
}
console.log (checkdivisibelity(97))


function hasvip(age,membership,vipcode){
    if (age>18 && membership=== true && vipcode !== ""){
        return true
    }
        else if( age<18 && membership=== true && vipcode !== ""){
            return true
}
else return false

}
console.log(hasvip(19,true,""))


function gettempature(temp){
    console.log(temp)
    if(temp<=0){

        return "its freezing"
    }
    else if(temp>0 && temp<15){
        return "its cold"
    }
    else if ( temp>16 && temp<26) {
        return"its warm"
    }
}
console.log(gettempature(10))

function checkinn(number,guess){
    if(guess>number){
        return "too high"

    }
    else if(guess<number){
        return "too low"
    }
    else if(guess === number){
        return"correct"
    }
}
console.log(checkinn(10,13))

function jambojhon(age,student){
    if(age<18 && age>60 && student === true){
        return"true"
    }
   else if(age>18 && age<60 && student === false){
    return " false"
        
}
 }
console.log(jambojhon(30,true))


function canlogin(username,password,isadmin){
    if(username ==="admin "&& password=== "12345" && isadmin=== true){
        return "access granted admin"
    }
    else if(username !=="admin" && password==="12345" &&  isadmin=== true ){
       return "granted for user" 
    }
    else{
        return "not granted"

    }

}
console.log(canlogin("fqz","12345",true))

function emphasize(word,times){
    return (word + ' ').repeat(times - 1) + word;

}
console.log(emphasize("wow","3"))

function generateDiscount() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNum = Math.random();

    // Scale the random number to the range of 0 to 25 (30 - 5)
    const scaledNum = randomNum * 25;

    // Shift the range to start from 5 and take the floor to get an integer
    const discount = Math.floor(scaledNum) + 5;

    return discount; // This will return a number between 5 and 30
}

// Example usage:
console.log("Random Discount:", generateDiscount());


// Function to count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU'; // Define vowels
    let count = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++; // Increment count if it's a vowel
        }
    }

    return count; // Return the total count of vowels
}

// Function to replace a word in a sentence
function replaceWord(sentence, wordToReplace, replacement) {
    // Use .replaceAll() to replace all occurrences of the word
    return sentence.replaceAll(wordToReplace, replacement);
}

// Example usage
console.log("Number of vowels:", countVowels("Hello, World!")); // Output: 3
const newSentence = replaceWord("The quick brown fox jumps over the lazy dog.", "fox", "cat");
console.log("Updated sentence:", newSentence); // Output: The quick brown cat jumps over the lazy dog.