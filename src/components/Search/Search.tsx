import React, { FunctionComponent, useState } from "react";
import { motion } from 'framer-motion';
import './Search.scss';

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
      whileTap={{scale: .96, originX: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
        >
            <input
              className="searchInput"
              placeholder="Search..."
              aria-label="Search"
              value={query}
              id="search-input"
              onChange={handleChange}
            />
    </motion.div>
  );
};

export default Search;