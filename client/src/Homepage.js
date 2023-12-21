import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Homepage.css'
const Homepage = () => {
    const [data,setData] = useState();
    useEffect(()=>{
        fetchApi();
        // eslint-disable-next-line
      },[]);
    
      const fetchApi = async()=>{
        try {
          const response = await axios.get("http://localhost:3000/v1/api");
          setData(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div className='table__container'>
        <table border={"1"}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Website</th>
              <th>City</th>
              <th>Street</th>
              <th>Suite</th> 
              <th>Zipcode</th>
              <th>Company Name</th>
            </tr>
          </thead>
            {data?.map((item,index)=>
            (
                <tr key={item?.id} style={{  background: index %2 === 0 ?"#d1deee":"#e7ecf4"}}>
                    <td>{item?.id}</td>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.username}</td>
                    <td>{item?.website}</td>
                    <td>{item?.address?.city}</td>
                    <td>{item?.address?.street}</td>
                    <td>{item?.address?.suite}</td>
                    <td>{item?.address?.zipcode}</td>
                    <td>{item?.company?.name}</td>
                </tr>
            )
            )}
        </table>
    </div>
  )
}

export default Homepage