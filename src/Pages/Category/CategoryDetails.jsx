
const CategoryDetails = ({categoryItem}) => {
    console.log(categoryItem);

    const {product_id,picture,title,category_type,category_bg,card_bg,text_color,description} = categoryItem || {};


    return (

        <div className="md:mx-14 lg:mx-36">
        
        <div className="hero w-auto h-96 " style={{backgroundImage: `url(${picture})`}}>
            {/* backgroundImage: `url(${backgroundImageUrl})`, */}
        
        
        </div>
        <div className="hero-overlay h-20 bg-opacity-50 relative bottom-20">

        </div>
        
        </div>
        
    );
};

export default CategoryDetails;