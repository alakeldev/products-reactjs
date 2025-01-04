import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct
}

const ProductCard = ({product}: IProps) => {
  const {title, description, imageURL, price, category} = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
        <Image imageUrl= {imageURL} alt={"Product name"} className="rounded-md h-52 w-full lg:object-cover"/>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 break-words">{textSlicer(description)}</p>
        <div className="flex items-center flex-wrap space-x-1">
            <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" ></span>
            <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" ></span>
            <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" ></span>
        </div>
        <div className="flex items-center justify-between">
          <span>${price}</span>
          <Image imageUrl= {category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom"/>
        </div>

        <div className="flex items-center justify-between space-x-2">
            <Button className="bg-indigo-400" width="w-full">Edit </Button> 
            <Button className="bg-red-600" width="w-full">Delete</Button>
        </div>

    </div>
  )
}

export default ProductCard;