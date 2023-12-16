import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src='assets/shop.jpg' className='card-Img' alt='background'/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 class="card-title display-5 fw-bolder mb-0">New Season Arrivals</h5>
                    <p class="card-text lead fs-2">Check Out All The New Trend</p>
                </div>
            </div>
        </div>
    )
}

export default Home
