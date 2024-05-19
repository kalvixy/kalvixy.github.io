import Layout from '@/components/Layout'
import Title from '@/components/Title'

export default function Page() {
  return (
    <Layout>
      <div className='flex items-center flex-col'>
        <Title>About John Fukuda</Title>
          <div className="max-w-6xl indent-3">
            <p>
              Although John Fukuda wants to fit into the crowd and act like a cool guy, he also thrives on going against the grain. He is a notorious flip-flopper.  
              He is both Japanese and Chinese.  This chaos or constant conflict is reflected in his ceramic work.  
            </p>
            <p>
              He likes to make vases mostly because… well there’s no exact explanation as to why.  
              Each vase is made up of multiple pieces thrown on a wheel, then stacked, and then manipulated by hand, during his favorite part of the process, what he calls post production, when the clay is “leather hard.”
              On accident or by osmosis, John has channeled his inner Japanese spirit: people have found his style to be something like wabi-sabi, which is beauty in the imperfection.
            </p>
            <p>
              John is based at the Temple of Mediclaytion in Venice Beach, where he works with his mentor Patrick Johnston, his friend from high school.  John curated many group art shows and events at Elektrashock Studios at 1320 Main St. in Venice, and also at the Venice Public Library for the Get Around, a joint effort between Mar Vista Artwalk and the Venice Art Crawl.
            </p>
            <p>
              John has also recently rekindled his passion for acting and is now doing improv with Upright Citizen’s Bridge, with Cold Tofu, the longest running Asian American improv company, and with Outside In Theater.  He is currently represented by Sovereign Talent Group.
            </p>
            <p>
              John took scene study at HB studios in NY, with Earl Hyman, Anne Jackson, and Austin Pendleton.  He is also a founding member of Mellow Yellow Theatre Company, and he has a B.A. in film production from the USC School of Cinematic Arts.
            </p>
          </div>
      </div>
          
    </Layout>

  )
}