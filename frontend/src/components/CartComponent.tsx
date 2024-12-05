import { assets } from '../assets/assets';
import Product from '../interfaces/Product';
const CartComponent = (props: Product) => {
  const{
    bin_icon
  }=assets
  return (
    <div className='border-t-2 border-b-2 border-gray-400 border-solid w-full flex flex-row justify-around py-4'>
      {/*Imag and details*/}
      <div className='flex flex-row space-x-4'>
      <img src={props.image[0]} alt="" className="w-20 h-20 object-cover" />
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-sm">{props.name}</p>
          <div className="flex flex-row space-x-3 justify-around">
          <p>$ {props.price}</p>
            {props.sizes.map((item, index) => (
              <div key={index} className="px-2 py-1 border bg-slate-300 text-black">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Select amount */}
      <div className="border px-2 py-1">
        <input type="number" className="w-12 text-center" />
      </div>
      <div>
        <img src={bin_icon} alt="" className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  )
}
export default CartComponent
