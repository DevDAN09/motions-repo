export type Locale = 'ko' | 'en'

export const messages = {
  ko: {
    app: {
      brand: {
        subtitle: '모션 학습 운영',
        title: '이터레이션 컨트롤 센터',
      },
      nav: {
        dashboard: '계획 대시보드',
        playground: '모션 플레이그라운드',
        week1: '1주차 실습',
      },
      language: '언어',
    },
    dashboard: {
      planningView: '플래닝 뷰',
      title: 'Motion API 학습 Iteration 관리',
      description: '로드맵 이슈를 기준으로 주차별 작업을 추적하고 데모 구현 상태를 관리합니다.',
      openRoadmap: '로드맵 이슈 열기',
      metric: {
        totalIterations: '전체 이터레이션',
        completed: '완료',
        progress: '진행률',
      },
      viewIssue: '이슈 보기',
      status: {
        todo: '할 일',
        inProgress: '진행 중',
        done: '완료',
      },
      iterations: {
        '2': {
          title: 'Motion 기초 + AnimatePresence',
          focus: '핵심 props, variants, mount/unmount 전환',
          milestone: '1주차',
        },
        '3': {
          title: 'Layout & Shared Layout',
          focus: 'layout, layoutId, LayoutGroup, Reorder',
          milestone: '2주차',
        },
        '4': {
          title: 'Gesture & Interaction',
          focus: 'whileHover/Tap/Focus, drag, swipe dismiss',
          milestone: '3주차',
        },
        '5': {
          title: 'Motion Values & Hooks',
          focus: 'useMotionValue, transform, spring, animate',
          milestone: '4주차',
        },
        '6': {
          title: 'Scroll-linked / Triggered',
          focus: 'useScroll, useInView, progress mapping',
          milestone: '5주차',
        },
        '7': {
          title: '접근성 + 성능 마무리',
          focus: 'reduced motion, 렌더링 비용, 토큰화',
          milestone: '6주차',
        },
      },
    },
    week1: {
      badge: 'Week 1 Lab',
      title: '기초 애니메이션 + AnimatePresence 실습',
      description: 'initial/animate/transition, variants, exit 전환을 한 페이지에서 비교합니다.',
      basic: {
        title: 'Basic Transition',
        description: '한 카드에서 spring/tween 전환 특성을 확인합니다.',
        toggle: '카드 토글',
        caption: 'initial/animate/transition 샘플',
        body: '하나의 인터랙션으로 spring 과 tween 전환 차이를 확인합니다.',
      },
      variants: {
        title: 'Variants Orchestration',
        description: '부모 variants에서 자식 순차(stagger) 진입을 제어합니다.',
        replay: '시퀀스 재생',
        show: '시퀀스 표시',
        items: {
          button: '버튼',
          card: '카드',
          modal: '모달',
        },
      },
      presence: {
        title: 'AnimatePresence Modal',
        description: 'mount/unmount 시 exit 애니메이션 동작을 검증합니다.',
        open: 'Presence 모달 열기',
        heading: 'AnimatePresence Exit',
        body: '이 모달은 unmount 시 exit 애니메이션이 적용되는 동작을 보여줍니다.',
        close: '닫기',
      },
    },
    playground: {
      badge: 'Unified Playground',
      title: '기초 + 제스처 + 레이아웃 통합 페이지',
      description: '기존 test1, gesture, layout 데모를 하나의 관리 페이지로 통합했습니다.',
      sections: {
        basic: {
          title: 'Basic Enter',
          description: '초기 진입 애니메이션 샘플입니다.',
        },
        gesture: {
          title: 'Gesture',
          description: 'hover/tap, free drag, constrained drag를 한 화면에서 확인합니다.',
        },
        layout: {
          title: 'Layout',
          description: 'layout 토글과 shared layout 전환을 함께 테스트합니다.',
        },
      },
    },
  },
  en: {
    app: {
      brand: {
        subtitle: 'Motion Study Ops',
        title: 'Iteration Control Center',
      },
      nav: {
        dashboard: 'Plan Dashboard',
        playground: 'Motion Playground',
        week1: 'Week1 Lab',
      },
      language: 'Language',
    },
    dashboard: {
      planningView: 'Planning View',
      title: 'Motion API Study Iteration Management',
      description: 'Track weekly tasks from roadmap issues and manage demo implementation status.',
      openRoadmap: 'Open Roadmap Issue',
      metric: {
        totalIterations: 'Total Iterations',
        completed: 'Completed',
        progress: 'Progress',
      },
      viewIssue: 'View Issue',
      status: {
        todo: 'Todo',
        inProgress: 'In Progress',
        done: 'Done',
      },
      iterations: {
        '2': {
          title: 'Motion Basics + AnimatePresence',
          focus: 'Core props, variants, mount/unmount transition',
          milestone: 'Week 1',
        },
        '3': {
          title: 'Layout & Shared Layout',
          focus: 'layout, layoutId, LayoutGroup, Reorder',
          milestone: 'Week 2',
        },
        '4': {
          title: 'Gesture & Interaction',
          focus: 'whileHover/Tap/Focus, drag, swipe dismiss',
          milestone: 'Week 3',
        },
        '5': {
          title: 'Motion Values & Hooks',
          focus: 'useMotionValue, transform, spring, animate',
          milestone: 'Week 4',
        },
        '6': {
          title: 'Scroll-linked / Triggered',
          focus: 'useScroll, useInView, progress mapping',
          milestone: 'Week 5',
        },
        '7': {
          title: 'Accessibility + Performance Finish',
          focus: 'reduced motion, rendering cost, tokenization',
          milestone: 'Week 6',
        },
      },
    },
    week1: {
      badge: 'Week 1 Lab',
      title: 'Basic Animation + AnimatePresence Practice',
      description: 'Compare initial/animate/transition, variants, and exit transitions on one page.',
      basic: {
        title: 'Basic Transition',
        description: 'Check spring/tween transition behavior in a single card.',
        toggle: 'Toggle Card',
        caption: 'initial/animate/transition sample',
        body: 'Spring and tween differences can be compared through one interaction.',
      },
      variants: {
        title: 'Variants Orchestration',
        description: 'Control staggered child entrance from parent variants.',
        replay: 'Replay Sequence',
        show: 'Show Sequence',
        items: {
          button: 'Button',
          card: 'Card',
          modal: 'Modal',
        },
      },
      presence: {
        title: 'AnimatePresence Modal',
        description: 'Verify exit animation behavior during mount/unmount.',
        open: 'Open Presence Modal',
        heading: 'AnimatePresence Exit',
        body: 'This modal demonstrates how exit animation works on unmount.',
        close: 'Close',
      },
    },
    playground: {
      badge: 'Unified Playground',
      title: 'Combined Page for Basic + Gesture + Layout',
      description: 'Merged existing test1, gesture, and layout demos into one manageable page.',
      sections: {
        basic: {
          title: 'Basic Enter',
          description: 'A simple enter animation sample.',
        },
        gesture: {
          title: 'Gesture',
          description: 'Check hover/tap, free drag, and constrained drag in one view.',
        },
        layout: {
          title: 'Layout',
          description: 'Test layout toggle and shared layout transition together.',
        },
      },
    },
  },
} as const
