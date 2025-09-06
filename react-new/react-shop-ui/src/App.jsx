import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CmsRoutes } from "./routes/CmsRoutes";

function App() {
    return (
        <BrowserRouter>
            <CmsRoutes />
        </BrowserRouter>
    );
}

export default App;
