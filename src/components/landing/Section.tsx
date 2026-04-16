import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  const isHero = id === 'hero'

  return (
    <section
      id={id}
      className={`relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-20 lg:px-32 ${
        isHero ? 'bg-[#F8F7F4]' : id === 'about' ? 'bg-white' : id === 'features' ? 'bg-[#F8F7F4]' : id === 'testimonials' ? 'bg-white' : 'bg-[#1A1A1A]'
      }`}
    >
      {subtitle && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl ${
          id === 'join' ? 'text-white' : 'text-[#1A1A1A]'
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className={`text-lg md:text-xl max-w-xl mt-6 leading-relaxed ${
            id === 'join' ? 'text-gray-300' : 'text-gray-500'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {content}
        </motion.p>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className={`text-base px-8 py-5 rounded-full font-medium transition-all ${
              id === 'join'
                ? 'bg-white text-[#1A1A1A] hover:bg-gray-100'
                : 'bg-[#1A1A1A] text-white hover:bg-[#333]'
            }`}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}

      {isHero && (
        <motion.div
          className="absolute bottom-10 left-8 md:left-20 lg:left-32 flex items-center gap-3 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="w-8 h-px bg-gray-300" />
          Прокрутите вниз
        </motion.div>
      )}
    </section>
  )
}
