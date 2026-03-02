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

---

# Layout & Shared Layout (Iteration 2)

## 추가한 내용
- `layout` 토글 예제를 통해 레이아웃 변경 시 부드러운 보간 동작 확인
- `layoutId` 기반 탭 underline shared transition 유지
- `LayoutGroup`을 적용해 shared layout 컨텍스트를 명시적으로 그룹화
- `Reorder.Group` / `Reorder.Item` 기반 sortable 리스트 데모 추가

## 확인 위치
- 라우트: `/layout`
- 페이지 파일: `src/pages/Layout/LayoutPage.tsx`
- 데모 파일:
  - `src/animations/LayoutAnimation.tsx`
  - `src/animations/SharedLayoutAnimation.tsx`
  - `src/animations/ReorderListDemo.tsx`

## Layout API 사용 가이드 (요약)
- `layout`: 같은 컴포넌트가 위치/크기만 바뀌는 경우 가장 간단한 선택
- `layoutId`: 서로 다른 컴포넌트 사이를 “같은 요소”처럼 이어서 전환하고 싶을 때 사용
- `LayoutGroup`: shared layout(`layoutId`)를 묶어 충돌 없이 전환 맥락을 분리할 때 사용
- `Reorder`: 단순 정렬 변경 UI를 빠르게 만들 때 유리(리스트 상태를 `values`로 관리)

## 주의사항
- `layoutId` 문자열은 같은 그룹 내에서 유일해야 전환이 안정적입니다.
- `Reorder`는 key/value 안정성이 중요하므로 불변 데이터(고유 값)를 권장합니다.
- 과도한 박스 그림자/필터는 체감 성능 저하를 만들 수 있어, 리스트 아이템 스타일은 가볍게 유지하는 것이 좋습니다.
