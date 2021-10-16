const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});


document.addEventListener("DOMContentLoaded", function () {
    const data = {
        labels: [
            'Apartment with 100 sq.m. ( 2-bedrooms )',
            'Apartment with 135 sq.m. ( 3-bedrooms )',
            'Apartment with 150 sq.m. ( 3-bedrooms )',
            'Apartment with 170 sq.m. ( 4-bedrooms )'
        ],
        datasets: [{

            data: [3, 28, 30, 7],
            backgroundColor: [
                'rgb(176,196,222)',
                'rgb(255,192,203)',
                'rgb(135,206,235)',
                'rgb(255,250,205)'
            ],
            hoverOffset: 4
        }]

    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Distribution of floor area',
                    font: {
                        size: 15
                    },
                    padding: 20
                },
                legend: {
                    display: false
                }
            },
        }
    };
    var myChart = new Chart(
        document.getElementById('myChart2'),
        config
    );
})


document.addEventListener("DOMContentLoaded", function () {

    const labels = ["covered space", "open spaces"]
    const data = {
        labels: labels,
        datasets: [{

            data: [60, 25],
            backgroundColor: [
                'rgb(100,149,237)',
                'rgb(135,206,235)',
            ],
            borderColor: [
                'rgb(100,149,237)',
                'rgb(135,206,235)',
            ],
            borderWidth: 1
        }],
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: "y",
            scales: {
                x: {
                    title: {
                        display: true,
                        font: {
                            size: 10
                        },
                        padding: 10
                    }
                },
            },
            y: {
                suggestedMin: 0,
                suggestedMax: 1.0,
                title: {
                    display: true,
                    font: {
                        size: 18
                    },
                    padding: 20
                },
                ticks: {
                    stepSize: 0.2
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Car Parking Spaces',
                    font: {
                        size: 15
                    },
                    padding: 20
                },
                legend: {
                    display: false
                }
            },

        }
    };
    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
})

const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;

        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })
    })
})

const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupButton.addEventListener('click', () => {
  modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
})