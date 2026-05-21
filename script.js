document.addEventListener('DOMContentLoaded', function(){
  // Animate skill bars from data-width attribute
  document.querySelectorAll('.fill').forEach(function(el){
    const w = el.getAttribute('data-width') || '0%';
    requestAnimationFrame(()=>{ el.style.width = w; });
  });
});

function downloadResume(){
  if(typeof window.print === 'function'){
    window.print();
    return;
  }
  const a = document.createElement('a');
  a.href = 'resume.pdf';
  a.download = 'Nehal_Gaherwar_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
