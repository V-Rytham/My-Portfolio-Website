import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "After The Last Page",
    description:
      "Scalable book aggregation platform with RAG-based chatbot, modular backend services, and secure API architecture.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "RAG"],
    link: "https://alp-web.onrender.com/",
    github: "https://github.com/V-Rytham",
    image: "/projects/after-the-last-page.svg",
  },
  {
    title: "Memory Palace",
    description:
      "Context-aware memory retrieval platform with natural conversations, semantic vector search, contextual ranking, and API gateway orchestration.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "RAG"],
    link: "https://github.com/V-Rytham",
    github: "https://github.com/V-Rytham",
    image: "/projects/memory-palace.svg",
  },
  {
    title: "Mini Git - Custom Version Control System",
    description:
      "Git-inspired platform with custom CLI, commit snapshotting, S3 sync, issue management, and contribution heatmaps.",
    tags: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "JWT"],
    link: "https://git-d3gk.onrender.com/",
    github: "https://github.com/V-Rytham",
    image: "/projects/mini-git.svg",
  },
  {
    title: "AI Powered E-Commerce Platform",
    description:
      "Full-stack e-commerce application with JWT auth, Google login, admin controls, and Razorpay/COD payment workflows.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    link: "https://ecom-ai-vork.onrender.com",
    github: "https://github.com/V-Rytham",
    image: "/projects/ecommerce-platform.svg",
  },
  {
    title: "Deterministic Question Generator",
    description:
      "Deterministic NLP pipeline that converts Gutenberg books into structured facts and high-quality MCQs without LLM dependency.",
    tags: ["FastAPI", "MongoDB", "spaCy", "scikit-learn"],
    link: "https://deterministic-question-engine-1.onrender.com/",
    github: "https://github.com/V-Rytham",
    image: "/projects/deterministic-question-generator.svg",
  },
];

const getPrimaryProjectUrl = (project) => {
  if (project.link && project.link !== "#") return project.link;
  return project.github;
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase reveal reveal-left">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 reveal reveal-up animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground reveal reveal-up animation-delay-200">
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden reveal reveal-up"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              role="link"
              tabIndex={0}
              onClick={() => {
                const url = getPrimaryProjectUrl(project);
                if (!url || url === "#") return;
                window.open(url, "_blank", "noopener,noreferrer");
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-52 object-cover border-b border-border/50"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal reveal-pop animation-delay-500">
          <a href="https://github.com/V-Rytham" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              <Github className="w-5 h-5" />
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
