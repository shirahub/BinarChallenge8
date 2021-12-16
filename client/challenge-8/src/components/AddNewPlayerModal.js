import {useState} from "react";

const AddNewPlayerModal = ({onHide, onSubmit}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState(0);

    return (

        <>
            <br/>
            <h2>Add New Player</h2>
            <form>
                <label>
                    Username :
                    <input
                        name="username"
                        onChange={event => setUsername(event.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Email :
                    <input
                        name="email"
                        onChange={event => setEmail(event.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Experience :
                    <input
                        name="experience"
                        type="number"
                        onChange={event => setExperience(Number(event.target.value))}
                    />
                </label>
            </form>
            <button onClick={() => onSubmit({
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

export default AddNewPlayerModal;


