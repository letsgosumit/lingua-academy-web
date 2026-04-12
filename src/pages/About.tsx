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
    <section className="bg-navy section-padding text-center">
      <div className="section-container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white gold-underline pb-4">
          About Lingua French Academy
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed">
         Lingua French Academy is a premier online French language institute 
founded with one mission — to make French learning accessible, 
affordable, and enjoyable for everyone.

We specialize in teaching French to students across India and Canada, 
with a curriculum that blends grammar, conversation, reading, and 
writing — all designed around real-life situations.

Our tutors are certified, experienced, and passionate about helping 
students achieve fluency. Whether you are preparing for DELF, TCF, 
or TEF Canada, or simply want to have confident conversations in 
French, we have the perfect course for you.

Why we are different:
- Live interactive classes — not recorded videos
- Small batch sizes for personalized attention
- Flexible timings for working professionals and students
- Affordable pricing
- Certified tutors with 5+ years of experience
- Proven track record with DELF, TCF and TEF Canada exams
        </motion.p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground gold-underline pb-4 mb-8">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
Lingua French Academy started with one frustration and one dream.

The frustration? Watching talented, motivated learners give up on 
French because classes were too expensive, too rigid, or simply 
too boring.

The dream? A place where learning French feels less like a classroom 
and more like a conversation with a friend in a Parisian café.

So in 2022, we built it.        </p>
        <p className="text-muted-foreground leading-relaxed">
Today, we help students across India and Canada — from curious 
beginners to ambitious TEF and TCF exam takers — fall in love with 
French. Not through textbooks alone, but through real conversations, 
real culture, and real connections.

We are not just a language school.
We are your French family.        </p>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted">
      <div className="section-container text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground gold-underline pb-4">What We Stand For</h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="card-premium p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="text-primary" size={24} />
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
