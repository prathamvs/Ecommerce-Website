// Create objects of language and respective phone no.
let contacts = new Map();
contacts.set('usa', '+91 8547962345')
contacts.set('uae', '+91 8888888888')
contacts.set('canada', '+91 9999999999')
contacts.set('japan', '+91 8746921355')

// Changing phone no. as per country
document.getElementById('select1').addEventListener('change', () => {
    language = document.getElementById('select1').value;
    document.getElementById('contact').innerHTML = contacts.get(language)
    document.getElementById('flag').src = `Seller page/${language}.png`
})

document.getElementById("arrow").classList.add("hide");

// Created Function for y position
getYPosition = () => {
    var top = document.documentElement.scrollTop
    return top;
};

document.addEventListener('scroll', () => {
    let scroll = getYPosition();
    let pos = document.getElementById('arrow');
    // Adding Behavior
    up = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    if (scroll < 300) {
        document.getElementById("header").classList.remove("sticky");
    } else {
        document.getElementById("header").classList.add("sticky");

    }
    // Scroll Up Function
    if (scroll > 1000) {
        pos.classList.remove('hide');
        pos.classList.add('show');
        pos.addEventListener('click', up);
    } else {
        pos.classList.add('hide');
        pos.classList.remove('show');
        pos.removeEventListener('click', up);
    }

})

// Login Page Calling Function

document.getElementById('container').classList.add('hide')
document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('main').classList.add('blur');
    document.getElementById('author').classList.add('blur');
    document.getElementById('container').classList.remove('hide');
    document.getElementById('container').classList.add('show');

})

// Login Page Cancel
document.getElementById('icon').addEventListener('click', () => {
    document.getElementById('container').classList.remove('show')
    document.getElementById('container').classList.add('hide')
    document.getElementById('main').classList.remove('blur');
    document.getElementById('author').classList.remove('blur');
})
// On Mouseover make Cross Arrow Blur
document.getElementById('icon').addEventListener('mouseover', () => {
    document.getElementById('icon').classList.add('blur')
})
//  On Mouse out Remove Blur 
document.getElementById('icon').addEventListener('mouseout', () => {
    document.getElementById('icon').classList.remove('blur')
})

// Coupon Display after specific Time
document.getElementById('luck').classList.add('hide');
setTimeout(() => {
    document.getElementById('luck').classList.add('show');
    document.getElementById('main').classList.add('blur');
    document.getElementById('author').classList.add('blur');
}, 2000);

// Cancel the page
document.getElementById('cross').addEventListener('click', () => {
    document.getElementById('luck').classList.remove('show')
    document.getElementById('luck').classList.add('hide');
    document.getElementById('main').classList.remove('blur');
    document.getElementById('author').classList.remove('blur');
})