
const CategoryDetails = ({categoryItem}) => {
    console.log(categoryItem);

    const {product_id,picture,title,category_type,price,category_bg,card_bg,text_color,description} = categoryItem || {};


    return (

        <div className="px-2 md:px-0 md:mx-14 lg:mx-36">
        
        <div className="hero w-auto " style={{backgroundImage: `url(${picture})`, height: '450px'}}>
        </div>
        <div className="hero-overlay h-24 bg-opacity-50 relative bottom-24">
            <button className="px-5 py-1 rounded mt-8 ml-10" style={{background:text_color,color: "white"}}>Donate ${price}</button>
        </div>
        
        <div className="relative bottom-16">
            <p className="text-3xl font-bold mb-3">{title}</p>
            <p>{description}</p>
        </div>

        </div>
        
    );
};

export default CategoryDetails;