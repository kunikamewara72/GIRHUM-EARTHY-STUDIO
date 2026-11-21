'use client';

export default function ContactEnquiryForm({ email, phone }) {
  function sendTo(channel, event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const message = [
      'Project enquiry — Grihum Earthy Studio',
      `Name: ${values.get('name')}`,
      `Email: ${values.get('email')}`,
      `Phone: ${values.get('phone') || 'Not provided'}`,
      `Project: ${values.get('type')}`,
      `Location: ${values.get('location') || 'Not provided'}`,
      `Approximate area: ${values.get('area') || 'Not provided'}`,
      `Details: ${values.get('message') || 'Not provided'}`,
    ].join('\n');

    if (channel === 'email') {
      const subject = encodeURIComponent(`Project enquiry from ${values.get('name')}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`;
      return;
    }

    const whatsappNumber = phone.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return <form className="contact-form" onSubmit={event => sendTo(event.nativeEvent.submitter?.value || 'email', event)}>
    <label>Your name <em>*</em><input name="name" placeholder="How should we address you?" autoComplete="name" required/></label>
    <div className="contact-form-row"><label>Email address <em>*</em><input name="email" type="email" placeholder="you@example.com" autoComplete="email" required/></label><label>Phone number<input name="phone" type="tel" placeholder="Include your country code" autoComplete="tel"/></label></div>
    <label>What are you planning? <em>*</em><select name="type" defaultValue="" required><option value="" disabled>Select a project type</option><option>New home or villa</option><option>Heritage restoration</option><option>Resort or retreat</option><option>Interior design</option><option>Landscape or courtyard</option><option>Other</option></select></label>
    <div className="contact-form-row"><label>Project location<input name="location" placeholder="City, region or site location" autoComplete="address-level2"/></label><label>Approximate plot / built area<input name="area" placeholder="If known"/></label></div>
    <label>Tell us a little about it <textarea name="message" rows="4" placeholder="What would you like to create? What matters most to you?"/></label>
    <div className="contact-send-actions"><button className="contact-submit" type="submit" value="email">Send by email <span>↗</span></button><button className="contact-submit contact-submit-whatsapp" type="submit" value="whatsapp">Send by WhatsApp <span>↗</span></button></div>
    <small className="contact-privacy">Choose how you’d like to send your brief. Your message will open ready to send.</small>
  </form>;
}
