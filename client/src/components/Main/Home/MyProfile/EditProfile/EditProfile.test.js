import React from "react";
import { shallow } from "enzyme";
import EditProfile from "./EditProfile";

describe("EditProfile", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EditProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
