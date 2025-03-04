import React from 'react';
import { Link } from 'react-router-dom';
const Menu_card = (props) => {

    return (
        <div className='mx-auto my-16 p-3'>
            <p className='text-3xl'>Here's what we recommend for you!</p>
            <div className='grid grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-7'>
                {
                    props.list.map((item,index)=>{
                        return(
                            <Link key={index.toString()}  to={"/"}>
                <div className='flex flex-col w-full  h-1/3'>  
                <img src={item['image']} alt="demo_food" 
                className='rounded-md  '
                />
                    <div className='flex flex-row justify-between mx-1'>
                     <p className='font-semibold'>{item['prepTimeMinutes']+" mins."}</p>
                     <div className='flex flex-row'>
                     <img src="../../src/resource/thumbs-up-svgrepo-com.svg" alt="liked" 
                     width={20} height={20} />
                     <span className='font-semibold'>{item['reviewCount']+" %"}</span>
                     </div>
                     </div>
                     <p className='font-extrabold mx-1'>{item['name']}</p>
                </div>
                </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Menu_card;