import './Machines.css';
import {BiCheck} from 'react-icons/bi';
import productList from '../product.json';
import { addToCart,removeToCart } from '../redux/WishListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


export default function Machines(){
    let dispatch = useDispatch();
    const {cartProductIds} = useSelector((state)=>state.cart);
    // console.log(cartProductIds)
    const [sortBy,setSortBy] = useState('ceil');
    const sortList = productList.products.sort((a,b)=>{
        return a[sortBy] > b[sortBy] ? 1 :-1
    });
    // console.log(sortList)
    const onSortChange = (discount) => setSortBy(discount);

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
                <li onClick={()=>onSortChange('ceil')}>낮은가격순
                  {sortBy === 'ceil' && <BiCheck style={{fontSize:15,marginLeft:4}}/>}
                </li>
                <li onClick={()=>onSortChange('price')}>높은가격순
                  {sortBy === 'price' && <BiCheck style={{fontSize:15,marginLeft:4}}/>}
                </li>
            </ul>
            <div id='machinlist'>
                <ul id="list">
                {sortList.map((product)=>(
                        <li key={product.id}>
                        <figure>
                        <img src={product.imageUrl} alt={product.name}/>
                        <figcaption>
                            <dl>
                                <dt>{product.name}</dt>
                                <dd>
                                    {product.price <= 3 || (<del>{product.price}
                                         원
                                    </del>)}
                                    <ins>{product.ceil}
                                        <span>원</span>
                                   </ins>
                                </dd>
                                <dd>
                                    {!cartProductIds.includes(product.id) && (<button type='button'
                                            onClick={()=>dispatch(addToCart(product.id))}>장바구니</button>)}
                                    {cartProductIds.includes(product.id) && (<button type='button'
                                            onClick={()=>dispatch(removeToCart(product.id))}
                                            className='del'>삭제하기</button>)}
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