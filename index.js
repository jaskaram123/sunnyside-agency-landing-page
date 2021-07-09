if (window.innerWidth <= 650) {
    console.log('hello');
    // document.querySelector('.navigation').classList.add('row')
    document.querySelector('.hamburger').innerHTML = '<svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>'
    document.querySelector('.hamburger').classList.toggle('dnone')
    document.querySelector('.right').classList.toggle('dnone')
    document.querySelector('.hamburger').addEventListener('click', function () {
        document.querySelector('.right').classList.toggle('dnone')
    })
    
}