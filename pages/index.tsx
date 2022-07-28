import Header from '../components/header'
import Trending from '../components/trending'
import CMCTable from '../components/cmc-table/CMCTable'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='mt-10' />
      <Trending />
      <div className='mt-20' />
      <CMCTable/>
    </div>
  )
}

