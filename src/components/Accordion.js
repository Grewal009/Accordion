import { items } from "../assets/constants";
import Item from "./Item";
import { useState } from "react";

const Accordion = () => {
  const [toggle, setToggle] = useState(111);
  function HandleToggle(id) {
    if (toggle === id) {
      setToggle((toggle) => 111);
    } else {
      setToggle(id);
    }
  }
  return (
    <div className="bg-slate-100 px-2 py-3 w-72 sm:w-[400px] md:w-[550px] lg:w-[800px] m-auto mt-5 rounded-xl">
      {items.map((i) => (
        <Item
          id={i.id}
          name={i.name}
          desc={i.desc}
          key={i.id}
          toggle={toggle}
          setToggle={HandleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
