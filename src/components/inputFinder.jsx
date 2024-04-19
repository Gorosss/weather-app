import {useState, useEffect} from 'react';

import debounce from 'just-debounce-it'


export function InputFinder({ location, onChangeLocation }) {

    const [inputValue, setInputValue] = useState(location);

    useEffect(() => {
      const debouncedOnChangeLocation = debounce(onChangeLocation, 250); // Adjust the delay as needed (in milliseconds)
  
      debouncedOnChangeLocation(inputValue);
  
    }, [inputValue]);

    const handleOnChangeLocation = (e) => {
      setInputValue(e.target.value);
    };
    


    return (
      <div>
        <input
          type="text"
          placeholder="Search from location..."
          value={inputValue}
          onChange={handleOnChangeLocation}
        />
      </div>
    );
  }
  