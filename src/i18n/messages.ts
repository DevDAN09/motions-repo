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
