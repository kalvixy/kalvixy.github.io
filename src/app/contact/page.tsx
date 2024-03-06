import Layout from '@/components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import picture from "../../photos/contact/john_sidewalk.jpeg"
import Image from 'next/image';

export default function Page() {
  return (
    <Layout>
      <div className='flex items-center flex-col'>
        <div className="text-5xl mb-8">Contact</div>
        <div className='flex flex-row space-x-12 items-center flex-wrap'>
            <Image src={picture} width={300} alt="Piture of John Fukuda"/>
            <div>
                <div className="flex flex-row items-center">
                    <div className='mr-8'>
                        <FontAwesomeIcon icon={faEnvelope} className="size-10"/>
                    </div>
                    thefukuda@gmail.com
                </div>
                <div className="flex flex-row items-center">
                    <div className='mr-8'>
                        <FontAwesomeIcon icon={faPhoneAlt} className="size-10"/>
                    </div>
                    (213) 321-4678
                </div>
            </div>
            
        </div>

        <div className="text-5xl mb-8 mt-12">Social Media</div>
        <div className="flex flex-row space-x-12">
            <a href='https://www.instagram.com/thefukuda/' className='size-16'>
                <FontAwesomeIcon icon={faInstagram} size='2x'/>        
            </a>
            <a href='https://www.linkedin.com/in/john-fukuda-88638051/' className='size-16'>
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>        
            </a>
        </div>

      </div>
          
    </Layout>

  )
}