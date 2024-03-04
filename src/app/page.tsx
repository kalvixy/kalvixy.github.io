import Image from 'next/image'
import Layout from '@/components/Layout'
import eventFlyer from '../photos/home/brewerArtWalk.png'
import logo from '../photos/logo.png'

export default function Home() {

  return (
    <Layout>
      <div className="flex items-center flex-col text-center">
        <div className="w-full flex justify-evenly items-end mb-8">
            <div className="flex flex-col items-center m-2">
              <Image src={logo} alt="The Fukuda Logo" width={300}/>
              <div className="text-3xl sm:text-2xl md:text-5xl italic mt-4">Ceramic Artist</div>
            </div>
            <div className="flex flex-col items-center m-2">
              <div className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl">John Fukuda</div>
              <div className="text-3xl sm:text-2xl md:text-5xl italic mt-4">Actor</div>
            </div>
        </div>
        {eventFlyer && <Image src={eventFlyer} alt="Brewery Art Walk Flyer" width={800}/>}
      </div>
    </Layout>
  )
}
