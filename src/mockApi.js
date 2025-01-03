const mockServer = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate random error output if Math.random() < 0.3
      if (Math.random() < 0.3) {
        resolve({ status: 'error', error: 'SyntaxError: Unexpected token' });
      } else {
        resolve({ status: 'success', output: 'Success! 🎉'});
      }
      console.log(data);
    }, 1000);
  });
};

export { mockServer };
