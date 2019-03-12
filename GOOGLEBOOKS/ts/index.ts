declare const rxjs: any;
interface GoogleBook {
    totalItems: number
    kind: string
    items: []
}

interface BookThumbnails{
    smallThumbnail: string
    thumbnail: string
}
interface VolumeInfo {
    authors: [ ]
    description: string
    imageLinks:BookThumbnails
    infoLink: string
    language: string
    previewLink: string
    title: string
    categories:[]
}
interface Book {
    title: string
    description: string
    authors: [ ]
    categories:[]
    thumbnail : string
}
interface BookItem{
    volumeInfo: VolumeInfo
    id: string
}
function getBooks(booktitle: string){
    const {from } = rxjs;
    const {map, switchMap, tap} = rxjs.operators;
    let apiurl = 'https://www.googleapis.com/books/v1/volumes?q=';

   const  p = fetch(apiurl + booktitle).then(res => res.json());
  // .then( books => console.log(books))
 from(p)
 .pipe(
     switchMap((data:GoogleBook) => from(data.items)),
    
  
     map( (ele:BookItem) => {
      const book:Book = {
           title : ele.volumeInfo.title,
           categories: ele.volumeInfo.categories,
           authors : ele.volumeInfo.authors,
           description: ele.volumeInfo.description,
           thumbnail: ele.volumeInfo.imageLinks.thumbnail
      };
      return book;
    }
     ),
     tap( (book:Book) => console.log(book)),
 )
 .subscribe((data:GoogleBook) =>  data )
 
}
getBooks('game of 3  thrones');
