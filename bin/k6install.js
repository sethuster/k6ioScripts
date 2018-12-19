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
      //execute some bash script - maybe shelljs would work?
      break;
    default:
      console.log('You are somehow not on Linux, OSX, or Windows - good job.');
  }
}

install();
