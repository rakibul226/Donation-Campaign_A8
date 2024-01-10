import Swal from "sweetalert2";

const CategoryDetails = ({categoryItem}) => {
    console.log(categoryItem);

    const {product_id,picture,title,price,text_color,description} = categoryItem || {};

    const handleAddToDonation = ()=> {
        const addToDonationArray = [];

        const donatedItems = JSON.parse(localStorage.getItem('donated'))
    
        if(!donatedItems){
        addToDonationArray.push(categoryItem)
        localStorage.setItem('donated',JSON.stringify(addToDonationArray))
        Swal.fire({
            icon: "success",
            title: "Good Job.!",
            text: "Donation successful.",
            footer: '<a href="#">Thanks for your Donation</a>'
          });
        }
        else{
            const isExist = donatedItems.find((categoryItem) => categoryItem.product_id === product_id); 
            if(!isExist){
                addToDonationArray.push(...donatedItems,categoryItem)
                localStorage.setItem('donated',JSON.stringify(addToDonationArray))
                Swal.fire({
                    icon: "success",
                    title: "Good Job.!",
                    text: "Donation successful.",
                    footer: '<a href="#">Thanks for your Donation</a>'
                });
            }
            else{
                Swal.fire({
                  title: "DUPLICATE",
                  text: "Duplicate item",
                  icon: "error"
                });
              }
    }
}

    return (

        <div className="px-2 md:px-0 md:mx-14 lg:mx-36">
        
        <div className="hero w-auto " style={{backgroundImage: `url(${picture})`, height: '450px'}}>
        </div>
        <div className="hero-overlay h-24 bg-opacity-50 relative bottom-24">
            <button className="px-5 py-1 rounded mt-8 ml-10" style={{background:text_color,color: "white"}} onClick={handleAddToDonation}>Donate ${price}</button>
        </div>
        
        <div className="relative bottom-16">
            <p className="text-3xl font-bold mb-3">{title}</p>
            <p>{description}</p>
        </div>

        </div>
        
    );
};

export default CategoryDetails;