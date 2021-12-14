import Table from 'react-bootstrap/Table'

const PlayerTable = ({list}) => {
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Experience</th>
                    <th>Level</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, i) => (
                    <tr>
                        <td>{i+1}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.experience}</td>
                        <td>{item.level}</td>
                        <td><button>Edit</button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}

export default PlayerTable;
