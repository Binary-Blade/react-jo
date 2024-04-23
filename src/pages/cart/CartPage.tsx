import { FC, useEffect } from "react";
import { Header } from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import useCartStore from "@/stores/useCartStore";
import { CartTicket } from "@/components/cart/CartTicket";
import { useAuthStore } from "@/stores/useAuthStore";


export const CartPage: FC = () => {
  const { userId } = useAuthStore(state => ({
    userId: state.userId,
  }));


  const cartId = 1;
  const { cartItems, fetchCartItems } = useCartStore(state => ({
    cartItems: state.cartItems,
    fetchCartItems: state.fetchCartItems,
  }));

  useEffect(() => {
    if (userId && cartId) {
      fetchCartItems(userId, cartId);
    }
  }, [fetchCartItems, userId, cartId]); // Runs only once on component mount if dependencies are empty

  return (
    <>
      <Header />
      <CartTicket cartItems={cartItems} />
      <Footer />
    </>
  );
};
