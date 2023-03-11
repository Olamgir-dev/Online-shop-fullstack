const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg",
    },
    rating: {
      value: {
        type: Number,
        default: 0,
      },
      numberOfRates: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('Product', productSchema);