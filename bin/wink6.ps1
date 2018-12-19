Add-Type -A System.IO.Compression.FileSystem
$zipFileName = "k6-v0.23.1-win64.zip"
$cwd = Get-Location
$currentLoc = Join-Path $cwd "k6vers"
$zipLoc = Join-Path $currentLoc $zipFileName
$installLoc = Join-Path $cwd ".install"
$installedLoc = Join-Path $cwd ".install\k6-v0.23.1-win64\k6.exe"
$k6install = Join-Path $installLoc "k6.exe"
$installedDir = Join-Path $installLoc "k6-v0.23.1-win64"

#[IO.Compression.ZipFile]::ExtractToDirectory([string]$zipLoc, [string]$installLoc)
Expand-Archive -Path $zipLoc -DestinationPath $installLoc
Move-Item -Path $installedLoc -Destination $k6install
Remove-Item $installedDir -Force -Recurse