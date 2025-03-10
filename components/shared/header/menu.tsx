import { ShoppingCartIcon, CircleUser } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/cart' className='header-button'>
          <CircleUser className='h-8 w-8' />
          <span className='font-bold '> تسجيل </span>
        </Link>

        <Link href='/cart' className='header-button'>
          <ShoppingCartIcon className='h-8 w-8' />
          <span className='font-bold'>السلة</span>
        </Link>
      </nav>
    </div>
  )
}
