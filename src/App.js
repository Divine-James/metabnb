import React from "react";
import CustomRoutes from "./routes/Routes";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";
function App() {
  return (
    <>
      <CustomRoutes
        components={[
          { item: <Home />, path: "/" },
          { item: <PlaceToStay />, id: 2, path: "/place_to_Stay" },
          { item: <h1>Contact</h1>, id: 3, path: "/contact" },
        ]}
      />
    </>
  );
}

export default App;
