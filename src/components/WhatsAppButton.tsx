import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20French%20courses."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
  >
    <MessageCircle size={22} fill="white" />
    <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
  </a>
);

export default WhatsAppButton;
