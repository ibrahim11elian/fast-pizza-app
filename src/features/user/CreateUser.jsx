import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

function CreateUser({ show, setShow }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "") return;

    setShow(false);
    dispatch(updateName(username));
    navigate("/menu");
    setUsername("");
  }

  if (!show) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-md bg-white px-5 py-3 drop-shadow-lg"
      >
        <button
          className="mb-2 self-end text-4xl text-yellow-500 transition-colors duration-300 hover:text-yellow-300"
          onClick={(e) => {
            e.preventDefault();
            setShow(false);
          }}
        >
          <IoMdCloseCircleOutline />
        </button>
        <p className="mb-4 text-sm text-stone-600 md:text-base">
          👋 Welcome! Please start by telling us your name:
        </p>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your full name"
          className="input mb-8 basis-full"
        />

        {username !== "" && (
          <div>
            <Button type={"primary"}>Start ordering</Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateUser;
