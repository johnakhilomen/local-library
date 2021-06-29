//i exported the findFucntion from /books.js and used it in this module.
const {findFunction} = require("./books.js")


function findAccountById(accounts, id) {
  return findFunction(accounts, id);
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((one, two) => 
    one.name.last.toLowerCase() > two.name.last.toLowerCase() ? 1 : -1);   
};


function getTotalNumberOfBorrows({id}, books) {
  return books.reduce((acc, book) => {
    return acc + book.borrows.reduce((acc, num) => {
      if (num.id === id) {
        acc += 1;
      };
      return acc;
    }, 0);
  }, 0);
};


  function getBooksPossessedByAccount(account, books, authors) {
    return books.filter((book) => {
      const borrow = book.borrows[0];
      return !borrow.returned && borrow.id === account.id;
    }).map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return {...book, author};
    });
  };
  



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
