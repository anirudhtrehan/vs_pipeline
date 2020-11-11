@echo off
goto :main

:main
setlocal

	cd getLoginapp
	cd
	set /a count=0
	set /a zero=0
	:loop
		if %count% == %zero% ( 
		npm i --save-dev electron
		goto :buildinstall

		:buildinstall
		cd getLoginapp
		npm install electron-builder --save-dev
		goto :buildrun

		:buildrun
		npm run dist
		%count%=1
		goto :loop
	)

endlocal
pause
