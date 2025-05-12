import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="flex items-center justify-center mt-10 text-center text-stone-800 font-semibold ">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
