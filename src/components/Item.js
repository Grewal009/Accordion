const Item = ({ id, name, desc, toggle, setToggle }) => {
  return (
    <div
      onClick={() => setToggle(id)}
      className="m-2 bg-slate-50 rounded-2xl cursor-pointer"
    >
      <div
        className={
          toggle === id
            ? "flex justify-between px-2 text-green-600 text-lg font-semibold"
            : "flex justify-between px-2 text-lg font-semibold text-slate-700"
        }
      >
        <h2>
          <span
            className={
              toggle === id ? "pr-2 text-green-600" : "pr-2 text-slate-400"
            }
          >
            {id < 10 ? `0${id}` : id}
          </span>
          {name}
        </h2>
        <p className="">{toggle === id ? "-" : "+"}</p>
      </div>

      {toggle === id ? <p className="pt-2 mx-2">{desc}</p> : ""}
    </div>
  );
};

export default Item;
