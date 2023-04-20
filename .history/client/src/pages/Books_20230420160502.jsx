
import { useEffect, useState } from "react";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const fetchAllBooks = async () =>{
            try {

                const res = axios

            } catch (err) {
                console.log(err)
                
            }

        }
    },[])
  return (
    <div>Books</div>
  )
}

export default Books