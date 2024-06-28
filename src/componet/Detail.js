import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Detail() {

    var { id } = useParams()
    const [data, setdata] = useState(null);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/'+ id)
            .then(response => setdata(response.data))
    }, [])

    if (data !== null) {

        return (
            <>
                <div>
                    <div className="col">

                        <div className='w-100'>

                            <div className=" pro d-flex m-5 ">
                                <OwlCarousel className='owl-theme slider' loop margin={0} items={1} nav={true} navClass={['owl-prev','owl-next']}>
                                    <div className='item'>

                                        <img src={data.thumbnail} alt="" srcset="" />
                                    </div>
                                </OwlCarousel>



                                <div className="detail_box ms-5 shadow p-3">
                                    <ul>
                                        <li> <span>Description:</span>  {data.description}</li>
                                        <li> <span>Price:</span> {data.price}</li>
                                        <li><span>Title: </span> {data.title}</li>
                                        <li><span>Brand: </span> {data.brand}</li>
                                        <li><span>Rating:</span> {data.rating}</li>
                                        <li><span>Stock In:</span> {data.stock}</li>
                                        <li><span>Discount:</span>{data.discountPercentage}</li>
                                        <li><span>Weight:</span>{data.weight}</li>     
                                        <li><span>Height:</span>{data.dimensions.height}</li>                                           
                                    </ul>
                                </div>

                            </div>
                            <div>
                                <button className="px-4 py-2 ms-5 me-4 text-white" style={{ 'backgroundColor': '#ff9f00' }}>ADD TO CART</button>
                                <button className="px-4 py-2 text-white" style={{ 'backgroundColor': '#fb641b' }}>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div >

            </>
        )
    }
    else {
        <h2>Loading...</h2>
    }
}
export default Detail;