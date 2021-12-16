import {useState} from "react";

const EditPlayerForm = ({player, onHide, onSubmit}) => {
    const [username, setUsername] = useState(player.username ? player.username : '');
    const [email, setEmail] = useState(player.email ? player.email : '');
    const [experience, setExperience] = useState(player.experience ? player.experience : 0);

    return (
        <>
            <br/>
            <form>
                <h2>Edit Player</h2>
                <label>
                    Username :
                    <input
                        name="username"
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    />
                </label>
                <br/>
                <label>
                    Email :
                    <input
                        name="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                </label>
                <br/>
                <label>
                    Experience :
                    <input
                        name="experience"
                        type="number"
                        onChange={event => setExperience(Number(event.target.value))}
                        value={experience}
                    />
                </label>
            </form>
            <button onClick={() => onSubmit({
                arrayNo : player.arrayNo,
                username: username,
                email: email,
                experience: experience,
                level: experience ? Math.floor(experience/1000) : 0
            })}>Submit
            </button>
            <button onClick={() => onHide()}>Close</button>
        </>
    );
}

export default EditPlayerForm;


