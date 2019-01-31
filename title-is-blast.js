var node = document.querySelector('section[itemprop=articleBody]');
if (node && /タイトル[では]煽/.test(node.textContent)) history.go(-1);

