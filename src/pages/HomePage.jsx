import React, { useEffect, useState } from 'react';
import Layout from './../Layout/Layout';
import Menu_card from '../components/Menu_card';
import { getLatest } from '../APIRequest/APIRequest';

const HomePage = () => {
    let [list,setList]=useState([]);
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
           <Menu_card list={list}/>
        </Layout>
    );
};

export default HomePage;