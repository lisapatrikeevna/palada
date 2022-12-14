// Synchronous validation
export const v=()=>{}
// const validate = (values, props /* only available when using withFormik */) => {
//     const errors = {};
//
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
//
//     //...
//
//     return errors;
// };
//
// // Async Validation
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// const validate = (values, props /* only available when using withFormik */) => {
//     return sleep(2000).then(() => {
//         const errors = {};
//         if (['admin', 'null', 'god'].includes(values.username)) {
//             errors.userName = 'Nice try';
//         }
//         // ...
//         return errors;
//     });
// };