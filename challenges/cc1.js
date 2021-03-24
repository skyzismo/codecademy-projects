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