import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/nav/Navbar'
import { Footer } from '@/components/footer/Footer'
import { CustomCursor } from '@/components/cursor/CustomCursor'
import { BlobBackground } from '@/components/ui/BlobBackground'

export default function App() {
  return (
    <>
      <CustomCursor />
      <BlobBackground />
      <Navbar />
      <main className="relative z-10 pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
