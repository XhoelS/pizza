import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function DashboardItem({ name, quantity }) {
  const { username, address } = useSelector((state) => state.user);
  return (
    <div>
      <li className="text-l capitalize italic text-stone-500 ">
        {`${quantity}  ${name}   ${address}   ${username}  `}
      </li>
    </div>
  );
}

export default DashboardItem;
