import './Logo.css';
import LogoWithName from '/src/assets/LogowithName.svg';


export default function Logo() {
  return (
    <div className="Logo">
      <img src={LogoWithName} alt="LOGO" />
    </div>
  );
}
