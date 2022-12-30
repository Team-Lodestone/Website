import { createBoard } from "@wixc3/react-board";
import { MemoryRouter } from "react-router-dom";
import App from "../../../App";

export default createBoard({
  name: "App",
  Board: () => (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ),
});
