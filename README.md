# Motion Study Repo

## Week 1: Basic + AnimatePresence

Route: `/week1`

Included demos:
- `BasicTransitionDemo`: `initial/animate/transition` and spring vs tween feeling check
- `VariantsDemo`: parent/child variants with stagger orchestration
- `PresenceModalDemo`: mount/unmount with `AnimatePresence` + `exit`

Troubleshooting notes:
- If `exit` does not run, verify the element is wrapped with `AnimatePresence`
- Use variants when multiple children need synchronized sequence control
- Separate transition intent:
  - `spring` for physical motion
  - `tween` for exact duration/easing control
