import { FC } from "react";
import { Header } from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import useCartStore from "@/stores/useCartStore";
import { CartTicket } from "@/components/cart/CartTicket";

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
