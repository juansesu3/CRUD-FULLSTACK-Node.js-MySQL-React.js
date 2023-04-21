
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../styles/style.scss'

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {

                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data)
                console.log(res);

            } catch (err) {
                console.log(err);

            }

        }
        fetchAllBooks();
    }, []);


    const handleDelete = async (id)=>{
        try {
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
            
        }
    }

    return (
        <div>
            <h1>NeGiUpp Books Shop </h1>
            <div className="books">
                {books.map(book => (
                    <div className="book" key={book.id}>
                        {book.cover && <img className="img" src={book.cover} alt="cover-book-img" />}
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                        <button className="delete" onClick={()=>handleDelete(book.id)}>Deleted</button>
                        <button className="update"> <Link to={`/update/${book.id}`}>Update</Link> </button>
                    </div>
                ))}
            </div>
            <button><Link to="/add">Add new book</Link></button>
        </div>
    )



};

export default Books