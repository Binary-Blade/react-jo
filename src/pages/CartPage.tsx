import { FC } from "react";
import useCartStore from "@/stores/useCartStore";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";
import { CartContent } from "@/features/cart/CartContent";

export const CartPage: FC = () => {
  const { cartItems } = useCartStore(
    state => ({
      cartItems: state.cartItems,
    }));

  return (
    <>
      <Header />
      <CartContent cartItems={cartItems} />
      <Footer />
    </>
  );
};
