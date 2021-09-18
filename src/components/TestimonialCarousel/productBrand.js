import React from 'react';
import brand from '../../Data/Brdand';
import Aos from "aos";
import "aos/dist/aos.css";

function ProductBrand() {
    const [viewPortEntered, setViewPortEntered] = React.useState(false);
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div data-aos="zoom-in-up" className='flex justify-center md:justify-between xl:px-2' style={{ fontFamily: 'Roboto' }}>
            {brand.map((brand) => (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
                    <img src={brand.image} alt='' />
                </div>
            ))}
        </div>
    )
}

export default ProductBrand
