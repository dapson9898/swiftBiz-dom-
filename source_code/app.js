const contain = document.querySelector('.container');
const themeToggler = document.querySelector('.icons');
const activityDiv = document.querySelectorAll('.activity');
const dashboardBtn = document.getElementById('dashboard');
const cashbookBtn = document.getElementById('cashbook');
const creditbookBtn = document.getElementById('creditbook');
const dashboard = document.querySelector('.dashboard-components');
const cashbook = document.querySelector('.cashbook-components');
const creditbook = document.querySelector('.creditbook-components');
const rightAside = document.querySelector('.add-costomer');

// dark theme toggler
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

activityDiv.forEach(activity => {
    activity.addEventListener('click', () => {
        let p = activity.querySelector('.p-container');
        let btn = activity.querySelector('button');
        if(p.style.display == 'none'){
            p.style.display = 'block';
            btn.textContent = '-';
        }else{
            p.style.display = 'none';
            btn.textContent = '+';
        }
            
    })
})

dashboardBtn.addEventListener('click', ()=>{
    dashboard.style.display = 'block';
    cashbook.style.display = 'none';
    creditbook.style.display = 'none';
    rightAside.style.display = 'block';
    contain.style.gridTemplateColumns = '1fr 3fr 1fr';
})

cashbookBtn.addEventListener('click', ()=>{
    dashboard.style.display = 'none';
    cashbook.style.display = 'grid';
    creditbook.style.display = 'none';
    rightAside.style.display = 'block';
    contain.style.gridTemplateColumns = '1fr 3fr 1fr';
})

creditbookBtn.addEventListener('click', ()=>{
    dashboard.style.display = 'none';
    cashbook.style.display = 'none';
    creditbook.style.display = 'block';
    rightAside.style.display = 'none';
    contain.style.gridTemplateColumns = '1fr 4fr';
})