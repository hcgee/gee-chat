import React from "react";
import { createPortal } from "react-dom";

import styles from "./index.module.less";
export interface ModalProps {
  /** 对话框是否可见 */
  visible?: boolean;
  /** 确定按钮 loading */
  confirmLoading?: boolean;
  /** 标题 */
  title?: React.ReactNode | string;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  afterClose?: () => void;
  /** 垂直居中 */
  centered?: boolean;
  /** 宽度 */
  width?: string | number;
  /** 底部内容 */
  footer?: React.ReactNode;
  /** 确认按钮文字 */
  okText?: React.ReactNode;
  /** 取消按钮文字 */
  cancelText?: React.ReactNode;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  children: any;
}
export default function Modal(props: ModalProps) {
  const {
    visible,
    children,
    title = "标题",
    onCancel,
    closable = true,
    width,
    onOk,
  } = props;
  // 关闭Modal
  const onCancelFn = (e: React.MouseEvent<HTMLElement>) => {
    if (onCancel) {
      onCancel(e);
    }
  };
  const Child = () => {
    return (
      <div>
        <div className={styles["gee-modal-mask"]}></div>
        <div className={styles["gee-modal-wrap"]}>
          <div
            style={width ? { width: `${width}px` } : {}}
            className={styles["gee-modal"]}
          >
            <div className={styles["gee-modal-content"]}>
              <div className={styles["gee-modal-header"]}>
                <div className={styles["gee-modal-title"]}>{title}</div>
                {closable && (
                  <div
                    onClick={(e) => {
                      onCancelFn(e);
                    }}
                    className={styles["gee-modal-close"]}
                  >
                    关闭
                  </div>
                )}
              </div>
              <div className={styles["gee-modal-body"]}>{children}</div>
              <div className={styles["gee-modal-footer"]}>
                <button
                  onClick={(e) => {
                    onCancelFn(e);
                  }}
                >
                  取消
                </button>
                <button
                  onClick={(e) => {
                    if (onOk) {
                      onOk(e);
                    } else {
                      onCancelFn(e);
                    }
                  }}
                >
                  确定
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{visible && createPortal(<Child />, document.body)}</>;
}
