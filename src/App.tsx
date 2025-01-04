import ProductCard from "./components/ProductCard";
import { formInputsList, productList } from "./data";
import Modal from "./components/ui/Modal";
import {useState} from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

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

  const renderFormInputList = formInputsList.map((input) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={input.id} className="mb-1 text-sm font-medium text-gray-700">{input.label}</label>
        <Input type="text" id={input.id} name={input.name}/>
      </div>
    )
  })


  return (
    <main className="container">
      <Button className="bg-indigo-600 hover:bg-indigo-900" onClick={openModal}>Add Product</Button>
      <div className=" m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT"> 
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex space-x-3">
            <Button className="bg-gray-300 w-full hover:bg-gray-800">Submit</Button>  
            <Button className="bg-indigo-500 w-full hover:bg-indigo-800" onClick={closeModal}>Cancel</Button>
          </div>
        </form>
        
      </Modal> 
    </main>
  )
}

export default App