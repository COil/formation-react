import './BookList.css';
import {useState} from 'react';

const books = [
    {isbn: '9793083416011', title: 'Excepturi explicabo volu…am aut voluptate velit.', author: 'Corbin Ritchie'},
    {isbn: '9786451149666', title: 'Est est et eveniet porro non.', author: 'Deonte Effertz'},
    {isbn: '9782736956844', title: 'Tempore ab quis impedit itaque assumenda aut.', author: 'Dr. Abel Gutmann IV'},
    {
        isbn: '9790275158155',
        title: 'Quibusdam quia aut culpa dolores consectetur quod doloremque.',
        author: 'Prof. Scotty Pfannerstill DVM'
    },
    {isbn: '9789899956537', title: 'Qui accusamus et odio explicabo quam accusamus.', author: 'Ms. Alana Murphy'},
];

const BookList = () => {
    const [order, setOrder] = useState(null);

    const orderedBooks = order === null ?
        books :
        books.sort((a, b) => {
            return a[order] < b[order] ? -1 :
                a[order] > b[order] ? 1 : 0;
        });

    return (
        <>
            <header className="book-list-header">
                <h1>Livres</h1>
                <p className="book-list-order">
                    Trier par
                    <button onClick={() => setOrder('isbn')}>isbn</button> -
                    <button onClick={() => setOrder('title')}>titre</button> -
                    <button onClick={() => setOrder('author')}>auteur</button>
                </p>
            </header>
            <div className="book-list">
                <ul>
                    { orderedBooks.map(book => (
                        <Book key={book.isbn} book={book} />
                    )) }
                </ul>
            </div>
        </>
    );
};

const Book = ({book}) => {
    return (
        <div className="book-card">
            <img src={`https://picsum.photos/seed/${book.isbn}/300/400`} width="100px" alt={book.title} />
            <h3>{book.title}</h3>
            <p>Auteur⋅rice : {book.author}</p>
            <p>Isbn : {book.isbn}</p>
        </div>
    );
}

export default BookList;
