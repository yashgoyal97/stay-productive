import react from "react";
import './app-content.css';
import TeamDashboard from "./team-management/script";

const AppContent = () => {
    return (
        <main>
            {/* <div id="backgroundText">
                <h1>STAY PRODUCTIVE</h1>
                <p>Let's Explore And Develop</p>
            </div> */}
            <TeamDashboard></TeamDashboard>
        </main>
    );
};

export default AppContent;