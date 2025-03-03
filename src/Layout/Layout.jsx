import React,{useEffect, useRef, useState} from 'react';
import { getMealCategory } from '../APIRequest/APIRequest';
import { NavLink } from 'react-router-dom';


const Layout = (props) => {
        let menu_items=useRef();
        const [categories,setCategories]=useState([]);
        const drawer=()=>{
            menu_items.current.classList.toggle('active');
        }
        useEffect( ()=>{
            ( async ()=>{
                let res=await getMealCategory();
                //console.log(res);
                setCategories(res);
            })()
        },[])
    return (
        <div>
             <div id="header" className="bg-light-chocolate w-full  
   flex items-center justify-between top-0 fixed z-10 shadow-md ">
    <NavLink className="flex items-center " key={"index"} to={"/"} >
        <img src="../resource/food-dinner-dish-plate-fork-svgrepo-com.svg" alt="food logo"
        width="40px" height="40px" className="m-2 p-1"/>
        <span className="font-bold text-2xl">Foodie</span>
    </NavLink>
    <div  className="flex items-center w-full justify-end  md:w-3/4  ">
        <ul ref={menu_items}
         className="absolute  md:relative top-14 left-0 md:top-0 pt-6 md:pt-0 pb-6 md:pb-0   -z-10 md:z-10
       grid grid-cols-2 gap-4 md:gap-1 w-full md:flex  md:flex-row  bg-light-chocolate justify-between 
          -translate-y-[200%] md:translate-y-0 transition-transform duration-500 ">
            {
                categories.map((item,index)=>{
                    return <li className='text-lg md:text-sm font-semibold  flex items-center justify-center 
                    rounded text-white hover:text-black hover:underline hover:underline-offset-4 mx-4 md:mx-0
                    '>
                        <NavLink key={index.toString()+"category"} to={"/byCategory/"+item} onClick={drawer}>
                        {item}
                        </NavLink>
                    </li>
                })
            }
            {/* <a href="" className="mx-1 my-3 md:my-0 font-semibold md:text-sm rounded text-white hover:text-lime-400 hover:underline hover:underline-offset-4 ">Discover</a> */}
            </ul>
           <img id="log_in_logo" src="../resource/avatar-boy-svgrepo-com.svg" alt="avatar"
           width="40px" height="40px" className="m-2 p-1 cursor-pointer   "/>
        <img onClick={drawer}
         src="../resource/menu-dots-svgrepo-com.svg" alt="menu"
        width="40px" height="40px"
         className="m-2 p-1  md:hidden hover:cursor-pointer hover:bg-amber-200 hover:rounded-full"/>
   </div>
   </div>
   {props.children}
        </div>
    );
};

export default Layout;