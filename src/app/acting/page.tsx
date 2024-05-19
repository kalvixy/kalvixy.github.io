import Layout from '@/components/Layout'
import Title from '@/components/Title'
import Image from 'next/image'
import headshot from '../../photos/acting/headshot.jpg'

export default function Page() {
    const opts = { 
        height: "390", 
        width: "640", 
        playerVars: { 
          autoplay: 1, 
        }, 
      }; 

    return (
        <Layout>
        <div className='flex items-center flex-col '>
            <Title>Acting</Title>
                <div className="flex  flex-row max-w-6xl items-center justify-center">
                    <div className='flex basis-1/3 justify-items-center'>
                        <Image src={headshot} width={400} alt="Image headshot of John Fukuda" />
                    </div>
                    <div className='flex basis-2/3 flex-col mx-6'>
                        <p>
                        John Fukuda is an actor and ceramic artist based in Los Angeles.  John has 25 years of acting experience, an interesting voice, a charismatic presence, and good comedic chops.   In May this year, John was in a commercial, Freedom Calls, for Consumer Cellular, with spokesperson Ted Dansen.  In October, John performed with an ensemble at Outside In Theatre Company in The Story Goes, which was a 50 minute improvised play based on a single suggestion.   Besides Outside In, John is also working out with Upright Citizens Brigade and Cold Tofu Improv.
                        </p>
                        <h5>Representation</h5>
                        <p>
                        Soveriegn Talent Group (310) 474-4000 x13
                        </p>
                        <p>
                        Tracey Michaels & Luli Batista
                        </p>
                        <h5>Additional Information</h5>
                        <p>Height:  5’4” (163 cm)</p>
                        <p>Weight:  148 lbs</p>
                        <p>Age range: 40-55</p>
                        <p>Fluent in English, some Japanese</p>
                        <p>Union status:  SAG/Aftra, Fi-Core</p>
                    </div>
                </div>
                <h2>Recent Work</h2>
                <iframe src='https://www.youtube.com/embed/YmOf69_psbU' width={560} height={315} allowFullScreen />
        </div>
        </Layout>

  )
}