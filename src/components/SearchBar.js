import React, { useState } from "react";
import axios from "axios";
import SelectSearch from "react-select-search";
import { useHistory } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  let history = useHistory();
  const [options, setOptions] = useState([]);
  const getOptions = async (query) => {
    try {
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/breeds/search",
        {
          headers: { "x-api-key": process.env.REACT_APP_CATAPI_KEY },
          params: {
            q: query,
          },
        }
      );
      if (!data.length) {
        setTimeout(() => {
          setOptions([]);
        }, 4000);
        return [
          {
            name: "No breeds found",
            disabled: true,
            value: "",
          },
        ];
      }
      return data.map(({ name, id }) => ({ value: id, name }));
    } catch (e) {
      console.error(e);
    }
  };
  const debounced = useDebouncedCallback(async (query) => {
    setOptions(await getOptions(query));
  }, 1250);
  return (
    <SelectSearch
      renderValue={(valueProps) => (
        <>
          <input
            {...valueProps}
            className="w-full px-4 py-3 sm:h-16 sm:px-9 sm:py-6 rounded-full bg-white text-left outline-none cursor-pointer"
          />
          <i className="material-icons text-text-main absolute left-80 top-20 sm:left-90 sm:top-35">
            search
          </i>
        </>
      )}
      onChange={(value) => {
        history.push(`/cats/${value}`);
      }}
      options={options}
      getOptions={(query) => debounced.callback(query)}
      search
      placeholder="Search"
    />
  );
};

export default SearchBar;
