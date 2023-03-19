import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  const type = "submit";
  const onClick = () => console.log("login success");
  return (
    <div
      className={
        "flex bg-slate-100 text-slate-800 tracking-tight antialiased items-center justify-center min-h-screen"
      }
    >
      <div className={"max-w-md w-full"}>
        <Card>
          <Card.Title>Hello, React</Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            fugiat repudiandae nisi est rem vel facere nihil fugit quae. Esse
            assumenda explicabo similique voluptas quibusdam doloribus sit
            aliquam neque
          </Card.Body>
          <Card.Footer>
            <Button>Backend</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
