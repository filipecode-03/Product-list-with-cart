import confirmed from '../images/icon-order-confirmed.svg'

function Modal({ cart, total, closeModal, startNewOrder }) {

  return (
    <div className="fixed inset-0 bg-[#00000070] z-50 flex items-end lg:items-center lg:justify-center">
        <div className="bg-white w-full rounded-t-2xl lg:rounded-b-2xl p-8 overflow-y-auto max-h-[90vh] lg:max-w-150">
          <img src={confirmed} alt="confirmed" />
          <h2 className='font-bold text-[#210C0C] text-[45px] w-20 leading-13 mt-5'>Order Confirmed</h2>
          <p className='mt-2 text-[#4b4746]'>We hope you enjoy your food!</p>
          <div className='bg-[#fdf5ef] mt-6 space-y-4 rounded-[10px] p-6'>
              {cart.map((item) => (
                <div key={item.name} className="border-b flex gap-5 items-center border-rose-100 pb-4">
                    <img src={item.image.thumbnail} alt={item.name} className='w-15 rounded-[10px]' />
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
                            
                        </div>
                    </div>
                    <span className='text-[#210C0C] font-semibold ml-auto text-[18px]'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>
              ))}
            <div className='flex items-center justify-between'>
              <p className='font-semibold text-[#4b4746]'>Order Total</p>
              <h3 className='text-[25px] font-bold text-[#210C0C]'>
                ${total.toFixed(2)}
              </h3>
            </div>
          </div>
          <button onClick={startNewOrder} className='w-full cursor-pointer bg-[#C83B0E] text-white font-medium py-4 rounded-full mt-6 transition'>
            Start New Order
          </button>
      </div>
    </div>
  )
}

export default Modal