; Airport Boarding Eligibility Checker
; Compatible with 8085 Assembly Language
;
; Input memory locations:
; 2050H = Ticket status (01H = Confirmed)
; 2051H = Boarding pass (01H = Available)
; 2052H = Current time in minutes
; 2053H = Boarding closing time in minutes
;
; Output:
; 2054H = 01H (Boarding allowed)
;         00H (Boarding denied)

LDA 2050H
CPI 01H
JNZ DENIED

LDA 2051H
CPI 01H
JNZ DENIED

LDA 2052H
MOV B, A

LDA 2053H
CMP B
JC DENIED

MVI A, 01H
STA 2054H
HLT

DENIED:
MVI A, 00H
STA 2054H
HLT
