import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Gallery() {
    let prodArray1 = [
        {id: 1, prodName: `Samsung`, price: 3000, onSale: false, desc: `Samsung Mobile Phone`, quantity: 0},
        {id: 2, prodName: `Oppo`, price: 5000, onSale: false, desc: `Oppo Mobile Phone`, quantity: 0},
        {id: 3, prodName: `TV`, price: 15000, onSale: true, desc: `Smart TV`, quantity: 0},
        {id: 4, prodName: `PC`, price: 12000, onSale: true, desc: `HighEnd PC`, quantity: 0},
        {id: 5, prodName: `Camera`, price: 10000, onSale: false, desc: `DSLR Camera`, quantity: 0},
        {id: 6, prodName: `iPad`, price: 15000, onSale: true, desc: `Apple iPad`, quantity: 0},
        {id: 7, prodName: `Tab`, price: 4000, onSale: false, desc: `Android Tab`, quantity: 0},
    ];


    let prodArray2 = [
        {id: 1, prodName: `Fruit`, price: 5, onSale: false, desc: `Apple`, quantity: 0},
        {id: 2, prodName: `Vegetable`, price: 3, onSale: false, desc: `Tomato`, quantity: 0},
    ];

    let [products,setProducts] = useState(prodArray1);
    let [items,setItems] = useState(prodArray2);

    function deleteProduct(id) {
        setProducts(products.filter((product) => product.id !== id));
    }

    function deleteItem(id) {
        setItems(items.filter((item) => item.id !== id));
    }

    useEffect(() => {
        console.log("Product component mounted");

        return () => {
            console.log("Product component unmounted");
        };
    }, []);

    useEffect(() => {
        console.log(`Products list updated`);
    }, [products]);

    return (
        <>
            <div className='container-fluid d-flex justify-content-center align-items-center vh-100 w-100 bg-primary'>
                <div className=' w-50 bg-white p-4 text-center rounded shadow'>
                    <h1 className='text-dark text-center'>Gallery</h1>
                    <NavLink to='list1' className='text-secondary text-center text-decoration-none mt-3 mb-0 mx-3'>List 1</NavLink>
                    <NavLink to='list2' className='text-secondary text-center text-decoration-none mt-3 mb-0 mx-3 '>List 2</NavLink>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Gallery