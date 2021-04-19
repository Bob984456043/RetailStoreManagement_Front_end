import type { FC} from 'react';
import React, { useEffect } from 'react';
import moment from 'moment';
import { Modal, Result, Button, Form, DatePicker, Input, Select } from 'antd';
import type { BasicListItemDataType } from '../data.d';
import styles from '../style.less';

interface OperationModalProps {
  done: boolean;
  visible: boolean;
  current: Partial<BasicListItemDataType> | undefined;
  onDone: () => void;
  onSubmit: (values: BasicListItemDataType) => void;
  onCancel: () => void;
}

const { TextArea } = Input;
const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const [form] = Form.useForm();
  const { done, visible, current, onDone, onCancel, onSubmit } = props;

  useEffect(() => {
    if (form && !visible) {
      form.resetFields();
    }
  }, [props.visible]);

  useEffect(() => {
    if (current) {
      form.setFieldsValue({
        ...current,
        createdAt: current.createdAt ? moment(current.createdAt) : null,
      });
    }
  }, [props.current]);

  const handleSubmit = () => {
    if (!form) return;
    form.submit();
  };

  const handleFinish = (values: Record<string, any>) => {
    if (onSubmit) {
      onSubmit(values as BasicListItemDataType);
    }
  };

  const modalFooter = done
    ? { footer: null, onCancel: onDone }
    : { okText: '保存', onOk: handleSubmit, onCancel };

  const getModalContent = () => {
    if (done) {
      return (
        <Result
          status="success"
          title="操作成功"
          subTitle="操作成功"
          extra={
            <Button type="primary" onClick={onDone}>
              知道了
            </Button>
          }
          className={styles.formResult}
        />
      );
    }
    return (
      <Form {...formLayout} form={form} onFinish={handleFinish}>
        <Form.Item
          name="title"
          label="商品名称"
          rules={[{ required: true, message: '请输入商品名称' }]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="owner"
          label="单价"
          rules={[{ required: true, message: '请输入商品单价' }]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="owner"
          label="会员价"
          rules={[{ required: true, message: '会员价' }]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="owner"
          label="商品类目"
          rules={[{ required: true, message: '请输入商品类目' }]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="owner"
          label="商品图片"
          rules={[{ required: true, message: '请上传商品图片' }]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="owner"
          label="商品"
          rules={[{ required: true, message: '请上传商品图片' }]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="subDescription"
          label="商品描述"
          rules={[{ message: '请输入至少五个字符的产品描述！', min: 5 }]}
        >
          <TextArea rows={4} placeholder="请输入至少五个字符" />
        </Form.Item>
      </Form>
    );
  };

  return (
    <Modal
      title={done ? null : `任务${current ? '编辑' : '添加'}`}
      className={styles.standardListForm}
      width={640}
      bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
      destroyOnClose
      visible={visible}
      {...modalFooter}
    >
      {getModalContent()}
    </Modal>
  );
};

export default OperationModal;
