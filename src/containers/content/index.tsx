import React from 'react'
import { HeroSection } from "@/containers/hero-section";
import { AboutView } from "@/components/about";
import { WorkView } from "../work";
import { InterestView } from "@/components/interest";
import { ContactView } from "@/components/contact";
import { AnimatedText } from "@/components/animated-text";
import '../../sass/_style.scss';
import { SocialMediaSection } from "@/containers/social-media";
import { useMediaQuery } from '@mui/material';

export const Content = () => {
    const isMobile = useMediaQuery("(max-width: 599px)");
    return (
        <div className="sm:ml-64 content-container">
            <HeroSection />
            <div className="content-container-limited-width">
                <AboutView/>
                <InterestView />
                <WorkView />
                <SocialMediaSection />
                {!isMobile && <AnimatedText />}
                {/* <BlogView /> */}
                <ContactView />
            </div>
        </div>
    );
}
