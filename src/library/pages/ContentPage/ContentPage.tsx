
import React from "react";
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

import Divider from '../../slices/Divider/Divider';
import BlockQuote from '../../slices/BlockQuote/BlockQuote';
import DownloadableFiles from "../../slices/DownloadableFiles/DownloadableFiles";


export interface ContentPageProps {

}


export const ContentPage: React.FC<ContentPageProps> = ({  }) => (
    <>
  <PageStructures.SkipToMainContent />
  <PageStructures.Header isHomepage />
  <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="Home page" />

        <p>Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


        <BlockQuote quote="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." citation="Porta Commodo" />
        <p>Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.</p>


        <Divider />

        
        <p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.</p>



        <DownloadableFiles files={[
          {
            title: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
            type: "PDF",
            url: "https://www.google.com/test4.pdf",
            size: "1.2 MB"
          },
          {
              title: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
              type: "PDF",
              url: "https://www.google.com/test5.pdf",
              size: "279.06 KB"
          }
        ]} />

        <p>Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

       
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer 
      footerLinksArray={[
        {
          title: "About",
          url: "/"
        },
        {
          title: "Accessibility",
          url: "/"
        },
        {
          title: "Cookies",
          url: "/"
        },
        {
          title: "Contact us",
          url: "/"
        },
        {
          title: "Jobs",
          url: "/"
        },
        {
          title: "Newsletter",
          url: "/"
        }
      ]}
    />
  </>
);