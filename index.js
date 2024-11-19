const cardData = [
    {
        title: "Шавкат Рахмонов ",
        record: "18 побед, 0 поражений",
        description: "Непобежденный боец с высоким рейтингом.",
        image: "https://offside.kz/userfiles/10/13/sha34.jpg",
        content: `<h2>Шавкат Рахмонов  18 - 0</h2>
                  <p>Шавкат - непобежденный боец UFC с рекордом 18-0. Он известен своими мощными ударами и превосходной техникой.</p>`
    },
    {
        title: "Асу Алмабаев",
        record: "21 побед, 2 поражение ",
        description: "Молодой талант с впечатляющими навыками.",
        image: "https://backend.runasport.com/storage/app/uploads/public/66a/883/193/thumb_4788_1200_0_0_0_landscape.jpg",
        content: `<h2>Асу Алмабаев 21 - 2</h2>
                  <p>Асу - молодой и перспективный боец, который уже завоевал внимание фанатов благодаря своей скорости и технике.</p>`
    },
    {
        title: "Азат Максум ",
        record: "17 побед, 1 поражения",
        description: "Опытный боец с разнообразными навыками.",
        image: "https://mma.metaratings.ru/storage/images/12/1f/121f77ab8ca9f73770882f7edb0b6cf6.jpg", 
        content: `<h2>Азат Максум 17 - 1</h2>
                  <p>Азат - опытный боец, который обладает хорошими навыками как в стойке, так и в борьбе.</p>`
    },
    {
        title: "Бекзат Алмахан",
        record: "11 побед, 2 поражения",
        description: "Перспективный боец с сильным характером.",
        image: "https://www.sports.kz/upload/2024-01/65b9cde8ed7a8.jpg",  
        content: `<h2>Бекзат Алмахан 11 - 2</h2>
                  <p>Бекзат - молодой боец, который уже успел показать свои навыки на высоком уровне и продолжает расти в своем мастерстве.</p>`
    },
    {
        title: "Дамир Исмагулов",
        record: "26 победы, 2 поражения",
        description: "Сильный и опытный боец из Казахстана.",
        image: "https://ss.sport-express.ru/userfiles/materials/167/1678350/volga.jpg",  
        content: `<h2>Дамир Исмагулов 24 - 2</h2>
                  <p>Дамир - опытный боец, известный своим интеллектом и тактическим подходом в боях. Он многократный чемпион различных турниров.</p>`
    },
    {
        title: "Дияр Нургожай",
        record: "13 побед, 3 поражения",
        description: "Талантливый боец с мощным стилем боя.",
        image: "https://cdn.sports24.kz/20241009/c68db945a896705fb584cf6c0ac1b3c959423478047b58ab9ec7d90d5870a848-880-495.jpg",  // Здесь вставьте актуальную ссылку на изображение
        content: `<h2>Дияр Нургожай 13 - 3</h2>
                  <p>Дияр - перспективный боец, который с каждым боем становится все сильнее. Он обладает отличной выносливостью и ударной техникой.</p>`
    }
    
    
];


function generateCards() {
    const container = document.getElementById("cardContainer");
    cardData.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}" class="card-image">
            <h2>${card.title}</h2>
            <p>Рекорд: ${card.record}</p>
            <p>${card.description}</p>
        `;
        cardElement.addEventListener("click", () => openModal(index));
        container.appendChild(cardElement);
    });
}


function openModal(index) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");
    modalText.innerHTML = cardData[index].content;
    modal.style.display = "flex"; 
}


document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


generateCards();
