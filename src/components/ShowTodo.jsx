import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Counter } from './Counter'

export const ShowTodo = () => {
const [Title,setTitle]  = useState([])
    
    const {id} = useParams()
    console.log(id)
    useEffect(()=>
    {
          getdata()
    },[])
    

    const getdata=async()=>{
      //  let res = await fetch("http://localhost:8080/todos")
      //  let data =await res.json()
      //  dispatch(addTodo(data))
      
      
      axios.get(`http://localhost:8080/todos/${id}`)
            .then(res => {
              const result = res.data;
             setTitle(result)
              
            })
      
      }
  return (
    <div>ShowTodo
        <Counter></Counter>
        {/* {todos.map((e)=>(
            e.id == id ? (<div>{e.title}</div>) : "niklo"
        ))} */}
        <p>{Title.title}</p>
       
    </div>
  )
}
