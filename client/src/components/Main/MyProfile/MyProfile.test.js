import React from "react";
import { shallow } from "enzyme";
import MyProfile from "./MyProfile";

describe("MyProfile", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
