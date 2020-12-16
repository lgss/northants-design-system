
import React from "react";

import { SectionLinksProps } from "./SectionLinks.types";
import * as Styles from "./SectionLinks.styles";

const SectionLinks: React.FC<SectionLinksProps> = ({ 
    sectionTitle, 
    displayTitle = true, 
    sectionSlug, 
    pageLinksArray 
}) => (
    <Styles.Container id={sectionSlug}>
        {displayTitle && 
            <Styles.SectionTitle text={sectionTitle} />
        }
        <Styles.LinksList>
            {pageLinksArray.map((link) =>
                <Styles.Pagelink 
                    key={link.url} 
                    href={link.url} 
                    title={"Go to " + link.title}
                    target={link.isExternal ? "_blank" : "_self"}
                >
                    <Styles.Title>{link.title}</Styles.Title>
                    <Styles.Summary>{link.summary}</Styles.Summary>
                </Styles.Pagelink>
            )}
            {pageLinksArray.length > 1 && ((pageLinksArray.length + 1) % 3 === 0) &&
                <Styles.PagelinkBlank />
            }
        </Styles.LinksList>
    </Styles.Container>
);

export default SectionLinks;
