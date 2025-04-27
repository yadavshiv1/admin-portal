import { useState } from "react";
import SwitchBtn from "../../components/buttons/SwitchBtn";
import PlusIcon from "../../assets/PlusIcon.svg";
import Minusicon from "../../assets/Minusicon.svg";
import dollarIcon from "../../assets/dollarIcon.svg";
import enableSwitchicon from "../../assets/enableSwitchicon.svg";
import disabledIcon from "../../assets/disabledIcon.svg";

export default function ManageCoupon() {
  const [amount, setAmount] = useState(0);

  const handleIncrease = () => setAmount(amount + 1);
  const handleDecrease = () => amount > 0 && setAmount(amount - 1);

  return (
    <div className="px-6 space-y-3">
      <h2 className="text-3xl font-semibold">Coupons</h2>
      
      <p className="text-gray-500">Manage & Modify  coupons</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 border border-gray-300 rounded-xl p-6">
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-2xl p-2"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Discount Amount</label>
            <div className="w-64 flex items-center gap-2 border border-gray-300 rounded-2xl">
              <img src={dollarIcon} alt="Money" className="h-6 w-6 ml-3" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="p-2 w-36 text-center"
              />
              <div className="flex gap-3">
              <button onClick={handleDecrease}>
                  <img src={Minusicon} alt="Minus" className="h-5 w-5" />
                </button>
                <button onClick={handleIncrease}>
                  <img src={PlusIcon} alt="Plus" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-80">
            <label className="block text-md font-medium text-gray-700 mb-1">Expiration Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-2xl p-2 text-[#787C82]"
            />
          </div>

          <div className="flex justify-between items-center my-6">
            <div>
              <h4 className="font-medium text-gray-800 mt-6">Make this coupon available</h4>
              <p className="text-sm text-gray-500">Active</p>
            </div>
            <SwitchBtn />
          </div>
        </div>
        <div className="space-y-4 border border-gray-300 rounded-xl p-6">
          <div className="border border-gray-300 rounded-2xl flex">
            <input
              type="text"
              placeholder="HAPPYLISTENER34"
              className="w-full  p-2"
            />
            <span className="p-2 text-[#259CE5] pr-4">Active</span>
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Discount Amount</label>
            <div className="w-64 flex items-center gap-2 border border-gray-300 rounded-2xl">
              <img src={dollarIcon} alt="Money" className="h-6 w-6 ml-3" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="p-2 w-36 text-center"
              />
              <div className="flex gap-3">
              <button onClick={handleDecrease}>
                  <img src={Minusicon} alt="Minus" className="h-5 w-5" />
                </button>
                <button onClick={handleIncrease}>
                  <img src={PlusIcon} alt="Plus" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-80">
            <label className="block text-md font-medium text-gray-700 mb-1">Expiration Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-2xl p-2 text-[#787C82]"
            />
          </div>

          <div className="flex justify-between items-center my-6">
            <div>
              <h4 className="font-medium text-gray-800 mt-6">Make this coupon available</h4>
              <p className="text-sm text-gray-500">Active</p>
            </div>
            <SwitchBtn />
          </div>
        </div>

      </div>

      <div className="flex justify-center rounded-xl border border-[#F0F0F1">
        <button className="flex items-center gap-2 text-[#525252] px-6 py-3 rounded-full">
          <img src={PlusIcon} alt="Submit" className="h-5 w-5" />
          <span>Add New Coupon</span>
        </button>
      </div>
    </div>
  );
}
