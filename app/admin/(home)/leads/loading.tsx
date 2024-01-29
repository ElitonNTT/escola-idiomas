import { FaSpinner } from "react-icons/fa";

export default function AdminLoading() {
  return (
    <div className="p-5 text-center">
      <FaSpinner className="animate-spin" />
    </div>
  );
}
