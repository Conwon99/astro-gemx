; AutoHotkey script to make backtick (`) key also perform a mouse click
; Press Ctrl+Alt+Q to exit the script

; Make backtick key also click
`::
    Send, ``  ; Send the backtick character (escaped)
    Click     ; Perform a mouse click
return

; Exit script with Ctrl+Alt+Q
^!q::ExitApp
