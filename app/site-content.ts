export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type TextSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  cta?: Cta;
};

export type ProcessStage = {
  number: string;
  title: string;
  description: string;
};

export type ProjectSummary = {
  title: string;
  summary: string;
  status: string;
};

export type ClientStory = {
  title: string;
  narrative: string;
  quote: string;
  status: string;
};

export type JournalArticle = {
  category: string;
  title: string;
  deck: string;
  href: string;
  readingTime: string;
};

export type TemplateSection = {
  id: string;
  title: string;
  body: string;
  cta?: Cta;
};

export type TemplatePageContent = {
  title: string;
  eyebrow: string;
  objective: string;
  cta?: Cta;
  sections: TemplateSection[];
};

export const site = {
  name: "EuroHome Furniture",
  tagline: "Modern furniture. Thoughtful rooms. Better living.",
  region: "Greater Philadelphia region",
  logo: "/eurohome-logo.png",
  heroImage: "/eurohome-editorial-interior.webp",
  nav: [
    { label: "Home", href: "/" },
    { label: "Philosophy", href: "/our-philosophy" },
    { label: "Services", href: "/design-services" },
    { label: "Process", href: "/our-process" },
    { label: "Projects", href: "/projects" },
    { label: "Story", href: "/our-story" },
    { label: "Journal", href: "/journal" },
  ] satisfies NavigationItem[],
  primaryCta: { label: "Start a Project", href: "/begin-your-project" },
};

export const homeContent = {
  hero: {
    eyebrow: "EUROHOME FURNITURE",
    title: "Better Home Experiences™",
    deck: "Furniture and interiors designed around real life.",
    body: [
      "We help your home feel more beautiful, useful, and personal with thoughtful furniture, planning, and design guidance.",
    ],
    primaryCta: { label: "Start a Project", href: "/begin-your-project" },
    secondaryCta: { label: "View Projects", href: "/projects" },
  },
  purpose: {
    id: "better-home-experiences",
    eyebrow: "OUR PURPOSE",
    title: "Rooms That Work Beautifully",
    body: [
      "A great room is not just styled. It supports how you gather, rest, move, work, and live every day.",
    ],
    cta: { label: "Our Philosophy", href: "/our-philosophy" },
  } satisfies TextSection,
  designedAroundYou: {
    id: "designed-around-you",
    eyebrow: "DESIGNED AROUND YOU",
    title: "We Start by Listening",
    body: [
      "Your routines, taste, space, and goals guide the plan. The result should feel elevated, comfortable, and unmistakably yours.",
    ],
    cta: { label: "See the Process", href: "/our-process" },
  } satisfies TextSection,
  experience: {
    id: "design-experience",
    eyebrow: "OUR PROCESS",
    title: "A Clear Path From Idea to Home",
    body: [
      "We make the process easier with clear steps, curated choices, visuals, ordering support, and installation guidance.",
    ],
    cta: { label: "Explore the Process", href: "/our-process" },
  } satisfies TextSection,
  featuredProjects: {
    id: "featured-projects",
    eyebrow: "PROJECTS",
    title: "Homes Designed to Be Lived In",
    body: [
      "Project stories show how furniture, layout, lighting, and materials come together to support everyday life.",
    ],
    cta: { label: "View Projects", href: "/projects" },
  } satisfies TextSection,
  confidence: {
    id: "design-confidence",
    eyebrow: "DESIGN CONFIDENCE™",
    title: "See It Before You Decide",
    body: [
      "Plans, materials, and 3D visualization help you understand the whole room before major decisions are made.",
    ],
    cta: { label: "How We Plan", href: "/our-process" },
  } satisfies TextSection,
  stories: {
    id: "client-stories",
    eyebrow: "CLIENT STORIES",
    title: "What the Experience Feels Like",
    body: [
      "Clients should feel heard, guided, and confident from the first conversation to the finished room.",
    ],
    cta: { label: "Start a Project", href: "/begin-your-project" },
  } satisfies TextSection,
  journal: {
    id: "design-journal",
    eyebrow: "JOURNAL",
    title: "Ideas for Living Better at Home",
    body: [
      "Short design notes on planning, furniture, visualization, and making rooms feel more personal.",
    ],
    cta: { label: "Read the Journal", href: "/journal" },
  } satisfies TextSection,
  invitation: {
    id: "begin",
    eyebrow: "BEGIN",
    title: "Start With a Conversation",
    body: [
      "You do not need every answer yet. Tell us what is not working, what you love, and what you want your home to make possible.",
    ],
    cta: { label: "Start a Project", href: "/begin-your-project" },
  } satisfies TextSection,
};

export const homeProcessStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    description: "We learn how you live and what the room needs to do.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We shape the layout, priorities, and design direction.",
  },
  {
    number: "03",
    title: "Visualize",
    description: "You see scale, flow, materials, and key choices clearly.",
  },
  {
    number: "04",
    title: "Refine",
    description: "We adjust the plan until the pieces feel right together.",
  },
  {
    number: "05",
    title: "Implement",
    description: "We support ordering, delivery, and installation details.",
  },
  {
    number: "06",
    title: "Enjoy",
    description: "The finished space becomes part of everyday life.",
  },
];

export const featuredProjects: ProjectSummary[] = [
  {
    title: "Gathering Room",
    status: "Sample",
    summary: "A living space planned for comfort, connection, and easy hosting.",
  },
  {
    title: "Whole-Home Refresh",
    status: "Sample",
    summary: "Furniture and finishes tied together for a calmer, more cohesive home.",
  },
  {
    title: "New Build Planning",
    status: "Sample",
    summary: "Early furniture, lighting, and material planning for a connected result.",
  },
];

export const confidencePrinciples = [
  {
    title: "Clear Layouts",
    description: "Understand scale, movement, and room relationships.",
  },
  {
    title: "Curated Choices",
    description: "Fewer, better options with a reason behind each one.",
  },
  {
    title: "Whole-Home Thinking",
    description: "Furniture, lighting, materials, and function considered together.",
  },
];

export const clientStories: ClientStory[] = [
  {
    title: "Ready to Gather",
    status: "Sample",
    narrative:
      "The room became warmer, easier to move through, and more natural for family and friends.",
    quote:
      "The home is beautiful, but the best part is how much better it works.",
  },
  {
    title: "A Clear New Direction",
    status: "Sample",
    narrative:
      "The design pulled furniture, materials, lighting, and layout into one calm plan.",
    quote: "We understood the choices and felt confident moving forward.",
  },
  {
    title: "Connected From Room to Room",
    status: "Sample",
    narrative:
      "Planning early helped the whole home feel cohesive instead of pieced together.",
    quote: "We could see the whole home before we were standing inside it.",
  },
];

export const journalArticles: JournalArticle[] = [
  {
    category: "PHILOSOPHY",
    title: "Better Home Experiences™",
    deck: "Why a successful room starts with the life it should support.",
    href: "/journal#better-home-experiences",
    readingTime: "3 min read",
  },
  {
    category: "PLANNING",
    title: "Designing Around Daily Life",
    deck: "How routines, movement, comfort, and future needs shape better rooms.",
    href: "/journal#daily-life",
    readingTime: "4 min read",
  },
  {
    category: "VISUALIZATION",
    title: "Why Visualization Helps",
    deck: "See proportion, flow, and choices before committing.",
    href: "/journal#visualization",
    readingTime: "4 min read",
  },
];

export const philosophySections: TextSection[] = [
  {
    id: "hero",
    eyebrow: "PHILOSOPHY",
    title: "A Home Should Make Everyday Living Better.",
    body: [
      "We use furniture, planning, and design to create rooms that feel beautiful and work naturally.",
    ],
    cta: { label: "Start a Project", href: "/begin-your-project" },
  },
  {
    id: "why-we-exist",
    eyebrow: "WHY WE EXIST",
    title: "Better Design Starts With Better Understanding",
    body: ["We listen first, then design around the life already happening at home."],
  },
  {
    id: "better-home-experiences",
    eyebrow: "BETTER HOME EXPERIENCES™",
    title: "The Goal Is How the Home Feels to Live In",
    body: ["Beauty matters most when it also creates comfort, ease, and connection."],
  },
  {
    id: "designed-around-you",
    eyebrow: "DESIGNED AROUND YOU",
    title: "Your Home Should Still Feel Like Yours",
    body: ["We bring guidance without imposing a one-size-fits-all look."],
    cta: { label: "Start a Project", href: "/begin-your-project" },
  },
  {
    id: "intentional-design",
    eyebrow: "INTENTIONAL DESIGN",
    title: "Every Choice Has a Purpose",
    body: ["Furniture, layout, lighting, and materials should support one clear plan."],
  },
  {
    id: "optimized-spaces",
    eyebrow: "OPTIMIZED SPACES",
    title: "Make Every Room Work Harder",
    body: ["Good planning helps one space support many meaningful moments."],
  },
  {
    id: "modern-with-warmth",
    eyebrow: "MODERN WITH WARMTH",
    title: "Modern Can Still Feel Warm",
    body: ["Clean lines, rich materials, and comfort can live in the same room."],
    cta: { label: "View Projects", href: "/projects" },
  },
  {
    id: "design-confidence",
    eyebrow: "DESIGN CONFIDENCE™",
    title: "Confidence Comes From Clarity",
    body: ["Plans and visuals make decisions easier to understand before you commit."],
    cta: { label: "See the Process", href: "/our-process" },
  },
  {
    id: "our-promise",
    eyebrow: "OUR PROMISE",
    title: "We Design for the Life You Will Live There",
    body: ["The finished home should feel considered, personal, and easy to enjoy."],
  },
  {
    id: "closing-invitation",
    eyebrow: "BEGIN",
    title: "Start With a Conversation",
    body: ["Tell us what you want your home to make possible."],
    cta: { label: "Start a Project", href: "/begin-your-project" },
  },
];

export const templatePages = {
  designServices: {
    title: "Design Services",
    eyebrow: "SERVICES",
    objective: "Furniture, room planning, and interiors for homes that need more ease and cohesion.",
    cta: { label: "Start a Project", href: "/begin-your-project" },
    sections: [
      {
        id: "whole-home-design",
        title: "Whole Home Design",
        body: "A connected plan for furniture, rooms, and flow.",
        cta: { label: "Discuss Your Home", href: "/begin-your-project" },
      },
      {
        id: "new-construction",
        title: "New Construction",
        body: "Early selections and furniture planning before decisions stack up.",
      },
      {
        id: "renovation-and-refresh",
        title: "Renovation and Refresh",
        body: "Layout, furnishings, lighting, finishes, and implementation support.",
      },
      {
        id: "living-dining-and-bedroom",
        title: "Living, Dining and Bedroom",
        body: "Focused help for the rooms you use most.",
        cta: { label: "View Projects", href: "/projects" },
      },
      {
        id: "custom-furniture",
        title: "European Furniture",
        body: "Custom pieces and collections specified for fit, comfort, and scale.",
      },
      {
        id: "3d-visualization",
        title: "3D Visualization",
        body: "See the room before you make the big decisions.",
        cta: { label: "See the Process", href: "/our-process" },
      },
    ],
  } satisfies TemplatePageContent,
  process: {
    title: "Our Process",
    eyebrow: "PROCESS",
    objective: "Simple steps from first conversation to finished room.",
    cta: { label: "Start a Project", href: "/begin-your-project" },
    sections: [
      { id: "listen-and-discover", title: "1. Listen", body: "We learn what needs to change." },
      { id: "define-the-vision", title: "2. Define", body: "We set goals, scope, and direction." },
      { id: "plan-and-design", title: "3. Design", body: "We plan layout, furniture, and finishes." },
      { id: "visualize", title: "4. Visualize", body: "You see the plan clearly." },
      { id: "refine-and-approve", title: "5. Refine", body: "We adjust and approve the details." },
      { id: "coordinate-and-implement", title: "6. Coordinate", body: "We support ordering, delivery, and install." },
      { id: "complete-and-support", title: "7. Enjoy", body: "The room is ready for real life." },
    ],
  } satisfies TemplatePageContent,
  projects: {
    title: "Projects",
    eyebrow: "PROJECTS",
    objective: "A closer look at rooms planned for comfort, beauty, and daily use.",
    cta: { label: "Start a Project", href: "/begin-your-project" },
    sections: [
      {
        id: "project-grid",
        title: "Project Gallery",
        body: "Sample project cards until finished client stories are added.",
      },
      {
        id: "project-detail-template",
        title: "Project Story Format",
        body: "Each future project can show the goal, plan, decisions, and result.",
      },
    ],
  } satisfies TemplatePageContent,
  story: {
    title: "Our Story",
    eyebrow: "STORY",
    objective: "EuroHome Furniture brings warm modern design and practical guidance together.",
    cta: { label: "Start a Project", href: "/begin-your-project" },
    sections: [
      { id: "why-eurohome", title: "Why EuroHome", body: "Furniture and design guidance, grounded in how people live." },
      { id: "how-we-work", title: "How We Work", body: "We listen, edit, explain, and guide." },
      { id: "european-design-local-guidance", title: "European Design, Local Guidance", body: "Modern collections with local project support." },
      { id: "leadership-and-team", title: "Team", body: "Approved team bios and portraits can be added here." },
      { id: "closing-invitation", title: "Let’s Talk", body: "The first step is a useful conversation." },
    ],
  } satisfies TemplatePageContent,
  journal: {
    title: "Journal",
    eyebrow: "JOURNAL",
    objective: "Short ideas for choosing, planning, and living better at home.",
    cta: { label: "Explore Articles", href: "#articles" },
    sections: [
      {
        id: "articles",
        title: "Articles",
        body: "Planning, furniture, visualization, and room ideas.",
      },
      {
        id: "article-template",
        title: "Article Format",
        body: "Future articles can include images, related links, and a project CTA.",
      },
    ],
  } satisfies TemplatePageContent,
  faq: {
    title: "Frequently Asked Questions",
    eyebrow: "FAQ",
    objective: "Quick answers before you start a project.",
    cta: { label: "Start a Project", href: "/begin-your-project" },
    sections: [
      { id: "design-process", title: "Process", body: "How the project moves from idea to finished space." },
      { id: "scope-and-services", title: "Services", body: "Whole-home, room-focused, renovation, and furniture planning." },
      { id: "investment-and-ordering", title: "Investment", body: "Estimated ranges, selections, ordering, and approvals." },
      { id: "timing-delivery-installation", title: "Timing", body: "Scheduling, delivery, installation, and final details." },
      { id: "furniture-materials-care", title: "Materials and Care", body: "Furniture, finishes, maintenance, and long-term fit." },
    ],
  } satisfies TemplatePageContent,
};
