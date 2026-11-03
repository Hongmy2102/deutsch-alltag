/* Comparison cards are shared by the ten existing Alltagssprache lessons in Leben. */
function conversationEscape(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const conversationWordTypes={verb:'Verb · Verb · Động từ',noun:'Nomen · Noun · Danh từ',adjective:'Adjektiv · Adjective · Tính từ',adverb:'Adverb · Adverb · Trạng từ',phrase:'Wendung · Expression · Cụm từ',pronoun:'Pronomen · Pronoun · Đại từ',conjunction:'Konjunktion · Conjunction · Liên từ'};
function renderConversationVocabulary(words){
 const e=conversationEscape;
 return `<section class="phrase-vocabulary" aria-label="Từ vựng trong câu khéo léo"><h4>Wortschatz · Vocabulary · Từ vựng</h4><dl>${words.map(word=>`<div class="phrase-vocab-entry"><dt><span lang="de">${e(word.de)}</span><span class="phrase-word-type">${e(conversationWordTypes[word.type]||word.type)}</span></dt><dd>${word.plural?`<p class="phrase-plural"><b>Plural · Số nhiều:</b> <span lang="de">${e(word.plural)}</span></p>`:''}<p lang="en"><b>EN:</b> ${e(word.en)}</p><p lang="vi"><b>VI:</b> ${e(word.vi)}</p></dd></div>`).join('')}</dl></section>`;
}
function renderConversationPair(row){
 const e=conversationEscape;
 return `<article class="phrase-pair item"><div class="phrase-direct"><h4>Direkt / umgangssprachlich · Casual / direct · Đời thường / trực tiếp</h4>${row.tone?`<p class="phrase-tone">${e(row.tone)}</p>`:''}<p lang="de"><b>DE:</b> ${e(row.simple)}</p><p lang="en"><b>EN:</b> ${e(row.simpleEn)}</p><p lang="vi"><b>VI:</b> ${e(row.simpleVi)}</p><button type="button" class="play say" data-say="${e(row.simple)}" aria-label="Nghe câu đời thường: ${e(row.simple)}">🔊 Hören · Nghe</button></div><div class="phrase-tactful"><h4>Mit Feingefühl · Tactful alternative · Cách nói khéo léo</h4><p class="word" lang="de"><b>DE:</b> ${e(row.tactful)}</p><p lang="en"><b>EN:</b> ${e(row.en)}</p><p lang="vi"><b>VI:</b> ${e(row.vi)}</p><button type="button" class="play say" data-say="${e(row.tactful)}" aria-label="Nghe câu khéo léo: ${e(row.tactful)}">🔊 Hören · Nghe</button></div>${renderConversationVocabulary(row.vocabulary)}<details class="phrase-analysis"><summary>Grammatik · Grammar · Phân tích câu khéo léo</summary><div><p lang="de"><b>DE:</b> ${e(row.analysis.de)}</p><p lang="en"><b>EN:</b> ${e(row.analysis.en)}</p><p lang="vi"><b>VI:</b> ${e(row.analysis.vi)}</p></div></details></article>`;
}
function conversationNormalize(text){return String(text).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLocaleLowerCase()}
document.addEventListener('click',event=>{
 const summary=event.target.closest('.phrase-analysis > summary');
 if(!summary||event.target.closest('a,button,input,select,textarea'))return;
 event.preventDefault();summary.parentElement.open=!summary.parentElement.open;
});
