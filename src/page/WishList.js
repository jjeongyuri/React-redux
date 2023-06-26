import './WishList.css';

export default function WishList(){
    return (
        <div id="wishlist">
            <h2>장바구니</h2>
            <div className="wish">
               <ul>
                <li>상품/옵션 정보</li>
                <li>상품금액</li>
               </ul>
               <div>
                <figure>
                    <img src="" alt=""/>
                    <figcaption>
                        <dl>
                            <dt>상품명</dt>
                            <dd>금액</dd>
                            <dd>
                                <button>삭제</button>
                            </dd>
                        </dl>
                    </figcaption>
                </figure>
               </div> 
            </div>
        </div>
    )
}