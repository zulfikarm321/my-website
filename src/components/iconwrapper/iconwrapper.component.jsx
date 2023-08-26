import './iconwrapper.style.scss';

function IconWrapper({ children }) {
  return (
    <div className="icon-wrapper" data-aos="fade-up">
      {children}
    </div>
  );
}

export default IconWrapper;
