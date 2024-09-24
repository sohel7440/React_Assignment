import { User } from "../interfaces/User";


interface usersProps{
    users:User[]
}

const TableComponent:React.FC<usersProps>=({users})=>{
    return(

        <div>
            <table className="table table-striped">
                <thead>
                    <th>SL.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>(
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default TableComponent;