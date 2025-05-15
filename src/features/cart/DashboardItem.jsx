import { formatCurrency } from "../../utils/helpers";

function DashboardItem({ name, quantity }) {
  return (
    <div>
      <li className="text-l capitalize italic text-stone-500 ">
        {`${quantity}  ${name}`}
      </li>
    </div>
  );
}

export default DashboardItem;
