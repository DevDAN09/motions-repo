import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function ModalPresenceDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-3">
      <p className="text-sm text-slate-700">AnimatePresence keeps exit animations for unmounting UI.</p>
      <button
        type="button"
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
        onClick={() => setOpen(true)}
      >
        Open modal
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/45 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 23 }}
              className="w-full max-w-sm rounded-xl bg-white p-5 shadow-lg"
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="text-base font-bold text-slate-900">Presence Modal</h3>
              <p className="mt-1 text-sm text-slate-700">
                This box runs enter and exit transitions during mount/unmount.
              </p>
              <button
                type="button"
                className="mt-4 rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
