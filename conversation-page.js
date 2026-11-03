(function(){
 const search=document.getElementById('conversationSearch'),topic=document.getElementById('conversationTopic'),mount=document.getElementById('conversationGroups'),nav=document.getElementById('conversationNav'),count=document.getElementById('conversationCount');
 for(const [id,name] of Object.entries(conversationTopicNames)){const option=document.createElement('option');option.value=id;option.textContent=name;topic.append(option)}
 function openHash(){const id=location.hash.slice(1);const el=document.getElementById(id);if(el?.matches('.phrase-group')){el.open=true;requestAnimationFrame(()=>el.scrollIntoView({block:'start'}))}}
 function render(){
  const previouslyOpen=new Set([...mount.querySelectorAll('.phrase-group[open]')].map(el=>el.id));
  const q=conversationNormalize(search.value.trim());
  const groups=conversationGroups.filter(g=>!topic.value||g.topics.includes(topic.value)).map(g=>{
   const groupText=conversationNormalize([g.de,g.en,g.vi,g.audience,g.register,g.usage].join(' '));
   return {g,rows:!q||groupText.includes(q)?g.rows:g.rows.filter(row=>conversationNormalize(JSON.stringify(row)).includes(q))};
  }).filter(x=>x.rows.length);
  mount.innerHTML=groups.map(({g,rows})=>renderConversationGroup(g,rows)).join('')||'<p class="phrase-empty">Không tìm thấy câu phù hợp. Thử từ khóa khác hoặc chọn tất cả chủ đề.</p>';
  nav.innerHTML=groups.map(({g})=>`<a href="#feingefuehl-${g.id}">${conversationEscape(g.vi)}</a>`).join('');
  count.textContent=`${groups.reduce((n,x)=>n+x.rows.length,0)} cặp câu · ${groups.length} nhóm ngữ cảnh`;
  mount.querySelectorAll('.phrase-group').forEach(el=>{if(q||previouslyOpen.has(el.id))el.open=true});
 }
 search.addEventListener('input',render);topic.addEventListener('change',()=>{render();openHash()});
 document.getElementById('expandConversations').addEventListener('click',()=>mount.querySelectorAll('.phrase-group').forEach(el=>el.open=true));
 document.getElementById('collapseConversations').addEventListener('click',()=>mount.querySelectorAll('.phrase-group').forEach(el=>el.open=false));
 addEventListener('hashchange',openHash);
 nav.addEventListener('click',event=>{const link=event.target.closest('a');if(link?.hash===location.hash)openHash()});
 let speechRun=0;
 document.addEventListener('click',event=>{
  const button=event.target.closest('.say');if(!button)return;
  const status=document.getElementById('phraseVoiceStatus');
  if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){status.textContent='Trình duyệt này không hỗ trợ đọc văn bản.';return}
  const engine=window.speechSynthesis,voices=engine.getVoices().filter(v=>/^de(?:[-_]|$)/i.test(v.lang)),voice=voices.find(v=>/^de[-_]DE$/i.test(v.lang))||voices[0];
  if(!voice){status.textContent='Chưa có giọng Đức. Hãy cài giọng German trên thiết bị rồi thử lại.';return}
  const run=++speechRun;engine.cancel();const utterance=new SpeechSynthesisUtterance(button.dataset.say);utterance.voice=voice;utterance.lang=voice.lang;utterance.rate=.8;
  utterance.onend=()=>{if(run===speechRun)status.textContent='Đã đọc xong.'};
  utterance.onerror=event=>{if(run===speechRun&&!['canceled','interrupted'].includes(event.error))status.textContent='Không phát được giọng Đức. Vui lòng kiểm tra cài đặt âm thanh.'};
  setTimeout(()=>{if(run===speechRun){engine.speak(utterance);status.textContent='Đang đọc: '+button.dataset.say}},140);
 });
 render();openHash();
})();
