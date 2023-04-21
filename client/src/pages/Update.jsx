import axios from "axios";
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";


const Update = () => {
  const [book, setBook] = useState({
    tile: "",
    desc: "",
    cover: "",
    price: null,
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  };

  //console.log(book);
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  console.log(location.pathname.split("/")[2])

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book)
      navigate("/")
    } catch (err) {
      console.log(err)
    }


  }
  return (
    <div className="form">
      <h1>Update this Book</h1>
      <input type="text" placeholder="Title" onChange={handleChange} name="title" />
      <input type="text" placeholder="Description" onChange={handleChange} name="desc" />
      <input type="number" placeholder="Price" onChange={handleChange} name="price" />
      <input type="text" placeholder="Cover" onChange={handleChange} name="cover" />
      <button className="fromButton" onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update