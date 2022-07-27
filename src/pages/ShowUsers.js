import {useUserContext} from '../context/UserContextProvider';
import Users from "../components/User";

const ShowUsers = () => {

  //?users biilgisini context ten okuduk
  const {users, changeWidth} = useUserContext()
  
  return (
    <div>
      <h2>Userrr List</h2>
      {users?.map((user)=>(
       <Users key={user.id} user={user} changeWidth= {changeWidth}/>
      ))}
    </div>
  )
}

export default ShowUsers