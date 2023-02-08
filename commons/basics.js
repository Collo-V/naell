function manageScrollbar(remove){
    let nav = document.getElementById('main-nav')
    if(!remove){
        try{
            nav.classList.replace('fixed', 'absolute')
            nav.classList.remove('animate__animated', 'animate__slideInDown', 'bg-white','shadow-md')
            // nav.classList.add('text-white')
        }catch {}
        window.onscroll= function (){
            try{
                if (window.scrollY > 150) {
                    nav.classList.replace('absolute', 'fixed')
                    nav.classList.add('animate__animated', 'animate__slideInDown', 'bg-white','shadow-md')
                    nav.classList.remove('text-white')
                } else {
                    nav.classList.replace('fixed', 'absolute')
                    nav.classList.remove('animate__animated', 'animate__slideInDown', 'bg-white','shadow-md')
                    if(nav.classList.contains('nav-white')){
                        nav.classList.add('text-white')
                    }
                }
            }catch{}
        }
    }else {
        window.onscroll = ()=>{}
        try {
            let nav =  document.getElementById('main-nav')
            nav.classList.replace('absolute', 'fixed')
            nav.classList.add('animate__animated', 'animate__slideInDown', 'bg-white','shadow-md')
            nav.classList.remove('text-white')
        }catch {}

    }


}
export {
    manageScrollbar
}
