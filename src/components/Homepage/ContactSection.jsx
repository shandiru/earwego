// src/components/ContactSection.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_404lxe7", // Replace with your EmailJS Service ID
        "template_yr5430s", // Replace with your EmailJS Template ID
        formRef.current,
        "tmUgtXKf_TwGrV1iE" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#334155]">
            Ready to hear better? Contact us today for your same-day appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-serif font-bold text-[#0D1525] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <InfoCard
                icon={
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.41 1.85.63 2.81.7A2 2 0 0 1 22 16.92z" />
                }
                title="Phone"
                main={
                  <a
                    href="tel:08081371961"
                    className="text-lg text-[#10B981] font-semibold hover:underline"
                  >
                    0808 137 1961
                  </a>
                }
                sub="Available 7 days a week"
              />

              {/* Email */}
              <InfoCard
                icon={
                  <>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </>
                }
                title="Email"
                main={
                  <a
                    href="mailto:earwegosales@gmail.com"
                    className="text-lg text-[#10B981] hover:underline"
                  >
                    earwegosales@gmail.com
                  </a>
                }
                sub="We respond within 2 hours"
              />

              {/* Address */}
              <InfoCard
                icon={
                  <>
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </>
                }
                title="Address"
                main={
                  <>
                    <p className="text-[#334155]">Great Northern Rd,</p>
                    <p className="text-[#334155]">Derby, DE1 1LR</p>
                  </>
                }
              />

              {/* Service Areas */}
              <InfoCard
                icon={
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </>
                }
                title="Service Areas"
                main={
                  <>
                    <p className="text-[#334155]">
                      Derby • Nottingham • Leicester
                    </p>
                    <p className="text-[#334155]">
                      Lincolnshire • Staffordshire
                    </p>
                  </>
                }
              />
            </div>
          </div>

          {/* RIGHT: Appointment Form */}
          <div
            className="bg-white rounded-2xl shadow-sm border border-emerald-100"
            data-aos="fade-left"
          >
            <form ref={formRef} onSubmit={sendEmail} className="px-6 pb-6 space-y-4">
              <div className="px-6 pt-6 pb-4">
                <div className="font-semibold text-2xl font-serif text-[#0D1525]">
                  Book Your Appointment
                </div>
                <p className="text-[#334155]">
                  We respond within 24 hours. Need it sooner? Call us
                </p>
              </div>

              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name*" name="first_name">
                  <Input placeholder="John" name="first_name" />
                </Field>
                <Field label="Last Name*" name="last_name">
                  <Input placeholder="Smith" name="last_name" />
                </Field>
              </div>

              {/* Phone */}
              <Field label="Phone Number*" name="phone">
                <Input placeholder="07123 456789" inputMode="tel" name="phone" />
              </Field>

              {/* Email */}
              <Field label="Email Address*" name="email">
                <Input placeholder="john.smith@email.com" type="email" name="email" />
              </Field>

              {/* Service */}
              <Field label="Preferred Service*" name="service">
                <select
                  name="service"
                  className="h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-base text-[#334155] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981]"
                >
                  <option>Single Ear Treatment (£50)</option>
                  <option>Both Ears Treatment (£60)</option>
                </select>
              </Field>

              {/* Address */}
              <Field label="Your Address*" name="address">
                <Input placeholder="Full address for home visit" name="address" />
              </Field>

              {/* Additional Info */}
              <Field label="Additional Information*" name="message">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Any symptoms, preferred appointment time, or special requirements..."
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-[#334155] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981]"
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-4 w-full bg-[#10B981] hover:bg-[#0D1525] text-white transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Request Appointment"}
              </button>

              {success === true && (
                <p className="text-sm text-green-500 text-center">Form sent successfully!</p>
              )}
              {success === false && (
                <p className="text-sm text-red-500 text-center">Something went wrong. Try again.</p>
              )}

              <p className="text-sm text-[#334155] text-center">
                Same-day appointments often available • No obligation consultation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Helpers */
const InfoCard = ({ icon, title, main, sub }) => (
  <div className="bg-white rounded-xl py-6 shadow-sm border border-emerald-100">
    <div className="p-6 flex items-center">
      <div className="bg-[#10B981] p-3 rounded-lg mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-[#0D1525]">{title}</h4>
        <div>{main}</div>
        {sub && <p className="text-sm text-[#334155]">{sub}</p>}
      </div>
    </div>
  </div>
);

const Field = ({ label, children }) => (
  <div>
    <label className="text-sm font-medium text-[#0D1525] mb-2 block">{label}</label>
    {children}
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className="h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-base text-[#334155] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981]"
  />
);

export default ContactSection;
