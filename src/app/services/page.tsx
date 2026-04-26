"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { CheckCircle, Users, Zap } from "lucide-react";

export default function ServicesPage() {
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

  <div id="services-body" data-section="services-body">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Custom Design",          description: "Bespoke look and feel",          items: [
            { icon: CheckCircle, text: "Unique assets" },
          ],
          reverse: false,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zo144z",            imageAlt: "professional plumbing website design mockup"
          }
        },
        {
          title: "Local SEO",          description: "Rank in your area",          items: [
            { icon: CheckCircle, text: "Google optimized" },
          ],
          reverse: true,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=55e7wn",            imageAlt: "professional plumbing website design mockup"
          }
        },
      ]}
      title="Comprehensive Web Services"
      description="We don't just design; we build growth systems."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Optimization Highlights"
      description="See why top-tier trade businesses trust our workflow."
      features={[
        {
          title: "Speed",          description: "Blazing fast load times",          items: [
            { icon: Zap, text: "Optimized images" },
          ],
          reverse: false,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zo144z",            imageAlt: "professional plumbing website design mockup"
          }
        },
        {
          title: "Accessibility",          description: "Compliance standards",          items: [
            { icon: Users, text: "WCAG standards" },
          ],
          reverse: true,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=55e7wn",            imageAlt: "professional plumbing website design mockup"
          }
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4lwc57"
      logoText="Clearline Digital"
      columns={[
        {
          title: "Navigation",          items: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ],
        },
        {
          title: "Support",          items: [
            { label: "Contact", href: "/contact" },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
