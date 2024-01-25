import MainBanner from '@/components/banner/page'
import Banner2 from '@/components/banner2/page'
import Banner3 from '@/components/banner3/page'
import Events from '@/components/events/page'
import IssuesMain from '@/components/issues/page'
import RecentNews from '@/components/news/page'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <MainBanner />
      <IssuesMain />
      <RecentNews />
        <div className="w-screen bg-red-800 h-20 py-4 flex flex-col md:flex md:flex-row items-center gap-4 justify-center">
        <p className="text-xl md:text-3xl text-center text-white">Receive Latest News</p>
        <button className="w-[300px] rounded-full bg-transparent border-white border-2 text-white text-base md:text-2xl hover:text-red-800 hover:bg-white transition-colors font-bold py-1">Subscribe</button>
      </div>
      <Banner2 />
      <Banner3 />
      <Events />
    </div>
  )
}
