const Item = ({ id, name, desc, toggle, setToggle }) => {
  return (
    <div onClick={() => setToggle(id)} className="m-2 bg-slate-50 rounded-2xl">
      <h2>{name}</h2>
      {toggle === id ? <p>{desc}</p> : ""}
    </div>
  );
};

export default Item;
