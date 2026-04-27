"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactForm from '@/components/form/ContactForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function ContactPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "/" },
        { name: "Services", id: "/services" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="Clearline Digital"
      button={{
        text: "Book a Call",        href: "/contact"}}
    />
  </div>

  <div id="contact-form" data-section="contact-form">
      <ContactForm
      title="Get in Touch"
      description="Fill out the form below and we'll reach out to learn more about your needs."
      tag="Contact Us"
      onSubmit={(email) => alert("Thanks for your inquiry. Our team will be reaching out shortly. Have a great day!")}
      inputPlaceholder="Enter your email"
      buttonText="Submit Inquiry"
      useInvertedBackground={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      sideTitle="Booking Details"
      faqsAnimation="slide-up"
      faqs={[
        {
          id: "b1",          title: "How long is the call?",          content: "15 to 30 minutes, focused on your business needs."},
        {
          id: "b2",          title: "Do I need to prepare anything?",          content: "Just bring a list of your current challenges."},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777316588997-rjqtn0t2.jpg"
      logoText="Clearline Digital"
      columns={[
        {
          title: "Navigation",          items: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ],
        },
        {
          title: "Support",          items: [{ label: "Contact", href: "/contact" }],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}