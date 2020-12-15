import React, { FunctionComponent, useState } from "react";
import { motion } from 'framer-motion';

interface Props {
  onSearch(query: string): void;
}

const Search: FunctionComponent<Props> = props => {
  const { onSearch } = props;
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
    setQuery(event.target.value);
  }

  return (
    <motion.div
      initial={{y: -250}}
      animate={{y: 0}}
        >
        <div> 
          {/* <inputgr className="mb-3"> */}
            <input
              className="searchInput"
              placeholder="Search..."
              aria-label="Search"
              value={query}
              id="search-input"
              onChange={handleChange}
            />
          {/* </InputGroup> */}
      </div> 
    </motion.div>
  );
};

export default Search;