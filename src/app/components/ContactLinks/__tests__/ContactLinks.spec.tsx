import { ContactLinks, ContactLinksProps } from "../ContactLinks";
import { shallow, configure } from "enzyme";
import * as React from "react";
import * as Adapter from 'enzyme-adapter-react-16';

const setup = (propsOverride?: ContactLinksProps) => {
  var props: ContactLinksProps = {
    Links: [
      {
        Name: 'foo',
        Url: 'foo.bar',
        Icon: 'foo/bar'
      },
      {
        Name: 'bar',
        Url: 'bar.foo',
        Icon: 'bar/foo'
      },
      {
        Name: 'foobar',
        Url: 'bar.bar',
        Icon: 'bar/bar'
      }
    ]
  };

  props = {...props, ...propsOverride};
  
  configure({adapter: new Adapter()});
  return { wrapper: shallow(<ContactLinks {...props} />) };
};

describe("ContactLinks", () => {
  it('should render nothing if no links are passed', () => {
    const {wrapper} = setup({Links: []});

    expect(wrapper.find('.contact-links__icon')).toHaveLength(0);
  });

  it("should render three links if three icons are passed as props", () => {
    const { wrapper } = setup();

    expect(wrapper.find('.contact-links__icon')).toHaveLength(3);
  });
});
