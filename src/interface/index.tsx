/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:51:56
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-15 21:03:20
 */
/**
 * 好友
 */
export interface FriendObjectProps {
  user_id: number | string;
  nickname: string;
  head: string;
  desc: string;
  status: number;
}

/**
 * 聊天记录
 */

export interface ChatRecordObjectProps {
  id: number | string;
  nickname: string;
  isme: boolean;
  head_url: string;
  content: string;
  sendTime: string;
}

/**
 * 面包屑
 */

export interface BreadCrumbsProps {
  title: string;
}
