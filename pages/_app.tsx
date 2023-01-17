/*
 * @Date: 2023-01-13 11:18:35
 * @LastEditors: Lamwolff wangning13@corp.netease.com
 * @LastEditTime: 2023-01-17 10:37:58
 * @FilePath: /yanxuan-ic-plan-web/home/netease/core/nextjs-blog/pages/_app.tsx
 * @Description: 
 * @Author: Lamwolff wangning13@corp.netease.com
 */
import { AppProps } from "next/app";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}