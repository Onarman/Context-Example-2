import { useUserContext } from '../context/UserContextProvider';

const Users = ({ user }) => {
  
  //?Destructring
  const { id, login, avatar_url, width } = user;


  //? context ile fonk çağırıldı
  const { changeWidth } = useUserContext();
  return (
    <div>
      <h3>{login}</h3>
      <img src={avatar_url} alt="" width={width} />
      <div>
        <label htmlFor="width">Image width(px)</label>
        <input
          id="width"
          type="number"
          value={width}
          onChange={(e) => changeWidth(id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default Users;
