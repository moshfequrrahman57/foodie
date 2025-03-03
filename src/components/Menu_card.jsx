import React from 'react';

const Menu_card = () => {

    return (
        <div className='mx-auto my-16 p-3'>
            <p className='text-3xl'>Here's what we recommend for you!</p>
            <div className='grid grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {/* card starts */}
                <div className='flex flex-col bg-yellow-200'>  
                <img src="../../public/reciepe/best-brie-grilled-cheese-1-683x1024.jpg" alt="demo_food" 
                className='rounded-md w-full'
                />
                    <div className='flex flex-row justify-between'>
                     <p>30 mins</p>
                     <div className='flex flex-row'>
                     <img src="../../public/resource/thumbs-up-svgrepo-com.svg" alt="liked" 
                     width={20} height={20} />
                     <span > 86%</span>
                     </div>
                     </div>
                     <p className=''>Garlic Herb-Stuffed</p>
                </div>
                {/* card ends */}
                
            </div>
        </div>
    );
};

export default Menu_card;