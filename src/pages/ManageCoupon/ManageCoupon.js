import { useState } from "react";
import SwitchBtn from "../../components/Buttons/SwitchBtn";
import PlusIcon from "../../assets/PlusIcon.svg";
import Minusicon from "../../assets/Minusicon.svg";
import dollarIcon from "../../assets/dollarIcon.svg";

export default function ManageCoupon() {
  const [amount, setAmount] = useState(0);

  const handleIncrease = () => setAmount(amount + 1);
  const handleDecrease = () => amount > 0 && setAmount(amount - 1);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Create Coupon</h2>
      
      <p className="text-gray-500">Set up your discount coupons for your users</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 border border-gray-300 rounded-2xl p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type Here</label>
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full border border-gray-300 rounded-3xl p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Amount</label>
            <div className="w-64 flex items-center gap-2 border border-gray-300 rounded-3xl">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-3xl p-2"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <h4 className="font-medium text-gray-800">Make this coupon available</h4>
              <p className="text-sm text-gray-500">Active</p>
            </div>
            <img src={PlusIcon} alt="Icon" className="h-10 w-10" />
          </div>
        </div>
        <div className="space-y-4 border border-gray-300">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type Here</label>
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Amount</label>
            <div className="flex items-center gap-2">
              <img src={PlusIcon} alt="Money" className="h-6 w-6" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="border border-gray-300 rounded-md p-2 w-32 text-center"
              />
              {/* - / + buttons */}
              <div className="flex flex-col gap-1">
                <button onClick={handleIncrease}>
                  <img src={PlusIcon} alt="Plus" className="h-5 w-5" />
                </button>
                <button onClick={handleDecrease}>
                  <img src={PlusIcon} alt="Minus" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Expiration Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Small Card */}
          <div className="flex justify-between items-center border border-gray-300 rounded-md p-4 mt-4">
            <div>
              <h4 className="font-medium text-gray-800">Left Card Title</h4>
              <p className="text-sm text-gray-500">Some description here.</p>
            </div>
            <SwitchBtn index={0}/>
          </div>
        </div>

      </div>

      <div className="flex justify-center pt-6">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
          <img src={PlusIcon} alt="Submit" className="h-5 w-5" />
          <span>Submit Coupon</span>
        </button>
      </div>
    </div>
  );
}
