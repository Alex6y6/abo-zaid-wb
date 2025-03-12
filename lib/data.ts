import { Data, IProductInput } from '@/types'
import { toSlug } from './utils'

const products: IProductInput[] = [
  // T-Shirts
  {
    name: "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes",
    slug: toSlug(
      "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes"
    ),
    category: 'Shoes',
    brand: 'Generic',
    images: ['/images/3.jpg', '/images/4.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 32.99,
    listPrice: 80,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 46,
    numSales: 48,
    description:
      'Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh',
    sizes: ['8', '9', '10', '11'],
    colors: ['Green', 'Black', 'Grey'],

    reviews: [],
  },

  // Additional T-shirts and other product categories omitted for brevity
]

const data: Data = {
  products,
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],

  carousels: [
    {
      title: 'Best Sellers in T-Shirts',
      buttonCaption: 'Shop Now',
      image: '/images/2.jpg',
      url: '/search?category=T-Shirts',
      isPublished: true,
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'See More',
      image: '/images/1.jpg',
      url: '/search?category=Wrist Watches',
      isPublished: true,
    },
  ],
}

export default data
