//helper function to find an item by a given id
function findFunction(array, id){
  return array.find((item) => item.id === id);
}


function findAuthorById(authors, id) {
  return findFunction(authors, id);
}

function findBookById(books, id) {
  return findFunction(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  const booksOut = books.filter((book) => !book.borrows[0].returned);
  const booksIn = books.filter((book) => book.borrows[0].returned);
  return [booksOut, booksIn];
}
function getBorrowersForBook({borrows}, accounts) {
  let borrowers = [];
  accounts.map((account) => {
    borrows.find((borrow) => {
      if(borrow.id === account.id) { 
        account["returned"] = borrow.returned;
        borrowers.push(account);
      };
    });
  });
  return borrowers.splice(0,10);
};




module.exports = {
  findFunction,
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
