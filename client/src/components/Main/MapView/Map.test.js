import React from "react";
import { shallow } from "enzyme";
import MapView from "./MapView";

describe("Map", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Map />);
    expect(wrapper).toMatchSnapshot();
  });
});
