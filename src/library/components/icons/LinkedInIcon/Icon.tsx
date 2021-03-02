import React from "react";

import { IconProps } from "../services/Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {

    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.4286 0H2.56339C1.14911 0 0 1.16518 0 2.59554V33.4045C0 34.8348 1.14911 36 2.56339 36H33.4286C34.8429 36 36 34.8348 36 33.4045V2.59554C36 1.16518 34.8429 0 33.4286 0ZM10.8804 30.8571H5.54464V13.6768H10.8884V30.8571H10.8804ZM8.2125 11.3304C6.50089 11.3304 5.11875 9.94018 5.11875 8.23661C5.11875 6.53304 6.50089 5.14286 8.2125 5.14286C9.91607 5.14286 11.3062 6.53304 11.3062 8.23661C11.3062 9.94821 9.92411 11.3304 8.2125 11.3304ZM30.8812 30.8571H25.5455V22.5C25.5455 20.5071 25.5054 17.9438 22.7732 17.9438C19.9929 17.9438 19.567 20.1134 19.567 22.3554V30.8571H14.2313V13.6768H19.35V16.0232H19.4223C20.1375 14.6732 21.8813 13.2509 24.4768 13.2509C29.8768 13.2509 30.8812 16.8107 30.8812 21.4393V30.8571Z" fill={colourFill} />
        </svg>
    )
} 


export default ServiceIcon;
