import React, { useEffect, useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
    const [productData, setData] = useState([])
    console.log(productData)

    const fetchApi = async () => {
        let result = await fetch('http://localhost:8080/products')
        result = await result.json();
        setData(result)

    }
    const deleteProduct = async (id) => {
        let deleteData = await fetch(`http://localhost:8080/product/${id}`, {
            method: 'delete',

        });

        deleteData = await deleteData.json()
        console.warn(deleteData)
        if (deleteData) {
            fetchApi();
            alert("product deleted");
        }

    }

    useEffect(() => {
        fetchApi();
    }, [])

    // const searchHandle = async (event) => {
    //     console.log(event.target.value)
    //     let key = event.target.value;
    //     let result = await fetch(`http://localhost:8080/product/${key}`)
    //     result = await result.json();
    //     if (result) {
    //         setData(result)
    //     }
    //     else{
    //         console.log("no data")
    //         setData([])
    //     }
    // }
    const searchHandle = async (event) => {
        const key = event.target.value;
        try {
            const result = await fetch(`http://localhost:8080/search/${key}`);
            const data = await result.json();
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>


            <div className='text-center'>
                <h1>View Product list</h1>
               
            </div>



            <div className='product-list'>
                <input type='text' className="search-input"placeholder='search product' onChange={searchHandle} />
                <ul className='header-list'>
                    <li>Sr.no</li>
                    <li>Name</li>
                    <li>Category</li>
                    <li>Company</li>
                    <li>Price</li>
                    <li>Operation</li>
                </ul>
                {productData &&
                    productData.map((item, index) => (
                        <ul className='header-list' key={item._id}>
                            <li>{index + 1}</li>
                            <li>{item.name}</li>
                            <li>{item.category}</li>
                            <li>{item.comapny}</li> {/* Fix the typo here */}
                            <li>{item.price}</li>
                            <li>
                                <button onClick={() => deleteProduct(item._id)}>delete</button>
                                <Link to={'/update/' + item._id}>Update</Link>
                            </li>
                        </ul>
                    ))}
            </div>

        </>
    )
}
export default ViewProduct;