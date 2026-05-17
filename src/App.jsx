import { useState } from "react";
import data from "../data.json";
import Produtos from "./components/Produtos";
import Painel from "./components/Painel";
import Modal from "./components/Modal"
import { useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  // Adicionar produto
  function addToCart(product) {
    const productExists = cart.find(
      (item) => item.name === product.name
    );

    if (productExists) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Aumentar quantidade
  function increaseQuantity(name) {
    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Diminuir quantidade
  function decreaseQuantity(name) {
    setCart(
      cart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remover item
  function removeItem(name) {
    setCart(cart.filter((item) => item.name !== name));
  }

  // Valor total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function startNewOrder() {
    setCart([])
    setIsModalOpen(false)
  }

  useEffect(() => {

  if (isModalOpen) {

    // trava scroll da página
    document.body.style.overflow = "hidden";

    // volta para o topo
    window.scrollTo(0, 0);

  } else {

    document.body.style.overflow = "auto";

  }

  return () => {
    document.body.style.overflow = "auto";
  };

}, [isModalOpen]);

  return (
    <main className="font-['Red_Hat_Text'] px-8 lg:pl-20 py-6 lg:py-12 lg:pb-25">
        <div className="lg:grid lg:grid-cols-[1fr_580px] lg:gap-8">
          <Produtos
            products={data}
            cart={cart}
            addToCart={addToCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <Painel
            cart={cart}
            total={total}
            removeItem={removeItem}
            openModal={openModal}
          />
        </div>
        {isModalOpen && (
            <Modal
              cart={cart}
              total={total}
              closeModal={closeModal}
              startNewOrder={startNewOrder}
            />
          )
        }
    </main>
  );
}

export default App;