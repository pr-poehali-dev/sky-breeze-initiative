import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'
import Icon from '@/components/ui/icon'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-16 py-4 bg-black border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#e11d48] tracking-tight text-lg">УСЗ</span>
          <span className="hidden md:block text-gray-400 text-sm font-normal">Уфимский Сеточный Завод</span>
        </div>
        <a
          href="tel:+79961001023"
          className="flex items-center gap-2 bg-[#16a34a] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#15803d] transition-colors shadow-sm shadow-green-200"
        >
          <Icon name="Phone" size={15} />
          8 996 100-10-23
        </a>
      </header>
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`w-2.5 h-2.5 rounded-full my-2 transition-all ${
              index === activeSection ? 'bg-white scale-150' : 'bg-white/40'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#16a34a] origin-left z-30"
        style={{ scaleX }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
    </Layout>
  )
}