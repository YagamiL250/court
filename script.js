let count = 0;

function changeImage() {
    const img = document.getElementById("mainImage");
    const text = document.getElementById("question");

    const images = [
        "https://media.tenor.com/NC9S9-pqbzkAAAAm/lucu-cute-cat.webp",
        "https://media.tenor.com/eX1d6fukpNQAAAAm/begging-cat-cat.webp",
        "https://media.tenor.com/_oHR0WEdDW8AAAAm/cat-diragana.webp"
    ];

    const messages = [
        "ไม่เอาจริงเหรอ 🥺",
        "คิดดูดีๆอีกหรอบน้าา",
        "เปิดใจให้หน่อยพี่คนนี้นะ"
    ];

    img.src = images[count];
    text.innerText = messages[count];

    count = (count + 1) % images.length;
}
const noButton = document.querySelector(".no");

noButton.addEventListener("mouseenter", moveNo);
noButton.addEventListener("click", moveNo);

function moveNo() {
    noButton.style.position = "relative";

    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 60;

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}