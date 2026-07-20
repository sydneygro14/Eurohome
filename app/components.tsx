import Link from "next/link";
import { InquiryForm } from "./inquiry-form";
import {
  clientStories,
  confidencePrinciples,
  featuredProjects,
  homeContent,
  homeProcessStages,
  journalArticles,
  philosophySections,
  site,
  templatePages,
  type Cta,
  type TemplatePageContent,
  type TextSection,
} from "./site-content";

function ButtonLink({ cta, variant }: { cta: Cta; variant?: Cta["variant"] }) {
  return (
    <Link className={`button ${variant ?? cta.variant ?? "primary"}`} href={cta.href}>
      {cta.label}
    </Link>
  );
}

function SectionCopy({
  section,
  headingLevel = "h2",
}: {
  section: TextSection;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <div className="sectionCopy">
      <p className="eyebrow">{section.eyebrow}</p>
      <Heading>{section.title}</Heading>
      <div className="bodyCopy">
        {section.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {section.cta ? (
        <div className="ctaRow">
          <ButtonLink cta={section.cta} />
        </div>
      ) : null}
    </div>
  );
}

function VisualPanel({
  label,
  eager = false,
}: {
  label: string;
  eager?: boolean;
}) {
  return (
    <figure className="visualPanel">
      <img
        src={site.heroImage}
        alt="Warm modern living and dining space with layered furniture, natural light and architectural depth."
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
      <figcaption className="srOnly">{label}</figcaption>
    </figure>
  );
}

function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="EuroHome Furniture home">
        <img
          className="brandLogo"
          src={site.logo}
          alt="EuroHome furniture"
          width={310}
          height={112}
        />
      </Link>
      <nav className="desktopNav" aria-label="Primary navigation">
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="headerActions">
        <ButtonLink cta={site.primaryCta} />
        <details className="mobileNav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href={site.primaryCta.href}>{site.primaryCta.label}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="siteFooter" id="site-footer">
      <div>
        <p className="footerBrand">{site.name}</p>
        <p>{site.tagline}</p>
        <p>{site.region}</p>
      </div>
      <nav aria-label="Footer navigation">
        {[...site.nav, { label: "FAQ", href: "/faq" }, site.primaryCta].map(
          (item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <p className="footerFine">
        © 2026 EuroHome Furniture. Privacy · Accessibility.
      </p>
    </footer>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link className="skipLink" href="#main-content">
        Skip to content
      </Link>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="homeHero" aria-labelledby="home-hero-title">
      <img
        className="homeHeroImage"
        src={site.heroImage}
        alt="Warm modern living and dining space composed for gathering, comfort and everyday use."
        fetchPriority="high"
      />
      <div className="homeHeroShade" />
      <div className="homeHeroContent">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="home-hero-title">{hero.title}</h1>
        <p className="heroDeck">{hero.deck}</p>
        {hero.body.map((paragraph) => (
          <p key={paragraph} className="heroBody">
            {paragraph}
          </p>
        ))}
        <div className="ctaRow">
          <ButtonLink cta={hero.primaryCta} />
          <ButtonLink cta={hero.secondaryCta} variant="secondary" />
        </div>
      </div>
    </section>
  );
}

function EditorialSection({
  section,
  reverse = false,
}: {
  section: TextSection;
  reverse?: boolean;
}) {
  return (
    <section className="contentSection" id={section.id}>
      <div className={`sectionInner split ${reverse ? "reverse" : ""}`}>
        <SectionCopy section={section} />
        <VisualPanel label={section.eyebrow} />
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="contentSection muted" id={homeContent.experience.id}>
      <div className="sectionInner">
        <SectionCopy section={homeContent.experience} />
        <ol className="processList">
          {homeProcessStages.map((stage) => (
            <li key={stage.number}>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="contentSection" id={homeContent.featuredProjects.id}>
      <div className="sectionInner">
        <SectionCopy section={homeContent.featuredProjects} />
        <div className="cardGrid" id="project-grid">
          {featuredProjects.map((project) => (
            <article className="projectCard" key={project.title}>
              <VisualPanel label={project.status} />
              <div>
                <p className="statusLabel">{project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConfidenceSection() {
  return (
    <section className="contentSection accent" id={homeContent.confidence.id}>
      <div className="sectionInner split">
        <SectionCopy section={homeContent.confidence} />
        <div className="principleStack">
          {confidencePrinciples.map((principle) => (
            <article key={principle.title} className="principle">
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section className="contentSection muted" id={homeContent.stories.id}>
      <div className="sectionInner">
        <SectionCopy section={homeContent.stories} />
        <div className="storyGrid">
          {clientStories.map((story) => (
            <article className="storyCard" key={story.title}>
              <p className="statusLabel">{story.status}</p>
              <h3>{story.title}</h3>
              <p>{story.narrative}</p>
              <blockquote>“{story.quote}”</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalSection() {
  return (
    <section className="contentSection" id={homeContent.journal.id}>
      <div className="sectionInner">
        <SectionCopy section={homeContent.journal} />
        <div className="articleGrid" id="articles">
          {journalArticles.map((article) => (
            <article className="articleCard" id={article.href.split("#")[1]} key={article.title}>
              <p className="statusLabel">
                {article.category} · {article.readingTime}
              </p>
              <h3>
                <Link href={article.href}>{article.title}</Link>
              </h3>
              <p>{article.deck}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalInvitation() {
  return (
    <section className="finalInvitation" id={homeContent.invitation.id}>
      <img
        src={site.heroImage}
        alt=""
        loading="lazy"
      />
      <div className="finalShade" />
      <div className="finalContent">
        <SectionCopy section={homeContent.invitation} />
        <div className="ctaRow">
          <ButtonLink cta={{ label: "Explore Our Work", href: "/projects" }} variant="secondary" />
        </div>
        <p className="signature">
          EuroHome Furniture
          <span>{site.tagline}</span>
        </p>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HomeHero />
      <EditorialSection section={homeContent.purpose} />
      <EditorialSection section={homeContent.designedAroundYou} reverse />
      <ProcessSection />
      <ProjectsSection />
      <ConfidenceSection />
      <StoriesSection />
      <JournalSection />
      <FinalInvitation />
      <JsonLd />
    </>
  );
}

export function PhilosophyPage() {
  const [hero, ...sections] = philosophySections;

  return (
    <>
      <section className="pageHero">
        <div className="pageHeroCopy">
          <SectionCopy section={hero} headingLevel="h1" />
        </div>
        <VisualPanel label="Our Philosophy" eager />
      </section>
      <div className="editorialStack">
        {sections.map((section, index) => (
          <EditorialSection
            key={section.id}
            section={section}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </>
  );
}

export function TemplatePage({ page }: { page: TemplatePageContent }) {
  return (
    <>
      <section className="pageHero">
        <div className="pageHeroCopy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="heroDeck">{page.objective}</p>
          {page.cta ? (
            <div className="ctaRow">
              <ButtonLink cta={page.cta} />
            </div>
          ) : null}
        </div>
        <VisualPanel label={page.eyebrow} eager />
      </section>
      <section className="contentSection">
        <div className="sectionInner">
          <div className="templateGrid">
            {page.sections.map((section) => (
              <article className="templateCard" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.cta ? <ButtonLink cta={section.cta} variant="text" /> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <TemplatePage page={templatePages.projects} />
      <section className="contentSection muted" aria-labelledby="sample-projects">
        <div className="sectionInner">
          <div className="sectionCopy">
            <p className="eyebrow">PROJECT STORIES</p>
            <h2 id="sample-projects">Approved Sample Project Cards</h2>
            <p>
              Sample projects until real client photos are added.
            </p>
          </div>
          <div className="cardGrid">
            {featuredProjects.map((project) => (
              <article className="projectCard" key={project.title}>
                <VisualPanel label={project.status} />
                <div>
                  <p className="statusLabel">{project.status}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function JournalPage() {
  return (
    <>
      <TemplatePage page={templatePages.journal} />
      <section className="contentSection muted" aria-labelledby="journal-launch">
        <div className="sectionInner">
          <div className="sectionCopy">
            <p className="eyebrow">LAUNCH ARTICLES</p>
            <h2 id="journal-launch">Ideas for Living Better at Home</h2>
          </div>
          <div className="articleGrid">
            {journalArticles.map((article) => (
              <article className="articleCard" id={article.href.split("#")[1]} key={article.title}>
                <p className="statusLabel">
                  {article.category} · {article.readingTime}
                </p>
                <h3>{article.title}</h3>
                <p>{article.deck}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BeginProjectPage() {
  return (
    <>
      <section className="pageHero">
        <div className="pageHeroCopy">
          <p className="eyebrow">BEGIN YOUR PROJECT</p>
          <h1>Every Better Home Experience Begins With a Conversation</h1>
          <p className="heroDeck">
            Tell us what you want your home to make possible.
          </p>
        </div>
        <VisualPanel label="Start a Project" eager />
      </section>
      <section className="contentSection">
        <div className="sectionInner formLayout">
          <div className="sectionCopy">
            <p className="eyebrow">WHAT HAPPENS NEXT</p>
            <h2>A Thoughtful First Step</h2>
            <p>
              Share the basics. We’ll use them to start a helpful conversation.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}

export function FAQPage() {
  return (
    <>
      <TemplatePage page={templatePages.faq} />
      <section className="contentSection muted">
        <div className="sectionInner faqList">
          {templatePages.faq.sections.map((item) => (
            <details key={item.id}>
              <summary>{item.title}</summary>
              <p>{item.body}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    areaServed: site.region,
    slogan: site.tagline,
    url: "http://localhost:3000",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
