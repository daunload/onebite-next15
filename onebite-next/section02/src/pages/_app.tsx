import "@/styles/globals.css";
import GlobalLayout from "@/components/global-layout";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next/types";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
}



/**
 * Root Component 역할
 * 
 * Component: 페이지 역할을 할 컴포넌트
 * pageProps: Component에 전달될 props 
 */
export default function App({ Component, pageProps }: AppProps & {
  Component: NextPageWithLayout
}) {

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <>
      <GlobalLayout>
        {getLayout(<Component {...pageProps} />)}
      </GlobalLayout>
    </>
  );
}
