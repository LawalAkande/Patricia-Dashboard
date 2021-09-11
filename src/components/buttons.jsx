import React from "react";
import { Button } from "atomize";

// Create new card Button
export const CreateNewCardButton = () => {
  return (
    <Button
      textColor="#1D1E2C"
      bg="#FFCE00"
      border="1px solid"
      borderColor="#FFCE00"
      hoverShadow="4"
    >
      Create New Card
    </Button>
  );
};

// Freeze card button
export const FreezeCardButton = () => {
  return (
    <Button
      textColor="#006156"
      hoverTextColor="#FFFFFF"
      bg="#FFFFFF"
      hoverBg="#006156"
      border="1px solid"
      borderColor="#006156"
    >
      Freeze Card
    </Button>
  );
};

// Delete card button
export const DeleteCardButton = () => {
  return (
    <Button
      textColor="#CC4945"
      hoverTextColor="#FFFFFF"
      bg="#FFFFFF"
      hoverBg="#CC4945"
      border="1px solid"
      borderColor="#CC4945"
    >
      Delete Card
    </Button>
  );
};

// Fun card button
export const FundCardButton = () => {
  return (
    <Button
      textColor="#006156"
      hoverTextColor="#FFFFFF"
      bg="#FFFFFF"
      hoverBg="#006156"
      border="1px solid"
      borderColor="#006156"
    >
      Fund Card
    </Button>
  );
};
