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
