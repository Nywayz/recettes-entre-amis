import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw"
import { setupServer } from "msw/node";
import { ingredientsListMock } from "../mocks/mocks"
import useApp from "../components/useApp"
import { render, waitFor, screen } from "@testing-library/react";
import App from "../App"


const server = setupServer(
    rest.get("https://api-fruits.herokuapp.com/api/ingredients", (req, res, ctx) => {
        return res(ctx.json(ingredientsListMock))
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("getIngredients", async () =>{
    const { result } = renderHook( () => useApp())
    let loadingResult = await result.current.getIngredients();
    expect(loadingResult).toEqual(true)
})

test("show result", async () => {
    const { container } = render(<App />);
    await waitFor(() => screen.getByText(/Fraise/i));
  });