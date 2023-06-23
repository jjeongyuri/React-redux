import { Link } from "react-router-dom";
import {BiCartDownload} from 'react-icons/bi';
import './Header.css';

export default function Header(){
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
                <BiCartDownload style={{fontSize:25}}/>
                <span>2</span>
            </div>
            </div>
        </header>
    )
}