import React from 'react'
import '../bootstrap.css'
import { useEffect } from 'react';
import Axios from 'axios'
import { useState } from 'react';
import Coin from './components/Coin';


function App() {
    const[listOfCoins,setListOfCoins]=useState([])
    const [searchWord,setSearchWord]=useState("")

    useEffect(()=>{
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response)=>{
            setListOfCoins(response.data.coins)
        })

    },[])

    const filterCoins=listOfCoins.filter((coin)=>{
        return  coin.name.toLowerCase().includes(searchWord.toLowerCase())
    })





    return ( <div className='container'> 
        <div className='container row bg-secondary p-3 text-center fixed-top mx-auto'>
            <input className='col-10 mx-auto form-control w-75 bg-dark text-danger d-flex flex-row' onChange={(event)=>{setSearchWord(event.target.value)}} type="text" name="" id="" placeholder='Search' />
            <a href='#' className='col-2 d-flex flex-row text-center text-decoration-none text-light m-1'>Created by <span style={{fontSize:'1rem'}} className='badge bg-dark rounded p-1 '>Mel</span> </a>
        </div><br />
        <div className='container bg-light mt-5 text-center justify-content-center'>{filterCoins.map((coin)=>{
            return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
            
        })}</div>
        
        
         </div>
    )
}

export default App