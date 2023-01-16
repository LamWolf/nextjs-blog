/*
 * @Date: 2023-01-16 14:53:40
 * @LastEditors: Lamwolff wangning13@corp.netease.com
 * @LastEditTime: 2023-01-16 14:53:53
 * @FilePath: /yanxuan-ic-plan-web/home/netease/core/nextjs-blog/components/date.js
 * @Description: 
 * @Author: Lamwolff wangning13@corp.netease.com
 */
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}