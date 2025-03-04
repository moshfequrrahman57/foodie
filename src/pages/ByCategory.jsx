import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { getMenusByCategory } from '../APIRequest/APIRequest';
import Menu_card from '../components/Menu_card';
import Loader from '../components/Loader';

const ByCategory = () => {

    let {category}=useParams();
    //alert(category);
    let [list,setList]=useState(null);
    useEffect(()=>{
        (
           async ()=>{
                let res=await getMenusByCategory(category);
                setList(res);
            }
        )()
    },[category])
    return (
        <Layout>
              <p className='text-xl md:text-3xl mt-16 p-3'>{category+":"}</p>
              {list===null?<Loader/>:<Menu_card list={list}/>}
        </Layout>
    );
};

export default ByCategory;