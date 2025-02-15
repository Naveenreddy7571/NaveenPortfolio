import React from "react";
import { contactConfig } from "../../config/contactConfig";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-navbar-height bg-primary-white px-4 py-16 pt-navbar-height md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-screen-lg text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-primary-black leading-tight">
          Let&apos;s{" "}
          <span className="bg-primary-black px-3 py-1 text-primary-white rounded-md">
            talk
          </span>{" "}
          for <br />
          Something <span className="text-primary-black">special</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          {contactConfig.description}
        </p>

        {/* Email */}
        <p className="text-xl font-semibold text-primary-black">
          {contactConfig.email}
        </p>
        <a
          href={`mailto:${contactConfig.email}?subject=Contact&body=Hello,%0D%0A%0D%0AI would like to get in touch!`}
          className="mt-5 inline-block bg-primary-black text-white text-sm font-medium px-6 py-3 rounded-md shadow-md transition duration-300 hover:bg-zinc-700"
        >
          Get In Touch
        </a>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-8">
          <a
            href={contactConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <FaLinkedin size={36} />
          </a>

          <a
            href={contactConfig.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <FaGithub size={36} />
          </a>

          <a
            href={contactConfig.socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            <SiLeetcode size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
