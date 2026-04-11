import { motion } from "framer-motion";
import { Heart, Target, Sparkles } from "lucide-react";
import Testimonials from "@/components/Testimonials";

const values = [
  { icon: Heart, title: "Passion for French", desc: "We believe language learning should be joyful, immersive, and deeply personal." },
  { icon: Target, title: "Goal-Oriented Teaching", desc: "Every lesson moves you closer to real-world fluency with measurable milestones." },
  { icon: Sparkles, title: "Cultural Immersion", desc: "Beyond grammar — we bring French art, cinema, music, and cuisine into every course." },
];

const fade = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="bg-secondary section-padding text-center">
      <div className="section-container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-foreground gold-underline pb-4">
          About Us
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Lingua French Academy was founded with a simple mission: make French accessible, affordable, and enjoyable for learners across India and beyond.
        </motion.p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground gold-underline pb-4 mb-8">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          What started as a passion project in 2019 has grown into a thriving online community of French learners. Our founder, a Sorbonne-educated linguist, envisioned a school where Indian students could learn French without the barriers of high fees, rigid timings, or impersonal teaching.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Today, we offer structured beginner-to-advanced programs with native French instructors, small class sizes, and a warm, supportive environment. Whether you're a student, a working professional, or a retiree — there's a place for you at Lingua French Academy.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary">
      <div className="section-container text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground gold-underline pb-4">What We Stand For</h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="card-premium p-8">
              <div className="w-14 h-14 rounded-xl bg-crimson/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="text-crimson" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <Testimonials />
  </main>
);

export default About;
