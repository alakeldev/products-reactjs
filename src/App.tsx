import ProductCard from "./components/ProductCard";
import { productList } from "./data";
import Modal from "./components/ui/Modal";
import {useState} from "react";
import Button from "./components/ui/Button";

const App = () => {
  // State
    const [isOpen, setIsOpen] = useState(false)
  
    // Handler
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    // Render
  const renderProductList = productList.map((product) => <ProductCard key={product.id} product={product} />)

  // another syntax for the above line but below when you want to call it inside div you call it renderProductList()
  // const renderProductList = () => {
  //       return productList.map((p) => <ProductCard key={p.id} />)
  // }

  return (
    <main className="container">
      <Button className="bg-indigo-600 hover:bg-indigo-900" onClick={openModal}>Add Product</Button>
      <div className=" m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT"> 
        <div className="flex space-x-3">
          <Button className="bg-gray-300 w-full hover:bg-gray-800">Submit</Button>  
          <Button className="bg-indigo-500 w-full hover:bg-indigo-800" onClick={closeModal}>Cancel</Button>
        </div>
      </Modal> 
    </main>
  )
}

export default App