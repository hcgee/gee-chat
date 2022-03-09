/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:51:56 
 * @Last Modified by:   huhanchi 
 * @Last Modified time: 2022-03-09 22:51:56 
 */
/**
 * 好友
 */
export interface FriendObjectProps {
  id: number | string;
  name: string;
  head_url: string;
  desc: string;
}

/**
 * 聊天记录
 */

export interface ChatRecordObjectProps {
  id: number | string;
  name: string;
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
