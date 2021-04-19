import request from 'umi-request';
import type { TableListParams } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('/api/rule', {
    params,
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
export type GetSpuListParams = {
  name: string;
  limit: string;
  offset: string;
  category_id: string;
};
export async function GetSpuList(params: GetSpuListParams) {
  return request('/api/spu', {
    method: 'GET',
    data: params,
  });
}
