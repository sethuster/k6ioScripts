const shell = require('shelljs');

function install(){
  //determine which OS we're on, 'darwin', 'win32' or 'linux'
  switch(process.platform){
    case 'darwin':
      shell.exec('unzip -j ./k6vers/k6-v0.23.1-mac -d ./.install');
      break;
    case 'win32':
      //execute some powershell script
      break;
    case 'linux':
      shell.exec('tar -jxf ./k6vers/k6-v0.23.1-linux64.tar.gz -C ./.install');
      shell.exec('mv ./.install/k6-v0.23.1-linux64/k6 ./.install/k6');
      shell.exec('rm -rf ./.install/k6-v0.23.1-linux64');
      break;
    default:
      console.log('You are somehow not on Linux, OSX, or Windows - good job.');
  }
}

install();
