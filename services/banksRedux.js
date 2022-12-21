import request from 'utils/request';
import CONFIG from 'utils/config';
import stringify from 'utils/stringifyParams';

export async function createBankAccounts(params) {
  return request(`${CONFIG.API_SERVER_2}/bankAccounts`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
