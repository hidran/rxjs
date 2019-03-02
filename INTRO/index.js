const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
//-1-2-3-4-5
range(1, 200).pipe(
  filter(x => x % 2 === 0),
  map(x => x * x)
).subscribe(x => console.log(x));