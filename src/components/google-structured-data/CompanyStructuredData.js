import React from 'react';
import { JSONLD, Generic } from 'react-structured-data';
// import pngSquareLogo from '../../../static/images/branding/Modulos-logo-png-square.png';

class CompanyStructuredData extends React.Component {

  render() {

    return (
      <JSONLD>
        <Generic
          type = "Organization"
          schema = {{
            "url": "https://www.modulosdesk.com",
            "logo": {}, //{pngSquareLogo},
            "sameAs": [
              "https://www.facebook.com/modulosdesk",
              "https://www.instagram.com/modulosdesk",
              "https://www.twitter.com/modulosdesk",
              "https://www.linkedin.com/company/modulos-furniture-systems"
            ],
            "address": "Avenija Dubrovnik 15/12, 10020 Zagreb, Croatia",
            "email": "hello@modulosdesk.com",
            "legalName": "Modulos Furniture Systems llc."
          }}
        />
      </JSONLD>
    );
  }
}

export default CompanyStructuredData;



// WEBPACK FOOTER //
// ./src/components/google-structured-data/CompanyStructuredData.js
