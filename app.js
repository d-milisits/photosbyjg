function fadeOutLoading() {
  console.log('test');
  var loading = document.getElementById('loading');
  setTimeout(()=>{
    loading.className += " animate__animated animate__fadeOut";
  }, 1250);
}

function fadeOutReroute(id, route) {
  var exitpage = document.getElementById(id);
  exitpage.className += " animate__animated animate__fadeOut";
  setTimeout(()=>{
    window.location.href = route;
  }, 900);
}

// Mobile menu toggle
function toggleNav() {
  document.getElementById('menu').classList.toggle('active');
}
document.getElementById('bgr').addEventListener("click", toggleNav, false);
document.getElementById('close').addEventListener("click", toggleNav, false);