import request from '@/utils/request';

export type LoginParamsType = {
  username: string;
  password: string;
};

export async function AccountLogin(params: LoginParamsType) {
  return request('/api/user/login/', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
