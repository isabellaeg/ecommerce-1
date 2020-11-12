
import React from "react";
import { connect } from "react-redux";

import NewProduct from "../components/NewProduct";
import {addAdminProduct, fetchAdminCategory} from '../actions/admin'

class NewProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stock: "",
      price: "",
      imgUrl: "",
      description: "",
      category: []
    };

    this.handleStock = this.handleStock.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleCategory=this.handleCategory.bind(this) 
  }

  componentDidMount() {
    return this.props.fetchAdminCategory()
  }

  handleStock(e) {
    this.setState({ stock: e.target.value });
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleImg(e) {
    this.setState({ imgUrl: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleCategory(e) {
    let cat = this.state.category
    cat.push(e.id)
    this.setState({category: cat});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addAdminProduct(
      {name: this.state.name,
      stock: this.state.stock,
      price: this.state.price,
      imgUrl: this.state.imgUrl,
      description: this.state.description},
      {category: this.state.category}
    ).then(()=>this.props.history.push("/admin/product"))

    this.setState({
        name: "",
        stock: "",
        price: "",
        imgUrl: "",
        description: "",
    });


  }

  render() {
    return (
      <NewProduct
        user={this.props.user}
        allCategory={this.props.allCategory}
        handleSubmit = {this.handleSubmit}
        handleStock = {this.handleStock}
        handleName =  {this.handleName}
        handlePrice = {this.handlePrice}
        handleImg = {this.handleImg}
        handleDescription = {this.handleDescription}
        handleCategory = {this.handleCategory}
        category = {this.state.category}
      />

    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        allCategory: state.admin.allCategory
        

    }
};

export default connect(mapStateToProps, {addAdminProduct, fetchAdminCategory})(NewProductContainer);
