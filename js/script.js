// Copyright (c) 2022 Brennan All rights reserved
//
// Created by: Brennan Lee
// Created on: dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-5-05/sw.js", {
    scope: "/ICS2O-5-05/",
  })
}

function button() {
  // input
  const lengthAString = parseInt(document.getElementById("lengthA").value)
  const lengthBString = parseInt(document.getElementById("lengthB").value)
  const lengthCString = parseInt(document.getElementById("lengthC").value)

  const lengthA = parseFloat(lengthAString)
  const lengthB = parseFloat(lengthBString)
  const lengthC = parseFloat(lengthCString)

  // process
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  if (angleA == angleB && angleA == angleC) {
    document.getElementById("math").innerHTML = "it's a equalatiral triangle!"
  } else if (angleA != angleB && angleA != angleC && angleB != angleC) {
    document.getElementById("math").innerHTML = "it's a scalene triangle!"
  } else if (
    (angleA != angleB && angleA == angleC) ||
    (angleA == angleB && angleA != angleC)
  ) {
    document.getElementById("math").innerHTML = "it's a isosceles triangle!"
  } else {
    document.getElementById("math").innerHTML = "that's not a triangle.."
  }
}
