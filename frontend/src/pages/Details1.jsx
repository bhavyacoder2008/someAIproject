import React from 'react'
import { useState } from 'react'
import axios from "axios";

const Details1 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [portfolioLink , setPortfolioLink] = useState("");
    const [errorObj , setErrorObj] = useState({});

    const handleClick = async (e) => {
        e.preventDefault();
        try{
        const res = await axios.post("http://localhost:3000/user/details1" , {
            name,
            email,
            phone,
            portfolioLink
        } , {withCredentials: true});
            console.log(res)
    
        }catch(err){
                console.log(err.response.data)
                const temperrArray = err.response.data.errors.errors;
                const tempErrorObj = {};

                temperrArray.forEach((error) => {
                    tempErrorObj[error.path] = error.msg
                })
                setErrorObj(tempErrorObj);
            }
    }
  return (
    <div >
        <h1 className='text-3xl sm:text-7xl font-bold text-center text-white sm:my-10 my-5'>Enter your details</h1>
        <div className='p-5 sm:p-8 text-center text-gray-100 text-xl sm:text-4xl font-semibold'>
            Enter Your Contact Information So that recruiters can contact you <br />
        </div>
        <form action="">
            <div className='text-white text-lg sm:text-2xl font-bold mb-2 ml-6 sm:ml-16'>Name</div>
            <input type="text" placeholder='Name' className='border-2 border-gray-300 p-2 rounded-md mb-4 placeholder:text-white ml-6 sm:ml-16 w-[60%] sm:w-[40%] focus:ring-blue-700 text-white ' required={true}
            value={name}
            onChange={(e) => {
                setName(e.target.value)
                setErrorObj({})
            }}
            /><br />
            {errorObj.name ? <div>{errorObj.name}</div>: <></>}
            <div className='text-white text-lg sm:text-2xl font-bold mb-2 ml-6 sm:ml-16'>E-mail</div>

            <input type="email" placeholder='E-mail' className='border-2 border-gray-300 p-2 rounded-md mb-4 placeholder:text-white ml-6 sm:ml-16 w-[60%] sm:w-[40%] focus:ring-blue-500 text-white' 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
                setErrorObj({})
            }}
            /><br />
            {errorObj.email && <p className='text-red-500'>{errorObj.email}</p>}
            <div className='text-white text-lg sm:text-2xl font-bold mb-2 ml-6 sm:ml-16'>Phone</div>

            <input type="text" placeholder='Phone' className='border-2 border-gray-300 p-2 rounded-md mb-4 placeholder:text-white ml-6 sm:ml-16 w-[60%] sm:w-[40%] focus:ring-blue-500 text-white' 
            value={phone}
            onChange={(e) => {
                setPhone(e.target.value);
                setErrorObj({})
            }}
            /><br />
            {errorObj.phone ? <div>{errorObj.phone}</div>: <></>}

            <div className='text-white text-lg sm:text-2xl font-bold mb-2 ml-6 sm:ml-16'>Portfolio Site <span className='text-sm font-light'>(optional)</span></div>

            <input type="url" placeholder='Portfolio link' className='border-2 border-gray-300 p-2 rounded-md mb-4 placeholder:text-white ml-6 sm:ml-16 w-[60%] sm:w-[40%] focus:ring-blue-500 text-white' 
            value={portfolioLink}
            onChange={(e) => setPortfolioLink(e.target.value)}
            />
        </form>
        <div className='flex justify-center items-center w-1/2'>
        <button onClick={(e) => handleClick(e)} className='text-center text-3xl cursor-pointer '>Submit</button>
        </div>
    </div>
  )
}

export default Details1