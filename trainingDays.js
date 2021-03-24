// a bit of code here...

// The scope of `random` is too loose 

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
};

// The scope of `days` is too tight 
const getTrainingDays = eventToRun => {
    let days;

    if (eventToRun === 'Marathon') {
      days = 50;
    } else if (eventToRun === 'Triathlon') {
      days = 100;
    } else if (eventToRun === 'Pentathlon') {
      days = 200;
    }   
    return days;
};

// The scope of `name` is too tight 
const runnerName = 'Nala';

const logEvent = (runnerName, eventToRun) => {
    console.log(`${runnerName}'s event is: ${eventToRun}`);
};

const logTime = (runnerName, days) => {
    console.log(`${runnerName}'s time to train is: ${days} days`);
};

const eventToRun = getRandEvent();
const days = getTrainingDays(eventToRun);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(runnerName, eventToRun);
logTime(runnerName, days);

const eventToRun2 = getRandEvent();
const days2 = getTrainingDays(eventToRun2);
const runnerName2 = 'Warren';
 
logEvent(runnerName2, eventToRun2);
logTime(runnerName2, days2);