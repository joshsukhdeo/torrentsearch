const { exec } = require('child_process');

exec('npm ls -g peerflix', (error, stdout, stderr) => {
  if (stdout.includes('peerflix@')) {
    console.log('peerflix is already installed globally.');
  } else {
    console.log('Installing peerflix globally...');
    exec('npm install -g peerflix', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error installing peerflix: ${error.message}`);
      } else {
        console.log('peerflix installed globally successfully.');
      }
    });
  }
});
