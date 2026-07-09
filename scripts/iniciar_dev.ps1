Write-Host "Iniciando entorno de desarrollo en tiempo real..." -ForegroundColor Green
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -Path (Join-Path -Path $ScriptDir -ChildPath "..\Portafolio\frontend")
npm run dev
