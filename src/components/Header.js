import { Link } from "react-router-dom";
import {BiCartDownload} from 'react-icons/bi';
import './Header.css';
import cartSlice, {cartProductIds} from '../redux/WishListSlice';
import { useSelector } from "react-redux";


export default function Header(){
   const {cartProductIds} = useSelector((state)=>state.cart);
   console.log(cartProductIds)


    return (
        <header>
            <div>
            <h1> 
                <Link to={"/"}>
                  <img src="../img/logo.jpg" alt="로고"/>
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>Y3.3</li>
                    <li>X7.1</li>
                    <li>X1 Anniversary</li>
                </ul>
            </nav>
            <div id="box">
                <Link to={'/wishlist'}>
                <BiCartDownload style={{fontSize:25}}/>
                <span>{cartProductIds.length}</span>
                </Link>
            </div>
            </div>
        </header>
    )
}