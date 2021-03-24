//a bit of code here

//q2
const canIVote = age => {
    if (age >= 18){
        return true;
    }
    else{
        return false;
    }
};

console.log(canIVote(18));

//q3
const agreeOrDisagree = (agreement1, agreement2) =>{
    if (agreement1 === agreement2){
        return 'You agree!'
    }
    else{
        return 'You disagree!';
    }
};

console.log(agreeOrDisagree('nop', 'nop'));

//q4
const lifePhase = age => {
    if(age <= 3 && age >= 0){return 'baby' }
    else if(age <= 12 && age >= 4){return 'child'}
    else if(age <= 19 && age >= 13){return 'teen'}
    else if(age <= 64 && age >= 20){return 'adult'}
    else if(age <= 140 && age >= 65){return 'senior citizen'}
    else if(age < 0 || age > 140){return 'This is not a valid age'}
};

console.log(lifePhase(140));

//q5
const finalGrade = (gradeOne, gradeTwo, gradeThree) => {

    if((gradeOne < 0 || gradeOne > 100) || (gradeTwo < 0 || gradeTwo > 100) || (gradeThree < 0 || gradeThree > 100)){return 'You have entered an invalid grade.'}
    const avg = (gradeOne + gradeTwo + gradeThree) / 3;

    if(avg <= 59 && avg >= 0){return 'F' }
    else if(avg <= 69 && avg >= 60){return 'D'}
    else if(avg <= 79 && avg >= 70){return 'C'}
    else if(avg <= 89 && avg >= 80){return 'B'}
    else if(avg <= 100 && avg >= 90){return 'A'}
};

console.log(finalGrade(101, 101, 101));

//q6
const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
};

console.log(reportingForDuty('Private', 'Fido'));

//q7
const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
        let die1 = Math.floor(Math.random() * 6) + 1;
        let die2 = Math.floor(Math.random() * 6) + 1;
        return die1 + die2;
};

console.log(rollTheDice());

//q8
const calculateWeight = (earthWeight, planet) => {
    switch(planet){
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return earthWeight * 0.907;
        case 'Mars':
            return earthWeight * 0.377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
};

console.log(calculateWeight(100, 'Jupiter'));

//q9
const truthyOrFalsy = value => {
    if(value){
        return true;
    }
    else{
        return false
    }
}

console.log(truthyOrFalsy(0));

//q10
const numImaginaryFriends = numFriends => {
    let imaginaryFriends = 0;
    return imaginaryFriends = Math.ceil(numFriends * 0.25);
};

console.log(numImaginaryFriends(20));
console.log(numImaginaryFriends(10));

//q11
const sillySentence = (adj, verb, noun) => {
    return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;
};

console.log(sillySentence('excited', 'love', 'functions'));

//q12
const howOld = (age, year) => {
    const date = new Date();
    const actualYear = date.getFullYear();

    const yearDifference = year - actualYear;
    const bornYear = actualYear - age;
    const bornDifference = bornYear - year;
    const newAge = age + yearDifference;

    if(newAge < 0){
        //before the person was born
        return `The year ${year} was ${bornDifference} years before you were born`;
    }
    else if(newAge > age){
        //year passed in the future
        return `You will be ${newAge} in the year ${year}`;
    }
    else{
        //year in the past, but not before
        return `You were ${newAge} in the year ${year}`;
    }
};

console.log(howOld(19, 1989));