
toggle(document.querySelector('main'), false);

function toggle(ele, on) {
	if ( on === undefined ) {
		ele.classList.toggle('hide');
		return;
	}
	if ( on ) ele.classList.remove('hide');
	else ele.classList.add('hide');
}

function timeout(msg, submsg) {
	let now = new Date();
	let fmt = new Intl.DateTimeFormat('jp', {hour:'2-digit', minute:'2-digit', hour12:false});
	// let [{value:h}, , {value:m}] = fmt.formatToParts(now);
	document.querySelector('.jsClock').innerText = fmt.format(now);
	document.querySelector('.jsMessage').innerText = msg;
	document.querySelector('.jsSubMessage').innerText = submsg;

	toggle(document.querySelector('main'));
	toggle(document.querySelector('.jsForm'));
}

function submitTimeout() {
	timeout(
		document.querySelector('input[name=message]').value,
		document.querySelector('input[name=sub-message]').value);
}
function toJust() {
	timeout('ちょっと離席中。', 'すぐ戻ります。');
}
function toWhile() {
	timeout('所用のため、作業を中段してます。', '戻ってくる予定です。');
}
function toLeaving() {
	timeout('本日の作業は終了しました。', 'たぶん、戻りません。');
}
