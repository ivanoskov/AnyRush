import React, { useEffect, useState } from "react";
import ResponseDataInterface from "../repositories/ResponseDataInterface";
import api from "../api";
import SearchBlock from "../components/search_block";

interface HomeProps{
  ColorModeContext: React.Context<{
    toggleColorMode: () => void;
  }>;
}

function Home() {
  const [data, setData] = useState<ResponseDataInterface>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get.data();
      const responseData: ResponseDataInterface = response;
      setData(responseData);
    };

    fetchData();
  }, []);

  // return <div className='App'>{data ? <p>{data.greeting}</p> : 'no data'}</div>;
  if (!data) {
    return <p>Грузим...</p>;
  }

  return <SearchBlock data={data} />;
}

export default Home;
