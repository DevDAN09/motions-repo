import * as motion from "motion/react-client";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    transition: { when: "afterChildren" as const },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 170,
      damping: 18,
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 220, damping: 16 },
  },
};

const points = ["부모가 타이밍을 제어", "자식이 상태를 상속", "Stagger로 리듬 부여"];

export default function CardVariantsDemo() {
  return (
    <motion.article
      initial="hidden"
      animate="show"
      variants={cardVariants}
      className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h3 className="text-base font-bold text-slate-900">Variant 오케스트레이션 카드</h3>
      <p className="mt-1 text-sm text-slate-700">부모/자식 variants로 노출 타이밍을 함께 제어합니다.</p>
      <motion.ul className="mt-3 flex flex-col gap-2">
        {points.map((point) => (
          <motion.li
            key={point}
            variants={itemVariants}
            className="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-800"
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </motion.article>
  );
}
