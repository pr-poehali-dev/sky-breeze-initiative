import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'
import Icon from '@/components/ui/icon'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const scrollToSection = useCallback((index: number) => {
    if (!containerRef.current || isScrolling) return
    setIsScrolling(true)
    setActiveSection(index)
    containerRef.current.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    })
    setTimeout(() => setIsScrolling(false), 900)
  }, [isScrolling])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const index = Math.round(scrollPosition / windowHeight)
        setActiveSection(index)
      }
    }
    const container = containerRef.current
    if (container) container.addEventListener('scroll', handleScroll, { passive: true })
    return () => { if (container) container.removeEventListener('scroll', handleScroll) }
  }, [])

  useEffect(() => {
    let lastScrollTime = 0

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const now = Date.now()
      if (now - lastScrollTime < 800) return
      lastScrollTime = now

      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1)
      } else if (e.deltaY < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1)
      }
    }

    const container = containerRef.current
    if (container) container.addEventListener('wheel', handleWheel, { passive: false })
    return () => { if (container) container.removeEventListener('wheel', handleWheel) }
  }, [activeSection, scrollToSection])

  // Свайп на мобильном
  useEffect(() => {
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(diff) < 50) return
      if (diff > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1)
      } else if (diff < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true })
      container.addEventListener('touchend', handleTouchEnd, { passive: true })
    }
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [activeSection, scrollToSection])

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
            className={`w-2.5 h-2.5 rounded-full my-2 transition-all duration-300 ${
              index === activeSection ? 'bg-white scale-150' : 'bg-white/40'
            }`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </nav>

      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#16a34a] origin-left z-50"
        style={{ scaleX }}
      />

      <div
        ref={containerRef}
        className="h-full overflow-y-auto"
        style={{ scrollSnapType: 'none' }}
      >
        <AnimatePresence mode="sync">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              <Section
                {...section}
                isActive={index === activeSection}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Layout>
  )
}
