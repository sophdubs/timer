const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'b'){
    console.log(`BEEP!`)
  } else {
    if ((key * 1000).toString !== 'NaN' && Number(key) > 0 && Number(key) < 10) {
      Number(key) === 1 ? console.log(`setting timer for ${key} second...`) : console.log(`setting timer for ${key} seconds...`);
      setTimeout(() => {
        console.log('BEEP');
      }, key * 1000);
    }
  }
});

console.log('Please type a number between 1 and 9 to set a timer for that amount of seconds, or press "b" for an instant beep.');