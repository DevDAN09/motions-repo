import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { useI18n } from '../../i18n/I18nContext'

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const childVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.96 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 18 },
  },
}

const SectionFrame = ({
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
    <div className="mt-5">{children}</div>
  </section>
)

const BasicTransitionDemo = ({
  toggleLabel,
  caption,
  body,
}: {
  toggleLabel: string
  caption: string
  body: string
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950"
      >
        {toggleLabel}
      </button>
      <motion.div
        initial={false}
        animate={{
          scale: expanded ? 1.02 : 0.96,
          opacity: expanded ? 1 : 0.75,
          rotate: expanded ? 0 : -2,
        }}
        transition={{
          scale: { type: 'spring', bounce: 0.4, duration: 0.5 },
          opacity: { duration: 0.25, ease: 'easeOut' },
          rotate: { duration: 0.25 },
        }}
        className="max-w-sm rounded-xl border border-cyan-200/30 bg-cyan-400/10 p-4 text-slate-100"
      >
        <p className="text-sm text-cyan-100">{caption}</p>
        <p className="mt-2 text-base font-medium">{body}</p>
      </motion.div>
    </div>
  )
}

const VariantsDemo = ({
  replayLabel,
  showLabel,
  items,
}: {
  replayLabel: string
  showLabel: string
  items: [string, string, string]
}) => {
  const [visible, setVisible] = useState(true)

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setVisible((prev) => !prev)}
        className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-900"
      >
        {visible ? replayLabel : showLabel}
      </button>

      <motion.ul
        key={String(visible)}
        variants={parentVariants}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-3"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={childVariants}
            className="rounded-lg border border-slate-600 bg-slate-800/80 p-4 text-sm font-medium text-slate-100"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

const PresenceModalDemo = ({
  openLabel,
  heading,
  body,
  closeLabel,
}: {
  openLabel: string
  heading: string
  body: string
  closeLabel: string
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-950"
      >
        {openLabel}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 grid place-items-center bg-slate-950/70 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-5 text-slate-100 shadow-2xl"
            >
              <h4 className="text-lg font-semibold">{heading}</h4>
              <p className="mt-2 text-sm text-slate-300">{body}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-900"
              >
                {closeLabel}
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

const Week1Page = () => {
  const { t } = useI18n()

  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-cyan-300/80">{t('week1.badge')}</p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-100 sm:text-3xl">{t('week1.title')}</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">{t('week1.description')}</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        <SectionFrame title={t('week1.basic.title')} description={t('week1.basic.description')}>
          <BasicTransitionDemo
            toggleLabel={t('week1.basic.toggle')}
            caption={t('week1.basic.caption')}
            body={t('week1.basic.body')}
          />
        </SectionFrame>
        <SectionFrame title={t('week1.variants.title')} description={t('week1.variants.description')}>
          <VariantsDemo
            replayLabel={t('week1.variants.replay')}
            showLabel={t('week1.variants.show')}
            items={[
              t('week1.variants.items.button'),
              t('week1.variants.items.card'),
              t('week1.variants.items.modal'),
            ]}
          />
        </SectionFrame>
        <SectionFrame title={t('week1.presence.title')} description={t('week1.presence.description')}>
          <PresenceModalDemo
            openLabel={t('week1.presence.open')}
            heading={t('week1.presence.heading')}
            body={t('week1.presence.body')}
            closeLabel={t('week1.presence.close')}
          />
        </SectionFrame>
      </div>
    </section>
  )
}

export default Week1Page
