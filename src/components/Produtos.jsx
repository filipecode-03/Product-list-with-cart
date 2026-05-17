import cartIcon from '../images/icon-add-to-cart.svg'

function Produtos({ products, cart, addToCart, increaseQuantity, decreaseQuantity }) {

  function getProductQuantity(productName) {
    const product = cart.find(
      (item) => item.name === productName
    )
    return product ? product.quantity : 0
  }

  return (
    <section>
      <h1 className="text-[50px] font-bold mb-8">
        Desserts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => {
          const quantity = getProductQuantity(product.name)
          return (
            <div key={product.name}>
              {/* IMAGE */}
              <div className="relative">
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet={product.image.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={product.image.tablet}
                  />
                  <img
                    src={product.image.mobile}
                    alt={product.name}
                    className={`
                      rounded-xl
                      w-full
                      ${quantity > 0 ? 'border-3 border-[#C83B0E]' : ''}
                    `}
                  />
                </picture>
                {/* BUTTON */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                  {quantity === 0 ? (
                    <button onClick={() => addToCart(product)} className="bg-white border border-[#AD8A85] hover:border-[#C83B0E] hover:text-[#C83B0E] transition rounded-full px-6 py-3 flex items-center gap-2 font-semibold shadowB cursor-pointer">
                      <img src={cartIcon} alt="cart" />
                      Add to Cart
                    </button>
                  ) : (
                    <div className="bg-[#C83B0E] text-white rounded-full px-4 py-3 flex items-center gap-10 shadowB">
                      <button onClick={() => decreaseQuantity(product.name)} className="w-5 h-5 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#C83B0E] transition cursor-pointer">
                        -
                      </button>
                      <span className="font-medium">
                        {quantity}
                      </span>
                      <button onClick={() => increaseQuantity(product.name)} className="w-5 h-5 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#C83B0E] transition cursor-pointer">
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* TEXT */}
              <div className="mt-10">
                <p className="text-[#AD8A85] ">
                  {product.category}
                </p>
                <h2 className="font-semibold text-[18px]">
                  {product.name}
                </h2>
                <span className="text-[#C83B0E] font-semibold text-[18px]">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Produtos