import axios from 'axios';

const fireRequest = (url, actionType = 'get', reqBody = {}) => {
  const fireReqPromise = new Promise((resolve, reject) => {
    const axiosObject = {
      method: actionType,
      url,
      data: reqBody,
      // headers,
    };

    axios(axiosObject)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return fireReqPromise;
};

const postRequest = (url, reqBody = {}) => new Promise((resolve, reject) => {
  fireRequest(url, 'post', reqBody).then((result) => {
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});

const getRequest = (url, reqBody = {}) => new Promise((resolve, reject) => {
  fireRequest(url, 'get', reqBody).then((result) => {
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});

const requestOperations = {
  postRequest, getRequest,
};
export default requestOperations;
