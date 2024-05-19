import Layout from '@/components/Layout'
import Image from 'next/image'
import bawf1  from '../../photos/events/brewerArtWalk1.png'
import Title from '@/components/Title'

export default function Page() {
  return (
    <Layout>
        <Title>Events</Title>
        <div className='flex flex-col'>
            <h2 className='flex justify-center mb-4'>Upcoming Events</h2>
            <h4 className='flex justify-center my-6'> Stay tuned!</h4>
            <h2 className='flex justify-center mb-4'>Past Events</h2>
            <div className='flex justify-center mb-4'>
                {bawf1 && <Image src={bawf1} alt="Brewery Art Walk Flyer" width={400}/>}        
        
            </div>
        </div>

    </Layout>
  )
}