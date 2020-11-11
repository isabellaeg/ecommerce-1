import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../actions/products";
import EditProduct from "../components/EditProduct";
import {editProduct, fetchAdminProducts} from '../actions/admin'

class EditProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stock: "",
      price: "",
      imgUrl: "",
      description: "",
      category: [],
      id: ""
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
    this.props.fetchSingleProduct(this.props.match.params.id).then(()=> this.setState({name: this.props.singleProduct.name, 
        stock: this.props.singleProduct.stock,
        price: this.props.singleProduct.price,
        imgUrl: this.props.singleProduct.imgUrl,
        description: this.props.singleProduct.description }))
    
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

    this.props.editProduct(
      {name: this.state.name,
      stock: this.state.stock,
      price: this.state.price,
      imgUrl: this.state.imgUrl,
      description: this.state.description,
    id: this.props.singleProduct.id },
      // {category: this.state.category}
    ).then(()=> this.props.fetchAdminProducts())
    .then(()=> console.log("hola"))

    this.setState({
        name: "",
        stock: "",
        price: "",
        imgUrl: "",
        description: "",
    });

    this.props.history.push("/admin/product");
  }

  render() {
    return (
      <EditProduct
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
        singleProduct={this.props.singleProduct}
        state={this.state}
      />

    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        singleProduct: state.products.singleProduct,
    }
};

export default connect(mapStateToProps, {fetchSingleProduct, editProduct, fetchAdminProducts})(EditProductContainer);
