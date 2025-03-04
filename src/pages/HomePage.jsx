import React, { useEffect, useState } from 'react';
import Layout from './../Layout/Layout';
import Menu_card from '../components/Menu_card';
import { getLatest } from '../APIRequest/APIRequest';
import Loader from '../components/Loader';

const HomePage = () => {
    let [list,setList]=useState(null);
    useEffect( ()=>{
        ( async ()=>{
          let res=await getLatest();
            setList(res['recipes']);
           // console.log(res);
        }

        )()
    },[])
    return (
        <Layout>
              <p className='text-lg md:text-3xl mt-16 p-3'>Here's what we recommend for you!</p>
           {list===null?<Loader/>:<Menu_card list={list}/>}
        </Layout>
    );
};

export default HomePage;