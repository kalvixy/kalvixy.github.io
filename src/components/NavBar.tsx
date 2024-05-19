import React from "react"
import logo from "../photos/logo.png"
import Image from "next/image"

const pages = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Acting',
        path: '/acting'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Events',
        path: '/events'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

export default function NavBar() {
    return (
        <div className="flex flex-row justify-between items-end my-4">
            <Image src={logo} width={200} alt="John Fukuda Logo"/>
            <div className="flex my-4 text-3xl">
                <div className="flex space-x-7">
                    {pages.map(page => 
                        <div className="flex w-min" key={page.title}>
                            <div className="border-b-medium border-teal-700">
                                <a href={page.path}>{page.title}</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}