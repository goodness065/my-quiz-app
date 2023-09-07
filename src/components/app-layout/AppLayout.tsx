import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
// import Transitions from "../Transition";

export interface AppLayoutProps {
  children?: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    // <Transitions>
      <div>
        <Header />
        <div className="app-content">
          {children ?? null}
          <Outlet />
        </div>
      </div>
    // </Transitions>
  );
};
