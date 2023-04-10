import './NavBar.css'
import logoUrbanRoots from './LogoUrbanRoots.png'
import CarritoDeCompras from '../CarritoDeCompras/CarritoDeCompras'

const NavBar = () => {
    return (
        <header className='header'>
            <div className='componentsHeader'>
                <img src={logoUrbanRoots} alt="Logo urban roots" className='logoHeader' />
                <ul className='contenedorMenu'>
                    <li className='itemMenu'>Home</li>
                    <li className='itemMenu'>Shop</li>
                    <li className='itemMenu'>Nuestras Marcas</li>
                    <li className='itemMenu'><CarritoDeCompras/></li>
                </ul>
            </div>        
        </header>
    )
}

export default NavBar