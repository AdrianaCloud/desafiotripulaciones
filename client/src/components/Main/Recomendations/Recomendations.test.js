import React from "react";
import { shallow } from "enzyme";
import Recomendations from "./Recomendations";

describe("Recomendations", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Recomendations />);
    expect(wrapper).toMatchSnapshot();
  });
});
