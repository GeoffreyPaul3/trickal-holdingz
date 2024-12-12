import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import ProductShowcase from '@/components/ProductShowcase'
import Partners from '@/components/Partners'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Products />
      <ProductShowcase />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  )
}

