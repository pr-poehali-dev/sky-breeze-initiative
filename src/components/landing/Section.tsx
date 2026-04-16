import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

const bgImages: Record<string, string> = {
  hero: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80',
  about: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1800&q=80',
  features: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=80',
  testimonials: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1800&q=80',
  join: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80',
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  const isHero = id === 'hero'
  const bgImage = bgImages[id]

  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-20 lg:px-32 overflow-hidden"
    >
      {/* Фоновое фото */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Контент */}
      <div className="relative z-10">
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
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {title}
        </motion.h2>

        {content && (
          <motion.p
            className="text-lg md:text-xl max-w-xl mt-6 leading-relaxed text-gray-200"
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
              className="text-base px-8 py-5 rounded-full font-medium bg-[#16a34a] text-white hover:bg-[#15803d] transition-all shadow-lg"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}

        {isHero && (
          <motion.div
            className="absolute bottom-[-40vh] left-0 flex items-center gap-3 text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="w-8 h-px bg-gray-400" />
            Прокрутите вниз
          </motion.div>
        )}
      </div>
    </section>
  )
}
