import React from "react";
import Layout from '../Layouts/LayoutLanding';
import SobreMi from "../SobreMi/SobreMi";

function Home() {

  return (
    <div className="h-screen flex flex-col mt-2" >
      
      <Layout main="h-full max-w-screen-xl flex m-auto">
        <SobreMi/>
      </Layout>

    </div>
  );
}

export default Home;
