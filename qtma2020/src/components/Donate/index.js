import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";
import DonateButton from "../DonateButton";
const stripePromise = loadStripe(
  "pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0"
);
function Donate() {
  return (
    <div>
      <Navigation logo={logoBlack} fontColor="#000" background="#fff" />
      <DonateButton />
    </div>
  );
}
export default Donate;
