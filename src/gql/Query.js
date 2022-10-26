// import { gql } from '@apollo/client';
// import { useQuery } from '@apollo/client';
// // export const getCurrency = gql`
// //     query Currency() {
// //         label
// //         symbol
// //     }
// // `;

// export const getProduct = gql`
//   query Product($id: String!) {
//     product(id: $id) {
//       id
//       name
//       brand
//       gallery
//       description
//       category
//       attributes {
//         id
//         name
//         type
//         items {
//           displayValue
//           value
//           id
//         }
//       }
//       prices {
//         currency {
//           symbol
//         }
//         amount
//       }
//     }
//   }
// `;

// export const getCategories = gql`
//   query {
//     categories {
//       name
//       products {
//         id
//         name
//         inStock
//         gallery
//         description
//         category
//         attributes {
//           id
//           name
//           type
//           items {
//             displayValue
//             value
//             id
//           }
//         }
//         prices {
//           currency {
//             symbol
//           }
//           amount
//         }
//       }
//     }
//   }
// `;
