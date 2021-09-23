import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../style/teams.css';

const Teams = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [teams, setTeams] = useState([]);

    const updateTeams = useSelector(state => state.updateTeams);

    const dispatch = useDispatch();

    useEffect(() => {
        if (updateTeams) {
            dispatch({ type: 'NO' });
            fetch('http://localhost:8000/teams')
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setTeams(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        } else {
            setIsLoaded(true);
        }
    }, [updateTeams]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        if (teams.length) {
            return (
                <div>
                    {teams.map((team) => {
                        return (
                            <div key={team.id}>{team.name}: {team.motto}</div>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    No Teams Available
                </div>
            );
        }
    }
};

export default Teams;