import React, { useState } from "react";

const initialForm = { name: "", email: "", interest: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setPrepared(false);
    setCopied(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPrepared(true);
    setCopied(false);
  };

  const enquiryText = `Name: ${form.name}\nEmail: ${form.email}\nArea of interest: ${form.interest}\nMessage: ${form.message}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(enquiryText);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const inputClass =
    "min-h-[43px] w-full border border-[#d9d8d1] bg-transparent px-3 py-3 text-[11px] text-[#242424] outline-none transition-colors placeholder:text-[#777777] focus:border-[#ff6a00]";

  return (
    <section id="contact" className="scroll-mt-6 bg-[#e9e9e1] text-[#242424]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-[60px] lg:py-[64px]">
        <div>
          <p className="mb-7 text-[12px] uppercase">07 / Start a conversation</p>
          <h2 className="text-[36px] leading-[1.15] tracking-[-0.055em] sm:text-[44px]">
            Let’s build
            <br />
            your next chapter.
          </h2>
          <p className="mt-5 max-w-[390px] text-[12 px] leading-[1.9] text-[#777777] sm:text-[12px]">
            Have a question about a course or where to begin? Tell us a little about your goals.
          </p>

          <div className="mt-6 max-w-[400px] border-t border-[#d9d8d1] pt-6">
            <p className="mb-6 text-[10px] uppercase">Email &amp; Phone</p>
            <p className="text-[14px]">Official contact details coming soon.</p>
          </div>
          <div className="mt-6 max-w-[400px] border-t border-[#d9d8d1] pt-6">
            <p className="mb-6 text-[8px] uppercase">Visit the academy</p>
            <p className="text-[12px]">Campus address to be confirmed.</p>
          </div>
          <p className="mt-7 max-w-[390px] text-[12px] leading-[1.8] text-[#777777]">
            Preview mode: prepare and copy your enquiry below. Nothing is sent or saved by this
            website.
          </p>
        </div>

        <div className="bg-[#f5f4f0] p-5 sm:p-7 lg:p-[30px]">
          <h3 className="mb-7 text-[20px] leading-tight sm:text-[21px]">
            Tell us what’s next for you.
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="enquiry-name" className="mb-3 block text-[11px]">
                Your name
              </label>
              <input
                id="enquiry-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="enquiry-email" className="mb-3 block text-[11px]">
                Email address
              </label>
              <input
                id="enquiry-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="enquiry-interest" className="mb-3 block text-[11px]">
                Area of interest
              </label>
              <select
                id="enquiry-interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className={`${inputClass} text-[#777777]`}
                required
              >
                <option value="">Choose a learning pathway</option>
                <option value="Practical Architecture">Practical Architecture</option>
                <option value="Applied Civil Engineering">Applied Civil Engineering</option>
                <option value="Design & Automation">Design &amp; Automation</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </div>
            <div>
              <label htmlFor="enquiry-message" className="mb-3 block text-[11px]">
                Your message
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your interests or ask a question."
                rows={4}
                className={`${inputClass} min-h-[120px] resize-y`}
                required
              />
            </div>
            <button
              type="submit"
              className="flex min-h-[46px] w-full items-center justify-between bg-[#242424] px-5 text-left text-[10px] text-white transition-colors hover:bg-[#ff6a00] sm:w-[200px]"
            >
              Prepare enquiry <span>↗</span>
            </button>
          </form>

          {prepared && (
            <div className="mt-5 border border-[#d9d8d1] p-4" role="status">
              <p className="mb-2 text-[11px] font-medium">Enquiry prepared successfully.</p>
              <p className="mb-3 text-[10px] leading-relaxed text-[#777777]">
                Your details are ready to copy. No message has been sent.
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className="text-[12px] underline transition-colors hover:text-[#ff6a00]"
              >
                {copied ? "Copied" : "Copy enquiry details ↗"}
              </button>
            </div>
          )}

          <p className="mt-5 text-[12px] text-[#777777]">
            Creates a draft only. No message will be sent.
          </p>
        </div>
      </div>
    </section>
  );
}
