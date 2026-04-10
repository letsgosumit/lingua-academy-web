import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "French A1 — Starter",
    level: "Absolute Beginner",
    price: "₹4,999",
    duration: "8 weeks · 24 sessions",
    features: ["Alphabets, pronunciation & greetings", "Basic vocabulary (500+ words)", "Simple conversations & role-plays", "Weekly assignments & quizzes", "Certificate of completion"],
    popular: false,
  },
  {
    title: "French A1+A2 — Foundation",
    level: "Beginner to Elementary",
    price: "₹8,999",
    duration: "16 weeks · 48 sessions",
    features: ["Everything in A1 Starter", "Grammar deep-dive (tenses, articles)", "Reading & writing short texts", "Listening comprehension exercises", "Mock DELF A2 preparation", "1-on-1 mentor session"],
    popular: true,
  },
  {
    title: "Kids French — Petit Monde",
    level: "Ages 6–14",
    price: "₹3,499",
    duration: "10 weeks · 20 sessions",
    features: ["Fun, game-based curriculum", "Songs, stories & cartoons in French", "Interactive group activities", "Parent progress reports", "Digital workbook included"],
    popular: false,
  },
  {
    title: "Weekend French Immersion",
    level: "Adults — Beginner",
    price: "₹5,499",
    duration: "12 weekends · 24 sessions",
    features: ["Saturday & Sunday batches", "Conversational fluency focus", "French culture & etiquette", "Movie & music analysis", "Group discussion practice"],
    popular: false,
  },
];

const fade = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const Courses = () => (
  <main className="pt-16">
    <section className="bg-primary py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
          Our <span className="text-gold">Courses</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
          Affordable beginner programs crafted for every age group. All prices in INR, no hidden charges.
        </motion.p>
      </div>
    </section>

    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`relative bg-card rounded-lg border p-6 flex flex-col ${c.popular ? "ring-2 ring-gold" : ""}`}
          >
            {c.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.level}</span>
            <h3 className="font-display text-xl font-bold text-foreground mt-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.duration}</p>
            <p className="text-3xl font-display font-bold text-primary mt-4">{c.price}</p>
            <ul className="mt-5 flex-1 space-y-2">
              {c.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-gold mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-6 block text-center py-2.5 rounded-md font-semibold text-sm transition ${
                c.popular
                  ? "bg-gold text-accent-foreground hover:brightness-110"
                  : "bg-primary text-primary-foreground hover:bg-navy-light"
              }`}
            >
              Enroll Now
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </main>
);

export default Courses;
