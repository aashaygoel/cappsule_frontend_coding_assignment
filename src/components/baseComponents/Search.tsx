import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, InputBase } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';

const Search = ({
  fetchSearchData,
  setSearch,
  previous,
  setEnterPressed,
  value,
}) => (
  <div className="p-8 border-b-[1px] border-stone-300">
    <InputBase
      value={value}
      type="text"
      placeholder="Type your medicine name here"
      className="shadow-input rounded-[35px] w-[1002px] h-[60px] !font-poppins pt-2 pb-2 pl-10 pr-10"
      onKeyDown={(ev) => {
        if (ev.key === 'Enter') {
          fetchSearchData();
          ev.preventDefault();
        }
      }}
      onChange={(e) => setSearch(e.target.value)}
      endAdornment={
        <InputAdornment position="end">
          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            className="!text-cyan-800 !font-semibold !text-base !tracking-[-0.41px] !font-poppins !normal-case hover:!bg-transparent"
            onClick={fetchSearchData}
          >
            Search
          </Button>
        </InputAdornment>
      }
      startAdornment={
        <InputAdornment position="start">
          {previous ? (
            <EastIcon
              className="rotate-180 cursor-pointer"
              onClick={() => {
                setEnterPressed(false);
                setSearch('');
              }}
            />
          ) : (
            <SearchIcon />
          )}
        </InputAdornment>
      }
    />
  </div>
);

export default Search;
