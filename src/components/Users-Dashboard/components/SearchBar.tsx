import React, { memo } from "react";
import { SearchBarProps } from "../types/User";

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  // console.log("Search Rendered")
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
    />
  );
};

export default memo(SearchBar);
