// Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// Sample car database
const carDatabase = {
  toyota: {
    corolla: {
      2021: {
        price: "R20,000",
        mileage: "15,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "/pictures/corollasport.png",
      },
    },
    cross:{
      2020: {
        price: "R18,000",
        mileage: "20,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/toyotacros.png",
      }
    },
    camry: {
      2021: {
        price: "R25,000",
        mileage: "10,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "/pictures/camrysport.png",
      },
    },
  },
  honda: {
    civic: {
      2022: {
        price: "R280,000",
        mileage: "5,000 km",
        transmission: "Automatic",
        fuel: "Electric",
        image: "/pictures/honda civic.png",
      },
    },
    pilot: {
      2021: {
        price: "R220,000",
        mileage: "5,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/hondapilot.png",
      },
    },
    civicsi: {
      2020: {
        price: "R120,000",
        mileage: "5,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "/pictures/hondacivicsi.png",
      },
    },
  },
  tesla: {
    modelY: {
      2020: {
        price: "R440,000",
        mileage: "2,000 km",
        transmission: "Automatic",
        fuel: "Diesel",
        image: "/pictures/modelY.png",
      },
    },
    modelS: {
      2022: {
        price: "R670,000",
        mileage: "2,000 km",
        transmission: "Automatic",
        fuel: "Electric",
        image: "/pictures/models.png",
      },
    },
    model3: {
      2023: {
        price: "R340,000",
        mileage: "2,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "/pictures/model3",
      },
    },
  },
  maserati: {
    ghibli: {
      2020: {
        price: "R40,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/maseratisport.png",
      },
    },
    quattroporte: {
      2021: {
        price: "R40,000",
        mileage: "2,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "/pictures/maseratiqut.png",
      },
    },
    granturismo: {
      2021: {
        price: "R40,000",
        mileage: "2,000 km",
        transmission: "Automatic",
        fuel: "Elecric",
        image: "/pictures/granturisimo.png",
      },
    },
  },
  porsche: {
    cayman: {
      2023: {
        price: "R1 200,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/posrchespo.png",
      },
    },
    911: {
      2023: {
        price: "R1 340,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/posrchespo.png",
      },
    },
    taycan: {
      2023: {
        price: "R1 540,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/posrchespo.png",
      },
    },
  },
  mercedes: {
    amg_c63: {
      2021: {
        price: "R840,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/amg_c63.png.png",
      },
    },
    glc: {
      2021: {
        price: "R900,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/glc.png",
      },
    },
    glasuv: {
      2021: {
        price: "R680,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/gla suv.png",
      },
    },
  },
  bmw: {
    m_series: {
      2019: {
        price: "R750,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/mseries.png",
      },
    },
    x_series: {
      2022: {
        price: "R40,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/xseries.png",
      },
    },
    series_2: {
      2023: {
        price: "R640,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/2series.png",
      },
    },
  },
  bentley: {
    bentyaga_ewb: {
      2022: {
        price: "R1 400,000",
        mileage: "2,000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "/pictures/mercedessport.png",
      },
    },
    continental_gt: {
      2021: {
        price: "R840,000",
        mileage: "2,000 km",
        transmission: "Automatic",
        fuel: "Diesel",
        image: "/pictures/mercedessport.png",
      },
    },
    flying_spur: {
      2021: {
        price: "750,000",
        mileage: "2,000 km",
        transmission: "Automatic",
        fuel: "Diesel",
        image: "/pictures/mercedessport.png",
      },
    },
  },
};

// Load models based on selected make
function loadModels() {
  const make = document.getElementById("make").value;
  const modelDropdown = document.getElementById("model");

  modelDropdown.innerHTML = '<option value="">Select Model</option>'; // Reset model dropdown

  if (make) {
    const models = Object.keys(carDatabase[make]);
    models.forEach((model) => {
      modelDropdown.innerHTML += `<option value="${model}">${
        model.charAt(0).toUpperCase() + model.slice(1)
      }</option>`;
    });
  }
}

// Search car and display information
function searchCar() {
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const resultDiv = document.getElementById("car-result");

  resultDiv.innerHTML = ""; // Clear previous results

  if (
    make &&
    model &&
    year &&
    carDatabase[make] &&
    carDatabase[make][model] &&
    carDatabase[make][model][year]
  ) {
    const car = carDatabase[make][model][year];
    resultDiv.innerHTML = `
          <div class="car-info">
              <img src="${car.image}" alt="${make} ${model} ${year}">
              <h2>${make.charAt(0).toUpperCase() + make.slice(1)} ${
      model.charAt(0).toUpperCase() + model.slice(1)
    } ${year}</h2>
              <p><strong>Price:</strong> ${car.price}</p>
              <p><strong>Mileage:</strong> ${car.mileage}</p>
              <p><strong>Transmission:</strong> ${car.transmission}</p>
              <p><strong>Fuel Type:</strong> ${car.fuel}</p>
          </div>
      `;
  } else {
    resultDiv.innerHTML = "<p>No car found for the selected options.</p>";
  }
}

// Image slider
const imgUrlsArr = [
  "/pictures/car1.png",
  "/pictures/car2.png",
  "/pictures/bmw3.png",
  "/pictures/car4.png",
  "/pictures/toyota2.png",
  "/pictures/bentley.png",
  "/pictures/mercedes1.png",
  "/pictures/honda4.png"
];

const articleContainer = document.getElementById("article-container");

articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;

let imgIndex = 0;

function previousImg() {
  if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
    imgIndex--;
  } else {
    imgIndex = imgUrlsArr.length - 1;
  }
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}

function nextImg() {
  if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}

//video auto play
window.addEventListener('load', async () => {
  let video = document.querySelector('video[muted][autoplay]');
  try {
    await video.play();
  } catch (err) {
    video.controls = true;
  }
});
