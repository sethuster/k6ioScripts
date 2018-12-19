const shell = require('shelljs');
const spawn = require('child_process').spawn;
const path = require('path');

function install(){
  //determine which OS we're on, 'darwin', 'win32' or 'linux'
  switch(process.platform){
    case 'darwin':
      shell.exec('unzip -j ./k6vers/k6-v0.23.1-mac -d ./.install');
      break;
    case 'win32':
      let psfile = path.join(process.cwd(), "bin/wink6.ps1");
      let child = spawn("powershell.exe", [psfile]);
      child.stdout.on("data",function(data){
        console.log("Powershell Data: " + data);
      });
      child.stderr.on("data",function(data){
          console.log("Powershell Errors: " + data);
      });
      child.on("exit",function(){
          console.log("Powershell Script finished");
      });
      child.stdin.end(); //end input
      let installedFile = path.join(process.cwd(), '.install/k6-v0.23.1-win64/k6.exe');
      let move = path.join(process.cwd(), '.install/k6.exe');
      shell.exec(`mv ${installedFile} ${move}`);
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
