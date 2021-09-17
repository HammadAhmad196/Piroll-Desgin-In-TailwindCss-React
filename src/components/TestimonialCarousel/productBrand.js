import React from 'react';
import brand from '../../Data/Brdand';

function ProductBrand() {
    return (
        <div className='flex justify-center md:justify-between xl:px-2'>
            {brand.map((brand) => (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
                    <img src={brand.image} alt='' />
                </div>
            ))}
        </div>
    )
}

export default ProductBrand
