import React from "react";
import { shallow } from "enzyme";
import UserForm from "./UserForm";

describe("UserForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
