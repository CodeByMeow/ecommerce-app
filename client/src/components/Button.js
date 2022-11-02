// import "../components/SigninForm/SigninForm.css";

const fixedButtonClass =
  "px-6 md:px-10 lg:px-16 py-3 rounded-lg transition:all duration-300";
const customStyle = 'fontSize: "0.85rem", textTransform: "capitalize"';

export default function Button({ onHandledClick, type, customClass, text }) {
  return (
    <div>
      <button
        type={type}
        onClick={onHandledClick}
        style={{ customStyle }}
        className={fixedButtonClass.concat(" ", customClass)}
      >
        {text}
      </button>
    </div>
  );
}

<button></button>;
