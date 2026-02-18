import { useI18n } from '../../i18n/I18nContext'

type IterationStatus = 'Todo' | 'In Progress' | 'Done'

type Iteration = {
  id: number
  issueUrl: string
  status: IterationStatus
}

const ROADMAP_ISSUE_URL = 'https://github.com/DevDAN09/motions-repo/issues/1'

const iterations: Iteration[] = [
  {
    id: 2,
    issueUrl: 'https://github.com/DevDAN09/motions-repo/issues/2',
    status: 'In Progress',
  },
  {
    id: 3,
    issueUrl: 'https://github.com/DevDAN09/motions-repo/issues/3',
    status: 'Todo',
  },
  {
    id: 4,
    issueUrl: 'https://github.com/DevDAN09/motions-repo/issues/4',
    status: 'Todo',
  },
  {
    id: 5,
    issueUrl: 'https://github.com/DevDAN09/motions-repo/issues/5',
    status: 'Todo',
  },
  {
    id: 6,
    issueUrl: 'https://github.com/DevDAN09/motions-repo/issues/6',
    status: 'Todo',
  },
  {
    id: 7,
    issueUrl: 'https://github.com/DevDAN09/motions-repo/issues/7',
    status: 'Todo',
  },
]

const statusTheme: Record<IterationStatus, string> = {
  Todo: 'bg-amber-300/90 text-amber-950',
  'In Progress': 'bg-cyan-300/90 text-cyan-950',
  Done: 'bg-emerald-300/90 text-emerald-950',
}

const PlanDashboardPage = () => {
  const { t } = useI18n()
  const doneCount = iterations.filter((item) => item.status === 'Done').length
  const progress = Math.round((doneCount / iterations.length) * 100)
  const statusLabel = {
    Todo: t('dashboard.status.todo'),
    'In Progress': t('dashboard.status.inProgress'),
    Done: t('dashboard.status.done'),
  }

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 shadow-[0_12px_30px_rgba(2,6,23,0.45)] sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300/80">{t('dashboard.planningView')}</p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-100 sm:text-3xl">{t('dashboard.title')}</h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              {t('dashboard.description')}
            </p>
          </div>
          <a
            href={ROADMAP_ISSUE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
          >
            {t('dashboard.openRoadmap')}
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">{t('dashboard.metric.totalIterations')}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-100">{iterations.length}</p>
          </article>
          <article className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">{t('dashboard.metric.completed')}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-100">{doneCount}</p>
          </article>
          <article className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">{t('dashboard.metric.progress')}</p>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-cyan-300 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-sm font-medium text-cyan-200">{progress}%</p>
          </article>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {iterations.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 shadow-[0_10px_24px_rgba(2,6,23,0.38)]"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-slate-300">{t(`dashboard.iterations.${item.id}.milestone`)}</p>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusTheme[item.status]}`}>
                {statusLabel[item.status]}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-slate-100">
              #{item.id} {t(`dashboard.iterations.${item.id}.title`)}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{t(`dashboard.iterations.${item.id}.focus`)}</p>
            <a
              href={item.issueUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700"
            >
              {t('dashboard.viewIssue')}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PlanDashboardPage
