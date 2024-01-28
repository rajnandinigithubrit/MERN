import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const [name, setPname] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategry] = useState('')
    const [comapny, setCompany] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const AddProduct = async () => {
        if (!name || !price || !category || !comapny) {
            setError(true)
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const resp = await fetch('http://localhost:8080/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price, category, comapny, userId })
        });
        const result = await resp.json();
        if(result != null){
            navigate('/')
                    }
        console.log(result)
        console.log(name, price, category, comapny)

    }
    return (
        <div className='add-pro'>
            <h1>Add Product</h1>

            <input className='input-box' type='text' value={name} onChange={(e) => { setPname(e.target.value) }} placeholder='Enter Product Name' />
            {error && !name && <span>Enter valid name</span>}
            <input className='input-box' type='text' value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='Enter Product Price' />
            {error && !price && <span>Enter valid price</span>}
            <input className='input-box' type='text' value={category} onChange={(e) => { setCategry(e.target.value) }} placeholder='Enter Product Category' />
            {error && !category && <span>Enter valid category</span>}
            <input className='input-box' type='text' value={comapny} onChange={(e) => { setCompany(e.target.value) }} placeholder='Enter Product Company' />
            {error && !comapny && <span>Enter valid company</span>}
            <div className='btn-sign'>
                <button onClick={AddProduct}>Add Product</button>
            </div>

        </div>
    )
}
export default AddProduct