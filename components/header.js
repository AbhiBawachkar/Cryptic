import React from 'react'
import Image from 'next/image'
import {ConnectButton}  from 'web3uikit'


const styles = {
  header: 'bg-[#9C51B6] text-white h-20 flex gap-[100px] w-full p-[30px]',
  connect: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,

}

const Header = () => {
  return(
    <div className={styles.header}>
      <Image
        alt=''
        src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
        width={220}
        height={220}
      />

      <div className={styles.connect}>
          <ConnectButton />
        </div>
    </div>
  )    
}

export default Header