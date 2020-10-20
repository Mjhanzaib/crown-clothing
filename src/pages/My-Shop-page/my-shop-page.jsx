import React from "react";
import { Redirect } from "react-router-dom";
import "./shop-page.scss";
import SHOP_DATA from "./ShopData";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    const { currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/sign-in" />;
    }
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
