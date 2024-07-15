// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZOWKTJ30Jca1Lht4dnoSxdF0RFOvLbZU",
  authDomain: "sparta-5d3ae.firebaseapp.com",
  projectId: "sparta-5d3ae",
  storageBucket: "sparta-5d3ae.appspot.com",
  messagingSenderId: "811761844665",
  appId: "1:811761844665:web:c713a9c6b791906ff57668",
  measurementId: "G-C9X0M8Q4MD",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#postingbtn").click(async function () {
  let image = $("#image").val();
  let title = $("#title").val();
  let content = $("#content").val();
  let date = $("#date").val();
  let doc = { image: image, title: title, content: content, date: date };
  await addDoc(collection(db, "albums"), doc);
  alert("저장완료");
  window.location.reload();
});
$("#savebtn").click(async function () {
  $("#postingbox").toggle();
});

let url = "http://spartacodingclub.shop/sparta_api/seoulair";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let mise = data["RealtimeCityAir"]["row"][2]["IDEX_NM"];
    $("#mise_msg").text(mise);
  });

let docs = await getDocs(collection(db, "albums"));
docs.forEach((doc) => {
  let row = doc.data();
  console.log(row);

  let image = row["image"];
  let title = row["title"];
  let content = row["content"];
  let date = row["date"];

  let temp_html = `
        <div class="col">
          <div class="card h-100">
            <img
              src="${image}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${content}</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">${date}</small>
            </div>
          </div>
        </div>`;
  $("#card").append(temp_html);
});

// function openclose() {
//   $("#postingbox").toggle();
// }
// function makeCard() {

// }
