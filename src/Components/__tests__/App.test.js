import React from "react";
import Recordings from "../../pages/Recordings";
import { shallow } from "enzyme";
import List from "../List";
import ListItem from "./../ListItem";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(()=> {
    
})
it("shows recording list", () => {
  const wrapped = shallow(<Recordings />);
  expect(wrapped.find(List).length).toEqual(1);
});
it("shows 1+  recording list items", () => {
  const wrapped = shallow(<List />);
  expect(wrapped.find(ListItem).length).toBeGreaterThan(0);
});
