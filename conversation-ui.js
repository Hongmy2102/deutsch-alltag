/* Comparison cards are shared by the ten existing Alltagssprache lessons in Leben. */
function conversationEscape(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const conversationWordTypes={verb:'Verb',noun:'Nomen',adjective:'Adjektiv',adverb:'Adverb',phrase:'Wendung',pronoun:'Pronomen',conjunction:'Konjunktion'};
function renderConversationVocabulary(words){
 const e=conversationEscape;
 return `<section class="phrase-vocabulary" aria-label="Wortschatz"><h4>Wortschatz <small>Vocabulary · Từ vựng</small></h4><dl>${words.map(word=>{
  const type=e(conversationWordTypes[word.type]||word.type);
  const separateType=word.type==='phrase'||word.de.length>22;
  const head=separateType?`<span class="phrase-vocab-head"><span lang="de">${e(word.de)}</span><span class="phrase-ipa"> [${e(word.ipa)}]</span></span><span class="phrase-word-type" lang="de">${type}</span>`:`<span class="phrase-vocab-head"><span lang="de">${e(word.de)}</span><span class="phrase-word-type" lang="de"> · ${type}</span><span class="phrase-ipa"> · [${e(word.ipa)}]</span></span>`;
  return `<div class="phrase-vocab-entry"><dt>${head}</dt><dd>${word.plural?`<p class="phrase-plural"><b lang="de">Plural:</b> ${e(word.plural)}</p>`:''}<p class="phrase-meaning"><span lang="en"><b>EN:</b> ${e(word.en)}</span><span aria-hidden="true"> · </span><span lang="vi"><b>VI:</b> ${e(word.vi)}</span></p><button type="button" class="play say phrase-vocab-speak" lang="de" data-say="${e(word.say||word.de)}" aria-label="Hören: ${e(word.say||word.de)}">Hören</button></dd></div>`;
 }).join('')}</dl></section>`;
}
function renderConversationPair(row,index=0){
 const e=conversationEscape;
 return `<article class="phrase-pair item"><table class="phrase-comparison"><caption>Vergleich ${String(index+1).padStart(2,'0')} <small>Comparison · So sánh</small></caption><thead><tr><th scope="col"><span lang="de">Alltagssprache</span><small><span lang="en">Everyday speech</span> · <span lang="vi">Đời thường / bình dân</span></small></th><th scope="col"><span lang="de">Mit Feingefühl</span><small><span lang="en">Tactful phrasing</span> · <span lang="vi">Khéo léo</span></small></th></tr></thead><tbody><tr><td class="phrase-direct" lang="de"><span class="phrase-language">DE</span>${row.tone?`<span class="phrase-tone">${e(row.tone)}</span>`:''}<span>${e(row.simple)}</span></td><td class="phrase-tactful" lang="de"><span class="phrase-language">DE</span><span>${e(row.tactful)}</span></td></tr><tr><td lang="en"><span class="phrase-language">EN</span>${e(row.simpleEn)}</td><td lang="en"><span class="phrase-language">EN</span>${e(row.en)}</td></tr><tr><td lang="vi"><span class="phrase-language">VI</span>${e(row.simpleVi)}</td><td lang="vi"><span class="phrase-language">VI</span>${e(row.vi)}</td></tr><tr><td><button type="button" class="play say" data-say="${e(row.simple)}" aria-label="Hören: ${e(row.simple)}" lang="de">Hören</button></td><td><button type="button" class="play say" data-say="${e(row.tactful)}" aria-label="Hören: ${e(row.tactful)}" lang="de">Hören</button></td></tr></tbody></table>${renderConversationVocabulary(row.vocabulary)}<details class="phrase-analysis"><summary>Grammatik · Grammar · Ngữ pháp câu khéo léo</summary><div>${row.analysis.pattern?`<p class="phrase-grammar-pattern" lang="de">${e(row.analysis.pattern)}</p>`:''}<p lang="de"><b>DE:</b> ${e(row.analysis.de)}</p><p lang="en"><b>EN:</b> ${e(row.analysis.en)}</p><p lang="vi"><b>VI:</b> ${e(row.analysis.vi)}</p></div></details></article>`;
}
function conversationNormalize(text){return String(text).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLocaleLowerCase()}
document.addEventListener('click',event=>{
 const summary=event.target.closest('.phrase-analysis > summary');
 if(!summary||event.target.closest('a,button,input,select,textarea'))return;
 event.preventDefault();summary.parentElement.open=!summary.parentElement.open;
});
