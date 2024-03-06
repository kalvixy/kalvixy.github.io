import React from "react"

const pages = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

export default function NavBar() {
    return (
        <div className="flex justify-end my-4 text-3xl">
            <div className="flex space-x-6">
                {pages.map(page => 
                    <div className="flex w-min" key={page.title}>
                        <div className="border-b-medium border-teal-700">
                            <a href={page.path}>{page.title}</a>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}