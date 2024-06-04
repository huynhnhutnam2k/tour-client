/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import { MainLayout } from "@/layouts";
import { ReduxProvider } from "@/redux/provider";
import { settingApi } from "@/services";
import { getLocale } from "@/helpers/utils/server";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const locale = (await getLocale()) || { value: "vi" };
  const setting = await settingApi.getSetting(locale);
  const store = {
    locale,
    setting,
  };
  return (
    <html lang="vi">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <body>
        <NextTopLoader color="#2154a3" />
        <ReduxProvider data={store}>
          <MainLayout>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </MainLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
