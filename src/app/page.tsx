"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import { CheckCircle } from "lucide-react";

export default function LandingPage() {
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

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars"
      }}
      title="Your Business Deserves a Website That Works as Hard as You Do"
      description="Professional web design built for US trades. First draft in 24 hours. Packages starting as low as $1,000."
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0hu8fv", alt: "Trust" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xqecrq", alt: "Reliability" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0hu8fv", alt: "Efficiency" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xqecrq", alt: "Speed" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4lwc57", alt: "Results" }
      ]}
      buttons={[
        { text: "Book a Free Strategy Call", href: "/contact" },
        { text: "View Our Packages", href: "#pricing" },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        { type: "text", text: "Plumbing" },
        { type: "text", text: "Electrical" },
        { type: "text", text: "HVAC" },
        { type: "text", text: "Roofing" },
        { type: "text", text: "Landscaping" },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Custom Front Page",          description: "Tailored interfaces for trades",          items: [{ icon: CheckCircle, text: "1Custom Front PageTailored interfaces for tradesWhich shows your services, your experience, your contact information. " }],
          reverse: false,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gnfjwp",            imageAlt: "professional plumbing website design mockup"
          }
        },
        {
          title: "Custom Webpage",          description: "Get found on Google maps",          items: [{ icon: CheckCircle, text: "Aka  " }],
          reverse: true,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ym22tz",            imageAlt: "professional plumbing website design mockup"
          }
        },
        {
          title: "Content Strategy",          description: "Done-for-you copywriting",          items: [{ icon: CheckCircle, text: "Professional voice" }],
          reverse: false,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=eo8y84",            imageAlt: "professional plumbing website design mockup"
          }
        },
      ]}
      title="Built for Growth"
      description="Stop relying on word-of-mouth. We build systems that outrank your local competition."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",          price: "$1,000",          name: "Starter",          features: ["3 Pages", "Mobile First", "24h Draft"],
          buttons: [{ text: "Select Starter", href: "/contact" }],
        },
        {
          id: "growth",          price: "$1,750",          name: "Growth",          badge: "Most Popular",          features: ["5 Pages", "SEO Included", "24h Draft"],
          buttons: [{ text: "Select Growth", href: "/contact" }],
        },
        {
          id: "premium",          price: "$2,500",          name: "Premium",          features: ["10 Pages", "Lead Gen", "24h Draft"],
          buttons: [{ text: "Select Premium", href: "/contact" }],
        },
      ]}
      title="Transparent Pricing"
      description="Get your business online in 8 days."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "How fast will I get my website?",          content: "Your first draft is delivered within 24 hours of your kickoff call."},
        {
          id: "f2",          title: "How many revisions do I get?",          content: "Unlimited reasonable revisions within a 7-day window."},
        {
          id: "f3",          title: "What trades do you work with?",          content: "Plumbers, Electricians, HVAC, Roofers, and more."},
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="Ready to scale?"
      title="Start Winning More Jobs Online"
      description="Schedule a strategy call today."
      mediaAnimation="slide-up"
      mediaPosition="right"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4lwc57&_wi=1"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4lwc57&_wi=2"
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
