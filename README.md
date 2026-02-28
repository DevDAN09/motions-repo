# 모션 기초 + AnimatePresence (Iteration 1)

## 추가한 내용
- `initial`, `animate`, `exit`, `transition` 패턴을 예제와 함께 정리했습니다.
- 부모-자식 variants 오케스트레이션(순차 등장) 예제를 추가했습니다.
- `AnimatePresence` 기반 모달 mount/unmount 전환 예제를 추가했습니다.
- `src/animations/*` 아래 3개 데모를 구현했습니다.
  - `ButtonTransitionDemo.tsx`
  - `CardVariantsDemo.tsx`
  - `ModalPresenceDemo.tsx`
- `/motion-basics` 라우트에서 3개 데모를 모두 확인할 수 있도록 페이지/라우팅을 연결했습니다.

## 확인 위치
- 라우트: `/motion-basics`
- 페이지 파일: `src/pages/MotionBasics/MotionBasicsPage.tsx`

## 핵심 패턴 정리

### `initial` / `animate` / `exit` / `transition`
- `initial`: 애니메이션 시작 전 초기 상태
- `animate`: 마운트된 상태에서 도달할 목표 상태
- `exit`: `AnimatePresence`와 함께 언마운트될 때의 상태
- `transition`: 타이밍/물리 설정 (`duration`, `ease`, `type`, `stiffness`, `damping` 등)

### Easing vs Spring (간단 비교)
- Easing: 시간 곡선을 기반으로 예측 가능한 움직임. 일반적인 UI 전환에 적합합니다.
- Spring: 물리 기반 움직임으로 자연스러운 감쇠/반동 표현에 유리합니다.

### Variants vs Direct Props
- Variants는 여러 요소가 동일한 상태 이름(`hidden`, `show`)을 공유하거나 부모-자식 오케스트레이션(`staggerChildren`, `delayChildren`)이 필요할 때 사용합니다.
- Direct props(`initial={{...}}`, `animate={{...}}`)는 단일 요소를 간단한 상태 전환으로 빠르게 제어할 때 적합합니다.

## 데모 매핑
- 버튼 데모(`ButtonTransitionDemo`): direct props 기반 상태 전환 + 상호작용
- 카드 데모(`CardVariantsDemo`): 부모-자식 variants 오케스트레이션
- 모달 데모(`ModalPresenceDemo`): `AnimatePresence` 기반 mount/unmount enter/exit 전환
