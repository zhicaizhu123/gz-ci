function to(promise, error) {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
    if (error) {
        Object.assign(err, error);
    }
    return [err, undefined];
  });
}

exports.to = to
