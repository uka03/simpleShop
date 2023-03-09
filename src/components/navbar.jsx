export default function Navbar(props) {
  const { active, handlerClick, buttons } = props;
  return (
    <div className="flex w-full justify-between gap-1 h-12 p-3">
      {buttons.map((btn) => {
        return (
          <button
            className={
              active.val == btn.val
                ? "w-1/5 bg-purple-300 h-12 rounded-lg text-white text-left p-3"
                : "w-1/5 bg-none h-12 rounded-lg text-left p-3"
            }
            key={btn.val}
            id={`${btn.val}`}
            onClick={() => handlerClick(btn)}
          >
            {btn.name}
          </button>
        );
      })}
    </div>
  );
}
