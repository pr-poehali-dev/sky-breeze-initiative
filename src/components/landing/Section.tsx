import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

const bgImages: Record<string, string> = {
  hero: 'https://cdn.poehali.dev/projects/c2eb121f-5b98-42f5-bddf-5c67110503e7/bucket/783475a6-c5ed-4385-93f7-93b0feec95cd.png',
  about: 'https://cdn.poehali.dev/projects/c2eb121f-5b98-42f5-bddf-5c67110503e7/bucket/38599f67-0923-4dca-ae10-526c62d325e2.jpg',
  features: 'https://cdn.poehali.dev/projects/c2eb121f-5b98-42f5-bddf-5c67110503e7/bucket/9ef660d4-dda5-4186-9b2f-45378c24fa8e.jpg',
  testimonials: 'https://cdn.poehali.dev/projects/c2eb121f-5b98-42f5-bddf-5c67110503e7/bucket/2fa3842e-8d2a-492b-87bb-9cfc9a5b60a2.jpg',
  join: 'https://cdn.poehali.dev/projects/c2eb121f-5b98-42f5-bddf-5c67110503e7/bucket/3f2b2caf-3d21-4b77-8288-2bcf3a3320e2.png',
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

      {/* Адреса в нижнем левом углу последней секции */}
      {id === 'join' && (
        <motion.div
          className="absolute bottom-8 left-8 md:left-20 lg:left-32 flex flex-col sm:flex-row gap-4 sm:gap-8 z-10"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-start gap-2 text-gray-300 text-sm">
            <Icon name="Building2" size={15} className="mt-0.5 text-[#16a34a] shrink-0" />
            <div>
              <div className="text-white font-medium">Офис</div>
              <div>г. Уфа, ул. Пушкина, 45/1</div>
            </div>
          </div>
          <div className="flex items-start gap-2 text-gray-300 text-sm">
            <Icon name="Warehouse" size={15} className="mt-0.5 text-[#16a34a] shrink-0" />
            <div>
              <div className="text-white font-medium">Склад</div>
              <div>г. Уфа, ул. Центральная, 53</div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}