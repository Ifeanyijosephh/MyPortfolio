import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_a0putky',    // 🔁 replace
      'template_q56xzx3',   // 🔁 replace
      formRef.current,
      'VKZbfOKBqBLgiCSy3'     // 🔁 replace
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <div className=" max-w-lg mx-auto p-6 mt-[-40px]" id='contactSection'>

          {/* <h2 className="text-2xl font-bold text-center mb-6 text-cyan-400" > Contact <span className="text-blue-500"> Me </span></h2> */}

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 bg-transparent border-2 border-cyan-800 rounded-xl backdrop-blur-sm p-6">

    <h3 className="text-cyan-400 text-xl font-bold pb-6">Send me a message!</h3>
        <input
          type="text"
          name="from_name"       
          placeholder="Your Name"
          required
          className="bg-[#0f172a] border border-cyan-800 text-cyan-100 placeholder-cyan-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
        />

        <input
          type="email"
          name="from_email"      
          placeholder="Your Email"
          required
          className="bg-[#0f172a] border border-cyan-800 text-cyan-100 placeholder-cyan-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
        />

        <textarea
          name="message"         
          placeholder="Your Message"
          rows={5}
          required
          className="bg-[#0f172a] border border-cyan-800 text-cyan-100 placeholder-cyan-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition resize-none"
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-center text-sm">✅ Message sent! I'll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center text-sm">❌ Something went wrong. Try again.</p>
        )}

      </form>
    </div>
  );
};

export default ContactForm;