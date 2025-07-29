document.getElementById('resume-btn').addEventListener('click', () => {
  document.getElementById('resume-overlay').style.display = 'flex';
});

document.getElementById('cancel-btn').addEventListener('click', () => {
  document.getElementById('resume-overlay').style.display = 'none';
});

document.getElementById('github-btn').addEventListener('click', () => {
  window.open('https://github.com/varun-11-p/c-programms.git', '_blank');
});
