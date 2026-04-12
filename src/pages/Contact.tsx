import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  const inputClass = "mt-1 w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300";

  return (
    <main className="pt-20">
      <section className="bg-navy section-padding text-center">
        <div className="section-container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white gold-underline pb-4">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-white/70 max-w-xl mx-auto">
            Have questions or want to enroll? Drop us a message and we'll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h2 className="font-display text-xl font-bold text-foreground">Get in Touch</h2>
            {[
              { icon: Mail, label: "Email", value: "hello@linguafrench.in" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "Online — Learn from anywhere" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 text-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 card-premium p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground">Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className={inputClass} placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Phone (optional)</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} className={inputClass} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message *</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={4} className={`${inputClass} resize-none`} placeholder="Tell us what you're looking for…" />
            </div>
            <button type="submit" disabled={sending} className="btn-cta px-8 py-3 disabled:opacity-60">
              <Send size={16} /> {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
