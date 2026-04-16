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

const OFFICE_ADDRESS = 'Уфа, улица Пушкина, 45/1'
const WAREHOUSE_ADDRESS = 'Уфа, улица Центральная, 53'

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, showMap }: SectionProps) {
  const isHero = id === 'hero'
  const bgImage = bgImages[id]

  if (showMap) {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col bg-[#0f1a0f] overflow-hidden">
        {/* Заголовок */}
        <motion.div
          className="relative z-10 px-8 md:px-20 lg:px-32 pt-24 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://yandex.ru/maps/?rtext=~${encodeURIComponent(OFFICE_ADDRESS)}&rtt=auto`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#16a34a] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#15803d] transition-colors"
            >
              <Icon name="Navigation" size={14} />
              Маршрут до офиса
            </a>
            <a
              href={`https://yandex.ru/maps/?rtext=~${encodeURIComponent(WAREHOUSE_ADDRESS)}&rtt=auto`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#16a34a] text-[#16a34a] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#16a34a] hover:text-white transition-colors"
            >
              <Icon name="Navigation" size={14} />
              Маршрут до склада
            </a>
          </div>
        </motion.div>

        {/* Два адреса */}
        <motion.div
          className="relative z-10 px-8 md:px-20 lg:px-32 pb-4 flex flex-col sm:flex-row gap-4 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Icon name="Building2" size={14} className="text-[#16a34a] shrink-0" />
            <span><span className="text-white font-medium">Офис:</span> г. Уфа, ул. Пушкина, 45/1</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Icon name="Warehouse" size={14} className="text-[#16a34a] shrink-0" />
            <span><span className="text-white font-medium">Склад:</span> г. Уфа, ул. Центральная, 53</span>
          </div>
        </motion.div>

        {/* Карта Яндекс — офис */}
        <motion.div
          className="relative z-10 flex-1 px-8 md:px-20 lg:px-32 pb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Icon name="Building2" size={12} className="text-[#16a34a]" />
              Офис
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=55.959459%2C54.735152&z=16&pt=55.959459,54.735152,pm2gnm~55.959459,54.735152&text=%D0%A3%D1%84%D0%B0%2C+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD%D0%B0%2C+45%2F1"
              width="100%"
              height="100%"
              className="min-h-[200px]"
              style={{ border: 'none' }}
              allowFullScreen
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Icon name="Warehouse" size={12} className="text-[#16a34a]" />
              Склад
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=55.942000%2C54.720000&z=16&pt=55.942000,54.720000,pm2gnm&text=%D0%A3%D1%84%D0%B0%2C+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%2C+53"
              width="100%"
              height="100%"
              className="min-h-[200px]"
              style={{ border: 'none' }}
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>
    )
  }

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

      {/* Адреса в нижнем левом углу секции join */}
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
