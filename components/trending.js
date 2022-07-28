import React, {useState } from 'react'
import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import TrendingCard from './TrendingCard'
import Rate from "./cmc-table/Rate"

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-2xl text-white`,
    flexCenter: `flex items-center`
}

const Trending=() => {

    const trendingData = [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "2.34%"
        }, {
            number: 2,
            symbol: "USDT",
            name: "Tether",
            icon: usdt,
            isIncrement: false,
            rate: "9.32%"
        }, {
            number: 3,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "2.34%"
        },
    ]

  return (
  <div className="text-white">
  <div className={styles.trendingWrapper}>
      
      <div className={styles.flexCenter}>
            <TrendingCard title='Trending' icon={fire} trendingData={trendingData} />
        </div>  
  

  </div>
</div> 
  )
}

export default Trending