import updateTeamsReducer from "./updateTeams";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    updateTeams: updateTeamsReducer
});

export default allReducers;