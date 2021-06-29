
//helper function to sort and splice an array based on count.
function sortFromTop(array){
  return array.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}


function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, cur) => acc + !cur.borrows[0].returned, 0);
}


function getMostCommonGenres(books) {
  let result = [];
  const genreList = books.map((book) => book.genre);
  const accList = genreList.reduce((tally, genre) => {
    tally[genre] === undefined ? (tally[genre] = 1) : (tally[genre] += 1);
    return tally;
  }, {})

  for(prop in accList) {
    const num = accList[prop];
    const consise = {"name": prop, "count": num };
    result.push(consise);
  };
  return sortFromTop(result);
}


function getMostPopularBooks(books) {
  let result = [];
  
  books.forEach(book => {
    const num = book.borrows.length;
    const title = book.title;
    const consise = {"name": title, "count": num};
    result.push(consise);
  });
return sortFromTop(result);
}


function getMostPopularAuthors(books, authors) {
  let result = [];
  
    books.forEach(book => {
      const num = book.borrows.length;
      authors.forEach(author => {
        const first = author.name.first;
        const last = author.name.last;
        const full = `${first} ${last}`;
        
          if(author.id === book.authorId){
            const final = {"name": full, "count": num}
            result.push(final);
          }
        });
    });
    return sortFromTop(result);
  }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
