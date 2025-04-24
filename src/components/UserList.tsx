import User from "../interfaces/User";

type UsersProps = {
  users: User[];
};

const UserList = ({ users }: UsersProps) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Address</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <a href={`http://${user.website}`} target="_blank">
              {user.website}
            </a>
          </td>
          <td>
            {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </td>
          <td>
            {user.company.name} <br />
            {user.company.catchPhrase} <br />
            {user.company.bs}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserList;

