import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Category = ({ category }) => {
  const {
    product_id,
    picture,
    title,
    category_type,
    category_bg,
    card_bg,
    text_color,
  } = category;

  return (
    <Link to={`/category/${product_id}`}>
      <div
        className="card w-96 md:w-80 lg:w-auto mx-auto bg-base-100 shadow-xl"
        style={{ background: card_bg }}
      >
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="pl-6 py-6">
          <span
            className="rounded px-3 "
            style={{ background: category_bg, color: text_color }}
          >
            {category_type}
          </span>
          <h2 className="card-title pl-1 mt-1" style={{ color: text_color }}>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
