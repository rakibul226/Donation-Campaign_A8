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
      className=" w-full  mx-auto bg-base-100 shadow-xl flex flex-row"
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
        <p className="text-sm" style={{ color: text_color }}>
          ${price}
        </p>
        <button
          className="rounded px-2 text-white mt-3"
          style={{ background: text_color }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Donated;
