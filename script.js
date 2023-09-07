var wrapper=document.getElementById('wrapper');
var loginlink=document.getElementById('login-link');
var registerlink=document.getElementById('register-link');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});