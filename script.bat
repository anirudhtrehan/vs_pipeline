@echo off
goto :main

:main
setlocal

	cd my-electron-app
	set /a count=0
	set /a zero=0
	:loop
		if %count% == %zero% ( 
		npm i --save-dev electron
		goto :buildinstall

		:buildinstall
		cd my-electron-app
		npm install electron-builder --save-dev
		goto :buildrun

		:buildrun
		npm run dist
		%count%=1
		goto :loop
	)

endlocal
pause
