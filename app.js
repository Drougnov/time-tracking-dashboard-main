const toggle = document.querySelector('.toggle');

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('light-mode');
    toggle.classList.toggle('active');
})

function currentBtn(){
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn=>{
        btn.classList.remove('active');
        btn.addEventListener('click',(e)=>{
            e.target.classList.add('active');
        })
    })
}

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        const main = document.querySelector('main');

        function getDaily(){
            main.textContent = "";
            for(let i=0; i<data.length; i++){
                main.innerHTML += `<div class="card">
                            <div class="details">
                            <section class="details__title">
                                <h3>${data[i].title}</h3>
                                <i class="fa-solid fa-ellipsis"></i>
                            </section>
                            <section class="details__time">
                                <h2>${data[i].timeframes.daily.current}hrs</h2>
                                <p>Yesterday - ${data[i].timeframes.daily.previous}hrs</p>
                            </section>
                            </div>
                        </div>`
            }
        }
        function getWeekly(){
            main.textContent = "";
            for(let i=0; i<data.length; i++){
                main.innerHTML += `<div class="card">
                            <div class="details">
                            <section class="details__title">
                                <h3>${data[i].title}</h3>
                                <i class="fa-solid fa-ellipsis"></i>
                            </section>
                            <section class="details__time">
                                <h2>${data[i].timeframes.weekly.current}hrs</h2>
                                <p>Last Week - ${data[i].timeframes.weekly.previous}hrs</p>
                            </section>
                            </div>
                        </div>`
            }
        }
        function getMonthly(){
            main.textContent = "";
            for(let i=0; i<data.length; i++){
                main.innerHTML += `<div class="card">
                            <div class="details">
                            <section class="details__title">
                                <h3>${data[i].title}</h3>
                                <i class="fa-solid fa-ellipsis"></i>
                            </section>
                            <section class="details__time">
                                <h2>${data[i].timeframes.monthly.current}hrs</h2>
                                <p>Last Month - ${data[i].timeframes.monthly.previous}hrs</p>
                            </section>
                            </div>
                        </div>`
            }
        }

        window.addEventListener('load',getWeekly())

        const dailyBtn = document.querySelector('.daily-btn');
        const weeklyBtn = document.querySelector('.weekly-btn');
        const monthlyBtn = document.querySelector('.monthly-btn');
        dailyBtn.addEventListener('click', ()=>{getDaily(),currentBtn()});
        weeklyBtn.addEventListener('click', ()=>{getWeekly(),currentBtn()});
        monthlyBtn.addEventListener('click', ()=>{getMonthly(),currentBtn()});
    });