import React from 'react';
import { Link } from 'react-router-dom';
const Menu_card = (props) => {

    return (
        <div className='mx-auto px-3'>
          
            <div className='grid grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-7'>
                {
                    props.list.map((item,index)=>{
                        return(
                            <Link key={index.toString()}  to={"/"}>
                <div className='flex flex-col w-full '>  
                <img src={item['image']} alt="demo_food" 
                className='rounded-md '
                />
                    <div className='flex flex-row justify-between m-1'>
                     <p className='font-semibold '>{item['prepTimeMinutes']+" mins."}</p>
                     <div className='flex flex-row'>
                     <img src="../resource/thumbs-up-svgrepo-com.svg" alt="liked" 
                     width={20} height={20} />
                     <span className='font-semibold'>{item['reviewCount']+" %"}</span>
                     </div>
                     </div>
                     <p className='font-extrabold m-1'>{item['name']}</p>
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