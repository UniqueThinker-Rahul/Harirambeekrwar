import React from 'react';

interface EnquiryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultService?: string;
}

/**
 * Redirect user directly to WhatsApp for enquiries instead of opening a modal.
 */
export const openEnquiryModal = (service?: string) => {
  const query = service
    ? `Hello Hari Ram Ji, I would like to enquire about ${service}.`
    : 'Hello Hari Ram Ji, I would like to enquire about a consultation.';
  window.open(
    `https://wa.me/919509610711?text=${encodeURIComponent(query)}`,
    '_blank',
    'noopener,noreferrer'
  );
};

const EnquiryModal: React.FC<EnquiryModalProps> = () => {
  return null;
};

export default EnquiryModal;
