import React from "react";

export default function ContactSection() {
  return (
    <div id="contact" className="min-h-screen bg-[#f9f5f0] flex flex-col items-center justify-center px-4 py-16 scroll-mt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-[#dfd7d0] p-10 rounded-3xl shadow-lg border border-gray-200">
        
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#072c27]">Get in Touch</h2>
          <p className="text-gray-700 text-md">
            Reach out to Dr. Serena Blake for appointments, inquiries, or general questions. Whether you&rsquo;re looking to start therapy or simply need more information, we&rsquo;re here to help.
          </p>

          <div className="text-sm space-y-4 text-gray-800">
            <div>
              <p className="font-semibold text-lg">Dr. Serena Blake, PsyD</p>
              <p className="text-lg">Clinical Psychologist</p>
            </div>

            <div>
              <p className="font-semibold text-lg">Location:</p>
              <p className="text-lg">1287 Maplewood Drive, Los Angeles, CA 90026</p>
            </div>

            <div>
              <p className="font-semibold text-lg">Phone:</p>
              <p className="text-lg">(323) 555-0192</p>
            </div>

            <div>
              <p className="font-semibold text-lg">Email:</p>
              <p>
                <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline text-lg">
                  serena@blakepsychology.com
                </a>
              </p>
            </div>

            <div>
              <p className="font-semibold text-lg">Office Hours:</p>
              <p className="text-lg">In-person: Tue & Thu, 10 AM–6 PM</p>
              <p className="text-lg">Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="space-y-5">
          <div>
            <label className="block font-medium text-[#072c27] mb-1">Name</label>
            <input type="text" className="w-full border border-gray-500 rounded-md px-4 py-2 placeholder-gray-400 text-black" placeholder="Your Name" />
          </div>

          <div>
            <label className="block font-medium text-[#072c27] mb-1">Email</label>
            <input type="email" className="w-full border border-gray-500 rounded-md px-4 py-2 placeholder-gray-400 text-black" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block font-medium text-[#072c27] mb-1">Phone</label>
            <input type="text" className="w-full border border-gray-500 rounded-md px-4 py-2 placeholder-gray-400 text-black" placeholder="(555) 234-5678" />
          </div>

          <div>
            <label className="block font-medium text-[#072c27] mb-1">Message</label>
            <textarea className="w-full border border-gray-500 rounded-md px-4 py-2 placeholder-gray-400 text-black" placeholder="How can I help you?" rows={3}></textarea>
          </div>

          <div>
            <label className="block font-medium text-[#072c27] mb-1">Preferred Contact Time</label>
            <input type="text" className="w-full border border-gray-500 rounded-md px-4 py-2 placeholder-gray-400 text-black" placeholder="e.g. Mornings, Evenings" />
          </div>

          <div>
             <label className="block font-medium text-[#072c27] mb-1">Preferred Contact Method</label>
                <select
                    className="w-full border border-gray-500 rounded-md px-4 py-2 text-black"
                    defaultValue=""
                >
                    <option value="" disabled hidden className="text-gray-600">
                    Select preferred method
                    </option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="zoom">Zoom</option>
                </select>
            </div>


          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-600">
              I’m not a robot (Replace with reCAPTCHA if needed)
            </label>
          </div>

          <button type="submit" className="w-full bg-[#daa55b] text-white py-2 px-4 rounded-md hover:bg-[#c98e47] transition">
            Submit
          </button>

          <p className="text-xs text-gray-500 mt-2">
            © By clicking submit you consent to receive texts and emails from Dr. Serena Blake.
          </p>
        </form>
      </div>
    </div>
  );
}

