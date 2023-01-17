/*
* @Date: 2023-01-16 15:21:53
 * @LastEditors: Lamwolff wangning13@corp.netease.com
 * @LastEditTime: 2023-01-17 10:38:48
 * @FilePath: /yanxuan-ic-plan-web/home/netease/core/nextjs-blog/pages/api/hello.ts
* @Description: 
 * @Author: Lamwolff wangning13@corp.netease.com
*/

import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' });
}