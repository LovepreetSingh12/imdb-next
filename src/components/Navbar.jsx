import React from 'react'
import NavbarItem from './NavbarItem';

export default function NavBar() {
  return (
    <div className='flex bg-amber-600 p-4 justify-center lg:text-lg gap-4'>
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
