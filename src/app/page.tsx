"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, BarChart3, CheckCircle, ClipboardList, DollarSign, Sparkles, Star, Target, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="compact"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "Results", id: "results" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Start Now", href: "contact" }}
          brandName="Rize Financial"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Your Second Chance Starts Today"
          description="Let's help you unlock new opportunities with expert credit repair and funding strategies. Our proven process has helped thousands restore their financial confidence."
          tag="Credit Repair Solutions"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQzoj29wXnmZL7I0lqwKhA2SM2/uploaded-1772541756005-i1d7tli4.jpg?_wi=1"
          imageAlt="Professional financial services"
          imagePosition="right"
          mediaAnimation="slide-up"
          testimonials={[]}
          buttons={[
            { text: "Repair My Credit Now", href: "contact" },
            { text: "Learn More", href: "services" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
          fixedMediaHeight={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Rize Financial"
          tagIcon={Shield}
          tagAnimation="slide-up"
          title="Real People, Real Results, Real Financial Freedom."
          useInvertedBackground={true}
          buttons={[
            { text: "See Our Difference", href: "results" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFive
          title="Our Credit Repair Services"
          description="Comprehensive solutions designed to repair, rebuild, and restore your financial future"
          tag="Services"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Credit Repair",              description: "Fast-track your score and clean up old debt with expert dispute strategies and compliance",              icon: TrendingUp,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-vector/credit-score-gauge-meter-concept-finance-display_1017-59562.jpg", imageAlt: "Credit score improvement" },
                { imageSrc: "http://img.b2bpic.net/free-photo/cut-out-business-scene_23-2147626414.jpg", imageAlt: "Debt management" }
              ]
            },
            {
              title: "Funding Solutions",              description: "More approvals, less denials with the right credit structure and strategic planning",              icon: DollarSign,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/loan-approved-application-form-concept_53876-127383.jpg", imageAlt: "Funding approval" },
                { imageSrc: "http://img.b2bpic.net/free-photo/goals-target-aspiration-perforated-paper-graph_53876-30305.jpg", imageAlt: "Business growth" }
              ]
            },
            {
              title: "Financial Consulting",              description: "Expert guidance on credit building, debt management, and long-term wealth strategies",              icon: BarChart3,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/agent-evaluating-clients-financial-needs-performing-analysis-meeting_482257-115576.jpg", imageAlt: "Financial planning" },
                { imageSrc: "http://img.b2bpic.net/free-photo/manager-woman-leading-brainstorming-meeting_58466-11714.jpg", imageAlt: "Strategy session" }
              ]
            },
            {
              title: "Affiliate Program",              description: "Refer clients and earn 15% recurring commission with our trusted partnership program",              icon: Users,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/first-day-new-job_1098-750.jpg", imageAlt: "Partnership benefits" },
                { imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-happy-expression_1194-4762.jpg", imageAlt: "Earning potential" }
              ]
            }
          ]}
        />
      </div>

      <div id="results" data-section="results">
        <div style={{ overflow: "auto" }}>
          <MetricCardOne
            title="Proven Results That Speak"
            description="Our track record of success demonstrates real impact on real lives"
            tag="Results"
            tagIcon={Award}
            tagAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            animationType="scale-rotate"
            gridVariant="uniform-all-items-equal"
            metrics={[
              {
                id: "1",                value: "5000+",                title: "Clients Helped",                description: "Families and businesses restored to financial health",                icon: Users
              },
              {
                id: "2",                value: "127",                title: "Avg. Score Increase",                description: "Average credit score improvement in 6 months",                icon: TrendingUp
              },
              {
                id: "3",                value: "98%",                title: "Success Rate",                description: "Client satisfaction with our proven methodology",                icon: CheckCircle
              },
              {
                id: "4",                value: "$50M+",                title: "Funding Secured",                description: "Total funding unlocked for our clients",                icon: DollarSign
              }
            ]}
          />
        </div>
      </div>

      <div id="howitworks" data-section="howitworks">
        <FeatureCardTwentyFive
          title="How Our Process Works"
          description="Four simple steps to financial restoration and renewed confidence"
          tag="Process"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Step 1: Assessment",              description: "We analyze your credit report, identify issues, and create a personalized roadmap",              icon: ClipboardList,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/business-people-meeting-office-writing-memos-sticky-notes_1150-37739.jpg", imageAlt: "Credit assessment" },
                { imageSrc: "http://img.b2bpic.net/free-photo/executive-workspace-features-digital-dashboard-with-financial-charts_482257-123845.jpg", imageAlt: "Analysis tools" }
              ]
            },
            {
              title: "Step 2: Strategy",              description: "Our experts develop a targeted credit repair and funding strategy just for you",              icon: Target,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/business-people-meeting_53876-25158.jpg", imageAlt: "Strategy planning" },
                { imageSrc: "http://img.b2bpic.net/free-photo/business-people-meeting_53876-13583.jpg", imageAlt: "Strategy session" }
              ]
            },
            {
              title: "Step 3: Execution",              description: "We handle disputes, negotiations, and all required follow-ups with credit bureaus",              icon: Zap,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/corporate-employees-examining-organizational-progress-meeting_482257-104402.jpg", imageAlt: "Execution phase" },
                { imageSrc: "http://img.b2bpic.net/free-photo/business-meeting-cafe_53876-94719.jpg", imageAlt: "Bureau communication" }
              ]
            },
            {
              title: "Step 4: Results",              description: "Monitor progress, celebrate wins, and unlock new financial opportunities",              icon: CheckCircle,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/successful-happy-business-team_53876-15146.jpg", imageAlt: "Success results" },
                { imageSrc: "http://img.b2bpic.net/free-photo/successful-beautiful-asian-business-woman-holding-money-us-dollar-bills-hand-business-concept_1150-15385.jpg", imageAlt: "Financial freedom" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Clients Say"
          description="Real stories from real people who transformed their financial futures with Rize Financial"
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Marcus Johnson, Chicago IL",              date: "Date: October 2024",              title: "From Rejected to Approved in 6 Months",              quote: "RIZE increased my credit score by 127 points in just 6 months. I was getting rejected for every loan until they helped me. Now I own my own home. I can't thank them enough for believing in my comeback.",              tag: "Home Owner",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              avatarAlt: "Marcus Johnson",              imageSrc: "http://img.b2bpic.net/free-photo/couple-laying-down-floor-their-new-apartment-boyfriend-giving-keys-his-girlfriend_482257-22238.jpg",              imageAlt: "Success story"
            },
            {
              id: "2",              name: "Sarah Martinez, Austin TX",              date: "Date: September 2024",              title: "Professional and Transparent Process",              quote: "What impressed me most was their transparency. They walked me through every single step, explained everything clearly, and actually delivered results. Best investment I made for my future.",              tag: "Business Owner",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",              avatarAlt: "Sarah Martinez",              imageSrc: "http://img.b2bpic.net/free-photo/sad-dismissed-man-holding-box-with-belongings-after-being-fired-while-his-collegues-looking-hom-working-startup-office-businesspeople-brainstorming-ideas-developing-marketing-project_482257-40109.jpg",              imageAlt: "Business success"
            },
            {
              id: "3",              name: "David Chen, Seattle WA",              date: "Date: August 2024",              title: "Got My Life Back On Track",              quote: "After years of financial struggles, RIZE gave me hope and a concrete plan. My score went up, I refinanced my car at a much better rate, and now I have options I never thought possible.",              tag: "Financial Freedom",              avatarSrc: "http://img.b2bpic.net/free-photo/profile-portrait-young-asian-businessman_1262-1572.jpg",              avatarAlt: "David Chen",              imageSrc: "http://img.b2bpic.net/free-photo/jars-with-money-yellow-piggy-bank_23-2148305985.jpg",              imageAlt: "Financial recovery"
            },
            {
              id: "4",              name: "Jennifer Lopez, Miami FL",              date: "Date: July 2024",              title: "Exceeded All My Expectations",              quote: "I came to RIZE skeptical after being burned before. Their team was patient, professional, and truly cared about my situation. They delivered exactly what they promised and more.",              tag: "Debt Free",              avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-young-businesswoman-smiling-camera_74855-3966.jpg",              avatarAlt: "Jennifer Lopez",              imageSrc: "http://img.b2bpic.net/free-photo/horizontal-shot-happy-carefree-woman-with-curly-hair-keeps-arms-raised-up-enjoys-life-poses-daytime-city-wears-jacket-jeans-looks-overhead-has-cheerful-expression_273609-55849.jpg",              imageAlt: "Debt freedom"
            },
            {
              id: "5",              name: "Robert Williams, Denver CO",              date: "Date: June 2024",              title: "Worth Every Penny",              quote: "The ROI on using RIZE's services was immediate. I qualified for business funding I never could have gotten before. This has been life-changing for my company.",              tag: "Business Funding",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              avatarAlt: "Robert Williams",              imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-desk-celebrating-achievements_1163-5467.jpg",              imageAlt: "Business growth"
            },
            {
              id: "6",              name: "Michelle Rodriguez, Los Angeles CA",              date: "Date: May 2024",              title: "A Second Chance at Life",              quote: "I felt hopeless until I found RIZE. They showed me that my past doesn't define my future. Now I have better rates, better terms, and better peace of mind.",              tag: "New Beginning",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg",              avatarAlt: "Michelle Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/sprout-makes-way-through-sand_1398-3828.jpg",              imageAlt: "New opportunities"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="Ready for Your Financial Transformation?"
          description="Start your journey to better credit and new opportunities today—with zero obligation. Our team is ready to help you succeed."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQzoj29wXnmZL7I0lqwKhA2SM2/uploaded-1772541756005-i1d7tli4.jpg?_wi=2"
          imageAlt="Financial success"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Claim Your Free Credit Analysis"
          termsText="We respect your privacy. Your consultation request will be handled securely. Zero obligation—just expert guidance to help you succeed."
          mediaWrapperClassName="w-full h-full object-cover object-center"
          mediaClassName="w-full h-full object-cover object-center"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText=""
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "© 2024 Rize Financial. All rights reserved.", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}