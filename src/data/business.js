export const BUSINESS = {
  name: "Chaudhary Plumbing Works",
  phone: "+917752914486",
  whatsapp: "+917752914486",
  address: "Rajeev Enclave ,Block 3, House No. 02, 3rd Floor,Near Mokadam Chowk, UIT Sector 3, Bhiwadi, Rajasthan - 301019",
  // email: "contact@chaudharyplumbing.com",
  businessHours: "Sun-Mon: 8:00 AM - 8:00 PM, Tue: 8:00 AM - 4:00 PM, Wed-Sat: 8:00 AM - 8:00 PM"
};

export const getWhatsappUrl = (serviceName = null) => {
  const baseMessage = "Hello Chaudhary Plumbing Works, I need plumbing services.";
  const endMessage = " Please contact me.";
  const message = serviceName 
    ? `${baseMessage} I am interested in your ${serviceName} service.${endMessage}`
    : `${baseMessage}${endMessage}`;
  
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
};