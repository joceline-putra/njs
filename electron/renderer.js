function includeHTML(id, file) {
	fetch(file).then(res => {
		if (!res.ok) throw new Error('Gagal ambil ' + file);
		return res.text();
	}).then(html => {
		document.getElementById(id).innerHTML = html;
	}).catch(err => console.warn(err));
}
  
// Panggil di halaman manapun
document.addEventListener('DOMContentLoaded', () => {
    includeHTML('sheader', 'ui/header.html');
    includeHTML('ssidebar', 'ui/sidebar.html');
    includeHTML('sfooter', 'ui/footer.html');
});
  