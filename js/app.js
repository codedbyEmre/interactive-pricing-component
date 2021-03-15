const pageviews = document.getElementById('pageviews');
const prices = document.querySelectorAll('.price');
const range = document.getElementById('range');
const switchBtn = document.getElementById('switch');

range.addEventListener('click', () => {
    prices.forEach(price => {
        if(range.value === '0'){
            pageviews.innerHTML = `0K PAGEVIEWS`;
            price.innerHTML = `$0.00`;
        }
        else if(range.value === '20'){
            pageviews.innerHTML = `10K PAGEVIEWS`;
            price.innerHTML = `$8.00`;
        }
        else if(range.value === '40'){
            pageviews.innerHTML = `50K PAGEVIEWS`;
            price.innerHTML = `$12.00`;
        }
        else if(range.value === '60'){
            pageviews.innerHTML = `100K PAGEVIEWS`;
            price.innerHTML = `$16.00`;
        }
        else if(range.value === '80'){
            pageviews.innerHTML = `500K PAGEVIEWS`;
            price.innerHTML = `$24.00`;
        }
        else if(range.value === '100'){
            pageviews.innerHTML = `1M PAGEVIEWS`;
            price.innerHTML = `$36.00`;
        }
    })
});
