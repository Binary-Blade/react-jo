import { FC } from "react";
import useCartStore from "@/stores/useCartStore";
import { Header } from "@/features/Header";
import { CartTicket } from "@/features/cart/CartTicket";
import { Footer } from "@/features/Footer";

export const CartPage: FC = () => {
  const { cartItems } = useCartStore(
    state => ({
      cartItems: state.cartItems,
    }));

  return (
    <>
      <Header />
      <CartTicket cartItems={cartItems} />
      <Footer />
    </>
  );
};
