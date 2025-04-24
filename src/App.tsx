import { useFilteredUsers } from "./hooks/useFilteredUsers";
import { FilterInput } from "./components/FilterInput";
import UserList from "./components/UserList";
const App = () => {
  const { filter, setFilter, filteredUsers } = useFilteredUsers();

  return (
    <div>
      <h4>Список пользователей</h4>
      <FilterInput value={filter} onChange={setFilter} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
