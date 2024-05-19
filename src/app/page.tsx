import Image from 'next/image'
import Layout from '@/components/Layout'
import logo from '../photos/logo.png'
import TwoColumnRow from '@/components/TwoColumnRow'
import Title from '@/components/Title'
import banner from '../photos/home/titleBanner.png'

export default function Home() {

  return (
    <Layout>
      <Title>Meet John Fukuda</Title>
      <div className='flex justify-center'>
        <Image src={banner} alt="John Fukuda: actor and ceramic artist" width={1600} />
      </div>
    </Layout>
  )
}
