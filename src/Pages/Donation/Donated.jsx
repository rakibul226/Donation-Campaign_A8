import { Link } from "react-router-dom";

const Donated = ({ item }) => {
  console.log(item);
  const {
    product_id,
    picture,
    title,
    category_type,
    category_bg,
    card_bg,
    text_color,
    description,
    price,
  } = item || {};

  return (
    <div
      className=" w-full  mx-auto bg-base-100  flex flex-row"
      style={{ background: card_bg }}
    >
      <figure>
        <img className="w-56 h-40" src={picture} alt="Shoes" />
      </figure>
      <div className="pl-6 py-6 w-auto">
        <span
          className="rounded px-3 "
          style={{ background: category_bg, color: text_color }}
        >
          {category_type}
        </span>
        <h2 className="card-title pl-1 mt-1" style={{}}>
          {title}
        </h2>
        <p className="text-sm mb-3" style={{ color: text_color }}>
          ${price}
        </p>
        <Link to={`/category/${product_id}`} className="rounded px-2 py-1 text-white "
          style={{ background: text_color }}>
        
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Donated;
