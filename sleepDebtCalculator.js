//a bit of code here

const getSleepHours = (day) => {
    switch (day){
        case 'monday':
            return 7.5;
        case 'tuesday':
            return 6.5;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 7.5;
        case 'friday':
            return 6.5;
        case 'saturday':
            return 6;
        case 'sunday':
            return 6;
    }
};

//pode ser refatorado como um loop (feito como o exercicio exigiu :/)
const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday')
;

const getIdealSleepHours = () => {
    let idealHours = 8;

    return idealHours * 7;
};

const calculateSleepDebt = () => {
    //comparaçõees entre actual e ideal
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        return 'Perfect amount of sleep';
    }
    else if(actualSleepHours > idealSleepHours){
        return 'Sleeping to much, about ' + (actualSleepHours - idealSleepHours) + ' hours.';
    }
    else if(actualSleepHours < idealSleepHours){
        return 'Please, get some rest. You need to sleep about more ' + (idealSleepHours - actualSleepHours) + ' hours.' ;
    }
};

//uma forma alternativa é apenas chamar a função aqui e dar o log em cada pedaço de condição
console.log(calculateSleepDebt());

