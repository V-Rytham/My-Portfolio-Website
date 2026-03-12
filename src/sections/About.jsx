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
            <div className="reveal">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight reveal animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground reveal animation-delay-200">
              <p>
                I'm a Computer Science undergraduate at Graphic Era Deemed to be
                University (B.Tech, 2023-2027) with a focus on Data Science and
                Machine Learning. I enjoy building practical projects that turn
                messy real-world data into useful, product-ready experiences.
              </p>
              <p>
                My work spans full-stack development (React, Node.js/Express, MongoDB)
                and machine learning projects using Python with XGBoost and TensorFlow.
              </p>
              <p>
                I also enjoy competitive problem solving (800+ DSA problems across platforms, peak rating 1900) and applying a strong math
                foundation to improve model quality and evaluation.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border reveal animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I like building end-to-end ML projects that are not just
                accurate, but usable: fast, explainable, and easy to iterate on."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl reveal"
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
