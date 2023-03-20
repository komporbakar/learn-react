import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import PlaceContentCenter from "./components/PlaceContentCenter";
import Todo from "./components/Todo";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      try {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("Something went wrong");
        setLoading(false);
      }
    }
    getUsers().then((r) => r);
  }, []);

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Users: {users.length}</Card.Title>
        <Card.Body>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ol>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} ({user.username})
                </li>
              ))}
            </ol>
          )}
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </PlaceContentCenter>
  );
}
