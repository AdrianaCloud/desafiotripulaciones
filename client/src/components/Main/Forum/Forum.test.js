import React from "react";
import { shallow } from "enzyme";
import Forum from "./Forum";

describe("Forum", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Forum />);
    expect(wrapper).toMatchSnapshot();
  });
});
