import React from 'react';
import PropTypes from 'prop-types';
import { JSONLD, Generic } from 'react-structured-data';

class ProductStructuredData extends React.Component {

  render() {

    return (
      <JSONLD>
        <Generic
          type = "Product"
          schema = {{
            "name": this.props.name,
            "image": [
              this.props.image,
              this.props.additionalImage
            ],
            "description": this.props.description,
            "brand": {
              "@type": "Thing",
              "name": this.props.brandName
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": this.props.currency,
              "price": this.props.price,
              "availability": "In Stock",
              "url": this.props.url,
            }
          }}
        />
      </JSONLD>
    );
  }
}

ProductStructuredData.defaultProps = {
  brandName: "Modulos",
  currency: "USD"
}

ProductStructuredData.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    additionalImage: PropTypes.string,
    description: PropTypes.string,
    brandName: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string.isRequired
};

export default ProductStructuredData;



// WEBPACK FOOTER //
// ./src/components/google-structured-data/ProductStructuredData.js
