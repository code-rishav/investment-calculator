import logo from '../../assets/investment-calculator-logo.png';
import style from './header.module.css';
const Header = props =>{

    return (
        <header className={`${style['header']}`}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    )
}

export default Header;