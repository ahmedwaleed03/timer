const timers = process.argv.slice(2);
if (!timers[0]) {
  process.exit();
}
const filteredTimers = timers.filter(item => {
  return  item >= 0;
});

const beep = function(delay) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay*1000);
}

for (let timer of filteredTimers) {
  beep(timer);
}