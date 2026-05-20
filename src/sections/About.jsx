import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "DSA Foundation",
    description:
      "Strong data structures and algorithms fundamentals (800+ DSA problems, peak rating 1900).",
  },
  {
    icon: Rocket,
    title: "Model Building",
    description:
      "Hands-on with scikit-learn, XGBoost, and TensorFlow for practical ML.",
  },
  {
    icon: Users,
    title: "Analytics",
    description:
      "Turning raw data into clear insights through visualization and storytelling.",
  },
  {
    icon: Lightbulb,
    title: "End-to-End",
    description:
      "From frontend components to backend APIs and deployment, plus ML pipelines when needed.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="reveal reveal-left">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight reveal reveal-up animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground reveal reveal-up animation-delay-200">
              <p>
                I'm a B.Tech Computer Science student at Graphic Era University (2023-2027), focused on full-stack development, backend systems, and practical AI integrations.
              </p>
              <p>
                I build MERN applications with secure authentication, scalable API design, vector retrieval workflows, and polished user experiences.
              </p>
              <p>
                I also enjoy competitive programming (800+ problems solved, LeetCode rating 1900, Codeforces Specialist) and applying strong CS fundamentals to ship reliable products faster.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border reveal reveal-zoom animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I enjoy building products that are technically strong, secure by design, and genuinely useful for real users."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl reveal reveal-up"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
