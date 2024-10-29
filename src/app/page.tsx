"use client"

import { useState, useEffect } from "react";
import Select from "./components/select";
import ImageCard from "./components/image";

export default function Home() {

  const [date, setDate] = useState('');
  const [post, setPost] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=8dsXb1ac5MSvnhpDvdp4rIV1xAGCQKj1UtzJ03P7`)
      const data = await res.json()
      console.log(data);
      setPost(data)
    }
    fetchData()
  }, [date])
 
  if (!post) return <div>Loading...</div>

  const handleChange = (e) => {

    const selectedDate = e.target.value;
    const MIN_DATE = "1995-06-16"; 

    if (new Date(selectedDate) >= new Date(MIN_DATE))  {
      setDate(selectedDate);
    } else {
      return <h4>{post.msg}</h4>
    }
  };

  return (
    <div className="container mx-auto px-8">
      <h2 className="text-center text-xl sm:text-4xl my-4">
        Image of the day from Nasa
      </h2>  
      <Select 
        handle={handleChange}
        val={date} 
      />
      <ImageCard 
        title={post.title}
        url={post.url}
        description={post.explanation}
        date={post.date}
        author={post.copyright}
        hdurl={post.hdurl}
        type={post.media_type}
      />
    </div>
  );
}
