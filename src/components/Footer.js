import './Footer.css';

export default function Footer(){
    return (
        <footer>
            <div>
                <dl className="left">
                    <dt>(주)큐로홀딩스</dt>
                    <dd>대표자</dd>
                    <dd>조중기</dd>
                    <dd>사업자등록번호</dd>
                    <dd>129-81-19361</dd>
                    <dd>주소</dd>
                    <dd>서울시 강남구 테헤란로 77길 7,동원빌딩 4층</dd><br/>
                    <dd>대표전화</dd>
                    <dd>1666-1282</dd>
                    <dd>마케팅제휴</dd>
                    <dd>illycaffe@illycaffe.co.kr</dd>
                </dl>
                <dl className="right">
                    <dt>Copyright(c) 2021 www.illycaffe.co.kr All rights reserved.</dt>
                    <dd>&copy; 2021 illycaffè S.p.A. | P.IVA 00055180327 | Via Flavia 110, 34147 Trieste – Italy</dd>
                </dl>
            </div>
        </footer>
    )
}