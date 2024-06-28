import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosCart } from "react-icons/io";
import { addtosave } from '../slice/cartslice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';




function Api() {


    const [rec, setrec] = useState([]);
    const [item, setitem] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category-list')
            .then((response) => { setrec(response.data) })


    }, [])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((response) => setitem((response.data.products)))
    })

    const  dispatch = useDispatch()


    const Addtocart = (data) =>{
        dispatch(addtosave(data))
        toast.success('successfully add this item to cart!')
    }



    return (
        <>
            <div className="top_nav d-flex justify-content-between m-5">
                <div className='logo' >
                    <img src='https://i.pinimg.com/736x/2c/64/6a/2c646ab2bff83408b14c2ab90a065713.jpg' alt="" />
                </div>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                </nav>
                <div >
                    <Link to='/cart'><button className='btn px-4 btn-success align-center'>View</button></Link>
                </div>
            </div>
            <div className='body'>
                <div className='d-flex'>
                    <div className='categories w-25 mk'>
                        <h3>Categories</h3>
                        {
                            rec.map((v) => {
                                return (
                                    <>
                                        <div className='categories fw-bold'>
                                            <p>{v}</p>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>

                    <div className='products d-flex flex-wrap row '>
                        {
                            item.map((v) => {
                                return (
                                    <>
                                        <div className="col-sm-6 ">
                                            <div className='ma'>
                                                <div className='w-75  '>
                                                    <div className="box pro ">
                                                    

                                                            <img src={v.thumbnail} alt="" srcset="" className='img-thumbnail img-fluid ' />
                                                            <div className="detail_box">
                                                                <ul>
                                                                    <li> <span>Category:</span>  {v.category}</li>
                                                                    <li> <span>Title:</span> {v.title}</li>
                                                                    <li><span>Price: </span> {v.price}</li>
                                                                    <li><span>Brand: </span> {v.brand}</li>
                                                                    <li><span>Rating:</span> {v.rating}</li>
                                                                    <li><span>Description:</span> <a href={`Detail/${v.id}`}>{v.description}</a></li>
                                                                </ul>
                                                                
                                                            </div>
                                                            <div className='button'>
                                                                <button className='btn btn-primary me-3' onClick={()=>Addtocart(v)}><a>ADD TO CART</a></button>
                                                                <button className='btn btn-primary'><a>BUY NOW</a></button>
                                                            </div>
                                                      
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
} export default Api;