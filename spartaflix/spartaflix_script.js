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

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#postingbtn").click(async function () {
  let image = $("#image").val();
  let title = $("#title").val();
  let stars = $("#star").val();
  let comment = $("#comment").val();
  let doc = { image: image, title: title, stars: stars, comment: comment };
  await addDoc(collection(db, "movies"), doc);
  alert("저장완료");
  window.location.reload();
});

let url = "http://spartacodingclub.shop/sparta_api/weather/seoul";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let ondo = data["temp"];
    $("#ondo").text(ondo);
  });

$("#savebtn").click(async function () {
  $("#postingbox").toggle();
});

function makeCard() {}

let docs = await getDocs(collection(db, "movies"));
docs.forEach((doc) => {
  //코드 작성
  let row = doc.data();
  console.log(row);

  let image = row["image"];
  let title = row["title"];
  let comment = row["comment"];
  let star = row["stars"];

  let temp_html = `        
        <div class="col">
          <div class="card">
            <img
              src="${image}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${comment}</p>
              <p class="card-text">${star}</p>
            </div>
          </div>
        </div>`;
  $("#card").append(temp_html);
});
