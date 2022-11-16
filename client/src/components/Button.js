// import "../components/SigninForm/SigninForm.css";

const fixedButtonClass =
  "sm:px-4 lg:px-8 xl:px-14 py-2 md:py-3 rounded-lg transition:all duration-300";
const customStyle = 'fontSize: "0.85rem", textTransform: "capitalize"';

export default function Button({ onHandleClick, type, customClass, text }) {
  return (
    <>
      <button
        type={type}
        onClick={onHandleClick}
        style={{ customStyle }}
        className={fixedButtonClass.concat(" ", customClass)}
      >
        {text}
      </button>
    </>
  );
}
