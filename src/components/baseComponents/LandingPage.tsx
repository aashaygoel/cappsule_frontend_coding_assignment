import React, { useState } from 'react';
import { DataType } from '../../types';
import { getDataOnSearch } from './../../util/fetchData';
import SaltList from './SaltList';
import Search from './Search';
const LandingPage = () => {
  const [search = '', setSearch] = useState('');
  const [enterPressed, setEnterPressed] = useState(false);
  const [data, setData] = useState<DataType>();
  const fetchSearchData = async () => {
    const { data }: DataType | any = await getDataOnSearch(search);
    setData(data);
    setEnterPressed(true);
  };
  return (
    <div className="flex flex-col flex-wrap content-center items-center pb-10">
      <p className="mt-16 font-normal	text-2xl/9">
        Cappsule web development test
      </p>
      <Search
        fetchSearchData={fetchSearchData}
        setSearch={setSearch}
        previous={enterPressed && data?.saltSuggestions?.length}
        setEnterPressed={setEnterPressed}
        value={search}
      />
      {!enterPressed ? (
        <p className="font-semibold	text-xl text-zinc-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]">
          “Find medicines with amazing discount”
        </p>
      ) : enterPressed && data?.saltSuggestions?.length ? (
        <SaltList data={data} />
      ) : (
        <p className="font-semibold	text-xl text-zinc-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]">
          “Sorry we did not find any matching results”
        </p>
      )}
    </div>
  );
};

export default LandingPage;
