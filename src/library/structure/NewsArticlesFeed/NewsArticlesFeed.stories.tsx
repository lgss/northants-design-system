
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import NewsArticlesFeed from "./NewsArticlesFeed";
import { NewsArticlesFeedProps } from "./NewsArticlesFeed.types";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

export default {
    title: "library/Structure/News Articles Feed"
};

const Template: Story<NewsArticlesFeedProps> = (args) => <MaxWidthContainer><NewsArticlesFeed {...args} /></MaxWidthContainer>;

export const ExampleNewsArticlesFeed = Template.bind({});    
ExampleNewsArticlesFeed.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    }
  ]
};


export const ExampleNewsArticlesFeedWithoutTitle = Template.bind({});    
ExampleNewsArticlesFeedWithoutTitle.args = {
  sectionTitle: "Section title",
  displayTitle: false,
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    }
  ]
};


export const NewsArticlesFeed1Link = Template.bind({});    
NewsArticlesFeed1Link.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const NewsArticlesFeed2Links = Template.bind({});    
NewsArticlesFeed2Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    }
  ]
};
export const NewsArticlesFeed3Links = Template.bind({});    
NewsArticlesFeed3Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    }
  ]
};
export const NewsArticlesFeed4Links = Template.bind({});    
NewsArticlesFeed4Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    }
  ]
};
export const NewsArticlesFeed5Links = Template.bind({});    
NewsArticlesFeed5Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    }
  ]
};
export const NewsArticlesFeed6Links = Template.bind({});    
NewsArticlesFeed6Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const NewsArticlesFeed7Links = Template.bind({});    
NewsArticlesFeed7Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const NewsArticlesFeed8Links = Template.bind({});    
NewsArticlesFeed8Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 8", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const NewsArticlesFeed9Links = Template.bind({});    
NewsArticlesFeed9Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 8", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 9", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const NewsArticlesFeed10Links = Template.bind({});    
NewsArticlesFeed10Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 8", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 9", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 10", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const NewsArticlesFeed11Links = Template.bind({});    
NewsArticlesFeed11Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 8", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 9", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 10", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 11", 
      summary: "summary", 
      url: "/"
    }
  ]
};