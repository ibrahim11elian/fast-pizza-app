import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import img from "../assets/pizza.svg";
import { useState } from "react";

function Home() {
  const { username } = useSelector((store) => store.user);
  const [show, setShow] = useState(false);
  return (
    <div className="m-auto mt-5 max-w-6xl text-center sm:mt-20 md:mt-10">
      <div className="flex flex-col-reverse items-center justify-between sm:flex-row">
        <div className="flex flex-col">
          <p className="font-hand text-6xl sm:text-7xl md:text-8xl">
            Meet, Eat & <span className="text-yellow-500">Enjoy</span> The{" "}
            <span className="text-yellow-500">Taste</span>
          </p>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">
              Food tastes better when you share it with your family and friends.
            </p>
            <div className="space-x-3">
              <Button to={"/menu"}>Place Order</Button>
              {!username ? (
                <Button type="secondary" onClick={() => setShow(true)}>
                  Get Started
                </Button>
              ) : (
                <Button type="secondary" to={"/menu"}>
                  Continue ordering, {username}
                </Button>
              )}
            </div>
          </div>
        </div>
        <img
          src={img}
          alt="Pizza"
          className="drop-shadow-custom basis-[20rem] sm:basis-[40rem] md:basis-[60rem]"
        />
      </div>
      <CreateUser show={show} setShow={setShow} />
    </div>
  );
}

export default Home;
