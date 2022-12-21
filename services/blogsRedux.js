import CONFIG from 'utils/config';
import request from 'utils/request';

// import stringify from 'utils/stringifyParams';

export async function queryArticleAll() {
  //   const { filter, sort, range, attributes } = params;
  //   const query = {
  //     filter: JSON.stringify(filter),
  //     sort: JSON.stringify(sort || ['createDate', 'DESC']),
  //     range: JSON.stringify(range || [0, 49]),
  //   };
  //   if (attributes) {
  //     query.attributes = attributes;
  //   }
  console.log('service');
  return request(`${CONFIG.API_SERVER_2}/blogs/getlist`);
}
