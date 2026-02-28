# Motion Basics + AnimatePresence (Iteration 1)

## What was added
- Motion basics patterns with examples for `initial`, `animate`, `exit`, and `transition`.
- Parent-child variant orchestration example (staggered card items).
- `AnimatePresence` modal mount/unmount transition example.
- Three demos under `src/animations/*`:
  - `ButtonTransitionDemo.tsx`
  - `CardVariantsDemo.tsx`
  - `ModalPresenceDemo.tsx`
- Route/page integration at `/motion-basics` so all three demos are reachable in the UI.

## Where to view
- Route: `/motion-basics`
- Entry page file: `src/pages/MotionBasics/MotionBasicsPage.tsx`

## Core pattern notes

### `initial` / `animate` / `exit` / `transition`
- `initial`: first frame before animation starts.
- `animate`: target frame while mounted.
- `exit`: leaving frame used when component unmounts with `AnimatePresence`.
- `transition`: timing/physics config (`duration`, `ease`, `type`, `stiffness`, `damping`...).

### Easing vs Spring (concise)
- Easing: predictable, timeline-based interpolation. Good for straightforward UI timing.
- Spring: physics-based movement with natural feel and optional bounce. Good for interactive or tactile motion.

### Variants vs direct props
- Use variants when multiple elements must share named states (`hidden`, `show`) or parent-child orchestration (`staggerChildren`, `delayChildren`) is needed.
- Use direct props (`initial={{...}}`, `animate={{...}}`) when animating a single element with simple state transitions.

## Demo mapping
- Button demo (`ButtonTransitionDemo`): direct props transition and interactive state change.
- Card demo (`CardVariantsDemo`): parent-child variants orchestration.
- Modal demo (`ModalPresenceDemo`): `AnimatePresence` enter/exit during mount/unmount.
