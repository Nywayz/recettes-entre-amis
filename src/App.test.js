import { renderHook } from "@testing-library/react-hooks";
import { useState } from "react";
import  useListedItem  from "./components/useListedItem"

test("show multiple examples", () => {

  const fakeProps ={
    list: [],
    setList: () => {}
  }

  const { result } = renderHook(() => useListedItem(fakeProps));
  const {
    capitalize,
    close,
  } = result.current;

  expect(capitalize("ok")).toEqual("Ok")
  expect(close()).toEqual("Closed")
});
