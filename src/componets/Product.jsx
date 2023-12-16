import React, { useEffect } from 'react'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

const Product = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct()
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                <Skeleton height={350}/>
                </div>
            </>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelery</button>
                    <button className="btn btn-outline-dark me-2">Electroniics</button>
                </div>

            </>
        )

    }
    return (

        <>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>

            </div>
            {filter.map((product) => {
                return (
                    <>
                        <div className="col-md-3">
                            <div className="card h-100  d-flex flex-direction-row text-center p-4" key={product.id}>
                                <img src={product.image} class="card-img-top" alt=
                                {product.title} />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title.substring(0,12)}</h5>
                                    <p class="card-text">
                                    ${product.price}
                                    </p> 
                                    <a href="#" class="btn btn-primary">
                                    Buy Now
                                    </a>
                                </div>
                            </div>

                        </div>
                    </>
                )
            })}
        </>

    )
}

export default Product
