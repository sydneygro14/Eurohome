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
  name: "EuroHome Design",
  tagline: "Intentional Design. Optimized Spaces. Better Home Experiences™.",
  region: "Greater Philadelphia region",
  heroImage: "/eurohome-editorial-interior.webp",
  imageStatus: "Temporary concept imagery",
  nav: [
    { label: "Home", href: "/" },
    { label: "Our Philosophy", href: "/our-philosophy" },
    { label: "Design Services", href: "/design-services" },
    { label: "Our Process", href: "/our-process" },
    { label: "Featured Projects", href: "/projects" },
    { label: "Our Story", href: "/our-story" },
    { label: "Design Journal", href: "/journal" },
  ] satisfies NavigationItem[],
  primaryCta: { label: "Begin Your Project", href: "/begin-your-project" },
};

export const homeContent = {
  hero: {
    eyebrow: "EUROHOME DESIGN",
    title: "Better Home Experiences™",
    deck: "We design how life is experienced at home.",
    body: [
      "Your home should support the way you live, reflect what matters to you, and make everyday life feel more considered. Every EuroHome Design project begins by understanding your routines, priorities, aspirations, and the experiences you want your home to create. From there, we bring intention to every decision—so the final space is as functional as it is beautiful, and unmistakably yours.",
    ],
    primaryCta: { label: "Begin Your Project", href: "/begin-your-project" },
    secondaryCta: { label: "Explore Our Work", href: "/projects" },
  },
  purpose: {
    id: "better-home-experiences",
    eyebrow: "OUR PURPOSE",
    title: "Design That Improves Everyday Living",
    body: [
      "Design influences how we begin each morning, gather with family, welcome friends, work, rest, and recharge. Beautiful interiors matter—but beauty alone is not the objective.",
      "We consider how every space will be experienced: how people move through it, how it supports daily routines, where comfort is created, how conversation happens, and how the home adapts over time. Every recommendation is guided by one essential question: Will this create a Better Home Experience™?",
      "When the answer is yes, aesthetics and function no longer compete. They work together to create a home that feels elevated, intuitive, and deeply personal.",
    ],
    cta: { label: "Discover Our Philosophy", href: "/our-philosophy" },
  } satisfies TextSection,
  designedAroundYou: {
    id: "designed-around-you",
    eyebrow: "DESIGNED AROUND YOU",
    title: "Every Project Begins With Listening",
    body: [
      "No two people live in exactly the same way. Your routines, relationships, priorities, collections, habits, and aspirations all shape what your home needs to become.",
      "That is why we do not begin with a predetermined style or a room full of products. We begin by listening. We ask thoughtful questions, observe how spaces are used, identify what is not working, and understand how you want the finished home to feel.",
      "Our role is to translate that understanding into a clear design direction—one that brings greater beauty, function, comfort, and continuity to your home without losing what makes it personal. The result is not someone else’s signature aesthetic. It is your life, thoughtfully designed.",
    ],
    cta: { label: "Learn About Our Process", href: "/our-process" },
  } satisfies TextSection,
  experience: {
    id: "design-experience",
    eyebrow: "THE EUROHOME DESIGN EXPERIENCE™",
    title: "A Thoughtful Path From Possibility to Home",
    body: [
      "Exceptional results are rarely created by isolated choices. They emerge from a process that connects understanding, planning, visualization, refinement, and implementation.",
      "The EuroHome Design Experience™ gives every project a clear path forward while preserving the collaboration and flexibility that thoughtful design requires. Each stage builds confidence, reduces uncertainty, and keeps the final experience at the center of the work.",
    ],
    cta: { label: "Explore the Design Experience", href: "/our-process" },
  } satisfies TextSection,
  featuredProjects: {
    id: "featured-projects",
    eyebrow: "FEATURED PROJECTS",
    title: "Homes Designed for the Lives Within Them",
    body: [
      "A finished room can be beautiful in a photograph. A successful home does more. It resolves the way spaces connect, supports the people who live there, and creates a sense of ease that is felt every day.",
      "Our project stories look beyond the final image. They reveal what the clients wanted, what the space required, how decisions were made, and the Better Home Experience™ that emerged.",
    ],
    cta: { label: "Explore Our Work", href: "/projects" },
  } satisfies TextSection,
  confidence: {
    id: "design-confidence",
    eyebrow: "DESIGN CONFIDENCE™",
    title: "See the Possibility. Understand the Plan. Decide With Confidence.",
    body: [
      "Design decisions are easier when they can be understood in relationship to the whole. A sofa is not only a sofa. It affects circulation, proportion, conversation, comfort, lighting, sightlines, and the feeling of the room around it.",
      "We use thoughtful planning, curated options, material relationships, scaled layouts, and three-dimensional visualization to make those connections visible. You can see how ideas work together, understand why recommendations are being made, and refine the design before the most consequential decisions are finalized.",
      "The goal is not to eliminate every choice. It is to replace uncertainty with a clear design logic—so decisions feel informed, connected, and right for the experience you want to create.",
    ],
    cta: { label: "See How We Plan Together", href: "/our-process" },
  } satisfies TextSection,
  stories: {
    id: "client-stories",
    eyebrow: "CLIENT STORIES",
    title: "The Experience, In Their Words",
    body: [
      "The most meaningful measure of a project is not only how the home looks when it is complete. It is how well the client felt understood, how confidently decisions were made, and how the finished spaces changed everyday life.",
      "The following editorial placeholders establish the approved story format. They must be replaced with verified client narratives and approved quotations before public launch.",
    ],
    cta: { label: "Begin Your Project", href: "/begin-your-project" },
  } satisfies TextSection,
  journal: {
    id: "design-journal",
    eyebrow: "DESIGN JOURNAL",
    title: "Ideas for Living Better at Home",
    body: [
      "Thoughtful design begins with better questions. The Design Journal explores how spaces influence everyday life, how planning creates confidence, and how aesthetic and functional decisions can work together with greater intention.",
      "Each article is written to help homeowners see their spaces more clearly—whether they are preparing for a full project, considering one important room, or simply learning what better design can make possible.",
    ],
    cta: { label: "Read the Journal", href: "/journal" },
  } satisfies TextSection,
  invitation: {
    id: "begin",
    eyebrow: "BEGIN",
    title: "Every Better Home Experience Begins With a Conversation",
    body: [
      "You do not need to have every decision made before you begin. You only need a sense that your home could feel, function, or support your life better than it does today.",
      "We will take the time to understand your goals, answer your questions, and explore what is possible. Whether you are planning one important room, a renovation, new construction, or a more complete home experience, the first step is a thoughtful conversation.",
    ],
    cta: { label: "Begin Your Project", href: "/begin-your-project" },
  } satisfies TextSection,
};

export const homeProcessStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn how you live, what matters to you, what is not working, and what you want the home to make possible.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define priorities, spatial relationships, functional requirements, design direction, and the decisions needed to create continuity.",
  },
  {
    number: "03",
    title: "Visualize",
    description:
      "We make ideas easier to understand through layouts, materials, imagery, and three-dimensional visualization.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We evaluate the design together, resolve details, and strengthen the relationship between aesthetics, function, and investment.",
  },
  {
    number: "05",
    title: "Implement",
    description:
      "We coordinate specifications, ordering, delivery, installation, and the practical work required to bring the design into the home.",
  },
  {
    number: "06",
    title: "Enjoy",
    description:
      "The project becomes part of everyday life—a home designed not only to be seen, but to be experienced.",
  },
];

export const featuredProjects: ProjectSummary[] = [
  {
    title: "A Modern Living Environment",
    status: "Editorial sample",
    summary:
      "A modern living environment shaped around gathering, comfort, and a more natural connection between everyday life and entertaining.",
  },
  {
    title: "A Layered Whole-Home Composition",
    status: "Editorial sample",
    summary:
      "A layered whole-home composition that balances architectural clarity, warmth, function, and a strong sense of personal identity.",
  },
  {
    title: "A New-Construction Design",
    status: "Editorial sample",
    summary:
      "A new-construction design planned early enough to create continuity across furniture, lighting, materials, storage, and the way each room is experienced.",
  },
];

export const confidencePrinciples = [
  {
    title: "Clarity Before Commitment",
    description:
      "Spatial plans and visualization make scale, proportion, circulation, and relationships easier to evaluate.",
  },
  {
    title: "Guidance Without Pressure",
    description:
      "Recommendations are explained in context so the client can make informed decisions rather than react to isolated options.",
  },
  {
    title: "Continuity Across the Home",
    description:
      "Decisions are considered together to create cohesion across rooms, functions, materials, lighting, and everyday use.",
  },
];

export const clientStories: ClientStory[] = [
  {
    title: "A Home Ready to Gather",
    status: "Placeholder story",
    narrative:
      "The clients wanted their main living spaces to feel more connected and welcoming without losing the calm, refined character they valued. Through careful listening and spatial planning, the design created clearer circulation, more comfortable conversation, and a stronger relationship between the living and dining areas. Visualization helped the clients understand scale and proportion before final selections were made. The result was a home that felt easier to use every day and more natural when family and friends came together.",
    quote:
      "We felt heard throughout the process. The final home is beautiful, but what surprised us most is how much better it works for the way we actually live.",
  },
  {
    title: "Confidence in a New Direction",
    status: "Placeholder story",
    narrative:
      "The clients knew their home no longer reflected them, but they were unsure how to move forward without making disconnected or expensive mistakes. EuroHome organized the decisions into a clear design direction, showing how materials, furnishings, lighting, and layout could work together. Instead of reacting to individual products, the clients could evaluate a complete experience. The finished rooms felt fresh, warm, and personal—and the process gave them confidence at every stage.",
    quote:
      "We never felt pushed into a decision. We understood the reasoning, could see the plan, and felt confident that each choice belonged.",
  },
  {
    title: "A Whole Home With Continuity",
    status: "Placeholder story",
    narrative:
      "A new-construction home offered possibility, but also hundreds of decisions that could easily become fragmented. Beginning early allowed the design team to consider the home as one connected experience: how rooms would flow, where storage was needed, how lighting would support daily use, and how furniture, materials, and architectural elements would relate. The result was a home with continuity from room to room and a sense of ease that could not have been created through isolated selections.",
    quote:
      "EuroHome helped us see the whole home before we were standing inside it. That clarity changed the experience of building and gave us a result that feels completely cohesive.",
  },
];

export const journalArticles: JournalArticle[] = [
  {
    category: "PHILOSOPHY",
    title: "Creating Better Home Experiences™",
    deck: "Why the most successful interiors begin with the life a home should support—not with a predetermined style or collection of products.",
    href: "/journal#creating-better-home-experiences",
    readingTime: "4 min read",
  },
  {
    category: "PLANNING",
    title: "Designing Around the Way You Live",
    deck: "How routines, relationships, movement, comfort, and future needs become the foundation of a more personal design direction.",
    href: "/journal#designing-around-the-way-you-live",
    readingTime: "5 min read",
  },
  {
    category: "VISUALIZATION",
    title: "Why Visualization Changes Everything",
    deck: "How plans and three-dimensional views reveal relationships, reduce uncertainty, and make complex design decisions easier to understand.",
    href: "/journal#why-visualization-changes-everything",
    readingTime: "6 min read",
  },
];

export const philosophySections: TextSection[] = [
  {
    id: "hero",
    eyebrow: "OUR PHILOSOPHY",
    title: "Every Home Has the Potential to Improve Everyday Living.",
    body: [
      "Our philosophy is built on intentional design, thoughtful planning, and creating Better Home Experiences™.",
    ],
    cta: { label: "Let’s Start the Conversation", href: "/begin-your-project" },
  },
  {
    id: "why-we-exist",
    eyebrow: "WHY WE EXIST",
    title: "We Believe Great Design Begins With a Better Understanding of Life at Home.",
    body: [
      "We exist to understand how people live and transform that understanding into homes that enrich everyday life.",
    ],
  },
  {
    id: "better-home-experiences",
    eyebrow: "BETTER HOME EXPERIENCES™",
    title: "Better Home Experiences™ Are the Purpose Behind Every Design Decision.",
    body: [
      "Beautiful homes should support meaningful experiences, comfort, connection, and everyday living.",
    ],
  },
  {
    id: "designed-around-you",
    eyebrow: "DESIGNED AROUND YOU",
    title: "Every Exceptional Home Begins With Understanding the People Who Live There.",
    body: ["Every project begins with listening before designing."],
    cta: { label: "Begin Your Project", href: "/begin-your-project" },
  },
  {
    id: "intentional-design",
    eyebrow: "INTENTIONAL DESIGN",
    title: "Great Design Is the Result of Intentional Decisions, Not Accidental Ones.",
    body: [
      "Every decision contributes to a cohesive home and a better living experience.",
    ],
  },
  {
    id: "optimized-spaces",
    eyebrow: "OPTIMIZED SPACES",
    title: "Every Home Has the Potential to Work Better.",
    body: [
      "Spaces should create multiple meaningful experiences and naturally adapt to the people who use them.",
    ],
  },
  {
    id: "modern-with-warmth",
    eyebrow: "MODERN WITH WARMTH",
    title: "Contemporary Design Should Feel as Good as It Looks.",
    body: ["Modern environments should be welcoming, timeless, and authentic."],
    cta: { label: "Explore Our Work", href: "/projects" },
  },
  {
    id: "design-confidence",
    eyebrow: "DESIGN CONFIDENCE™",
    title: "Confidence Grows When Every Decision Is Guided by Understanding.",
    body: ["Confidence is built through collaboration, visualization, and clarity."],
    cta: { label: "Explore Our Process", href: "/our-process" },
  },
  {
    id: "our-promise",
    eyebrow: "OUR PROMISE",
    title: "Our Commitment Is to the Life You Will Live in Your Home.",
    body: [
      "We listen, guide, and design with purpose to create Better Home Experiences™.",
    ],
  },
  {
    id: "closing-invitation",
    eyebrow: "BEGIN",
    title: "Every Better Home Experience™ Begins With a Conversation.",
    body: [
      "Every journey begins by listening. We look forward to helping you create a home designed around your life.",
    ],
    cta: { label: "Begin Your Project", href: "/begin-your-project" },
  },
];

export const templatePages = {
  designServices: {
    title: "Design Services",
    eyebrow: "DESIGN SERVICES",
    objective: "Define what EuroHome designs and help visitors identify fit.",
    cta: { label: "Begin Your Project", href: "/begin-your-project" },
    sections: [
      {
        id: "whole-home-design",
        title: "Whole Home Design",
        body: "Scope, planning and continuity.",
        cta: { label: "Discuss Your Home", href: "/begin-your-project" },
      },
      {
        id: "new-construction",
        title: "New Construction",
        body: "Early planning and coordinated selections.",
        cta: { label: "Begin Your Project", href: "/begin-your-project" },
      },
      {
        id: "renovation-and-refresh",
        title: "Renovation and Refresh",
        body: "Furniture, layout, lighting, finishes and implementation.",
        cta: {
          label: "Let’s Start the Conversation",
          href: "/begin-your-project",
        },
      },
      {
        id: "living-dining-and-bedroom",
        title: "Living, Dining and Bedroom",
        body: "Room-focused design support.",
        cta: { label: "Explore Our Work", href: "/projects" },
      },
      {
        id: "custom-furniture",
        title: "Custom Furniture and European Collections",
        body: "Access, specification and fit—not catalog selling.",
        cta: { label: "Begin Your Project", href: "/begin-your-project" },
      },
      {
        id: "3d-visualization",
        title: "3D Visualization",
        body: "Design Confidence™ through visualization.",
        cta: { label: "Explore Our Process", href: "/our-process" },
      },
    ],
  } satisfies TemplatePageContent,
  process: {
    title: "Our Process",
    eyebrow: "OUR PROCESS",
    objective:
      "Explain the relationship-first process from discovery through installation.",
    cta: { label: "Begin Your Project", href: "/begin-your-project" },
    sections: [
      {
        id: "listen-and-discover",
        title: "1. Listen and Discover",
        body: "Lifestyle, priorities, existing space and desired experience.",
      },
      {
        id: "define-the-vision",
        title: "2. Define the Vision",
        body: "Direction, goals, scope and investment alignment.",
      },
      {
        id: "plan-and-design",
        title: "3. Plan and Design",
        body: "Layouts, selections and specifications.",
      },
      { id: "visualize", title: "4. Visualize", body: "3D views and decision support." },
      {
        id: "refine-and-approve",
        title: "5. Refine and Approve",
        body: "Selection detail.",
      },
      {
        id: "coordinate-and-implement",
        title: "6. Coordinate and Implement",
        body: "Ordering, logistics, delivery and installation.",
      },
      {
        id: "complete-and-support",
        title: "7. Complete and Support",
        body: "Final details and ongoing relationship.",
        cta: { label: "Begin Your Project", href: "/begin-your-project" },
      },
    ],
  } satisfies TemplatePageContent,
  projects: {
    title: "Featured Projects",
    eyebrow: "FEATURED PROJECTS",
    objective:
      "Use project storytelling to demonstrate expertise, decisions and client outcomes.",
    cta: { label: "Begin Your Project", href: "/begin-your-project" },
    sections: [
      {
        id: "project-grid",
        title: "Project Grid",
        body: "Two real projects plus approved sample projects.",
        cta: { label: "Open Project", href: "#project-grid" },
      },
      {
        id: "project-detail-template",
        title: "Project Detail Template",
        body: "Overview, client vision, challenge, approach, highlights, result and Better Home Experiences™ outcome.",
        cta: { label: "Begin a Similar Project", href: "/begin-your-project" },
      },
    ],
  } satisfies TemplatePageContent,
  story: {
    title: "Our Story",
    eyebrow: "OUR STORY",
    objective:
      "Build trust through the company’s philosophy, leadership and consultative approach.",
    cta: { label: "Meet the Team", href: "#leadership-and-team" },
    sections: [
      {
        id: "why-eurohome",
        title: "Why EuroHome",
        body: "Relationship-first origin and difference.",
      },
      {
        id: "how-we-work",
        title: "How We Work",
        body: "Listening, education, quality and guidance.",
        cta: { label: "Explore Our Process", href: "/our-process" },
      },
      {
        id: "european-design-local-guidance",
        title: "European Design, Local Guidance",
        body: "International product access with Greater Philadelphia service.",
        cta: { label: "Explore Our Work", href: "/projects" },
      },
      {
        id: "leadership-and-team",
        title: "Leadership and Team",
        body: "Approved bios and portraits.",
        cta: { label: "Meet the Team", href: "#leadership-and-team" },
      },
      {
        id: "closing-invitation",
        title: "Closing Invitation",
        body: "Personal invitation.",
        cta: {
          label: "Let’s Start the Conversation",
          href: "/begin-your-project",
        },
      },
    ],
  } satisfies TemplatePageContent,
  journal: {
    title: "Design Journal",
    eyebrow: "DESIGN JOURNAL",
    objective:
      "Launch with educational content that supports clients and search visibility.",
    cta: { label: "Explore Articles", href: "#articles" },
    sections: [
      {
        id: "articles",
        title: "Article Grid",
        body: "Launch articles with category, title, excerpt and image.",
        cta: { label: "Read Article", href: "#articles" },
      },
      {
        id: "article-template",
        title: "Article Template",
        body: "Title, introduction, body, related links, CTA and metadata.",
        cta: { label: "Begin Your Project", href: "/begin-your-project" },
      },
    ],
  } satisfies TemplatePageContent,
  faq: {
    title: "Frequently Asked Questions",
    eyebrow: "FAQ",
    objective:
      "Answer high-intent questions and reduce uncertainty before inquiry.",
    cta: { label: "Begin Your Project", href: "/begin-your-project" },
    sections: [
      {
        id: "design-process",
        title: "Design Process",
        body: "Questions about discovery, planning, visualization, refinement and implementation.",
      },
      {
        id: "scope-and-services",
        title: "Scope and Services",
        body: "Questions about whole-home design, room-focused design, renovation, new construction and furniture planning.",
      },
      {
        id: "investment-and-ordering",
        title: "Investment and Ordering",
        body: "Questions about estimated investment ranges, selections, ordering and approval timing.",
      },
      {
        id: "timing-delivery-installation",
        title: "Timing, Delivery and Installation",
        body: "Questions about schedules, logistics, delivery and installation.",
      },
      {
        id: "furniture-materials-care",
        title: "Furniture, Materials and Care",
        body: "Questions about European collections, material specifications, maintenance and fit.",
      },
    ],
  } satisfies TemplatePageContent,
};
