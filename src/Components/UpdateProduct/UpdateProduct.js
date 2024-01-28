import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const UpdateProduct = () => {
    const [name, setPname] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategry] = useState('')
    const [comapny, setCompany] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const params = useParams();
    

    useEffect(() => {
        console.log(params)
        getProductDetails();
    }, [])
    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:8080/product/${params.id}`)
        result = await result.json();
        setPname(result.name)
        setCategry(result.category)
        setCompany(result.comapny)
        setPrice(result.price)
        console.log(result)
    }

    const updateProduct = async () =>{
        let result = await fetch(`http://localhost:8080/product/${params.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,comapny}),
            headers:{
                'Content-Type':"application/json"
            }
        }
        );
        result = await result.json();
        console.warn(result)
        navigate('/')
    }
    return (
        <div className='add-pro'>
            <h1>Update Product</h1>

            <input className='input-box' type='text' value={name} onChange={(e) => { setPname(e.target.value) }} placeholder='Enter Product Name' />
            <input className='input-box' type='text' value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='Enter Product Price' />
            <input className='input-box' type='text' value={category} onChange={(e) => { setCategry(e.target.value) }} placeholder='Enter Product Category' />
            <input className='input-box' type='text' value={comapny} onChange={(e) => { setCompany(e.target.value) }} placeholder='Enter Product Company' />
            <div className='btn-sign'>
                <button onClick={updateProduct}>Update Product</button>
            </div>

        </div>
    )
}
export default UpdateProduct