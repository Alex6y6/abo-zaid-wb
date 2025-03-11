import { HomeCard } from '@/components/shared/home/home-card'
import { HomeCarousel } from '@/components/shared/home/home-carousel'
import { Card, CardContent } from '@/components/ui/card'
import {
  getAllCategories,
  getProductsForCard,
} from '@/lib/actions/product.actions'
import data from '@/lib/data'
import { toSlug } from '@/lib/utils'

export default async function HomePage() {
  try {
    const categories = (await getAllCategories())?.slice(0, 4) || []
    const newArrivals =
      (await getProductsForCard({ tag: 'new-arrival', limit: 4 })) || []
    const featureds =
      (await getProductsForCard({ tag: 'featured', limit: 4 })) || []
    const bestSellers =
      (await getProductsForCard({ tag: 'best-seller', limit: 4 })) || []

    const cards = [
      {
        title: 'Categories to explore',
        link: {
          text: 'See More',
          href: '/search',
        },
        items: categories.map((category) => ({
          name: category,
          image: `/images/${toSlug(category)}.jpg`,
          href: `/search?category=${category}`,
        })),
      },
      {
        title: 'Explore New Arrivals',
        items: newArrivals,
        link: {
          text: 'View All',
          href: '/search?tag=new-arrival',
        },
      },
      {
        title: 'Discover Best Sellers',
        items: bestSellers,
        link: {
          text: 'View All',
          href: '/search?tag=best-seller',
        },
      },
      {
        title: 'Featured Products',
        items: featureds,
        link: {
          text: 'Shop Now',
          href: '/search?tag=featured',
        },
      },
    ]

    // تعريف carousels
    const carousels = [
      { image: '/images/banner1.jpg', alt: 'Banner 1' },
      { image: '/images/banner2.jpg', alt: 'Banner 2' },
    ]

    return (
      <>
        <HomeCarousel items={data.carousels} />
        <div className='md:p-4 md:space-y-4 bg-border'>
          <HomeCard cards={cards} />
        </div>
      </>
    )
  } catch (error) {
    console.error('Error loading homepage data:', error)
    return <div>Failed to load homepage data. Please try again later.</div>
  }
}
