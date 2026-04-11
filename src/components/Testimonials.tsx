import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    quote: "Lingua French Academy transformed my French from zero to conversational in just 4 months. The teachers are incredibly patient and structured!",
    course: "Completed: B1 Intermediate",
  },
  {
    name: "Rohan Mehta",
    quote: "Best French classes in Delhi! The curriculum is thorough and the online sessions are very interactive. Highly recommended.",
    course: "Completed: A1 Beginner",
  },
  {
    name: "Ananya Singh",
    quote: "I cleared my DELF B2 exam on the first attempt thanks to Lingua. The exam prep module is exceptional.",
    course: "Completed: B2 DELF Prep",
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const Testimonials = () => (
  <section className="section-light section-padding">
    <div className="section-container text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-primary heading-underline"
      >
        What Our Students Say
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-8 text-muted-foreground max-w-xl mx-auto"
      >
        Hear from our learners who've transformed their careers and lives through French.
      </motion.p>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="card-premium p-8 text-left"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground italic leading-relaxed text-sm">"{t.quote}"</p>
            <p className="mt-4 text-xs font-semibold text-primary tracking-wide uppercase">{t.course}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
