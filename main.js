// function one() {
//   setTimeout(() => {
//     console.log("one");
//   }, 1000);
// }
// function two(callback) {
//   setTimeout(() => {
//     console.log("two");
//     callback();
//   }, 900);
// }
// function three(callback) {
//   setTimeout(() => {
//     console.log("three");
//     callback();
//   }, 600);
// }
// function four(callback) {
//   setTimeout(() => {
//     console.log("four");
//     callback();
//   }, 2000);
// }

// four(function () {
//   three(function () {
//     two(function () {
//       one();
//     });
//   });
// });

// function one(callback) {
//   console.log("one");
//   callback();
// }

// function two() {
//   console.log("two");
// }

// one(function () {
//   two();
// });

// callback function

function one(callback, value) {
  setTimeout(() => {
    console.log("one");
    callback(value + value);
  }, 300);
}
function two(callback, value) {
  setTimeout(() => {
    console.log("two");
    callback(value + 10);
  }, 700);
}
function three(callback, value) {
  setTimeout(() => {
    console.log("three");
    callback(value + 10);
  }, 800);
}
function four(callback, value) {
  setTimeout(() => {
    console.log("four");
    callback(value + 10);
  }, 1500);
}
function five(callback, value) {
  setTimeout(() => {
    console.log("five");
    callback(value + 10);
  }, 600);
}
function six(callback, value) {
  setTimeout(() => {
    console.log("six");
    callback(value + 10);
  }, 550);
}
function seven(finalData) {
  setTimeout(() => {
    console.log("seven", finalData);
  }, 2000);
}
function eight(callback, value) {
  setTimeout(() => {
    console.log("eight");
    callback(value + 10);
  }, 1300);
}
function nine(callback, value) {
  setTimeout(() => {
    console.log("nine");
    callback(value + 10);
  }, 1000);
}
function ten(callback, value) {
  setTimeout(() => {
    console.log("ten");
    callback(value);
  }, 400);
}
function eleven(callback, value) {
  setTimeout(() => {
    console.log("eleven");
    callback(value + 10);
  }, 1200);
}
function twelve(callback, value) {
  setTimeout(() => {
    console.log("twelve");
    callback(value + 10);
  }, 800);
}
function thirteen(callback, value) {
  setTimeout(() => {
    console.log("thirteen");
    callback(value + 10);
  }, 1000);
}
function fourteen(callback, value) {
  setTimeout(() => {
    console.log("fourteen");
    callback(value + 10);
  }, 600);
}

function fifteen(callback, value) {
  setTimeout(() => {
    console.log("fifteen");
    callback(value + 10);
  }, 500);
}

ten(function (r1) {
  one(function (r2) {
    fourteen(function (r3) {
      eleven(function (r4) {
        fifteen(function (r5) {
          thirteen(function (r6) {
            nine(function (r7) {
              two(function (r8) {
                five(function (r9) {
                  twelve(function (r10) {
                    three(function (r11) {
                      six(function (r12) {
                        four(function (r13) {
                          eight(function (r14) {
                            seven(r14);
                          }, r13);
                        }, r12);
                      }, r11);
                    }, r10);
                  }, r9);
                }, r8);
              }, r7);
            }, r6);
          }, r5);
        }, r4);
      }, r3);
    }, r2);
  }, r1);
}, 10);

// function one(callback, value) {
//   setTimeout(() => {
//     console.log("one");
//     callback(value + 10);
//   }, 1000);
// }

// function two(callback, value) {
//   setTimeout(() => {
//     console.log("two");
//     callback(value + 10);
//   }, 1000);
// }

// function three(callback, value) {
//   setTimeout(() => {
//     console.log("three");
//     callback(value + 10);
//   }, 1000);
// }

// function four(callback, value) {
//   setTimeout(() => {
//     console.log("four");
//     callback(value + 10);
//   }, 200);
// }

// function five(callback, value) {
//   setTimeout(() => {
//     console.log("five");
//     callback(value + 10);
//   }, 2000);
// }

// function six(callback, value) {
//   setTimeout(() => {
//     console.log("six");
//     callback(value + 10);
//   }, 2000);
// }

// function seven(callback, value) {
//   setTimeout(() => {
//     console.log("seven");
//     callback(value + 10);
//   }, 2000);
// }

// function eight(callback, value) {
//   setTimeout(() => {
//     console.log("eight");
//     callback(value + 10);
//   }, 2000);
// }

// function nine(callback, value) {
//   setTimeout(() => {
//     console.log("nine");
//     callback(value + 10);
//   }, 2000);
// }

// function ten(callback, value) {
//   setTimeout(() => {
//     console.log("ten");
//     callback(value + 10);
//   }, 2000);
// }

// function eleven(callback, value) {
//   setTimeout(() => {
//     console.log("eleven");
//     callback(value + 10);
//   }, 300);
// }

// function twelve(callback, value) {
//   setTimeout(() => {
//     console.log("twelve");
//     callback(value + 10);
//   }, 300);
// }

// function thirteen(callback, value) {
//   setTimeout(() => {
//     console.log("thirteen");
//     callback(value + 10);
//   }, 300);
// }

// function fourteen(callback, value) {
//   setTimeout(() => {
//     console.log("fourteen");
//     callback(value + 10);
//   }, 300);
// }

// function fifteen(callback, value) {
//   setTimeout(() => {
//     console.log("fifteen");
//     callback(value + 10);
//   }, 300);
// }

// function sixteen(callback, value) {
//   setTimeout(() => {
//     console.log("sixteen");
//     callback(value + 10);
//   }, 300);
// }

// function seventeen(callback, value) {
//   setTimeout(() => {
//     console.log("seventeen");
//     callback(value + 10);
//   }, 300);
// }

// function eighteen(callback, value) {
//   setTimeout(() => {
//     console.log("eighteen");
//     callback(value + 10);
//   }, 300);
// }

// function nienteen(callback, value) {
//   setTimeout(() => {
//     console.log("nienteen");
//     callback(value + 10);
//   }, 300);
// }

// function twenty(callback, value) {
//   setTimeout(() => {
//     console.log("twenty");
//     callback(value + 10);
//   }, 300);
// }

// function twentyone(callback, value) {
//   setTimeout(() => {
//     console.log("twentyone");
//     callback(value + 10);
//   }, 300);
// }

// function twentytwo(callback, value) {
//   setTimeout(() => {
//     console.log("twentytwo");
//     callback(value + 10);
//   }, 300);
// }

// function twentythree(callback, value) {
//   setTimeout(() => {
//     console.log("twentythree");
//     callback(value + 10);
//   }, 300);
// }

// function twentyfour(callback, value) {
//   setTimeout(() => {
//     console.log("twentyfour");
//     callback(value + 10);
//   }, 300);
// }

// function twentyfive(callback, value) {
//   setTimeout(() => {
//     console.log("twentyfive");
//     callback(value + 10);
//   }, 300);
// }

// function twentysix(callback, value) {
//   setTimeout(() => {
//     console.log("twentysix");
//     callback(value + 10);
//   }, 300);
// }

// function twentyseven(callback, value) {
//   setTimeout(() => {
//     console.log("twentyseven");
//     callback(value + 10);
//   }, 300);
// }

// function twentyeight(callback, value) {
//   setTimeout(() => {
//     console.log("twentyeight");
//     callback(value + 10);
//   }, 300);
// }

// function twentynine(callback, value) {
//   setTimeout(() => {
//     console.log("twentynine");
//     callback(value + 10);
//   }, 300);
// }

// function thirty(finalData) {
//   setTimeout(() => {
//     console.log("thirty", finalData);
//   }, 300);
// }

// callback hell

// ten(function (r1) {
//   nine(function (r2) {
//     eight(function (r3) {
//       seven(function (r4) {
//         six(function (r5) {
//           five(function (r6) {
//             four(function (r7) {
//               three(function (r8) {
//                 two(function (r9) {
//                   one(function (r10) {
//                     eleven(function (r11) {
//                       twelve(function (r12) {
//                         thirteen(function (r13) {
//                           fourteen(function (r14) {
//                             fifteen(function (r15) {
//                               sixteen(function (r16) {
//                                 seventeen(function (r17) {
//                                   eighteen(function (r18) {
//                                     nienteen(function (r19) {
//                                       twenty(function (r20) {
//                                         twentyone(function (r21) {
//                                           twentytwo(function (r22) {
//                                             twentythree(function (r23) {
//                                               twentyfour(function (r24) {
//                                                 twentyfive(function (r25) {
//                                                   twentysix(function (r26) {
//                                                     twentyseven(function (r27) {
//                                                       twentyeight(function (
//                                                         r28
//                                                       ) {
//                                                         twentynine(function (
//                                                           r29
//                                                         ) {
//                                                           thirty(r29);
//                                                         },
//                                                         r28);
//                                                       },
//                                                       r27);
//                                                     }, r26);
//                                                   }, r25);
//                                                 }, r24);
//                                               }, r23);
//                                             }, r22);
//                                           }, r21);
//                                         }, r20);
//                                       }, r19);
//                                     }, r18);
//                                   }, r17);
//                                 }, r16);
//                               }, r15);
//                             }, r14);
//                           }, r13);
//                         }, r12);
//                       }, r11);
//                     }, r10);
//                   }, r9);
//                 }, r8);
//               }, r7);
//             }, r6);
//           }, r5);
//         }, r4);
//       }, r3);
//     }, r2);
//   }, r1);
// }, 10);
