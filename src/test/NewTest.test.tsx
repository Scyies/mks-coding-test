// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { ProductCard } from '@/components/Products/ProductCard';
// import { CartContext, useCartData } from '@/context/cartContext';
// import { IData } from '@/hooks/useFetch';

// jest.mock('@/context/cartContext', () => {
//   return {
//     useCartData: jest.fn().mockReturnValue({
//       cartItems: [
//         {
//           id: 1,
//           name: 'Product 1',
//           photo:
//             'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
//           description: 'Description 1',
//           price: '10',
//           quantity: 1,
//           cartPrice: '10',
//         },
//       ],
//       setCartItems: jest.fn(),
//     }),
//   };
// });

// describe('ProductCard component', () => {
//   const product = {
//     name: 'Test Product',
//     photo:
//       'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
//     description: 'This is a test product',
//     price: '10',
//     id: 2,
//     quantity: 1,
//   };

//   it('adds a new product', () => {
//     const { getByRole } = render(
//       <ProductCard
//         name={product.name}
//         img={product.photo}
//         desc={product.description}
//         id={product.id}
//         price={product.price}
//       />
//     );

//     const { cartItems, setCartItems } = useCartData();

//     console.log(cartItems);

//     fireEvent.click(getByRole('button'));

//     console.log(cartItems);

//     expect(cartItems).toStrictEqual([
//       ...cartItems,
//       {
//         description: product.description,
//         cartPrice: product.price,
//         id: product.id,
//         name: product.name,
//         photo: product.photo,
//         price: product.price,
//         quantity: product.quantity,
//       },
//     ]);
//   });

//   it('should increase the quantity of the product when it already exists in the cart', () => {
//     const { getByRole } = render(
//       // <CartContext.Provider value={{ cartItems, setCartItems }}>
//       <ProductCard
//         name={product.name}
//         img={product.photo}
//         desc={product.description}
//         id={product.id}
//         price={product.price}
//       />
//       // </CartContext.Provider>
//     );

//     const { cartItems, setCartItems } = useCartData();

//     const addToCartButton = getByRole('button');

//     fireEvent.click(addToCartButton);

//     expect(cartItems).toBe([
//       {
//         id: 1,
//         name: 'Product 1',
//         photo:
//           'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
//         description: 'Description 1',
//         price: '10',
//         quantity: 2,
//         cartPrice: '10',
//       },
//     ]);
//   });
// });
