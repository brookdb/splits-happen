/** This code used to test the <Calculate/> component using the enzyme framework
 *
 */
import { mount, render, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Calculate from "./calculate.js";

global.mount = mount;
global.render = render;
global.shallow = shallow;

configure({ adapter: new Adapter() });

describe("<Calculate/>", () => {
  it("it should load 2 <input> elements", () => {
    const wrapper = mount(<Calculate />);
    const input = wrapper.find("input");
    expect(input.length).toBe(2);
  });
  it("it should calculate XXXXXXXXXXXX to 300", () => {
    const wrapper = mount(<Calculate />);
    const input = wrapper.find("input").first();
    const score = wrapper.find("#score").first();
    const form = wrapper.find("form").first();
    input.instance().value = "XXXXXXXXXXXX";
    input.simulate("change", input);
    form.simulate("submit");
    expect(score.instance().textContent).toBe("Score: 300");
  });
  it("it should calculate 9-9-9-9-9-9-9-9-9-9- to 90", () => {
    const wrapper = mount(<Calculate />);
    const input = wrapper.find("input").first();
    const score = wrapper.find("#score").first();
    const form = wrapper.find("form").first();
    input.instance().value = "9-9-9-9-9-9-9-9-9-9-	";
    input.simulate("change", input);
    form.simulate("submit");
    expect(score.instance().textContent).toBe("Score: 90");
  });
  it("it should calculate 5/5/5/5/5/5/5/5/5/5/5 to 150", () => {
    const wrapper = mount(<Calculate />);
    const input = wrapper.find("input").first();
    const score = wrapper.find("#score").first();
    const form = wrapper.find("form").first();
    input.instance().value = "5/5/5/5/5/5/5/5/5/5/5";
    input.simulate("change", input);
    form.simulate("submit");
    expect(score.instance().textContent).toBe("Score: 150");
  });
  it("it should calculate X7/9-X-88/-6XXX81 to 167", () => {
    const wrapper = mount(<Calculate />);
    const input = wrapper.find("input").first();
    const score = wrapper.find("#score").first();
    const form = wrapper.find("form").first();
    input.instance().value = "X7/9-X-88/-6XXX81";
    input.simulate("change", input);
    form.simulate("submit");
    expect(score.instance().textContent).toBe("Score: 167");
  });
});
