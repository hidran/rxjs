const apiurl = 'https://jsonplaceholder.typicode.com/albums';

 const {switchMap} = require('rxjs/operators');

const { from, of } = require('rxjs');
const fetch = require('node-fetch');

const promise = fetch(apiurl).then(body => body.json());
                 //.then(res=> console.log(res));
//----[{...},{...}]//
//--{...},{....},{...}
// from ([1,3,3,4])
// of (1,3,3,4)
// of(...[1,3,3,4])
 from(promise).pipe(
     switchMap( 
         resData => from(resData)
        // resData =>  of(...resData)
     )

 ).subscribe(res => console.log(res))               