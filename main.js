var removeCartItemButtons = document.getElementsByClassName('box')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function(event) {
                var buttonClicked = event.target
                buttonClicked.parentElement.remove()
        })
}







let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');
        navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
        navbar.classList.toggle('active');
        search.classList.remove('active');
}

window.onscroll = () => {
        navbar.classList.remove('active');
        search.classList.remove('active');
}
}




let header = documet.querySelector('header');

window.addEventListener('scroll' , () => {
        header.classList.toggle('shadow' , window.scrollY > 0);
});