// This handles the edge cases by removing the negative values and non number values from the arguments passed in to the setTimers function.
const processArgs = function() {
  let args = process.argv.slice(2);
  let filteredArgs = args.filter(arg => {
    return ((arg * 1000).toString !== 'NaN' && Number(arg) > 0);
  });
  let beepTimes = filteredArgs.map(arg => arg * 1000);
  return beepTimes;
}

const setTimers = function(beepTimes) {
  beepTimes.forEach(beepTime => {
    setTimeout(() => {
      console.log('BEEP!');
    }, beepTime);
  });
};

setTimers(processArgs());

