import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import { Toaster } from "react-hot-toast";

export interface AppLayoutProps {
  children?: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
      <div>
        <Header />
        <div className="app-content">
          {children ?? null}
          <Outlet />
          <Toaster />
        </div>
      </div>
  );
};
