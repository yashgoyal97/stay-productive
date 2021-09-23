import DashboardHeader from "../../static/script/dashboard-header";
import '../style/index.css';
import Teams from "./teams";

const TeamDashboard = () => {

    return (
        <div id="teamContainer">
            <DashboardHeader name="Teams Dashboard" btnName="Add Team" btnId="addTeam"></DashboardHeader>
            <hr></hr>
            <Teams></Teams>
        </div>
    );
};

export default TeamDashboard;