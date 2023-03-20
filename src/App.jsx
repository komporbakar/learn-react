import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import PlaceContentCenter from "./components/PlaceContentCenter";
import Todo from "./components/Todo";

export default function App() {
  // const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [online, setOnline] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scroll);
  //Jika di panggil maka setiap klik akan manambah
  useEffect(() => {
    // console.log("I always remember");
  });
  //Jika dipanggil maka nilai tidak akan bertambah(hanya satu kali dipanggil)
  useEffect(() => {
    // console.log("first render");
  }, []);
  //Jika dipanggil maka jika di klik pada perubahan baru berubah
  useEffect(() => {
    // console.log("I am offline");
  }, [online]);

  function updateScrollPosition() {
    const windowScrolling = window.scrollY;
    console.log(`Window scroll position: ${windowScrolling}`);
    setScrollPosition(windowScrolling);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <PlaceContentCenter>
      <div className={"h-[4000px]"}>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
        <Button onClick={() => setOnline((online) => !online)}>
          Set Online
        </Button>
      </div>
    </PlaceContentCenter>
  );
}
