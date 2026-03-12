import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "After The Last Page (ALP)",
    description:
      "A full-stack book discussion platform with structured threads around specific books, built with a scalable architecture.",
    tags: ["Node.js", "React", "Express", "MongoDB"],
    link: "https://github.com/V-Rytham/After-The-Last-Page",
    github: "https://github.com/V-Rytham/After-The-Last-Page",
  },
  {
    title: "Customer Churn Prediction & Retention Intelligence",
    description:
      "An end-to-end churn prediction pipeline with an XGBoost model (85% accuracy) and a Tableau dashboard for retention insights.",
    tags: ["Python", "XGBoost", "SQL", "Tableau"],
    link: "https://github.com/rytham44",
    github: "https://github.com/rytham44",
  },
  {
    title: "Deep Learning Font Classification System",
    description:
      "A CNN-based image classifier to identify five font families using preprocessing, augmentation, and training optimizations.",
    tags: ["Python", "TensorFlow", "CNN", "Augmentation"],
    link: "https://github.com/rytham44",
    github: "https://github.com/rytham44",
  },
];

const getPrimaryProjectUrl = (project) => {
  if (project.link && project.link !== "#") return project.link;
  return project.github;
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              role="link"
              tabIndex={0}
              onClick={() => {
                const url = getPrimaryProjectUrl(project);
                if (!url || url === "#") return;
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter" && e.key !== " ") return;
                e.preventDefault();
                const url = getPrimaryProjectUrl(project);
                if (!url || url === "#") return;
                window.open(url, "_blank", "noopener,noreferrer");
              }}
            >
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
