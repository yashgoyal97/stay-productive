import react from "react";
import AppFooter from "./static/script/app-footer";
import AppHeader from "./static/script/app-header";
import AppNavigator from "./static/script/app-navigator";
import TeamDashboard from "./team-management";

const StayProductive = () => {
    return (
        <div>
            <AppHeader></AppHeader>
            <AppNavigator></AppNavigator>
            <TeamDashboard></TeamDashboard>
            <AppFooter></AppFooter>
        </div>
    );
};

export default StayProductive;