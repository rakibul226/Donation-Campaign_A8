
const Category = ({category}) => {

    console.log(category);



    const {product_id,picture,title,category_type,category_bg,card_bg,text_color,description} = category;

    return (

    <div className="card w-96 bg-base-100 shadow-xl" style={{background:card_bg}}>
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className="pl-6 py-6 ">
        <span className="rounded px-3 " style={{background:category_bg,color: text_color}}>{category_type}</span>
        <h2 className="card-title pl-1 mt-1" style={{color: text_color}}>{title}</h2>      
         </div>
    </div>
    );
};

export default Category;