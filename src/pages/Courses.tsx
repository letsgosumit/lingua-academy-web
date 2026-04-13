import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Testimonials from "@/components/Testimonials";

const faqs = [
  { q: "Do I need any prior French knowledge?", a: "Not at all! Our A1 course is designed for absolute beginners." },
  { q: "Are classes live or recorded?", a: "All our classes are live and interactive via Zoom/Google Meet." },
  { q: " Do you offer classes for Canadian immigration (TEF/TCF)?", a: "Yes! We have dedicated TEF Canada and TCF preparation courses." },
  { q: "Can I switch batches after enrolling?", a: "Absolutely. You can request a batch change up to twice during your course by contacting our support team. We'll move you to the next available slot at no extra charge." },
  { q: "Can I switch batches if my schedule changes?", a: "Absolutely! We offer flexible batch switching at no extra charge." },
  { q: "What happens if I miss a class?", a: "All live sessions are recorded and shared within 2 hours. You also get access to session notes." },
];

const courses = [
  {
    title: "French A1",
    level: "Absolute Beginner",
    price: "₹11,000",
    duration: "4 weeks · 20 sessions",
    features: ["Alphabets, pronunciation & greetings", "Basic vocabulary (500+ words)", "Simple conversations & role-plays", "Weekly assignments & quizzes"],
    popular: false,paymentLink: "https://rzp.io/rzp/NKxsjB5",
  },
  {
    title: "French A2",
    level: "Elementary",
    price: "₹14,000",
    duration: "8 weeks · 32 sessions",
    features: ["Everything in A1", "Grammar deep-dive (tenses, articles)", "Reading & writing short texts", "Listening comprehension exercises", "Mock DELF A2 preparation", "1-on-1 mentor session"],
    popular: true,paymentLink: "https://rzp.io/rzp/E4erSBV",
  },
  {
    title: "French B1",
    level: "Intermediate",
    price: "₹21,000",
    duration: "8 weeks · 32 sessions",
    features: ["Advanced grammar & conjugation", "Conversational fluency practice", "Reading comprehension & essays", "French culture & current affairs", "Mock DELF B1 preparation", "Personalized feedback"],
    popular: false,paymentLink: "https://rzp.io/rzp/i1nDPRY",
  },
  {
    title: "TCF Preparation",
    level: "All Levels",
    price: "₹65,000",
    duration: "24 weeks · 120 sessions",
    features: ["Full TCF exam structure & strategies", "Compréhension orale & écrite drills", "Expression orale mock interviews", "Expression écrite guided essays", "3 full-length mock tests with scoring", "Personalized study plan"],
    popular: false,paymentLink: "https://rzp.io/rzp/eJ7XZseB",
  },
  {
    title: "TEF Canada Preparation",
    level: "All Levels",
    price: "₹75,000",
    duration: "28 weeks · 140 sessions",
    features: ["Full TEF exam structure & strategies", "Compréhension orale & écrite drills", "Expression orale mock interviews", "Expression écrite guided essays", "4 full-length mock tests with scoring", "Personalized feedback & study plan"],
    popular: false,paymentLink: "https://rzp.io/rzp/p9klgb47",
  },
];

const fade = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const Courses = () => (
  <main className="pt-20">
    <section className="bg-navy section-padding text-center">
      <div className="section-container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white gold-underline pb-4">
         Online French Courses
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-white/70 max-w-xl mx-auto">
          Affordable beginner programs crafted for every age group. All prices in INR, no hidden charges.
        </motion.p>
      </div>
    </section>

    <section className="section-padding bg-muted">
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
           <a href={c.paymentLink}
  target="_blank"
  rel="noopener noreferrer"
  className={`mt-8 block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
    c.popular
      ? "btn-cta"
      : "bg-muted text-foreground hover:bg-primary hover:text-white"
  }`}
>
  Enroll Now
</a>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <Testimonials />

    {/* FAQ */}
    <section className="section-padding bg-muted">
      <div className="section-container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center gold-underline pb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-muted-foreground text-center mb-10"
        >
          Everything you need to know before you start learning French with us.
        </motion.p>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="card-premium px-6 border-none">
              <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors duration-300 py-5">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </main>
);

export default Courses;
