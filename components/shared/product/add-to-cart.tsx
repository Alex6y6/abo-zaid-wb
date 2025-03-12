'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useCartStore from '@/hooks/use-cart-store'
import { OrderItem } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function AddToCart({
  item,
  minimal = false,
}: {
  item: OrderItem
  minimal?: boolean
}) {
  const router = useRouter()
  const { addItem } = useCartStore()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = (qty: number) => {
    try {
      addItem(item, qty)
      toast('Added to Cart', {
        description: 'Item has been added to your cart',
        action: {
          label: 'Go to Cart',
          onClick: () => router.push('/cart'),
        },
      })
    } catch (error: any) {
      toast.error('Error', {
        description: error.message,
      })
    }
  }

  const handleBuyNow = (qty: number) => {
    try {
      addItem(item, qty)
      router.push('/checkout')
    } catch (error: any) {
      toast.error('Error', {
        description: error.message,
      })
    }
  }

  const handleAddToCartAndView = async (qty: number) => {
    try {
      const itemId = await addItem(item, qty)
      router.push(`/cart/${itemId}`)
    } catch (error: any) {
      toast.error('Error', {
        description: error.message,
      })
    }
  }

  return minimal ? (
    <Button className='rounded-full w-auto' onClick={() => handleAddToCart(1)}>
      Add to Cart
    </Button>
  ) : (
    <div className='w-full space-y-2'>
      <Select
        value={quantity.toString()}
        onValueChange={(i) => setQuantity(Number(i))}
      >
        <SelectTrigger>
          <SelectValue>Quantity: {quantity}</SelectValue>
        </SelectTrigger>
        <SelectContent position='popper'>
          {Array.from({ length: item.countInStock }).map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        className='rounded-full w-full'
        type='button'
        onClick={() => handleAddToCartAndView(quantity)}
      >
        Add to Cart
      </Button>
      <Button
        variant='secondary'
        onClick={() => handleBuyNow(quantity)}
        className='w-full rounded-full'
      >
        Buy Now
      </Button>
    </div>
  )
}
