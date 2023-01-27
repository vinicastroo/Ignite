import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  function checkStockFromProduct(stock: Stock, amount: number): Boolean {
    return stock.amount < amount;
  }

  const addProduct = async (productId: number) => {
    try {
      const upadtedCart = [...cart];

      const productExists = upadtedCart.find(product => product.id === productId);

      const stock = await api.get(`stock/${productId}`).then(response => response.data);
      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if (checkStockFromProduct(stock, amount)) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      if (productExists) {
        productExists.amount = amount;
      } else {
        const product = await api.get(`products/${productId}`).then(response => response.data);

        const newProduct = { ...product, amount: 1 };
        upadtedCart.push(newProduct)
      }

      setCart(upadtedCart)
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(upadtedCart))
    }
    catch (err: unknown) {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const indexProductCart = cart.findIndex(product => product.id === productId);

      if (indexProductCart < 0) {
        throw new Error();
      }

      const newCart = [...cart];
      newCart.splice(indexProductCart, 1);

      setCart(newCart);
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart))
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const newCart = [...cart];

      const stock = await api.get(`stock/${productId}`).then(response => response.data);
      const productExists = newCart.find(product => product.id === productId);

      if (!productExists) {
        toast.error('Erro na alteração de quantidade do produto');
        return;
      }

      if (checkStockFromProduct(stock, amount)) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      productExists.amount = amount;
      setCart(newCart)
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart))
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
