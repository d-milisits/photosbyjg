function fadeOutLoading() {
  const loading = document.getElementById('loading');
  setTimeout(()=>{
    loading.className += " animate__animated animate__fadeOut";
  }, 1250);
}

function loadPageWithTitle() {
  const loading = document.getElementById('loading');
  setTimeout(()=>{
    loading.className += " animate__animated animate__fadeOut";
    setTimeout(()=>{
      loading.style.visibility = 'hidden';
    }, 500);
  }, 1500);
}

// function fadeOutReroute(id, route) {
//   var exitpage = document.getElementById(id);
//   exitpage.className += " animate__animated animate__fadeOut";
//   setTimeout(()=>{
//     window.location.href = route;
//   }, 900);
// }

// Mobile menu toggle
function toggleNav() {
  document.getElementById('menu').classList.toggle('active');
}
document.getElementById('bgr').addEventListener("click", toggleNav, false);
document.getElementById('close').addEventListener("click", toggleNav, false);