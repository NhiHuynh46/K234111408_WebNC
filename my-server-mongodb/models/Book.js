const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    tensach: {
      type: String,
      required: true,
      trim: true
    },
    giaban: {
      type: Number,
      required: true,
      min: 0
    },
    mota: {
      type: String,
      trim: true,
      default: ''
    },
    anhbia: {
      type: String,
      default: null
    },
    ngaycapnhat: {
      type: Date,
      default: Date.now
    },
    soluongton: {
      type: Number,
      required: true,
      default: 0,
      min: 0
    },
    maCD: {
      type: String,
      trim: true
    },
    maNXB: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', bookSchema);
