// Kode akses yang benar
const correctCode = "143278";

// Array pertanyaan dan jawaban
const questions = [
    {
        question: "이 그림의 이름이 무엇입니까??",
        image: "image/sampai.png",
        choices: ["출발하다", "보스예 타다", "도착하다", "여행을 계획하다"],
        answer: "도착하다"
    },
    {
        question: "이 그림의 이름이 무엇입니까??",
        image: "image/orang orangnya ramah.png",
        choices: ["유명하다", "사람들이 친절하다", "아름답다", "유적지"],
        answer: "사람들이 친절하다"
    },
    {
        question: "이 그림의 이름이 무엇입니까??",
        image: "image/menginap.png",
        choices: ["묵다", "자다", "쉬다", "짐을 풀다"],
        answer: "묵다"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/haltebus.jpg",
        choices: ["배", "시내버스", "택시 승강장", "버스 정류장"],
        answer: "버스 정류장"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/빨래를-널다.png",
        choices: ["빨래를 널다", "빨래를 하다", "설거지를 하다", "빨래를 걷다"],
        answer: "빨래를 널다"   
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/salah sambung.jpg",
        choices: ["전화를 바꾸다", "통화 중이다", "전화를 잘못 걸다", "전화가 오다"],
        answer: "전화를 잘못 걸다" 
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/kuil bulgoksa.jpg",
        choices: ["강원도", "경복궁", "아름답다", "유적지"],
        answer: "불국사"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/rapih.png",
        choices: ["정리하다", "청소를 하다", "정돈되어 있다", "깨끗하다"],
        answer: "정돈되어 있다"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/melihat festival.png",
        choices: ["박물관을 관람하다", "기념품을 사다", "축제를 구경하다", "여행을 계획하다"],
        answer: "축제를 구경하다"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/kotor.png",
        choices: ["더럽다", "청소를 하다", "정돈되어 있다", "깨끗하다"],
        answer: "더럽다"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/stasiun subway.png",
        choices: ["버스터미널", "지하철", "기차역", "지하철역"],
        answer: "지하철역"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/mengangkat jemuran.png",
        choices: ["빨래를 널다", "빨래를 하다", "설거지를 하다", "빨래를 걷다"],
        answer: "빨래를 걷다"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/bus antar kota.png",
        choices: ["시내버스", "고속열차", "시외 버스", "마을버스"],
        answer: "시외 버스"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/숙소를-예약하다.png",
        choices: ["여행을 계획하다", "박물관을 관람하다", "인터넷 검색", "숙소를 예약하다"],
        answer: "숙소를 예약하다"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/출근-시간.png",
        choices: ["출근 시간", "퇴근 시간", "출퇴근 시간", "차가 막히다"],
        answer: "출근 시간"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/갈아타다-환승하다.png",
        choices: ["걷다", "걸어오다", "걸어가다", "환승하다"],
        answer: "환승하다"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/세탁기를-돌리다.png",
        choices: ["세탁기를 히다", "세탁기를 돌리다", "세탁세제", "세탁기를 겨다"],
        answer: "세탁기를 돌리다"
    },
    {
        question: "이 그림의 이름이 무엇입니까?",
        image: "image/통화-중이다.png",
        choices: ["(전화) 통화하다", "전화", "통화 중이다", "전화를 받다"],
        answer: "통화 중이다"
    },
    {
        question: "빈칸에 들어갈 가장 알맞은 것을 고르십시오?",
        image: "image/19.jpg",
        choices: ["깨끗해요", "바쁘요", "지저분해요", "가까워요"],
        answer: "지저분해요"  
    },
    {
        question: "빈칸에 들어갈 가장 알맞은 것을 고르십시오?",
	    image: "image/20.jpg",
        choices: ["언제예요", "어때요", "뭐 해요", "얼마예요"],
        answer: "어때요"
    },
    {
        question: "빈칸에 들어갈 가장 알맞은 것을 고르십시오?",
	    image: "image/21.jpg",
        choices: ["완성해요", "와요", "끝나지요", "켜요"],
        answer: "끝나지요"
    },
    {
        question: "빈칸에 들어갈 가장 알맞은 것을 고르십시오?",
        image: "image/22.jpg",
        choices: ["회사에 안 가요", "사간이 좀 더걸려요", "버스사람이 많아요", "30분 정도 있어요"],
        answer: "사간이 좀 더걸려요"
    },
    {
        question: "빈칸에 들어갈 가장 알맞은 것을 고르십시오?",
        image: "image/23.jpg",
        choices: ["해", "닦아", "걷어", "만들어"],
        answer: "걷어"
    },
    {
        question: "빈칸에 들어갈 가장 알맞은 것을 고르십시오?",
	    image: "image/24.jpg",
        choices: ["돈", "집", "나이", "친구"],
        answer: "나이"
    },
    {
        question: "빈칸에 들어갈 가장 알맞은 것을 고르십시오?",
        image: "image/25.jpg",
        choices: ["전화를 껐어요", "문자를 보냈어요 ", "문자가 왔어요", "전화 잘못 거섰어요"],
        answer: "전화 잘못 거섰어요"
     
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = Array(questions.length).fill(null); // Menyimpan jawaban sementara

// Fungsi untuk mengecek kode akses
function checkAccessCode() {
    const inputCode = document.getElementById("access-code").value;
    const codeMessage = document.getElementById("code-message");

    if (inputCode === correctCode) {
        document.getElementById("code-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        displayQuestion();
    } else {
        codeMessage.innerText = "Kode akses salah. Silakan coba lagi.";
    }
}

// Fungsi untuk menampilkan pertanyaan
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const imageContainer = document.getElementById("image-container");
    const questionIndicator = document.getElementById("question-indicator");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    questionIndicator.innerHTML = `Soal ${currentQuestion + 1} dari ${questions.length}`;
    questionElement.innerHTML = questions[currentQuestion].question;
    choicesElement.innerHTML = "";
    imageContainer.innerHTML = "";

    if (questions[currentQuestion].image) {
        imageContainer.innerHTML = `<img src="${questions[currentQuestion].image}" alt="Gambar soal" class="img-fluid rounded">`;
    }

    // Tampilkan pilihan dan cek jika ada jawaban yang disimpan
    questions[currentQuestion].choices.forEach(choice => {
        const isChecked = selectedAnswers[currentQuestion] === choice ? "checked" : "";
        choicesElement.innerHTML += `<label class="d-block">
            <input type="radio" name="choice" value="${choice}" class="me-2" ${isChecked}> ${choice}
        </label>`;
    });

    // Tampilkan atau sembunyikan tombol Previous/Next
    prevButton.style.display = currentQuestion > 0 ? "inline-block" : "none";
    nextButton.innerText = currentQuestion < questions.length - 1 ? "Next" : "Submit";
}

// Fungsi untuk menyimpan jawaban yang dipilih
function saveAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        selectedAnswers[currentQuestion] = selectedChoice.value;
    }
}


// Fungsi untuk pindah ke soal berikutnya atau menyelesaikan kuis
function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

// Fungsi untuk kembali ke soal sebelumnya
function previousQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Fungsi untuk menyelesaikan kuis dan menampilkan hasil
function finishQuiz() {
    // Hitung skor
    score = selectedAnswers.reduce((total, answer, index) => {
        return total + (answer === questions[index].answer ? 1 : 0);
    }, 0);

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").innerHTML = `Kamu mendapat skor ${score} dari ${questions.length}`;
    localStorage.setItem("quizCompleted", "true");
}
