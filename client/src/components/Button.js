// import "../components/SigninForm/SigninForm.css";

const fixedButtonClass =
  "sm:px-4 lg:px-8 xl:px-14 py-3 rounded-lg transition:all duration-300";
const customStyle = 'fontSize: "0.85rem", textTransform: "capitalize"';

export default function Button({ onHandledClick, type, customClass, text }) {
  return (
    <>
      <button
        type={type}
        onClick={onHandledClick}
        style={{ customStyle }}
        className={fixedButtonClass.concat(" ", customClass)}
      >
        {text}
      </button>
    </>
  );
}
