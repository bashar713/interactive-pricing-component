// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, 
// a 25% discount should be applied to all prices.

/**

8 >> 8*25% >> ?? 
12 >> 12*25% >> ??
16 >> 16*25% >> ?? 
24 >> 24*25% >> ?? 
36 >> 36*25% >> ?? 



*/

let input = document.getElementById('input'),
    year_input = document.getElementById('input'),
    output = document.getElementById('output'),
    pageviews = document.getElementById('page--views'),
    values = [8, 12, 16, 24, 36],
    pageviews_arr=["10K pageviews","50K pageviews","100K pageviews","500k pageviews","1M pageviews"]
    btn = document.querySelector('.switch'),
    toggle_switch = document.querySelector('.toggle_switch');


input.oninput = function () {
    output.innerHTML = values[this.value];
    let n = values[this.value];
    pageviews.innerHTML = pageviews_arr[values.indexOf(n)]
};
input.oninput();

btn.addEventListener('change',()=>{
    if (toggle_switch.checked) {
        year_input.oninput = function () {
            output.innerHTML = (values[this.value]*0.25);
            let n = values[this.value];
            pageviews.innerHTML = pageviews_arr[values.indexOf(n)]
        };
        year_input.oninput()
    } else {
        input.oninput = function () {
            output.innerHTML = values[this.value];
            let n = values[this.value];
            pageviews.innerHTML = pageviews_arr[values.indexOf(n)]
        };
        input.oninput();
    }
})





// for (let e of document.querySelectorAll('.slider')) {
//     e.style.setProperty('--value', e.value);
//     e.style.setProperty('--min', e.min == '' ? '0' : e.min);
//     e.style.setProperty('--max', e.max == '' ? '100' : e.max);
//     e.addEventListener('input', () => e.style.setProperty('--value', e.value));
// }