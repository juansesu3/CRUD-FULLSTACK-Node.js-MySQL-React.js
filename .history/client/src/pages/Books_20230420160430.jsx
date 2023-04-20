
import { useEffect, useState } from "react"
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const fetchAllBooks = async () =>{
            try {

                
            } catch (err) {
                console.log(9)
                
            }

        }
    },[])
  return (
    <div>Books</div>
  )
}

export default Books