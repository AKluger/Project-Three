import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import "./setupTest"
import App from './App';


describe("first enzyme test", () => {
it('renders without crashing', () => {
  shallow(<App />);
});
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

// describe('Examining the syntax of Jest tests', () => {

// it('sums numbers', () => {
//   expect(1+2).toEqual(3);
//   expect(2 +2).toEqual(4);
// });

// });