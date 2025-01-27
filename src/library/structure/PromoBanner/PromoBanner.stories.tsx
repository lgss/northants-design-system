
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PromoBanner from "./PromoBanner";
import { PromoBannerProps } from "./PromoBanner.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "library/Structure/Promo Banner"
};

const Template: Story<PromoBannerProps> = (args) => <SBPadding><PromoBanner {...args}><p>We’re looking for people to come forward and help deliver the Covid-19 vaccination programme in North Northamptonshire.</p></PromoBanner></SBPadding>;


export const PromoBannerExample = Template.bind({});    
PromoBannerExample.args = {
    title: "Volunteer at a local Covid-19 vaccine centre",
    ctaUrl: "/",
    ctaText: "How to become a volunteer",
    imageAltText: "A woman being vaccinated",
    image1440x810: "https://images.unsplash.com/photo-1612277795315-26dd8dcdc8a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    image144x81: "https://imgur.com/lIHCSwV.jpg"
};

