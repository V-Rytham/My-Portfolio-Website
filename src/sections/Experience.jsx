const experiences = [
  {
    period: "Jul 2023 - Jun 2027",
    role: "B.Tech, Computer Science",
    company: "Graphic Era Deemed to be University",
    description:
      "Undergraduate program focused on strong CS fundamentals, full-stack development, and machine learning.",
    technologies: ["Machine Learning", "Python", "Statistics", "SQL"],
    current: true,
  },
  {
    period: "Jun 2019 - Jun 2021",
    role: "Class XII (PCM) - 89%",
    company: "DA V Boys Senior Secondary School",
    description:
      "Completed higher secondary education with strong performance in Mathematics and core science subjects.",
    technologies: ["Mathematics", "Physics", "Chemistry"],
    current: false,
  },
  {
    period: "Achievement",
    role: "JEE Main (Mathematics)",
    company: "99.6 Percentile",
    description:
      "Demonstrated strong analytical and problem-solving ability with a top percentile score in Mathematics.",
    technologies: ["Problem Solving", "Mathematics"],
    current: false,
  },
  {
    period: "Achievement",
    role: "LeetCode (DSA)",
    company: "800+ Problems | Peak Rating 1900",
    description:
      "Consistent practice in data structures and algorithms, building speed and accuracy through regular problem solving.",
    technologies: ["Data Structures", "Algorithms", "Complexity", "Patterns"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase reveal"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 reveal animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           reveal animation-delay-200"
          >
            A timeline of my education and key achievements in full-stack development and machine learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 reveal"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
