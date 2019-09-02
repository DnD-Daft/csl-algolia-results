import React, { useRef, useEffect } from "react";

import formatDropdownValue from "places.js/src/formatDropdownValue";
import formatInputValue from "places.js/src/formatInputValue";
import places from "places.js";

const transformSuggestion = suggestion => {
  return {
    ...suggestion,
    country: "Definitely not France",
    highlight: {
      ...suggestion.highlight,
      country: "Definitely not France"
    }
  };
};

const templates = {
  value: suggestion => {
    return formatInputValue(transformSuggestion(suggestion));
  },
  suggestion: suggestion => {
    return formatDropdownValue(transformSuggestion(suggestion));
  }
};

const PlacesDemo = () => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      places({
        container: inputRef.current,
        templates
      });
    }
  }, []);

  return <input ref={inputRef} />;
};

export default PlacesDemo;
