
// import Nav from '../components/Nav';
// import React, { useState, useEffect } from 'react';

// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux';
// import setProduct from '../redux/actions/products'
// import ProductCatalog from '../components/ProductCatalog'
// import { addProductToBasket } from '../redux/actions/basket'
// import Footer from '../components/Footer';

// const Catalog = () => {
//     const dispatch = useDispatch()
//     const getProducts = () => {
//         axios.get('http://localhost:8000/api/medicalservice/').then(data => dispatch(setProduct(data.data)))
//     }

//     useEffect(() => {
//         getProducts()
//     }, [])

//     const {name, price} = useSelector((state) => ({
//         name: state.name.name,
//         price: state.price.price
//     }))

//     const handleClickAddProduct = obj => {  
//         dispatch(addProductToBasket(obj))
//     }

//     return (
//         <section className={styles.catalog}>
//             <Nav />
//             <div className={styles.background}>
//                 <div className={styles.wrapper_catalog}>
//                     <h1 className={styles.title}>Услуги</h1>
//                     <div className={styles.block_cards}>
//                         {products && products.map((obj, i) => (
//                             <ProductCatalog key={i} onClickAddProduct={handleClickAddProduct}  {...obj}/>
//                         ))}
//                     </div>
//                     <button className={styles.button}>Показать еще</button>
//                 </div>
//             </div>
//             <Footer/>
          
//         </section>
//     )
// }

// export default Catalog;