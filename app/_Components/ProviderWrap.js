"use client";

import { Provider } from "react-redux";
import store from "../_RTK/store";

export default function ProviderWrap({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
