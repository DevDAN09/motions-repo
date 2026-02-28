import * as motion from "motion/react-client";
import { useState } from "react";
import {
  ButtonTransitionDemo,
  CardVariantsDemo,
  ModalPresenceDemo,
} from "../../animations";

const trackClassName = "h-3 w-full rounded-full bg-slate-200";
const dotClassName = "h-3 w-3 rounded-full bg-sky-500";

const sectionClassName = "rounded-xl border border-slate-200 bg-slate-50 p-5";

export default function MotionBasicsPage() {
  const [compareToggle, setCompareToggle] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">Motion Basics + AnimatePresence</h1>
        <p className="text-sm text-slate-700">
          `initial`, `animate`, `exit`, `transition` 패턴과 variants 오케스트레이션, 그리고
          mount/unmount 전환 데모를 한 페이지에서 확인합니다.
        </p>
      </header>

      <section className={sectionClassName}>
        <h2 className="text-lg font-semibold text-slate-900">1) Button transition demo</h2>
        <div className="mt-3">
          <ButtonTransitionDemo />
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="text-lg font-semibold text-slate-900">2) Card variants orchestration demo</h2>
        <div className="mt-3">
          <CardVariantsDemo />
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="text-lg font-semibold text-slate-900">3) Modal AnimatePresence demo</h2>
        <div className="mt-3">
          <ModalPresenceDemo />
        </div>
      </section>

      <section className={sectionClassName}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Easing vs Spring</h2>
          <button
            type="button"
            onClick={() => setCompareToggle((prev) => !prev)}
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
          >
            Run comparison
          </button>
        </div>

        <p className="mt-2 text-sm text-slate-700">
          Easing은 시간 곡선을 따라 예측 가능하게 이동하고, spring은 물리 기반이라 더 자연스럽게
          감쇠/반동합니다.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-800">Easing (duration + ease)</p>
            <div className={trackClassName}>
              <motion.div
                className={dotClassName}
                animate={{ x: compareToggle ? 220 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-800">Spring (stiffness + damping)</p>
            <div className={trackClassName}>
              <motion.div
                className={dotClassName}
                animate={{ x: compareToggle ? 220 : 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 17 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
