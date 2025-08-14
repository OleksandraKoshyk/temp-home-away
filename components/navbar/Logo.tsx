import React from 'react'
import Link from 'next/link';
import { BsHouseAddFill } from "react-icons/bs";
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <BsHouseAddFill className='w-6 h-6' />
      </Link>
    </Button>
  )
}

export default Logo