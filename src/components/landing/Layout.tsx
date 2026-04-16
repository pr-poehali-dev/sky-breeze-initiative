import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-[#F8F7F4] relative">
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
