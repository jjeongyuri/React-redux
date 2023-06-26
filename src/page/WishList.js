import { useDispatch, useSelector } from 'react-redux';
import './WishList.css';
import productList from '../product.json';
import { removeToCart,clearToCart } from '../redux/WishListSlice';

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
                            <dd>{product.price}</dd>
                            <dd>
                                <button type='button'
                                        onClick={()=>dispatch(removeToCart(product.id))}>삭제</button>
                            </dd>
                        </dl>
                    </figcaption>
                    </figure>
                ))}
               </div> 
            </div>
            <div className='clear'>
                <p>장바구니에 담겨있는 상품이 없습니다.</p>
            </div>
        </div>
    )
}