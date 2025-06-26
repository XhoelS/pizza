import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from "./cartSlice";
import LinkButton from "../../ui/LinkButton";
// import DashboardItem from "./DashboardItem";

function KitchenDashboard() {
  const [arraydata, setArrayData] = useState([]);
  const { username, address } = useSelector((state) => state.user);
  const cart = useSelector(getCart);

  useEffect(() => {
    if (!cart || cart.length === 0) return;
    setArrayData(cart); // Only cart items; user data shown separately
  }, [cart]);

  if (!cart || cart.length === 0)
    return (
      <div className="flex justify-center items-center mt-40 flex-col">
        <p className="text-l text-red-500">No order yet</p>
        <span className="mt-10">
          <LinkButton to="/menu">&larr; Back to menu</LinkButton>
        </span>
      </div>
    );

  return (
    <div className="border-dashed bg-red-100 border-black p-6 rounded-lg shadow text-l capitalize italic text-stone-700 max-w-xl mx-auto mt-10">
      <p className="mb-2 font-semibold">Customer: {username}</p>
      <p className="mb-4">Address: {address}</p>

      <p className="font-semibold mb-2">Order:</p>
      <ul className="list-disc list-inside space-y-1">
        {arraydata.map((item) => (
          <li key={item.pizzaId}>
            {item.quantity} x {item.name} - {item.totalPrice}€
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KitchenDashboard;
