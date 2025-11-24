import TopHeader from "@/components/Header/TopHeader";
import CartCard from "@/components/Product/CartCard";
import ButtonIcon from "@/components/ui/ButtonIcon";
import SafeContianer from "@/components/ui/SafeContianer";
import { Icons } from "@/contants/Icons";
import { Link } from "expo-router";
import React from "react";

const index = () => {
  return (
    <SafeContianer variant="secondary">
      <TopHeader
        title="My Cart"
        leftComponent={
          <Link href=".." asChild>
            <ButtonIcon icon={Icons.BackArrow} />
          </Link>
        }
      />

      <CartCard />
    </SafeContianer>
  );
};

export default index;
