import React from "react";

// import Icons
import dashboard_icon from "../assests/icons/Dashboard.svg";
import activity_icon from "../assests/icons/Activity.svg";
import wallet_icon from "../assests/icons/Wallet.svg";
import product_icon from "../assests/icons/products.svg";
import referrals_icon from "../assests/icons/refferal.svg";
import virtual_card_icon from "../assests/icons/virtual-card.svg";
import go_back_icon from "../assests/icons/go-back-icon.svg";
import arrow_down_icon from "../assests/icons/arrow-down.svg";
import bell_icon from "../assests/icons/bell-icon.svg";
import billing_address_icon from "../assests/icons/billing-address-icon.svg";
import download_icon from "../assests/icons/download.svg";

// dashborad icon
export const DashboardIcon = () => {
  return <img src={dashboard_icon} alt="dashborad icon" />;
};

// activity icon
export const ActivityIcon = () => {
  return <img src={activity_icon} alt="activity icon" />;
};

// wallet icon
export const WalletIcon = () => {
  return <img src={wallet_icon} alt="wallet icon" />;
};

// product icon
export const ProductIcon = () => {
  return <img src={product_icon} alt="product icon" />;
};

// referrals icon
export const ReferralsIcon = () => {
  return <img src={referrals_icon} alt="referrals icon" />;
};

// virtual card icon
export const VirtualCardIcon = () => {
  return <img src={virtual_card_icon} alt="virtual card icon" />;
};

// go back icon
export const GoBackIcon = () => {
  return (
    <img src={go_back_icon} alt="go back icon" className="cursor-pointer" />
  );
};

// arrow down icon
export const ArrowDownIcon = () => {
  return <img src={arrow_down_icon} alt="arrow down icon" className="ml-3" />;
};

// billing address icon
export const BillingAddressIcon = () => {
  return <img src={billing_address_icon} alt="billing address icon" />;
};

// bell icon
export const BellIcon = () => {
  return <img src={bell_icon} alt="bell icon" />;
};

// download icon
export const DownloadIcon = () => {
  return <img src={download_icon} alt="download icon" />;
};
