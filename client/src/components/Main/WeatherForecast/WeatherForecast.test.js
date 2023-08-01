import React from "react";
import { shallow } from "enzyme";
import WeatherForecast from "./WeatherForecast";

describe("WeatherForecast", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherForecast />);
    expect(wrapper).toMatchSnapshot();
  });
});
