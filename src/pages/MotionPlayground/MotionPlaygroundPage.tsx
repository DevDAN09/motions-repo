import * as motion from 'motion/react-client'
import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { EnterAnimation, LayoutAnimation, SharedLayoutAnimation, constant } from '../../animations'
import { useI18n } from '../../i18n/I18nContext'

const Section = ({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) => (
  <section className="rounded-2xl border border-slate-700 bg-slate-900/65 p-5 shadow-[0_10px_24px_rgba(2,6,23,0.38)] sm:p-6">
    <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
    <p className="mt-1 text-sm text-slate-300">{description}</p>
    <div className="mt-4">{children}</div>
  </section>
)

const GestureSample = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <div className="space-y-6">
      <motion.div
        whileHover={{ scale: 1.18 }}
        whileTap={{ scale: 0.85 }}
        style={constant.box}
        className="cursor-pointer"
      />

      <div>
        <p className="mb-2 text-sm text-slate-300">Free drag</p>
        <motion.div drag style={constant.box} />
      </div>

      <div>
        <p className="mb-2 text-sm text-slate-300">Constrained drag</p>
        <motion.div
          ref={constraintsRef}
          style={{ width: 280, height: 240, backgroundColor: 'var(--hue-1-transparent)', borderRadius: 12 }}
          className="grid place-items-center"
        >
          <motion.div drag dragConstraints={constraintsRef} dragElastic={0.2} style={constant.box} />
        </motion.div>
      </div>
    </div>
  )
}

const MotionPlaygroundPage = () => {
  const { t } = useI18n()
  const [isOn, setIsOn] = useState(false)

  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-cyan-300/80">{t('playground.badge')}</p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-100 sm:text-3xl">{t('playground.title')}</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">{t('playground.description')}</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        <Section title={t('playground.sections.basic.title')} description={t('playground.sections.basic.description')}>
          <EnterAnimation />
        </Section>

        <Section title={t('playground.sections.gesture.title')} description={t('playground.sections.gesture.description')}>
          <GestureSample />
        </Section>

        <Section title={t('playground.sections.layout.title')} description={t('playground.sections.layout.description')}>
          <div className="space-y-4">
            <LayoutAnimation onToggle={(next) => setIsOn(next)} />
            <p className="text-sm text-slate-300">{isOn ? 'flex-start' : 'flex-end'}</p>
            <SharedLayoutAnimation />
          </div>
        </Section>
      </div>
    </section>
  )
}

export default MotionPlaygroundPage
