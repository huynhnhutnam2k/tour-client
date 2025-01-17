/* eslint-disable @next/next/no-page-custom-font */
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import HttpsRedirect from "react-https-redirect";

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

export default async function RootLayout({ Component, children }) {
  const locale = (await getLocale()) || { value: "vi" };
  const setting = await settingApi.getSetting(locale);
  const store = {
    locale,
    setting,
  };

  const Layout = Component?.Layout || MainLayout
  return (
    <html lang="vi">
      <head>
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
      </head>
      <body>
        <NextTopLoader color="#2154a3" />
        <HttpsRedirect>
          <ReduxProvider data={store}>
            <Layout>
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
            </Layout>
          </ReduxProvider>
        </HttpsRedirect>
      </body>
    </html>
  );
}
