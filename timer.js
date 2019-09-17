var timer = 0;
var argv = process.argv;

if (!argv[2]) {
  console.log('please input a number EX. 5s 10min');
  process.exit(1)
} else if (argv[2].indexOf('s') > -1) {
  timer = parseInt(argv[2].slice(0,-1), 10)
} else if (argv[2].indexOf('min') > -1){
  timer = parseInt(argv[2].slice(0,-1), 10) * 60
}

var interval = setInterval(() => {
timer --
console.log(`Left: ${timer}s`);
if (timer === 0) {
  clearInterval(timer)
  process.exit(0)
}
}, 1000);
