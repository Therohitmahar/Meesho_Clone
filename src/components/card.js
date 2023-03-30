import "../styles/card.css"
export default function Card(){
    const data = {"id":11,
    "title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price":109,
    "description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category":"electronics",
    "image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating":{"rate":4.8,"count":319}}
    return(<div>
        <h1>from card</h1>
        <div className="card-container">
            <div className="card-image">
                <img src={data.image} />
            </div>
            <div className="card-details">
                <p className="card-title">{data.title}</p>
                <h4 className="card-price"><span>₹</span>{data.price}</h4>
                <div className="review-container">
                    <button>{data.rating.rate}</button>
                    <span>{data.rating.count} Reviews</span>
                </div>
            </div>
        </div>
    </div>);
}
 