import React from "react"
import { IoCloseCircleOutline } from "react-icons/io5"

const Popup = (orderPopup, setOrderPopup) => {

  return (
    <div>
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
                {/* Header section */}
                <div className="flex items-center justify-between">
                    <h1>Order Now</h1>
                    <div>
                        <IoCloseCircleOutline onClick={() => setOrderPopup(!orderPopup)} className="text-2xl cursor-pointer "/>
                    </div>
                </div>

                {/* Form section */}
            </div>
        </div>
    </div>
  )
}
export default Popup