import * as React from "react";
import { ContactLink } from "src/app/models/ContactLink";
import "./ContactLinks.css";

export interface ContactLinksProps {
  Links: ContactLink[];
}

export class ContactLinks extends React.Component<ContactLinksProps, any> {
  render() {
    const { Links } = this.props;

    return <div className="contact-links">{this.generateUrlList(Links)}</div>;
  }

  private generateUrlList(links: ContactLink[]): any {
    return (
      <React.Fragment>
        {links.map(link => this.generateUrl(link))}
      </React.Fragment>
    );
  }

  private generateUrl(link: ContactLink): any {
    return (
      <a target="_blank" href={link.Url}>
        <img className="contact-links__icon" src={link.Icon} alt={link.Name} />
      </a>
    );
  }
}
