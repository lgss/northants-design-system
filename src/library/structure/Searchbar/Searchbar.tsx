
import React, {useState} from "react";

import { SearchbarProps } from "./Searchbar.types";
import * as Styles from "./Searchbar.styles";

import {handleParams} from './../../helpers/url-helpers.js';

import SearchIcon from '../../components/icons/SearchIcon/SearchIcon';
import CloseIcon from '../../components/icons/CloseIcon/CloseIcon';

import { NewsArticleFilterFields } from "./../NewsArticleFilterAccordion/NewsArticleFilterAccordionText"

const Searchbar: React.FC<SearchbarProps> = ({placeholder, isLight, isLarge, searchTerm, submitInfo, id="search"}) => { 

    let classes = '';
    classes += (isLight) ? " is-light" : "";
    classes += (isLarge) ? " is-large" : "";

  const {postTo, params} = submitInfo[0];
  const initialValues = {searchTerm: (searchTerm === undefined) ? "" : searchTerm}


  const [inputs, setInputs] = useState(initialValues);
  
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    let submitParams = params;

    if(inputs.searchTerm !== searchTerm || !(NewsArticleFilterFields.search.queryParamKey in submitParams)) {
      submitParams = {...submitParams, searchTerm: inputs.searchTerm}
      let keyValueFormat = Object.keys(submitParams).map(function(key) {
          return {key, value: submitParams[key]};
      })
      handleParams(postTo, keyValueFormat);
    }
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }



  const handleReset = (event) => {
    if (event) event.preventDefault();

    let newSearchTermValue = '';

    let submitParams = params;

    // update inputs value to update text field
    setInputs(inputs => ({...inputs, [NewsArticleFilterFields.search.queryParamKey]: newSearchTermValue}));


    // TODO only resubmit when the currently entered input value is different to the current one
    if(inputs.searchTerm !== searchTerm || !(NewsArticleFilterFields.search.queryParamKey in submitParams)) {
        // resubmit with new empty searchTerm field
        submitParams = {...submitParams, searchTerm: newSearchTermValue}
        let keyValueFormat = Object.keys(submitParams).map(function(key) {
            return {key, value: submitParams[key]};
        })
        
        handleParams(postTo, keyValueFormat);
    }

  }


    return (
        <Styles.Container data-testid="Searchbar" className={classes}>
            <Styles.Form onSubmit={handleSubmit} onReset={handleReset}>
                <Styles.Search role="search">
                    <Styles.Label htmlFor={id}>{placeholder ? placeholder : 'Search'}</Styles.Label>
                    <Styles.InputWrapper>
                        <Styles.Input id={id} type="text" name={NewsArticleFilterFields.search.queryParamKey} placeholder={placeholder ? placeholder : 'Search'} onChange={handleInputChange}  value={inputs.searchTerm} />
                        {inputs.searchTerm && 
                        <Styles.ClearButton type="reset" value="Clear Search">
                            <CloseIcon colourFill="#111" />
                            <Styles.ButtonText>Clear Search term</Styles.ButtonText>
                        </Styles.ClearButton>
                        }
                        <Styles.Button type="submit" value="Search">
                            <SearchIcon colourFill="#fff" />
                            <Styles.ButtonText>Search</Styles.ButtonText>
                        </Styles.Button>
                    </Styles.InputWrapper>
                </Styles.Search>
            </Styles.Form>
        </Styles.Container>
    );
}

export default Searchbar;
