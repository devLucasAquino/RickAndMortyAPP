import React, { useState } from "react";
import { Header } from "./src/components/header";
import { Main } from "./src/components/main";

export function App(): React.JSX.Element {
  const [ search, setSearch ] = useState<string | null>(null);

  return(
    <>
      <Header 
        setSearch={setSearch}
      />
      <Main 
        search={search}
      />
    </>
  )
};