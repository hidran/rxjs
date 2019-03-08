function getBooks(booktitle: string){
    const apiurl = 'https://www.googleapis.com/books/v1/volumes?q=';

    fetch(apiurl + booktitle).then(res => res.json()).then(
        books => console.log(books)
    );

}

getBooks('game of thrones');
