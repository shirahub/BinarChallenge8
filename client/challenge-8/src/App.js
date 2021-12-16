import './App.css';
import Title from "./components/Title";
import PlayerTable from "./components/PlayerTable";
import {useState, useEffect} from "react";
import Search from "./components/Search";
import AddNewPlayerButton from "./components/AddNewPlayerButton";
import AddNewPlayerModal from "./components/AddNewPlayerModal";
import EditPlayerForm from "./components/EditPlayerForm";

function App() {
    const [input, setInput] = useState('');
    const [listDefault, setListDefault] = useState([]);
    const [list, setList] = useState([]);
    const [player, setPlayer] = useState({})
    const [showAddNewPlayerModal, setShowAddNewPlayerModal] = useState(false);
    const [showEditPlayerForm, setShowEditPlayerForm] = useState(false);

    const fetchData = async () => {
        let data = [
            {
                username: 'player1',
                email: 'player1@email.com',
                experience: 100,
                level: 1
            },
            {
                username: 'player2',
                email: 'player2@email.com',
                experience: 200,
                level: 2
            },
            {
                username: 'player3',
                email: 'player3@email.com',
                experience: 200,
                level: 2
            },
            {
                username: 'shirleen',
                email: 'adriana@email.com',
                experience: 300,
                level: 3
            },
        ]
        await setList(data)
        await setListDefault(data)
    }

    const updateInput = async (input) => {
        const filtered = listDefault.filter(a => {
            return a.username.toLowerCase().includes(input.toLowerCase()) ||
                a.email.toLowerCase().includes(input.toLowerCase()) ||
                a.experience === Number(input) ||
                a.level === Number(input)
        })
        setInput(input);
        setList(filtered);
    }

    const onHideAddNewPlayer = () => {
        setShowAddNewPlayerModal(false)
    }

    const onShowAddNewPlayer = () => {
        setShowAddNewPlayerModal(true)
    }

    const onSubmit = async (newPlayer) => {
        let a = listDefault
        await a.push(newPlayer)
        await setListDefault(a)
        await setList(a)
        await setShowAddNewPlayerModal(false)
    }

    const onSubmitEdit = async (newPlayer) => {
        list[newPlayer.arrayNo] = newPlayer
        await setListDefault(list)
        await setList(list)
        await setShowEditPlayerForm(false)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const onEdit = (player) => {
        setShowEditPlayerForm(true)
        setPlayer(player)
    }

    const onHideEditPlayer = () => {
        setShowEditPlayerForm(false)
    }

    return (
        <div className="App">
            <Title title="Player List"/>
            <Search input={input} onChange={updateInput}/>

            <PlayerTable list={list} onEdit={onEdit}/>
            <AddNewPlayerButton onShow={onShowAddNewPlayer}/>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div style={{flex: "1" }}>
                    {showAddNewPlayerModal ?
                        <AddNewPlayerModal onSubmit={onSubmit} onHide={onHideAddNewPlayer}/> : null
                    }
                </div>
                <div style={{flex: "1" }}>
                    {showEditPlayerForm ?
                        <EditPlayerForm player={player} onSubmit={onSubmitEdit} onHide={onHideEditPlayer}/> : null
                    }
                </div>
            </div>
        </div>
    );
}


export default App;
