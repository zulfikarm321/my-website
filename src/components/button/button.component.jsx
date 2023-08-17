import './button.style.scss';

const BUTTON_TYPE_CLASSES = {
  dark: 'dark',
  light: 'light'
};

function Button({ children, buttonType, ...other }) {
  return (
    <button
      className={`btn-wrapper ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;
