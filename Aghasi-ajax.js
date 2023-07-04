function CustomPromise(callback) {
  this.value = null;
  this.error = null;
  this.onResolve = [];
  this.onReject = [];
  this.onFinally = null;
  this.state = "pending";

  let resolve = (value) => {
    if (this.state === "pending") {
      this.state = "resolved";
      this.value = value;
      this.onResolve.forEach((callback) => callback(value));
      if (this.onFinally) {
        this.onFinally();
      }
    }
  };

  let reject = (error) => {
    if (this.state === "pending") {
      this.state = "rejected";
      this.error = error;
      this.onReject.forEach((callback) => callback(error));
      if (this.onFinally) {
        this.onFinally();
      }
    }
  };

  try {
    callback(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

CustomPromise.prototype.then = function (onResolve, onReject) {
  const nextPromise = new CustomPromise((resolve, reject) => {
    const resolveHandler = (value) => {
      try {
        const result = onResolve ? onResolve(value) : value;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    const rejectHandler = (error) => {
      try {
        const result = onReject ? onReject(error) : error;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    this.onResolve.push(resolveHandler);
    this.onReject.push(rejectHandler);
  });

  return nextPromise;
};

CustomPromise.prototype.catch = function (onReject) {
  return this.then(null, onReject);
};

CustomPromise.all = function (promises) {
  return new CustomPromise(function (resolve, reject) {
    const results = [];
    let completedPromises = 0;
    const numPromises = promises.length;

    if (numPromises === 0) {
      resolve(results);
    } else {
      promises.forEach(function (promise, index) {
        promise
          .then(function (value) {
            results[index] = value;
            completedPromises++;

            if (completedPromises === numPromises) {
              resolve(results);
            }
          })
          .catch(function (error) {
            results[index] = { status: "rejected", reason: error };

            if (completedPromises === numPromises) {
              resolve(results);
            } else {
              reject(results[index].reason);
            }
          });
      });
    }
  });
};

CustomPromise.prototype.finally = function (onFinally) {
  this.onFinally = onFinally;
  return this;
};

function ajax(url, config) {
  return new CustomPromise(function (resolve, reject) {
    // We had try-catch block that surrounds the entire XMLHttpRequest logic.
    //  If an error occurs during the execution of the XMLHttpRequest, it will call the onerror and execute the reject function.
    //  However, within the onerror callback, there is a try-catch block that catches the error and logs a message to the console. 
    // It does not re-throw the error or call the reject function again, causing the rejection to not propagate to the promise chain.

    const xhr = new XMLHttpRequest();
    xhr.open(config.type, url);

    for (let header in config.headers) {
      if (config.headers.hasOwnProperty(header)) {
        xhr.setRequestHeader(header, config.headers[header]);
      }
    }

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.response)
      } else {
        reject(new Error(xhr.statusText));
      }
    }

    xhr.onerror = function () {
      reject(new Error("Network error"));
    }

    xhr.send(JSON.stringify(config.data));
  });
}

const url = "https://api.thecatapi.com/v1/categories";

const config = {
  type: "GET",
  headers: {},
  data: {},
};

const p1 = ajax(url + "ll", config);
const p2 = ajax(url, config);
const p3 = ajax(url, config);

p1.then((res) => {
  console.log("p1 response:", res);
  throw new Error("this is error");
}).catch((error) => {
  console.log("this is an error in p1.", error);
});

p2.then((res) => {
  console.log("p2 res:", res);
  return "Some message.";
})
  .then((res) => {
    console.log("second then p2 res:", res);
    return 120;
  })
  .catch((error) => {
    console.log("this is an error in p2.", error);
  });

p3.catch((error) => {
  console.log("this is an error in p3.", error);
})
  .then((res) => {
    console.log("p3 res:", res);
    return JSON.parse(res);
  })
  .then((res) => {
    console.log("p3 res: second then:", res);
  });

const allPromises = CustomPromise.all([p1, p2, p3]);
allPromises
  .catch((error) => {
    console.log("this is an error in All.", error);
  })
  .then((res) => {
    console.log("allPromises res:", res);
    return "Everything is alright!";
  })
  .then((res) => {
    console.log(res);
  });

