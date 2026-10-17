import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ phoneNumber = '919876543210', defaultMessage = 'Hello Sree Ganesh Linga, I would like to enquire about your services.' }) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
    </a>
  );
}
