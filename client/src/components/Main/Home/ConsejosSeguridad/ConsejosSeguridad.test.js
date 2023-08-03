import React from "react";
import { shallow } from "enzyme";
import ConsejosSeguridad from "./ConsejosSeguridad";

describe("ConsejosSeguridad", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ConsejosSeguridad />);
    expect(wrapper).toMatchSnapshot();
  });
});
