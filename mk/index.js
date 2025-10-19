// 页面交互脚本：填充日期、阅读更多
(function(){
  function formatDate(d){
    const opts = { year:'numeric', month:'short', day:'numeric', weekday:'short' };
    return d.toLocaleDateString('en-US', opts);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const dateEl = document.getElementById('date');
    if(dateEl) dateEl.textContent = 'Today is ' + formatDate(new Date());

    const readBtn = document.getElementById('readMore');
    const more = document.getElementById('more');
    if(readBtn && more){
      readBtn.addEventListener('click', ()=>{
        const showing = more.style.display !== 'none';
        more.style.display = showing ? 'none' : 'block';
        readBtn.textContent = showing ? '阅读更多' : '收起';
      });
    }

  });
})();
