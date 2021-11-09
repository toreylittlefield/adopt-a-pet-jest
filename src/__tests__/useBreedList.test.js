import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useBreedList from "../useBreedList";

test("gives an empty list with no animal", async () => {
  const { result } = renderHook(() => useBreedList());
  const [breedList, status] = result.current;

  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
});
