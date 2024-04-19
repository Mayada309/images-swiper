/**
 * @jest-environment jsdom
 */

// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Swiper from "./Swiper";

// describe("Swiper Component", () => {
//   const images = [
//     { id: 1, url: "image1.jpg" },
//     { id: 2, url: "image2.jpg" },
//     { id: 3, url: "image3.jpg" },
//   ];

//   it("should move to the next image when next button is clicked", () => {
//     const { getByAltText, getByText } = render(
//       <Swiper images={images} currentImage={0} setCurrentImage={jest.fn()} />,
//     );

//     fireEvent.click(getByText(">"));
//     expect(getByAltText("image2.jpg")).toBeInTheDocument();
//   });

//   it("should move to the previous image when prev button is clicked", () => {
//     const { getByAltText, getByText } = render(
//       <Swiper images={images} currentImage={1} setCurrentImage={jest.fn()} />,
//     );

//     fireEvent.click(getByText("<"));
//     expect(getByAltText("image1.jpg")).toBeInTheDocument();
//   });
// });
