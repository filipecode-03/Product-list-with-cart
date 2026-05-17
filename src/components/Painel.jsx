import emptyCart from '../images/illustration-empty-cart.svg'
import tree from '../images/icon-carbon-neutral.svg'
import remove from '../images/icon-remove-item.svg'

function Painel({ cart, total, removeItem, openModal }) {
  
  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  )
  
  return (
    <aside className="bg-white mt-10 shadowB p-6 lg:p-8 rounded-2xl h-fit lg:sticky lg:top-6 lg:w-120">
      <h2 className="font-bold text-[#C93E11] text-[30px] mb-6">
        Your Cart ({totalItems})
      </h2>
      {cart.length === 0 ? (
        <div>
            <img src={emptyCart} alt="Empty Cart" className='mx-auto' />
            <p className="text-center mt-2 text-[#81726D] font-medium lg:text-[18px]">
                Your added items will appear here
            </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.name} className="border-b flex items-center justify-between border-rose-100 pb-4">
                <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                        <span className='text-[#C83B0E] font-semibold'>
                        {item.quantity}x
                        </span>
                        <span className='text-[#87635A]'>
                         @ ${item.price.toFixed(2)}
                        </span>
                        <span className='text-[#87635A] font-semibold'>
                        ${(item.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                </div>
                <button className='cursor-pointer' onClick={() => removeItem(item.name)}>
                    <img
                    src={remove}
                    alt="remove"
                    className='border-2 rounded-full p-0.5 w-5 border-[#CAAFA7]'
                    />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <span className='font-semibold text-[#4b4746]'>Order Total</span>
            <span className='font-bold text-[25px]'>${total.toFixed(2)}</span>
          </div>
          <button className='bg-[#fdf5ef] text-[#4b4746] mt-6 w-full justify-center p-3 rounded-[10px] flex items-center'>
            <img src={tree} alt="tree" className='mr-3' />
            This is a <span className='font-semibold px-1'>carbon-neutral</span> delivery
          </button>
          <button onClick={openModal} className="w-full bg-[#C83B0E] text-white font-medium py-4 rounded-full mt-6 transition">
            Confirm Order
          </button>
        </>
      )}
    </aside>
  );
}

export default Painel;