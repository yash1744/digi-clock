import { useState } from "react";
import "./App.css";
// import AnimatedList from "./AnimatedList";
// import ShoppingList from "./ShoppingList";
import Clock from "./Clock";

function App() {
  // const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [currentView, setCurrentView] = useState("Clock");

  return (
    <div>
      {
        currentView === "shoppingList"
        // && (
        // <ShoppingList items={items} className="mt-8" />
        // )
      }
      {currentView === "Clock" && (
        <Clock
          children={
            <div className="mt-16 flex space-x-4 ">
              <button
                disabled={true}
                onClick={() => {
                  setCurrentView("shoppingList");
                }}
                className="cursor-pointer"
              >
                {" "}
                ShoppingList
              </button>
              <button
                disabled={true}
                onClick={() => {
                  setCurrentView("notifications");
                }}
                className="cursor-pointer"
              >
                {" "}
                Notifications
              </button>
            </div>
          }
          className=" h-screen w-screen flex justify-center items-center flex-col"
        />
      )}
      <div></div>
    </div>
  );
}

export default App;
