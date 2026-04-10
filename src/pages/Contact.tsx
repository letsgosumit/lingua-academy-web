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

  return (
    <main className="pt-16">
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Have questions or want to enroll? Drop us a message and we'll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 max-w-5xl">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-foreground">Get in Touch</h2>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <Mail size={18} className="text-primary mt-0.5" />
              <div><p className="font-semibold text-foreground">Email</p>hello@linguafrench.in</div>
            </div>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <Phone size={18} className="text-primary mt-0.5" />
              <div><p className="font-semibold text-foreground">Phone</p>+91 98765 43210</div>
            </div>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin size={18} className="text-primary mt-0.5" />
              <div><p className="font-semibold text-foreground">Location</p>Online — Learn from anywhere</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 bg-card rounded-lg border p-6 space-y-4 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Phone (optional)</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={15}
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={4}
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us what you're looking for…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-navy-light transition flex items-center gap-2 disabled:opacity-60"
            >
              <Send size={16} /> {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
