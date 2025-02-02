
const Button = ({ text, className }) => {
  return (
    <button className={`px-5 py-2 text-lg rounded-lg font-semibold transition ${className}`}>
      {text}
    </button>
  );
};

export default Button;
