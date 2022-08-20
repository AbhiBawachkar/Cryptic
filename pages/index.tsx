import Header from '../components/header'
import Trending from '../components/trending'
import CMCTable from '../components/cmc-table/CMCTable'
import SwapCryptoModal from '../components/SwapCryptoModal'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <SwapCryptoModal />
      <div className='mt-10' />
      <Trending />
      <div className='mt-20' />
      <CMCTable/>
    </div>
  )
}

