import "./Shop.css";
export default function Shop({ shopData }) {
  return (
    <div className="product-container">
      {shopData.map((data) => {
        return (
          <div key={data.id} className="cards">
            <img src={data.image}></img>
            <div className="image-data">
              <p>{data.title}</p>
              <p>Price: {data.price}</p>
              <p>Rating: {data.rating.rate}</p>
            </div>
            <div className="input-amount">
              <input />
              <button>+</button>
              <button>-</button>
            </div>

            <button>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}
