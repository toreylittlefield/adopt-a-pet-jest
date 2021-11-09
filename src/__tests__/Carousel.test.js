import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Carousel from "../Carousel";

test("lets users click on a thumbnail to make them the hero", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

  const carousel = render(<Carousel images={images} />);

  const hero = await carousel.findByTestId("hero");

  expect(hero.src).toContain(images[0]);

  for (let i = 0; i < images.length; i++) {
    const img = images[i];

    const thumbnail = await carousel.findByTestId(`thumbnail${i}`);
    thumbnail.click();

    expect(hero.src).toContain(img);
    expect(thumbnail.classList).toContain("active");
  }
});
