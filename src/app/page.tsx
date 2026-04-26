"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import { CheckCircle, Clock, ShieldCheck } from "lucide-react";

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
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777242493110-4q1is9sd.jpg", alt: "Trust" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777242647831-yhkmn5p8.jpg", alt: "Reliability" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777242493110-4q1is9sd.jpg", alt: "Efficiency" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777242647831-yhkmn5p8.jpg", alt: "Speed" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777242661671-tl9e4vkf.jpg", alt: "Results" }
      ]}
      buttons={[
        { text: "Book a Free Strategy Call", href: "/contact" },
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
          title: "Custom Front Page",          description: "Your very first impression ",          items: [{ icon: CheckCircle, text: "Should show your service, your motto, your contact information. " }],
          reverse: false,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777240935737-k8hdqhab.jpg",            imageAlt: "professional plumbing website design mockup"
          }
        },
        {
          title: "Custom Webpage",          description: "What a potential customer sees right after they scroll down. ",          items: [{ icon: CheckCircle, text: "2Custom WebpageWhat a potential customer sees right after they scroll down. Needs to show your exact services, your business story, and happy customers.  " }],
          reverse: true,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777240975408-3jqbbfjn.jpg",            imageAlt: "professional plumbing website design mockup"
          }
        },
        {
          title: "Custom Footnotes",          description: "Can be the deciding factor for skeptical shoppers",          items: [{ icon: CheckCircle, text: "Information a potential custom might not know. Maintenance intervals, why they should get those done, additional contact form." }],
          reverse: false,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777241219301-i2ugqv24.jpg",            imageAlt: "professional plumbing website design mockup"
          }
        },
      ]}
      title="Built for Growth"
      description="Stop relying on word-of-mouth. We build systems that outrank your local competition."
    />
  </div>

  <div id="transparency" data-section="transparency">
      <FeatureBorderGlow
        useInvertedBackground={true}
        animationType="slide-up"
        title="Transparency & Delivery Guarantee"
        description="We believe in absolute clarity and project success. Here is our commitment to your project."
        textboxLayout="default"
        features={[
          { icon: Clock, title: "24-Hour First Draft", description: "You will receive the first version of your custom website within 24 hours of our initial kickoff call." },
          { icon: Clock, title: "12-24 Hour Edit Turnaround", description: "Requests for changes are handled with speed, typically implemented within 12 to 24 hours of your submission." },
          { icon: ShieldCheck, title: "Full Refund + $500 Guarantee", description: "If your project is not completed within 7 business days, you are entitled to a full refund of your investment plus an additional $500 as a penalty for the delay." }
        ]}
      />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "How fast will I get my website?",          content: "First revisions website is delivered within 24 hours of kickoff call."},
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777242883355-f2142ajq.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CucxvyagfRqUhX1FRecaOnzUjg/uploaded-1777242474080-u5di3awi.jpg"
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
