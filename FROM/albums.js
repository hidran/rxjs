function createAlbumList(title){
    const ul = document.querySelector('#albums');
    if(ul){
         const li = document.createElement('li');
         li.textContent = title;
         ul.appendChild(li)
    }
}
function updateTotal(total){
    const span = document.querySelector('#total');
    if(span){
        span.textContent = total; 
    }
   
}
const  { from, of } = rxjs;
const  { map,switchMap} = rxjs.operators;

const apiurl = 'https://jsonplaceholder.typicode.com/albums';

const promise = fetch(apiurl).then(body => body.json());
 const obs =    from(promise);   
 obs.subscribe(resData => updateTotal(resData.length))  ;

 obs.pipe(
     switchMap( 
         resData => from(resData)
        
     ),
     map(album => album.title)

 ).subscribe(createAlbumList)               