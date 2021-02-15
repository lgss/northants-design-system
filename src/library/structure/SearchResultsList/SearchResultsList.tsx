
import React from "react";

import { SearchResultsListProps } from "./SearchResultsList.types";
import * as Styles from "./SearchResultsList.styles";
import SignpostLinksList from "../../components/SignpostLinksList/SignpostLinksList";

const SearchResultsList: React.FC<SearchResultsListProps> = ({ searchTerm, results, totalResults = 0, pageNumber = 0 }) => {

    if(totalResults === 0) {
        return (
            <Styles.Container data-testid="SearchResultsList">
                <Styles.ResultInfo>No results found</Styles.ResultInfo>
            </Styles.Container>
        );
    }
    else {
        return (

            <Styles.Container data-testid="SearchResultsList">


                <Styles.ResultInfo>{(pageNumber+1) > 1 && ("Page " + (pageNumber+1) + " of ")}{totalResults} total results for '{searchTerm}'</Styles.ResultInfo>
                
                {results.map((result,i) => 
                    
                    <Styles.Result key={i}>
                        {result.service && <Styles.ServiceArea>{result.service}</Styles.ServiceArea>}
                        <Styles.Title href={result.link}>{result.title}</Styles.Title>
                        <Styles.Summary>{result.summary}</Styles.Summary>
                        {result.signpostLinksArray &&
                            <Styles.SignpostContainer>
                                <p>Select your local area for information:</p>
                                <SignpostLinksList signpostLinksArray={result.signpostLinksArray} />
                            </Styles.SignpostContainer>
                        }
                    </Styles.Result>
                    
                )}

            
            
    
        </Styles.Container>
        );
    }

}

export default SearchResultsList;

