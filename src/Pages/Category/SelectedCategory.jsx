import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Category from "./Category";
import CategoryDetails from "./CategoryDetails";

const SelectedCategory = () => {

   
    const [categoryItem, setCategoryItem] = useState({});


    const {product_id} = useParams();
    const Categorys = useLoaderData();

    useEffect(()=>{

        const findCategory = Categorys ?.find((Category) => Category.product_id === product_id);
        setCategoryItem(findCategory)

    }
    )
    return (
        <div>
            <CategoryDetails categoryItem={categoryItem}></CategoryDetails>
        </div>
    );
};

export default SelectedCategory;