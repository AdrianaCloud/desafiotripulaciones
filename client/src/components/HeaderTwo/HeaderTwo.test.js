import React from "react";
import { shallow } from "enzyme";
import HeaderTwo from "./HeaderTwo";

describe("HeaderTwo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HeaderTwo />);
    expect(wrapper).toMatchSnapshot();
  });
});
