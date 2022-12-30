import { createBoard } from "@wixc3/react-board";
import Home from "../../../views/Home";

export default createBoard({
  name: "Home",
  Board: () => <Home />,
});
