import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Award, Clock, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-paris.jpg";

const stats = [
  { value: "5,000+", label: "Students Enrolled" },
  { value: "50+", label: "Expert Instructors" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "12+", label: "Countries Reached" },
];

const features = [
  { icon: BookOpen, title: "Structured Curriculum", desc: "Step-by-step lessons designed for absolute beginners to build fluency." },
  { icon: Users, title: "Small Batch Sizes", desc: "Personalised attention with a maximum of 8 students per batch." },
  { icon: Globe, title: "Native French Tutors", desc: "Learn authentic pronunciation and culture from native speakers." },
  { icon: Award, title: "Certified Courses", desc: "Receive certificates aligned with CEFR standards upon completion." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Choose from morning, evening, and weekend batches to suit your routine." },
  { icon: Headphones, title: "Recorded Sessions", desc: "Access recorded classes anytime so you never miss a lesson." },
];

const fade = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const Home = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="Paris skyline" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-navy-dark/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight"
        >
          Begin Your <span className="text-gold">French</span> Journey Today
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-lg text-primary-foreground/80 max-w-xl mx-auto"
        >
          Interactive online classes for beginners of all ages. Learn from native speakers and fall in love with the language of art, culture, and diplomacy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Link to="/courses" className="bg-gold text-accent-foreground px-8 py-3 rounded-md font-semibold hover:brightness-110 transition">
            Explore Courses
          </Link>
          <Link to="/contact" className="border border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="text-3xl md:text-4xl font-display font-bold text-gold">{s.value}</p>
            <p className="text-sm text-primary-foreground/70 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Why Choose <span className="text-primary">Lingua French</span>?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">We combine modern teaching methods with the charm of French culture to deliver an unmatched learning experience.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-primary-foreground">Ready to speak French?</h2>
        <p className="mt-3 text-primary-foreground/70 max-w-md mx-auto">Join thousands of happy learners. Your first class is just a click away.</p>
        <Link to="/courses" className="inline-block mt-8 bg-gold text-accent-foreground px-10 py-3 rounded-md font-semibold hover:brightness-110 transition">
          View Courses & Pricing
        </Link>
      </div>
    </section>
  </main>
);

export default Home;
