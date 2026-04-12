import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Award, Clock, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import Testimonials from "@/components/Testimonials";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay bg-navy">
      <img src={heroImage} alt="French classroom" className="absolute inset-0 w-full h-full object-cover opacity-20" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl font-bold leading-tight text-gradient-hero"
        >
          Begin Your French Journey Today
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed"
        >
          Interactive online classes for beginners of all ages. Learn from native speakers and fall in love with the language of art, culture, and diplomacy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Link to="/courses" className="btn-cta text-base px-10 py-4">
            Explore Courses
          </Link>
          <Link to="/contact" className="border border-white/20 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-muted section-padding">
      <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="text-4xl md:text-5xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-background">
      <div className="section-container text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline pb-4">
          Why Choose Lingua French?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">We combine modern teaching methods with the charm of French culture to deliver an unmatched learning experience.</p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="card-premium p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <Testimonials />

    {/* CTA */}
    <section className="section-padding bg-navy text-center">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Ready to speak French?</h2>
        <p className="mt-4 text-white/60 max-w-md mx-auto">Join thousands of happy learners. Your first class is just a click away.</p>
        <Link to="/courses" className="btn-cta mt-10 text-base px-12 py-4">
          View Courses & Pricing
        </Link>
      </div>
    </section>
  </main>
);

export default Home;
