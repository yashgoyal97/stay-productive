import react from "react";
import AppContent from "./app-content";
import AppFooter from "./static/script/app-footer";
import AppHeader from "./static/script/app-header";

const StayProductive = () => {
    return (
        <div id="container">
            <AppHeader></AppHeader>
            <AppContent></AppContent>
            <AppFooter></AppFooter>
        </div>
    );
};

export default StayProductive;