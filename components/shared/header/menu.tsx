import { EllipsisVertical } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import ThemeSwitcher from './theme-switcher'
import CartButton from './cart-button'
import UserButton from './user-button'

const Menu = ({ forAdmin = false }: { forAdmin?: boolean }) => {
  return (
    <div className='flex justify-end'>
      {/* Desktop and tablet menu */}
      <nav className='md:flex gap-3 w-full hidden'>
        <ThemeSwitcher />
        <UserButton />
        {forAdmin ? null : <CartButton />}
      </nav>

      {/* Mobile menu */}
      <nav className='md:hidden flex gap-3 w-full'>
        <UserButton />
        {forAdmin ? null : <CartButton />}
        <Sheet>
          <SheetTrigger className='align-middle header-button ml-auto'>
            <EllipsisVertical className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent className='bg-black text-white flex flex-col items-start'>
            <SheetHeader className='w-full'>
              <div className='flex items-center justify-between'>
                <SheetTitle>Site Menu</SheetTitle>
                <SheetDescription></SheetDescription>
              </div>
            </SheetHeader>
            <ThemeSwitcher />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Menu
