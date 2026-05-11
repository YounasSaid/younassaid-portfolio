import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/nav/Navbar'
import { Footer } from '@/components/footer/Footer'
import { BlobBackground } from '@/components/ui/BlobBackground'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <BlobBackground />
      <Navbar />
      <main className="relative z-10 pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
