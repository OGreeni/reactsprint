import React from 'react';

import { StyledInput } from '@components/styled';

interface Props {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function Searchbar({ searchQuery, setSearchQuery }: Props) {
  return (
    <div className="relative mx-auto mt-3 w-max  text-purple-900">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute right-3 top-2 h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <StyledInput
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        name="search"
        id="search"
        className="w-full max-w-none rounded-md bg-white/10 p-2 text-purple-900"
        placeholder="Search"
      />
    </div>
  );
}
