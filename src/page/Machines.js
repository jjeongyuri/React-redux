import './Machines.css';
import {BiCheck} from 'react-icons/bi';
import productList from '../product.json';
import { addToCart,removeToCart } from '../redux/WishListSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Machines(){
    let dispatch = useDispatch();
    const {cartProductIds} = useSelector((state)=>state.cart)
    // console.log(cartProductIds)
    // console.log(productList)

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
                <span>{productList.products.length}</span>
               개
            </p>
            <ul>
                <li onClick={()=>productList.products.sort((a,b) => a.ceil - b.ceil)}>낮은가격순
                 <BiCheck style={{fontSize:15,marginLeft:4}}/>
                </li>
                <li onClick={()=>productList.products.sort((a,b) => b.ceil - a.ceil)}>높은가격순
                    <BiCheck style={{fontSize:15,marginLeft:4}}/>
                </li>
            </ul>
            <div id='machinlist'>
                <ul id="list">
                {productList.products.map((product)=>(
                        <li key={product.id}>
                        <figure>
                        <img src={product.imageUrl} alt={product.name}/>
                        <figcaption>
                            <dl>
                                <dt>{product.name}</dt>
                                <dd>
                                    {product.price === 0 || <del>{product.price}
                                         원
                                    </del>}
                                    <ins>{product.ceil}
                                        <span>원</span>
                                   </ins>
                                </dd>
                                <dd>
                                    {!cartProductIds.includes(product.id) && (<button type='button'
                                            onClick={()=>dispatch(addToCart(product.id))}>장바구니</button>)}
                                    {cartProductIds.includes(product.id) && (<button type='button'
                                            onClick={()=>dispatch(removeToCart(product.id))}>삭제하기</button>)}
                                </dd>
                            </dl>
                        </figcaption>
                       </figure> 
                    </li>
                    ))} 
                </ul>
            </div>
        </div>
        </>
    )
}