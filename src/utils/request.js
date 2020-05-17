import axios from 'axios';
import qs from 'qs';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


// post
export function post (url, data) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'POST',
      data: qs.stringify(data),
    })
      .then(res => resolve(res.data))
      .catch(err => console.log(err))
  })
}

// get
export function get (url, data = '') {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'GET',
      // 添加公共的请求头
      // headers: { token: '' },
      params: '',
    })
      .then(res => resolve(res.data))
      .catch(err => console.log(err))
  })
}


