import { useState } from 'react';

export function Test() {
  const [cartItems, setCartItems] = useState('Ronaldo');
  return <button onClick={() => setCartItems('Cacetão')}>{cartItems}</button>;
}
