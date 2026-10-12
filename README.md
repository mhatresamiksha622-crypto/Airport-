# Airport Boarding Eligibility Checker

## Introduction
The Airport Boarding Eligibility Checker is an educational
mini project based on 8085 Assembly Language.

It checks whether a passenger satisfies three conditions:
- Ticket is confirmed.
- Boarding pass is available.
- Current time is before boarding closing time.

## Technologies Used
- GNU SIM8085
- 8085 Assembly Language
- HTML
- CSS
- JavaScript

## Project Files
- Boarding.asm: 8085 Assembly program
- index.html: User interface
- style.css: Page styling
- script.js: Eligibility checking logic

## Assembly Program
The Assembly program reads input values from memory
locations 2050H to 2053H and stores the result at 2054H.

## Output
- 01H: Boarding allowed
- 00H: Boarding denied

## Important
This project is an educational simulation.
It does not connect to an actual airport or airline system.
