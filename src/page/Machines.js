import './Machines.css';
import {BiCheck} from 'react-icons/bi';

export default function Machines(){
    return (
        <>
        <div id="box03">
            <h3>MACHINES</h3>
            <div>
                <img src="./img/box03.jpg" alt="머신이미지2"/>
            </div>
        </div>
        <div id="num">
            <p>상품
                <span>17</span>
               개
            </p>
            <ul>
                <li>낮은가격순
                    <BiCheck style={{fontSize:15,marginLeft:4}}/>
                </li>
                <li>높은가격순
                    <BiCheck style={{fontSize:15,marginLeft:4}}/>
                </li>
            </ul>
            <div id='machinlist'>
                <ul id="list">
                    <li>
                       <figure>
                         <img src="./img/machines_pic01.jpg" alt=""/>
                         <figcaption>
                             <dl>
                                 <dt>머신이름</dt>
                                 <dd>
                                     <del>지워진가격</del>
                                     <ins>가격
                                         <span>원</span>
                                     </ins>
                                 </dd>
                                 <dd>
                                     <button>장바구니</button>
                                 </dd>
                             </dl>
                         </figcaption>
                        </figure>  
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}