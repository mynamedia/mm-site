(function () {
  var btn = document.getElementById('copy-btn');
  var status = document.getElementById('copy-status');
  var addr = document.getElementById('addr');
  function selectAddr() {
    try { var r = document.createRange(); r.selectNodeContents(addr); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); } catch (e) {}
  }
  btn.addEventListener('click', function () {
    var text = addr.textContent.trim();
    var done = function () { status.textContent = 'Copied ' + text; };
    var fallback = function () { selectAddr(); status.textContent = 'Selected. Press Ctrl+C or Cmd+C to copy.'; };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, fallback); }
      else { fallback(); }
    } catch (e) { fallback(); }
  });
})();

(function () {
  var filters = document.querySelectorAll('.pf-filter');
  var items = document.querySelectorAll('.pf-grid > li');
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      var cat = f.getAttribute('data-filter');
      filters.forEach(function (o) { o.setAttribute('aria-pressed', o === f ? 'true' : 'false'); });
      items.forEach(function (li) { li.hidden = !(cat === 'all' || li.getAttribute('data-cat') === cat); });
    });
  });
  var dlg = document.getElementById('pf-dialog');
  var dimg = document.getElementById('pf-dialog-img');
  var dcap = document.getElementById('pf-dialog-cap');
  document.querySelectorAll('.pf-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      dimg.src = img.src; dimg.alt = img.alt; dcap.textContent = img.alt;
      if (dlg.showModal) { try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); } } else { dlg.setAttribute('open', ''); }
    });
  });
  function closeDlg() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  document.getElementById('pf-close').addEventListener('click', closeDlg);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDlg(); });
})();
