export const projectsData = [
  {
    id: 1,
    heading: "Portfolio",
    desc: "A multi-page developer portfolio redesigned with richer cards, dynamic routing, theme switching, contact flows, and a more polished front-end presentation.",
    category: "Personal brand",
    badge: "Featured",
    duration: "9 routes",
    highlight: "Visual redesign",
    visualLabel: "Portfolio UI",
    features: [
      "Features",
      "Seamless client-side navigation across 9 pages with dynamic routing.",
      "Real-time GitHub stats fetched from multiple APIs.",
      "Serverless contact form with EmailJS and toast notifications.",
      "Embedded music player with play/pause toggle.",
      "Live clock with Lottie animation in the navbar.",
      "Interactive hover animations on cards and buttons.",
    ],
    challenges: [
      "Challenges",
      "Handling static asset paths that broke in Vite production builds.",
      "Managing async API state with useEffect and Promises.",
      "Preventing content overflow in fixed-size stat cards.",
      "Configuring nested vs standalone routes in React Router.",
      "Maintaining a consistent design system across all pages.",
    ],
    learning: [
      "Learnings",
      "Deepened knowledge of Vite asset bundling and module imports.",
      "Gained experience with React hooks and component lifecycle.",
      "Enhanced understanding of Promise chaining and error handling.",
      "Improved ability to build responsive layouts with CSS Flexbox.",
      "Learned dynamic routing with useParams in React Router v7.",
    ],
    feedback: [],

    techstack: [
      {
        id: 1,
        techName: "javascript",
      },
      {
        id: 2,
        techName: "CSS",
      },
      {
        id: 3,
        techName: "ReactJS",
      },
      {
        id: 4,
        techName: "emailJs",
      },
    ],
    links: {
      live: "https://my-portfolio-theta-gules-10.vercel.app/",
      github: "https://github.com/mkr45/My-Portfolio",
    },
  },
];
