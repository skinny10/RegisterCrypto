import React from "react";
import { Fondo } from "../IU/Fondo/Fondo";
import "./RegisterComponents.css";
import HeaderRegister from "./HeaderRegister/HeaderRegister";
import FormRegister from "./FormRegister/FormRegister";

export default function RegisterComponents() {
  return (
    <>
      <Fondo>
        <HeaderRegister />
        <FormRegister />
      </Fondo>
    </>
  );
}
