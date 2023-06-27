import { useDispatch, useSelector } from 'react-redux';
import './WishList.css';
import productList from '../product.json';
import { removeToCart,clearToCart } from '../redux/WishListSlice';
import {BiTrashAlt} from 'react-icons/bi';

export default function WishList(){
    const {cartProductIds} = useSelector((state)=>state.cart);
    // console.log(cartProductIds)
    const cartData = productList.products.filter((product)=>cartProductIds.includes(product.id));
    const dispatch = useDispatch();

    return (
        <div id="wishlist">
            <h2>장바구니</h2>
            <div className="wish">
               <ul>
                <li>상품/옵션 정보</li>
                <li>상품금액</li>
               </ul>
               <div>
                {cartData.map((product)=>(
                    <figure key={product.id}>
                    <img src={product.imageUrl} alt={product.name}/>
                    <figcaption>
                        <dl>
                            <dt>{product.name}</dt>
                            <dd>{product.ceil}</dd>
                            <dd>
                                <button type='button'
                                        onClick={()=>dispatch(removeToCart(product.id))}>
                                    <BiTrashAlt/>
                                </button>
                            </dd>
                        </dl>
                    </figcaption>
                    </figure>
                ))}
               </div> 
            </div>
            <div className='clear'>
                <p>
                    <button type='button'
                            onClick={()=>dispatch(clearToCart())}>
                        전체상품 삭제
                    </button>
                </p>
                <p>장바구니에 담겨있는 상품이 없습니다.</p>
            </div>
        </div>
    )
}