import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";

function SharedLayout() {
    return (
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
    );
}

export default SharedLayout;