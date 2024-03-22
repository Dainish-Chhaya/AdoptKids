// // import mongoose from "mongoose";

// // const Schema = mongoose.Schema;

// // const fosterchildSchema = new Schema({

// //   childId: {
// //     type: Number,
// //     required: true,
// //   },
// //   name: {
// //     //below is the metadata for the property name
// //     type: String,
// //     required: true,
// //   },
// //   gender: {
// //     type: String,
// //     requred: true,
// //   },
// //   birthDate: {
// //     type: String,
// //     requred: true,
// //   },
// //   parentName: {
// //     //below is the metadata for the property name
// //     type: String,
// //     required: true,
// //   },
// //   grade: {
// //     type: String,
// //     requred: true,
// //   },
// //   country: {
// //     type: String,
// //     requred: true,
// //   },
// //   biography: {
// //     type: String,
// //     required: true,
// //   },
// //   healthStatus: {
// //     type: String,
// //     required: true,
// //   },
// //   photo: {
// //     type: String,
// //     required: true,
// //   },

// // });

// // const FosterChild = mongoose.model("FosterChildData", fosterchildSchema);

// // export default FosterChild;

// import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const ChildSchema = new Schema(
//   {
//     childId: {
//       type: Number,
//       required: true,
//     },
//     name: {
//       //below is the metadata for the property name
//       type: String,
//       required: true,
//     },
//     gender: {
//       type: String,
//       requred: true,
//     },
//     birthDate: {
//       type: String,
//       requred: true,
//     },
//     parentName: {
//       //below is the metadata for the property name
//       type: String,
//       required: true,
//     },
//     grade: {
//       type: String,
//       requred: true,
//     },
//     country: {
//       type: String,
//       requred: true,
//     },
//     biography: {
//       type: String,
//       required: true,
//     },
//     healthStatus: {
//       type: String,
//       required: true,
//     },
//     photo: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     //Prevent the default behaviour of the version key which creates a property version key automatically, this is an optional parameter
//     versionKey: false,
//   }
// );

// //Creating the model using the schema
// const FosterChild = mongoose.model("child", ChildSchema);

// export default FosterChild;
