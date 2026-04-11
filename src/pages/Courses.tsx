import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Testimonials from "@/components/Testimonials";

const faqs = [
  { q: "How do I enroll in a course?", a: "Simply click the 'Enroll Now' button on any course card above, fill in the contact form, and our team will reach out within 24 hours with batch details and payment instructions." },
  { q: "What is the class schedule like?", a: "Classes are held 3 times per week (Mon/Wed/Fri or Tue/Thu/Sat). Morning batches run 9–10:30 AM, evening batches 6–7:30 PM, and weekend batches 10 AM–12 PM IST." },
  { q: "Do I get a certificate after completing the course?", a: "Yes! All students who complete the course and pass the final assessment receive a certificate aligned with CEFR standards (A1/A2). This certificate is recognized for university and visa applications." },
  { q: "Can I switch batches after enrolling?", a: "Absolutely. You can request a batch change up to twice during your course by contacting our support team. We'll move you to the next available slot at no extra charge." },
  { q: "Is there any prior French knowledge required?", a: "Not at all! Our A1 Starter and Kids French courses are designed for absolute beginners with zero prior knowledge of French." },
  { q: "What happens if I miss a class?", a: "All live sessions are recorded and shared within 2 hours. You also get access to session notes and can attend a doubt-clearing session every Saturday." },
];

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
  {
    title: "TEF Canada Preparation",
    level: "Intermediate (B1–B2)",
    price: "₹12,999",
    duration: "12 weeks · 36 sessions",
    features: ["Full TEF exam structure & strategies", "Compréhension orale & écrite drills", "Expression orale mock interviews", "Expression écrite guided essays", "2 full-length mock tests with scoring", "Personalized feedback & study plan"],
    popular: false,
  },
];

const fade = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const Courses = () => (
  <main className="pt-20">
    <section className="section-blue section-padding text-center">
      <div className="section-container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white heading-underline">
          Our Courses
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-8 text-white/70 max-w-xl mx-auto">
          Affordable beginner programs crafted for every age group. All prices in INR, no hidden charges.
        </motion.p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`relative card-premium p-8 flex flex-col ${c.popular ? "ring-2 ring-primary" : ""}`}
          >
            {c.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.level}</span>
            <h3 className="font-display text-xl font-bold text-foreground mt-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.duration}</p>
            <p className="text-3xl font-display font-bold text-primary mt-5">{c.price}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {c.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 btn-cta"
            >
              Enroll Now
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    <Testimonials />

    {/* FAQ */}
    <section className="section-light section-padding">
      <div className="section-container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary text-center heading-underline"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-muted-foreground text-center mb-10"
        >
          Everything you need to know before you start learning French with us.
        </motion.p>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="card-premium px-6 border-l-4">
              <AccordionTrigger className="text-left text-foreground hover:text-crimson transition-colors duration-300 py-5">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </main>
);

export default Courses;
