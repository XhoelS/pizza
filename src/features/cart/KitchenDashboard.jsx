import { useSelector } from "react-redux";
import DashboardItem from "./DashboardItem";
import { getCart } from "./cartSlice";
import LinkButton from "../../ui/LinkButton";

function KitchenDashboard() {
  // const order = useLoaderData();
  // const { id, status, orderPrice, cart } = order;
  const cart = useSelector(getCart);
  console.log(cart);
  if (!cart || cart.length === 0)
    return (
      <div>
        <p className="text-xl text-red-500 p-48 ">No order yet</p>{" "}
        <span>
          <LinkButton to="/menu">&larr; Back to menu</LinkButton>
        </span>
      </div>
    );

  return (
    <div>
      {cart.map((item) => (
        <DashboardItem
          name={item.name}
          key={item.pizzaId}
          orderPrice={item.totalPrice}
          unitPrice={item.unitPrice}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}

export default KitchenDashboard;
