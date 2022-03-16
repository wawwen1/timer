let args = process.argv.slice(2);

if (args < 0 || Number(args) % 1 !== 0) {
  console.log('hi');
} else {
  for (let i = 0; i < args.length; i++) {
    let delay = args[i] * 1000;
    setTimeout(() => process.stdout.write(`${args[i]} seconds.. BEEP! \x07`), delay);
    setTimeout(() => console.log('\n'), delay);
  }
}