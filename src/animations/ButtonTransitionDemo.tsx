import * as motion from "motion/react-client";
import { useState } from "react";

const baseTransition = {
  duration: 0.35,
  ease: "easeInOut" as const,
};

export default function ButtonTransitionDemo() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col items-start gap-3">
      <p className="text-sm text-slate-700">
        Direct props 예시: `initial/animate/transition`으로 단일 요소를 빠르게 제어합니다.
      </p>
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: active ? 1.06 : 1,
          backgroundColor: active ? "#0f172a" : "#2563eb",
        }}
        transition={baseTransition}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setActive((prev) => !prev)}
        className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
      >
        {active ? "활성" : "대기"} 버튼
      </motion.button>
    </div>
  );
}
