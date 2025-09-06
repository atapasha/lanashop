import { Route, Routes } from "react-router-dom";
import DashboardIndex from "../pages/cms/dashboard";
import { CmsLayout } from "../layouts/CmsLayout";

export const CmsRoutes = () => (
    <Routes>
        <Route path="/cms" element={<CmsLayout />} />
     <Route index  element={ <DashboardIndex/>}  />

    </Routes>
);

export default CmsRoutes;
