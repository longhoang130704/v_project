// AOS.init({
// 	duration: 1000,
// 	once: true
// });

// // MUSIC
// const music = document.getElementById("bg-music");
// let isPlaying = false;

// function toggleMusic() {
// 	if (isPlaying) {
// 		music.pause();
// 	} else {
// 		music.play();
// 	}
// 	isPlaying = !isPlaying;
// }

// // LOVE COUNTER
// const startDate = new Date("2023-02-14T00:00:00");

// function updateCounter() {
// 	const now = new Date();
// 	const diff = now - startDate;

// 	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

// 	document.getElementById("counter").innerText =
// 		`${days} ngày bên nhau ❤️`;
// }

// updateCounter();
// setInterval(updateCounter, 60000);

AOS.init({
	duration: 1000,
	once: true
});

const music = document.getElementById("bg-music");
let isPlaying = false;

// autoplay sau click đầu tiên
document.addEventListener("click", () => {
	if (!isPlaying) {
		music.play().then(() => {
			isPlaying = true;
			document.querySelector(".music-btn").innerText = "🔈";
		}).catch(() => {});
	}
}, { once: true });

// nút bật / tắt
function toggleMusic() {
	if (isPlaying) {
		music.pause();
		document.querySelector(".music-btn").innerText = "🔇";
	} else {
		music.play();
		document.querySelector(".music-btn").innerText = "🔈";
	}
	isPlaying = !isPlaying;
}

// function openGift() {
// 	const box = document.getElementById("giftBox");
// 	const content = document.getElementById("giftContent");

// 	if (!box.classList.contains("open")) {
// 		box.classList.add("open");

// 		setTimeout(() => {
// 			content.classList.add("show");
// 		}, 600);
// 	}
// }

let giftOpened = false;

function openGift() {
	if (giftOpened) return;
	giftOpened = true;

	// đổi ảnh quà
	document.getElementById("giftImage").src =
		"assets/images/gift-open.jpg";

	// hiện nội dung
	setTimeout(() => {
		document.getElementById("giftContent").classList.add("show");
	}, 600);

	// tạo hiệu ứng bay
	startFlyingEffect();
}

function startFlyingEffect() {
	const container = document.getElementById("flyingContainer");

	const interval = setInterval(() => {
		createHeart(container);
		createBalloon(container);
	}, 400);

	// dừng sau 6s (để không quá lố)
	setTimeout(() => clearInterval(interval), 6000);
}

function createHeart(container) {
	const heart = document.createElement("div");
	heart.className = "heart";
	heart.innerText = "❤️";
	heart.style.left = Math.random() * 100 + "vw";
	heart.style.fontSize = 16 + Math.random() * 14 + "px";

	container.appendChild(heart);
	setTimeout(() => heart.remove(), 6000);
}

function createBalloon(container) {
	const balloon = document.createElement("div");
	balloon.className = "balloon";
	balloon.style.left = Math.random() * 100 + "vw";
	balloon.style.background =
		`rgba(255, ${180 + Math.random() * 40}, ${200 + Math.random() * 40}, 0.8)`;

	container.appendChild(balloon);
	setTimeout(() => balloon.remove(), 8000);
}

