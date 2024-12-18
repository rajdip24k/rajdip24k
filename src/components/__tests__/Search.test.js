import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCk_DATA from "../mocks/mockRestaurantListData.json";
import { Body } from "../Body";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCk_DATA);
    },
  });
});

test("Should render the search comp", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("serchInput");

  fireEvent.change(searchInput, { target: {value : "burger" }});

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("restCard");

  expect(cards.length).toBe(2);
});
