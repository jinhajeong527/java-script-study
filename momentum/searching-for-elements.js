// document is the starting point of everything
document.title = "Hello! From JS!";
// grabing element...!
const title = document.getElementById("title");
console.dir(title);
title.innerText = "Got You";
console.log(title.className);
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const byTags = document.getElementsByTagName("h1");
console.log(byTags);

//  CSS notation 사용해서 찾을 수 있다. ***
const byQuerySelector = document.querySelector(".hello h1");
console.log(byQuerySelector); // 찾으면 하나의 엘리먼트만 리턴하고,
// 찾지 못하면 null을 리턴한다.
// 처음 발견한 하나에 대해서만 리턴함을 기억하자.

const byQuerySelectorAll = document.querySelectorAll(".hello h1");
console.log(byQuerySelectorAll); // all the elements that match this query selector
