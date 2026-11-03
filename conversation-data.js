// Unified comparisons in Leben. IPA is a broad standard German transcription; speech uses the full headword or phrase.
const conversationGroups = [
  {
    "id": 1,
    "de": "Anfeuern & reagieren",
    "en": "Encouragement & reactions",
    "vi": "Động viên và phản hồi",
    "intro": {
      "de": "Beim Abschied, vor einer Prüfung oder wenn jemand krank ist. Achte darauf, ob du Trost, einen Wunsch oder Distanz ausdrückst.",
      "en": "When saying goodbye, before an exam, or when someone is ill. Notice whether you are offering comfort, expressing a wish, or keeping your distance.",
      "vi": "Khi chào tạm biệt, trước kỳ thi hoặc khi ai đó bị ốm. Hãy để ý câu đang an ủi, chúc điều gì hay thể hiện sự giữ khoảng cách."
    },
    "rows": [
      {
        "tactful": "Ich hoffe, dass es dir bald wieder besser geht.",
        "en": "I hope you feel better again soon.",
        "vi": "Mình mong bạn sớm khỏe lại.",
        "vocabulary": [
          {
            "de": "hoffen",
            "type": "verb",
            "en": "to hope",
            "vi": "hy vọng",
            "ipa": "ˈhɔfn̩",
            "say": "hoffen"
          },
          {
            "de": "bald",
            "type": "adverb",
            "en": "soon",
            "vi": "sớm",
            "ipa": "balt",
            "say": "bald",
            "usageHelp": {
              "de": "Bald nennt einen Zeitpunkt: in naher Zukunft. Es beschreibt hier, wann die Besserung eintreten soll.",
              "en": "Bald refers to a time in the near future; here it says when the improvement is hoped for.",
              "vi": "bald chỉ thời gian: sớm, trong tương lai gần; ở đây bổ sung ý khi nào người kia khỏe lại."
            }
          },
          {
            "de": "gut",
            "type": "adjective",
            "ipa": "ɡuːt",
            "en": "good; well",
            "vi": "tốt; khỏe",
            "say": "gut",
            "formHelp": {
              "base": "gut",
              "surface": "besser",
              "example": "es geht dir besser",
              "de": "Besser ist der unregelmäßige Komparativ von gut. In es geht dir besser wird es ohne Deklinationsendung verwendet; dir ist Dativ.",
              "en": "Besser is the irregular comparative of gut. In es geht dir besser, it has no declension ending; dir is dative.",
              "vi": "besser là so sánh hơn bất quy tắc của gut. Trong es geht dir besser, nó không nhận đuôi biến cách; dir ở Dativ (cách 3)."
            }
          }
        ],
        "analysis": {
          "pattern": "hoffen, dass … + Verb am Ende",
          "de": "Geht steht am Ende des dass-Satzes. Dir ist Dativ in es geht dir besser; besser ist der Komparativ von gut.",
          "en": "Geht comes at the end of the dass-clause. Dir is dative in es geht dir besser; besser is the comparative of gut.",
          "vi": "geht đứng cuối mệnh đề dass. dir ở Dativ trong es geht dir besser; besser là so sánh hơn của gut."
        },
        "source": "legacy-adapted",
        "simple": "Gute Besserung!",
        "simpleEn": "Get well soon!",
        "simpleVi": "Chúc mau khỏe!"
      },
      {
        "tactful": "Du brauchst dir deswegen keine Sorgen zu machen.",
        "en": "You do not need to worry about that.",
        "vi": "Bạn không cần lo về việc đó đâu.",
        "vocabulary": [
          {
            "de": "sich Sorgen machen",
            "type": "phrase",
            "en": "to worry",
            "vi": "lo lắng",
            "ipa": "zɪç ˈzɔʁɡən ˈmaxn̩",
            "say": "sich Sorgen machen"
          },
          {
            "de": "brauchen",
            "type": "verb",
            "en": "to need",
            "vi": "cần",
            "ipa": "ˈbʁaʊ̯xn̩",
            "say": "brauchen"
          },
          {
            "de": "deswegen",
            "type": "adverb",
            "ipa": "ˈdɛsveːɡn̩",
            "en": "because of that; for that reason",
            "vi": "vì điều đó; vì lý do đó",
            "say": "deswegen",
            "usageHelp": {
              "de": "Deswegen verweist auf einen bereits genannten Grund; in diesem Satz bleibt die Form unverändert.",
              "en": "Deswegen refers to a reason already mentioned and does not change form in this sentence.",
              "vi": "deswegen chỉ lý do đã nhắc trước đó: vì việc đó. Nó bổ sung lý do cho cả sự việc, không bổ nghĩa cho một danh từ, và không chia đuôi."
            }
          },
          {
            "de": "dir",
            "type": "pronoun",
            "ipa": "diːɐ̯",
            "en": "to you; yourself (dative, du)",
            "vi": "cho bạn; đại từ phản thân Dativ của du",
            "say": "dir",
            "usageHelp": {
              "de": "Dir ist die Dativform von du; im Beispiel sich Sorgen machen ist es ein Reflexivpronomen im Dativ.",
              "en": "Dir is the dative form of du; with sich Sorgen machen here it is a dative reflexive pronoun.",
              "vi": "dir là Dativ của du; trong sich Sorgen machen ở câu này, dir là đại từ phản thân Dativ, không phải một đuôi thêm vào từ."
            }
          }
        ],
        "analysis": {
          "pattern": "brauchen + zu-Infinitiv · sich Sorgen machen · deswegen",
          "de": "Brauchst … keine … zu machen verneint eine Notwendigkeit. Dir ist Dativ in sich Sorgen machen; Sorgen ist Akkusativ Plural. Deswegen verweist auf den bereits genannten Grund: wegen dieser Sache. Steht es zuerst, folgt das Verb: Deswegen brauchst du … .",
          "en": "Brauchst … keine … zu machen expresses absence of necessity. Dir is dative in sich Sorgen machen; Sorgen is accusative plural. Deswegen points back to the reason already mentioned: because of that. If it comes first, the verb follows: Deswegen brauchst du … .",
          "vi": "brauchen + keine + zu machen diễn đạt không cần làm gì. dir ở Dativ trong sich Sorgen machen; Sorgen là Akkusativ số nhiều. deswegen thay cho lý do đã nói: vì việc đó. Nếu đưa lên đầu, động từ chia theo ngay sau: Deswegen brauchst du … ."
        },
        "source": "legacy-adapted",
        "simple": "Keine Sorge!",
        "simpleEn": "Don’t worry!",
        "simpleVi": "Đừng lo!"
      },
      {
        "tactful": "Ich wünsche dir alles Gute für die nächste Zeit.",
        "en": "I wish you all the best for the time ahead.",
        "vi": "Mình chúc bạn mọi điều tốt đẹp trong thời gian tới.",
        "vocabulary": [
          {
            "de": "wünschen",
            "type": "verb",
            "en": "to wish",
            "vi": "chúc; mong muốn",
            "ipa": "ˈvʏnʃn̩",
            "say": "wünschen"
          },
          {
            "de": "die Zeit",
            "type": "noun",
            "en": "time",
            "vi": "thời gian",
            "plural": "die Zeiten",
            "ipa": "diː tsaɪ̯t",
            "say": "die Zeit"
          },
          {
            "de": "alles Gute",
            "type": "phrase",
            "ipa": "ˈaləs ˈɡuːtə",
            "en": "all the best",
            "vi": "mọi điều tốt đẹp",
            "say": "alles Gute",
            "usageHelp": {
              "de": "Gute ist nach alles substantiviert und wird großgeschrieben; die feste Form lautet alles Gute.",
              "en": "Gute is nominalized after alles and capitalized; the fixed form is alles Gute.",
              "vi": "Gute được danh từ hóa sau alles nên viết hoa. Cụm cố định là alles Gute: mọi điều tốt đẹp; không nhầm với etwas Gutes."
            },
            "formHelp": {
              "base": "gut",
              "surface": "Gute",
              "example": "alles Gute",
              "de": "Gut wird hier substantiviert. Nach alles lautet die feste Form Gute mit Großbuchstaben und -e; nach etwas heißt es dagegen etwas Gutes.",
              "en": "Gut is nominalized here. After alles, the fixed form is capitalized Gute with -e; after etwas, it is etwas Gutes instead.",
              "vi": "gut được danh từ hóa ở đây. Sau alles dùng Gute, viết hoa và có -e; nhưng sau etwas lại là etwas Gutes với -es. Không gắn một đuôi giống nhau cho mọi trường hợp."
            }
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ. Gute wird nach alles als substantiviertes Adjektiv großgeschrieben.",
          "en": "The recipient is dative; the wish is accusative. Gute is capitalized after alles because it is a nominalized adjective.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ. Gute viết hoa sau alles vì là tính từ đã được danh từ hóa."
        },
        "source": "legacy-adapted",
        "simple": "Mach’s gut!",
        "simpleEn": "Take care!",
        "simpleVi": "Bảo trọng nhé! / Chào nhé!"
      },
      {
        "tactful": "Dafür bin ich leider nicht zuständig.",
        "en": "Unfortunately, I am not responsible for that.",
        "vi": "Tiếc là mình không phụ trách việc đó.",
        "vocabulary": [
          {
            "de": "zuständig",
            "type": "adjective",
            "en": "responsible for; in charge",
            "vi": "có trách nhiệm; phụ trách",
            "ipa": "ˈtsuːˌʃtɛndɪç",
            "say": "zuständig"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là",
            "ipa": "ˈlaɪ̯dɐ",
            "say": "leider",
            "usageHelp": {
              "de": "Leider kommentiert die gesamte Aussage als bedauerlich, nicht die Eigenschaft eines Nomens.",
              "en": "Leider comments on the whole statement as regrettable, rather than describing a noun.",
              "vi": "leider bình luận cả sự việc là đáng tiếc, không nêu đặc điểm của một danh từ nên không chia đuôi tính từ."
            }
          },
          {
            "de": "dafür",
            "type": "adverb",
            "ipa": "daˈfyːɐ̯",
            "en": "for that; for it",
            "vi": "cho việc đó; về việc đó",
            "say": "dafür",
            "usageHelp": {
              "de": "Dafür verbindet da mit für und ersetzt die genannte Sache nach zuständig für oder sich entschuldigen für.",
              "en": "Dafür combines da with für and replaces the matter referred to in zuständig für or sich entschuldigen für.",
              "vi": "dafür = da + für, thay cho việc đã nhắc tới trong zuständig für hoặc sich entschuldigen für. Không phải thêm đuôi vào da."
            }
          }
        ],
        "analysis": {
          "pattern": "zuständig für + Akkusativ → dafür",
          "de": "Zuständig wird mit für + Akkusativ verbunden. Dafür ersetzt hier für + die bereits erwähnte Sache; bin bleibt an zweiter Satzgliedposition.",
          "en": "Zuständig takes für plus accusative. Dafür replaces für plus the matter already mentioned; bin stays in the second constituent position.",
          "vi": "zuständig đi với für + Akkusativ. dafür thay cho für + việc đã nhắc đến; bin vẫn ở vị trí thành phần thứ hai."
        },
        "source": "legacy-adapted",
        "simple": "Das ist nicht mein Bier.",
        "simpleEn": "That’s not my problem.",
        "simpleVi": "Đó không phải chuyện của tôi."
      },
      {
        "tactful": "Ich habe da keine besondere Präferenz.",
        "en": "I do not have a particular preference about that.",
        "vi": "Mình không có lựa chọn ưu tiên nào về việc đó.",
        "vocabulary": [
          {
            "de": "die Präferenz",
            "type": "noun",
            "en": "preference",
            "vi": "sự ưu tiên; sở thích lựa chọn",
            "plural": "die Präferenzen",
            "ipa": "diː pʁɛfeˈʁɛnts",
            "say": "die Präferenz"
          },
          {
            "de": "haben",
            "type": "verb",
            "en": "to have",
            "vi": "có",
            "ipa": "ˈhaːbn̩",
            "say": "haben"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "legacy-adapted",
        "simple": "Das ist mir Wurst.",
        "simpleEn": "I don’t care. / It’s all the same to me.",
        "simpleVi": "Tôi sao cũng được / Tôi chẳng quan tâm."
      },
      {
        "tactful": "Ich wünsche dir von Herzen viel Erfolg.",
        "en": "I sincerely wish you every success.",
        "vi": "Mình chân thành chúc bạn thành công.",
        "vocabulary": [
          {
            "de": "wünschen",
            "type": "verb",
            "en": "to wish",
            "vi": "chúc; mong muốn",
            "ipa": "ˈvʏnʃn̩",
            "say": "wünschen"
          },
          {
            "de": "der Erfolg",
            "type": "noun",
            "en": "success",
            "vi": "thành công",
            "plural": "die Erfolge",
            "ipa": "deːɐ̯ ɛɐ̯ˈfɔlk",
            "say": "der Erfolg"
          },
          {
            "de": "von Herzen",
            "type": "phrase",
            "ipa": "fɔn ˈhɛʁtsn̩",
            "en": "from the heart; sincerely",
            "vi": "từ tận đáy lòng; chân thành",
            "say": "von Herzen"
          }
        ],
        "analysis": {
          "pattern": "von Herzen · wünschen + Dativ + Akkusativ",
          "de": "Von Herzen ist eine feste Wendung. Dir ist Dativ, viel Erfolg ist Akkusativ in jemandem etwas wünschen.",
          "en": "Von Herzen is a fixed expression. Dir is dative; viel Erfolg is accusative in jemandem etwas wünschen.",
          "vi": "von Herzen là cụm cố định nghĩa là chân thành, từ tận đáy lòng. dir ở Dativ; viel Erfolg ở Akkusativ trong jemandem etwas wünschen."
        },
        "source": "legacy-adapted",
        "simple": "Ich drück’ dir die Daumen.",
        "simpleEn": "I’ll keep my fingers crossed for you.",
        "simpleVi": "Tôi cầu chúc bạn may mắn, thành công."
      },
      {
        "tactful": "Ich wünsche dir viel Freude dabei.",
        "en": "I hope you really enjoy it.",
        "vi": "Mình chúc bạn có nhiều niềm vui khi làm việc đó.",
        "vocabulary": [
          {
            "de": "wünschen",
            "type": "verb",
            "en": "to wish",
            "vi": "chúc; mong muốn",
            "ipa": "ˈvʏnʃn̩",
            "say": "wünschen"
          },
          {
            "de": "die Freude",
            "type": "noun",
            "en": "joy",
            "vi": "niềm vui",
            "plural": "die Freuden",
            "ipa": "diː ˈfʁɔʏ̯də",
            "say": "die Freude"
          },
          {
            "de": "dabei",
            "type": "adverb",
            "ipa": "daˈbaɪ̯",
            "en": "with that; while doing it",
            "vi": "trong việc đó; khi làm việc đó",
            "say": "dabei",
            "usageHelp": {
              "de": "Dabei ist da + bei; die genaue Bedeutung hängt hier von helfen bei oder der genannten Tätigkeit ab.",
              "en": "Dabei is da plus bei; here its meaning depends on helfen bei or the activity mentioned.",
              "vi": "dabei = da + bei; trong helfen bei là giúp làm việc đó, còn ở câu về may mắn là khi làm việc đó."
            }
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ.",
          "en": "The recipient is dative; the wish is accusative.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ."
        },
        "source": "legacy-adapted",
        "simple": "Viel Spaß!",
        "simpleEn": "Have fun!",
        "simpleVi": "Chúc vui vẻ!"
      },
      {
        "tactful": "Könntest du bitte einen Moment still sein?",
        "en": "Could you be quiet for a moment, please?",
        "vi": "Bạn có thể im lặng một lát được không?",
        "vocabulary": [
          {
            "de": "still",
            "type": "adjective",
            "en": "quiet; silent",
            "vi": "im lặng",
            "ipa": "ʃtɪl",
            "say": "still"
          },
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente",
            "ipa": "deːɐ̯ moˈmɛnt",
            "say": "der Moment"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "legacy-adapted",
        "simple": "Halt’s Maul!",
        "simpleEn": "Shut your mouth!",
        "simpleVi": "Câm mồm! (rất thô, xúc phạm)",
        "tone": "Thô, xúc phạm · Rude and insulting"
      },
      {
        "tactful": "Ich übernehme heute gerne die Rechnung.",
        "en": "I would be happy to cover the bill today.",
        "vi": "Hôm nay mình sẵn lòng thanh toán hóa đơn.",
        "vocabulary": [
          {
            "de": "übernehmen",
            "type": "verb",
            "en": "to take over; to cover",
            "vi": "đảm nhận; chi trả",
            "ipa": "ˌyːbɐˈneːmən",
            "say": "übernehmen"
          },
          {
            "de": "die Rechnung",
            "type": "noun",
            "en": "bill; invoice",
            "vi": "hóa đơn",
            "plural": "die Rechnungen",
            "ipa": "diː ˈʁɛçnʊŋ",
            "say": "die Rechnung"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "legacy-adapted",
        "simple": "Das geht auf mich.",
        "simpleEn": "It’s on me.",
        "simpleVi": "Để tôi trả tiền / Tôi mời."
      },
      {
        "tactful": "Ich freue mich wirklich sehr für dich.",
        "en": "I am really very happy for you.",
        "vi": "Mình thật sự rất mừng cho bạn.",
        "vocabulary": [
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng",
            "ipa": "zɪç ˈfʁɔʏ̯ən",
            "say": "sich freuen"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự",
            "ipa": "ˈvɪʁklɪç",
            "say": "wirklich",
            "usageHelp": {
              "de": "Wirklich verstärkt hier die Aussage im Sinn von tatsächlich oder sehr.",
              "en": "Wirklich strengthens the statement here, meaning really or genuinely.",
              "vi": "wirklich nhấn mạnh sự việc là thực sự; không có đuôi theo giống hay cách của danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Reflexivpronomen",
          "de": "Das Reflexivpronomen richtet sich nach dem Subjekt und der Verbverbindung, zum Beispiel ich → mich.",
          "en": "The reflexive pronoun depends on the subject and verb expression, for example ich → mich.",
          "vi": "Đại từ phản thân phụ thuộc chủ ngữ và cấu trúc động từ, ví dụ ich → mich."
        },
        "source": "legacy-adapted",
        "simple": "Freut mich für dich!",
        "simpleEn": "I’m happy for you!",
        "simpleVi": "Mừng cho bạn nhé!"
      },
      {
        "simple": "War nichts Besonderes.",
        "tactful": "Danke, ich freue mich sehr über dein Lob.",
        "vi": "Cảm ơn, mình rất vui vì lời khen của bạn.",
        "simpleEn": "It was nothing special.",
        "simpleVi": "Chẳng có gì đặc biệt đâu.",
        "en": "Thank you; I am very pleased with your praise.",
        "vocabulary": [
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng",
            "ipa": "zɪç ˈfʁɔʏ̯ən",
            "say": "sich freuen"
          },
          {
            "de": "das Lob",
            "type": "noun",
            "en": "praise",
            "vi": "lời khen",
            "plural": "kein gebräuchlicher Plural in dieser Bedeutung",
            "ipa": "das loːp",
            "say": "das Lob"
          }
        ],
        "analysis": {
          "pattern": "sich freuen über + Akkusativ",
          "de": "Mich gehört zu sich freuen; über verlangt hier Akkusativ. Dein Lob ist das Objekt der Präposition.",
          "en": "Mich belongs to sich freuen; über takes accusative here. Dein Lob is the object of the preposition.",
          "vi": "mich thuộc cụm phản thân sich freuen; über trong cấu trúc này đi với Akkusativ. dein Lob là tân ngữ của giới từ."
        },
        "source": "document"
      },
      {
        "simple": "Nur Glück.",
        "tactful": "Danke, ich hatte dabei tatsächlich auch Glück.",
        "vi": "Cảm ơn, thực ra mình cũng đã gặp may trong việc đó.",
        "simpleEn": "Just luck.",
        "simpleVi": "Chỉ là may mắn thôi.",
        "en": "Thank you; I really did have some luck with that too.",
        "vocabulary": [
          {
            "de": "das Glück",
            "type": "noun",
            "en": "luck; happiness",
            "vi": "may mắn; hạnh phúc",
            "plural": "kein gebräuchlicher Plural in dieser Bedeutung",
            "ipa": "das ɡlʏk",
            "say": "das Glück"
          },
          {
            "de": "tatsächlich",
            "type": "adverb",
            "en": "really; actually",
            "vi": "thực sự",
            "ipa": "ˈtaːtˌzɛçlɪç",
            "say": "tatsächlich"
          },
          {
            "de": "dabei",
            "type": "adverb",
            "ipa": "daˈbaɪ̯",
            "en": "with that; while doing it",
            "vi": "trong việc đó; khi làm việc đó",
            "say": "dabei",
            "usageHelp": {
              "de": "Dabei ist da + bei; die genaue Bedeutung hängt hier von helfen bei oder der genannten Tätigkeit ab.",
              "en": "Dabei is da plus bei; here its meaning depends on helfen bei or the activity mentioned.",
              "vi": "dabei = da + bei; trong helfen bei là giúp làm việc đó, còn ở câu về may mắn là khi làm việc đó."
            }
          }
        ],
        "analysis": {
          "pattern": "Präteritum",
          "de": "War und hatte sind Präteritumformen von sein und haben.",
          "en": "War and hatte are past-tense forms of sein and haben.",
          "vi": "war và hatte là dạng Präteritum của sein và haben."
        },
        "source": "document"
      },
      {
        "simple": "Jeder könnte das.",
        "tactful": "Danke für das freundliche Kompliment.",
        "vi": "Cảm ơn lời khen tốt đẹp của bạn.",
        "simpleEn": "Anyone could do that.",
        "simpleVi": "Ai cũng làm được mà.",
        "en": "Thank you for the kind compliment.",
        "vocabulary": [
          {
            "de": "freundlich",
            "type": "adjective",
            "en": "friendly; kind",
            "vi": "thân thiện; tốt bụng",
            "ipa": "ˈfʁɔʏ̯ntlɪç",
            "say": "freundlich",
            "formHelp": {
              "base": "freundlich",
              "surface": "freundliche",
              "example": "das freundliche Kompliment",
              "de": "Vor Kompliment steht das im Akkusativ Neutrum. Nach dem bestimmten Artikel erhält das Adjektiv hier die schwache Endung -e.",
              "en": "Kompliment is neuter accusative and follows das. After the definite article, the adjective has the weak ending -e here.",
              "vi": "Kompliment giống trung, ở Akkusativ (cách 4), trước nó có das. Sau mạo từ xác định này, tính từ nhận đuôi yếu -e: das freundliche Kompliment."
            }
          },
          {
            "de": "das Kompliment",
            "type": "noun",
            "en": "compliment",
            "vi": "lời khen",
            "plural": "die Komplimente",
            "ipa": "das kɔmpliˈmɛnt",
            "say": "das Kompliment"
          }
        ],
        "analysis": {
          "pattern": "Verkürzter Satz",
          "de": "Diese feste Wendung kann ohne konjugiertes Verb als vollständiger Gesprächsbeitrag stehen.",
          "en": "This fixed expression can function as a complete contribution without a conjugated verb.",
          "vi": "Cụm cố định này có thể dùng độc lập trong hội thoại dù không có động từ chia."
        },
        "source": "document"
      },
      {
        "simple": "Das hätte jeder geschafft.",
        "simpleEn": "Anyone could have done that.",
        "simpleVi": "Ai cũng làm được việc đó thôi.",
        "tactful": "Vielen Dank, ich freue mich über deine Anerkennung.",
        "en": "Thank you very much; I appreciate your recognition.",
        "vi": "Cảm ơn nhiều, mình rất vui vì được bạn ghi nhận.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng",
            "ipa": "zɪç ˈfʁɔʏ̯ən",
            "say": "sich freuen"
          },
          {
            "de": "die Anerkennung",
            "type": "noun",
            "en": "recognition; appreciation",
            "vi": "sự ghi nhận",
            "plural": "die Anerkennungen",
            "ipa": "diː ˈanʔɛɐ̯ˌkɛnʊŋ",
            "say": "die Anerkennung"
          }
        ],
        "analysis": {
          "pattern": "Reflexivpronomen",
          "de": "Das Reflexivpronomen richtet sich nach dem Subjekt und der Verbverbindung, zum Beispiel ich → mich.",
          "en": "The reflexive pronoun depends on the subject and verb expression, for example ich → mich.",
          "vi": "Đại từ phản thân phụ thuộc chủ ngữ và cấu trúc động từ, ví dụ ich → mich."
        }
      },
      {
        "simple": "War ja nicht so viel Arbeit.",
        "simpleEn": "It was not that much work.",
        "simpleVi": "Cũng không tốn nhiều công sức đâu.",
        "tactful": "Danke, ich freue mich, dass dir das Ergebnis gefällt.",
        "en": "Thank you; I am glad you like the result.",
        "vi": "Cảm ơn, mình rất vui vì bạn thích kết quả đó.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "das Ergebnis",
            "type": "noun",
            "en": "result",
            "vi": "kết quả",
            "plural": "die Ergebnisse",
            "ipa": "das ɛɐ̯ˈɡeːpnɪs",
            "say": "das Ergebnis"
          },
          {
            "de": "gefallen",
            "type": "verb",
            "en": "to please; to appeal",
            "vi": "làm hài lòng; được thích",
            "ipa": "ɡəˈfalən",
            "say": "gefallen"
          }
        ],
        "analysis": {
          "pattern": "dass + … + Verb am Ende",
          "de": "Das konjugierte Verb steht am Ende des dass-Satzes.",
          "en": "The conjugated verb comes at the end of the dass-clause.",
          "vi": "Động từ chia đứng cuối mệnh đề mở đầu bằng dass."
        }
      },
      {
        "simple": "So gut war das auch nicht.",
        "simpleEn": "It was not that good.",
        "simpleVi": "Cũng chẳng tốt đến thế đâu.",
        "tactful": "Vielen Dank, ich freue mich über deine Rückmeldung.",
        "en": "Thank you very much; I appreciate your feedback.",
        "vi": "Cảm ơn nhiều, mình rất vui khi nhận được phản hồi của bạn.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng",
            "ipa": "zɪç ˈfʁɔʏ̯ən",
            "say": "sich freuen"
          },
          {
            "de": "die Rückmeldung",
            "type": "noun",
            "en": "reply; feedback",
            "vi": "phản hồi",
            "plural": "die Rückmeldungen",
            "ipa": "diː ˈʁʏkˌmɛldʊŋ",
            "say": "die Rückmeldung"
          }
        ],
        "analysis": {
          "pattern": "Reflexivpronomen",
          "de": "Das Reflexivpronomen richtet sich nach dem Subjekt und der Verbverbindung, zum Beispiel ich → mich.",
          "en": "The reflexive pronoun depends on the subject and verb expression, for example ich → mich.",
          "vi": "Đại từ phản thân phụ thuộc chủ ngữ và cấu trúc động từ, ví dụ ich → mich."
        }
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 2,
    "de": "Zustimmen & widersprechen",
    "en": "Agreeing & disagreeing",
    "vi": "Đồng ý và bất đồng",
    "intro": {
      "de": "In einer Diskussion oder beim Entscheiden. Der Ton entscheidet, ob Zustimmung freundlich oder widerwillig klingt.",
      "en": "In a discussion or while making a decision. Your tone determines whether agreement sounds friendly or reluctant.",
      "vi": "Trong thảo luận hoặc khi đưa ra quyết định. Ngữ điệu quyết định lời đồng ý nghe thân thiện hay miễn cưỡng."
    },
    "rows": [
      {
        "tactful": "In diesem Punkt stimme ich dir zu.",
        "en": "I agree with you on this point.",
        "vi": "Mình đồng ý với bạn ở điểm này.",
        "vocabulary": [
          {
            "de": "der Punkt",
            "type": "noun",
            "en": "point",
            "vi": "điểm; ý",
            "plural": "die Punkte",
            "ipa": "deːɐ̯ pʊŋkt",
            "say": "der Punkt"
          },
          {
            "de": "zustimmen",
            "type": "verb",
            "ipa": "ˈtsuːˌʃtɪmən",
            "en": "to agree",
            "vi": "đồng ý",
            "say": "zustimmen"
          }
        ],
        "analysis": {
          "pattern": "jemandem zustimmen / recht geben",
          "de": "Dir steht im Dativ. Zustimmen ist trennbar: stimme … zu; jemandem recht geben verlangt ebenfalls Dativ.",
          "en": "Dir is dative. Zustimmen is separable: stimme … zu; jemandem recht geben also takes dative.",
          "vi": "dir ở Dativ. zustimmen là động từ tách: stimme … zu; jemandem recht geben cũng dùng Dativ chỉ người."
        },
        "source": "legacy-adapted",
        "simple": "Das stimmt!",
        "simpleEn": "That’s right.",
        "simpleVi": "Đúng rồi / Điều đó đúng."
      },
      {
        "tactful": "Was bedeutet das aus deiner Sicht für uns?",
        "en": "What does that mean for us from your point of view?",
        "vi": "Theo bạn, điều đó có ý nghĩa gì đối với chúng ta?",
        "vocabulary": [
          {
            "de": "die Sicht",
            "type": "noun",
            "en": "view; perspective",
            "vi": "góc nhìn",
            "plural": "die Sichten",
            "ipa": "diː zɪçt",
            "say": "die Sicht"
          },
          {
            "de": "bedeuten",
            "type": "verb",
            "en": "to mean",
            "vi": "có nghĩa",
            "ipa": "bəˈdɔʏ̯tn̩",
            "say": "bedeuten"
          },
          {
            "de": "aus deiner Sicht",
            "type": "phrase",
            "ipa": "aʊ̯s ˈdaɪ̯nɐ zɪçt",
            "en": "from your point of view",
            "vi": "theo góc nhìn của bạn",
            "say": "aus deiner Sicht"
          }
        ],
        "analysis": {
          "pattern": "aus + Dativ · deiner Sicht",
          "de": "Aus verlangt Dativ; Sicht ist feminin, deshalb deiner Sicht. In der W-Frage folgt bedeutet direkt auf was.",
          "en": "Aus takes dative; Sicht is feminine, hence deiner Sicht. In the wh-question, bedeutet follows was directly.",
          "vi": "aus dùng Dativ; Sicht giống cái nên có deiner Sicht. Trong câu hỏi W, bedeutet theo ngay sau was."
        },
        "source": "legacy-adapted",
        "simple": "Na und?",
        "simpleEn": "So what?",
        "simpleVi": "Thì sao? (có thể thách thức)"
      },
      {
        "tactful": "Genau diesen Eindruck habe ich auch.",
        "en": "That is exactly my impression too.",
        "vi": "Mình cũng có đúng cảm nhận đó.",
        "vocabulary": [
          {
            "de": "der Eindruck",
            "type": "noun",
            "en": "impression",
            "vi": "ấn tượng; cảm nhận",
            "plural": "die Eindrücke",
            "ipa": "deːɐ̯ ˈaɪ̯nˌdʁʊk",
            "say": "der Eindruck"
          },
          {
            "de": "genau",
            "type": "adverb",
            "ipa": "ɡəˈnaʊ̯",
            "en": "exactly",
            "vi": "chính xác; đúng như vậy",
            "say": "genau",
            "usageHelp": {
              "de": "Genau hebt hier die Übereinstimmung hervor; es steht nicht als flektiertes Adjektiv vor einem Nomen.",
              "en": "Genau emphasizes the exact match here; it is not an inflected adjective before a noun.",
              "vi": "genau ở đây nhấn mạnh sự trùng khớp: chính xác như vậy; không phải tính từ đang chia đuôi trước danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "legacy-adapted",
        "simple": "Eben!",
        "simpleEn": "Exactly!",
        "simpleVi": "Chính thế / Đúng vậy đấy!"
      },
      {
        "tactful": "Für mich ist dieser Vorschlag in Ordnung.",
        "en": "This suggestion is fine with me.",
        "vi": "Đề xuất này ổn với mình.",
        "vocabulary": [
          {
            "de": "der Vorschlag",
            "type": "noun",
            "en": "suggestion",
            "vi": "đề xuất",
            "plural": "die Vorschläge",
            "ipa": "deːɐ̯ ˈfoːɐ̯ˌʃlaːk",
            "say": "der Vorschlag"
          },
          {
            "de": "in Ordnung",
            "type": "phrase",
            "en": "all right",
            "vi": "ổn; chấp nhận được",
            "ipa": "ɪn ˈʔɔʁdnʊŋ",
            "say": "in Ordnung"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "legacy-adapted",
        "simple": "Von mir aus.",
        "simpleEn": "If you say so. / I don’t mind.",
        "simpleVi": "Tôi thì được thôi / Cứ làm đi (đôi khi miễn cưỡng)."
      },
      {
        "tactful": "Damit bin ich nicht einverstanden.",
        "en": "I do not agree with that.",
        "vi": "Mình không đồng ý với điều đó.",
        "vocabulary": [
          {
            "de": "einverstanden",
            "type": "adjective",
            "en": "in agreement",
            "vi": "đồng ý; nhất trí",
            "ipa": "ˈaɪ̯nfɛɐ̯ˌʃtandn̩",
            "say": "einverstanden"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì",
            "ipa": "zaɪ̯n",
            "say": "sein"
          },
          {
            "de": "damit",
            "type": "adverb",
            "ipa": "daˈmɪt",
            "en": "with that; with it",
            "vi": "với việc đó; bằng điều đó",
            "say": "damit",
            "usageHelp": {
              "de": "Damit ist hier da + mit und ersetzt eine Sache nach mit; es ist in diesen Beispielen nicht die Konjunktion des Zwecks.",
              "en": "Damit is da plus mit here, replacing a matter following mit; it is not the purpose conjunction in these examples.",
              "vi": "damit ở các câu này là da + mit, thay cho mit + việc đó; không phải liên từ để chỉ mục đích là để."
            }
          }
        ],
        "analysis": {
          "pattern": "einverstanden mit + Dativ → damit",
          "de": "Die Verbindung lautet mit etwas einverstanden sein. Damit ersetzt mit + die genannte Sache; nicht verneint einverstanden.",
          "en": "The expression is mit etwas einverstanden sein. Damit replaces mit plus the matter mentioned; nicht negates einverstanden.",
          "vi": "Cụm là mit etwas einverstanden sein. damit thay cho mit + việc đã nhắc tới; nicht phủ định einverstanden. damit ở đây không phải liên từ nghĩa là để."
        },
        "source": "legacy-adapted",
        "simple": "Nichts da!",
        "simpleEn": "No way!",
        "simpleVi": "Không được đâu / Không có chuyện đó."
      },
      {
        "tactful": "So stellt es sich für mich auch dar.",
        "en": "That is how it appears to me too.",
        "vi": "Mình cũng thấy sự việc như vậy.",
        "vocabulary": [
          {
            "de": "sich darstellen",
            "type": "verb",
            "en": "to appear; to present itself",
            "vi": "thể hiện; hiện ra",
            "ipa": "zɪç ˈdaːɐ̯ˌʃtɛlən",
            "say": "sich darstellen"
          },
          {
            "de": "auch",
            "type": "adverb",
            "en": "also; too",
            "vi": "cũng",
            "ipa": "aʊ̯x",
            "say": "auch"
          }
        ],
        "analysis": {
          "pattern": "Trennbares Verb",
          "de": "Im Hauptsatz wird das Präfix abgetrennt und steht am Ende, sofern kein Modalverb den Infinitiv verlangt.",
          "en": "In a main clause, the separable prefix comes at the end unless a modal requires the infinitive.",
          "vi": "Ở câu chính, tiền tố tách ra và đứng cuối khi không có động từ tình thái yêu cầu dạng nguyên mẫu."
        },
        "source": "legacy-adapted",
        "simple": "Das sieht man doch!",
        "simpleEn": "It’s obvious, isn’t it?",
        "simpleVi": "Nhìn là thấy rõ rồi mà!"
      },
      {
        "tactful": "Das kann ich dir leider nicht sagen.",
        "en": "Unfortunately, I cannot tell you that.",
        "vi": "Tiếc là mình không thể trả lời bạn điều đó.",
        "vocabulary": [
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết",
            "ipa": "ˈzaːɡən",
            "say": "sagen"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là",
            "ipa": "ˈlaɪ̯dɐ",
            "say": "leider",
            "usageHelp": {
              "de": "Leider kommentiert die gesamte Aussage als bedauerlich, nicht die Eigenschaft eines Nomens.",
              "en": "Leider comments on the whole statement as regrettable, rather than describing a noun.",
              "vi": "leider bình luận cả sự việc là đáng tiếc, không nêu đặc điểm của một danh từ nên không chia đuôi tính từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Woher soll ich’s wissen?",
        "simpleEn": "How am I supposed to know?",
        "simpleVi": "Làm sao tôi biết được?"
      },
      {
        "tactful": "Danke für den Hinweis, das war mir bisher nicht bekannt.",
        "en": "Thank you for pointing that out; I did not know that before.",
        "vi": "Cảm ơn bạn đã lưu ý, trước đây mình chưa biết điều đó.",
        "vocabulary": [
          {
            "de": "der Hinweis",
            "type": "noun",
            "en": "tip; piece of information",
            "vi": "lời lưu ý; thông tin gợi ý",
            "plural": "die Hinweise",
            "ipa": "deːɐ̯ ˈhɪnˌvaɪ̯s",
            "say": "der Hinweis"
          },
          {
            "de": "bekannt",
            "type": "adjective",
            "ipa": "bəˈkant",
            "en": "known; familiar",
            "vi": "được biết đến; quen thuộc",
            "say": "bekannt"
          },
          {
            "de": "bisher",
            "type": "adverb",
            "ipa": "bɪsˈheːɐ̯",
            "en": "so far; until now",
            "vi": "cho đến nay; trước đây tính đến lúc này",
            "say": "bisher"
          }
        ],
        "analysis": {
          "pattern": "bisher · jemandem bekannt sein",
          "de": "War ist Präteritum von sein. Mir ist Dativ in jemandem bekannt sein; bekannt ist ein prädikatives Adjektiv ohne Endung. Bisher grenzt den Zeitraum bis zum genannten Zeitpunkt ab.",
          "en": "War is the past tense of sein. Mir is dative in jemandem bekannt sein; bekannt is a predicative adjective without an inflectional ending. Bisher refers to the period up to the point mentioned.",
          "vi": "war là Präteritum của sein. mir ở Dativ trong jemandem bekannt sein; bekannt là tính từ vị ngữ không chia đuôi. bisher chỉ khoảng thời gian tính đến thời điểm đang nhắc tới."
        },
        "source": "legacy-adapted",
        "simple": "Das ist mir neu.",
        "simpleEn": "That’s news to me.",
        "simpleVi": "Chuyện đó giờ tôi mới biết."
      },
      {
        "tactful": "Das überrascht mich wirklich sehr.",
        "en": "That really surprises me a lot.",
        "vi": "Điều đó thật sự khiến mình rất ngạc nhiên.",
        "vocabulary": [
          {
            "de": "überraschen",
            "type": "verb",
            "en": "to surprise",
            "vi": "làm ngạc nhiên",
            "ipa": "yːbɐˈʁaʃn̩",
            "say": "überraschen"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự",
            "ipa": "ˈvɪʁklɪç",
            "say": "wirklich",
            "usageHelp": {
              "de": "Wirklich verstärkt hier die Aussage im Sinn von tatsächlich oder sehr.",
              "en": "Wirklich strengthens the statement here, meaning really or genuinely.",
              "vi": "wirklich nhấn mạnh sự việc là thực sự; không có đuôi theo giống hay cách của danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "legacy-adapted",
        "simple": "Ich glaub’, mein Schwein pfeift!",
        "simpleEn": "I can’t believe my ears!",
        "simpleVi": "Thật không thể tin nổi! (thành ngữ)"
      },
      {
        "tactful": "Einverstanden, so machen wir es.",
        "en": "Agreed; that is how we will do it.",
        "vi": "Thống nhất nhé, chúng ta làm như vậy.",
        "vocabulary": [
          {
            "de": "einverstanden",
            "type": "adjective",
            "en": "in agreement",
            "vi": "đồng ý; nhất trí",
            "ipa": "ˈaɪ̯nfɛɐ̯ˌʃtandn̩",
            "say": "einverstanden"
          },
          {
            "de": "machen",
            "type": "verb",
            "en": "to do; to make",
            "vi": "làm",
            "ipa": "ˈmaxn̩",
            "say": "machen"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "legacy-adapted",
        "simple": "Einverstanden.",
        "simpleEn": "Agreed.",
        "simpleVi": "Đồng ý / Nhất trí."
      },
      {
        "simple": "Okay.",
        "tactful": "Das ist für mich in Ordnung.",
        "vi": "Như vậy ổn với mình.",
        "simpleEn": "Okay.",
        "simpleVi": "Được.",
        "en": "That is all right with me.",
        "vocabulary": [
          {
            "de": "in Ordnung",
            "type": "phrase",
            "en": "all right; in order",
            "vi": "ổn; đúng quy củ",
            "ipa": "ɪn ˈʔɔʁdnʊŋ",
            "say": "in Ordnung"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì",
            "ipa": "zaɪ̯n",
            "say": "sein"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "document"
      },
      {
        "simple": "Das stimmt nicht.",
        "tactful": "Nach meinem Verständnis ist das nicht richtig.",
        "vi": "Theo cách mình hiểu thì điều đó không đúng.",
        "simpleEn": "That is not true.",
        "simpleVi": "Điều đó không đúng.",
        "en": "As I understand it, that is not correct.",
        "vocabulary": [
          {
            "de": "das Verständnis",
            "type": "noun",
            "en": "understanding",
            "vi": "cách hiểu; sự hiểu biết",
            "plural": "kein gebräuchlicher Plural in dieser Bedeutung",
            "ipa": "das fɛɐ̯ˈʃtɛntnɪs",
            "say": "das Verständnis"
          },
          {
            "de": "richtig",
            "type": "adjective",
            "en": "correct; right",
            "vi": "đúng",
            "ipa": "ˈʁɪçtɪç",
            "say": "richtig"
          },
          {
            "de": "nach meinem Verständnis",
            "type": "phrase",
            "ipa": "naːx ˈmaɪ̯nəm fɛɐ̯ˈʃtɛntnɪs",
            "en": "as I understand it",
            "vi": "theo cách tôi hiểu",
            "say": "nach meinem Verständnis"
          }
        ],
        "analysis": {
          "pattern": "nach + Dativ · Vorfeld",
          "de": "Nach verlangt hier Dativ: meinem Verständnis. Die ganze Präpositionalgruppe besetzt das Vorfeld; ist bleibt an zweiter Satzgliedposition.",
          "en": "Nach takes dative here: meinem Verständnis. The entire prepositional phrase occupies the first constituent position; ist remains second.",
          "vi": "nach ở đây dùng Dativ: meinem Verständnis. Cả cụm giới từ chiếm vị trí thành phần thứ nhất; ist vẫn ở vị trí thứ hai."
        },
        "source": "document"
      },
      {
        "simple": "Du hast unrecht.",
        "tactful": "Ich komme in diesem Punkt zu einem anderen Schluss.",
        "vi": "Ở điểm này, mình đi đến một kết luận khác.",
        "simpleEn": "You are wrong.",
        "simpleVi": "Bạn sai rồi.",
        "en": "I reach a different conclusion on this point.",
        "vocabulary": [
          {
            "de": "der Punkt",
            "type": "noun",
            "en": "point",
            "vi": "điểm; ý",
            "plural": "die Punkte",
            "ipa": "deːɐ̯ pʊŋkt",
            "say": "der Punkt"
          },
          {
            "de": "der Schluss",
            "type": "noun",
            "en": "end; conclusion",
            "vi": "phần kết; kết thúc",
            "plural": "die Schlüsse",
            "ipa": "deːɐ̯ ʃlʊs",
            "say": "der Schluss"
          }
        ],
        "analysis": {
          "pattern": "zu einem Schluss kommen · zu + Dativ",
          "de": "Die feste Verbindung heißt zu einem Schluss kommen. Zu verlangt Dativ; nach einem steht anderen mit -en.",
          "en": "The fixed expression is zu einem Schluss kommen. Zu takes dative; after einem, anderen has the ending -en.",
          "vi": "Cụm cố định là zu einem Schluss kommen. zu dùng Dativ; sau einem, anderen nhận đuôi -en."
        },
        "source": "document"
      },
      {
        "simple": "Das ist zu spät.",
        "simpleEn": "That is too late.",
        "simpleVi": "Như vậy muộn quá.",
        "tactful": "Ich würde sagen, das ist etwas zu spät.",
        "en": "I would say that is a little too late.",
        "vi": "Theo tôi thì như vậy hơi muộn.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "spät",
            "type": "adjective",
            "en": "late",
            "vi": "muộn",
            "ipa": "ʃpɛːt",
            "say": "spät"
          },
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết",
            "ipa": "ˈzaːɡən",
            "say": "sagen"
          },
          {
            "de": "etwas",
            "type": "adverb",
            "ipa": "ˈɛtvas",
            "en": "a little; somewhat",
            "vi": "một chút; hơi",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende. Etwas ist hier ein Gradadverb im Sinn von ein wenig.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end. Etwas is a degree adverb here, meaning a little.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối. etwas ở đây là trạng từ chỉ mức độ: một chút, hơi."
        }
      },
      {
        "simple": "Da haben Sie unrecht.",
        "simpleEn": "You are wrong about that.",
        "simpleVi": "Anh/chị sai ở điểm đó.",
        "tactful": "In diesem Punkt sehe ich das anders.",
        "en": "I see this point differently.",
        "vi": "Ở điểm này, tôi nhìn nhận khác với anh/chị.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "der Punkt",
            "type": "noun",
            "en": "point",
            "vi": "điểm; ý",
            "plural": "die Punkte",
            "ipa": "deːɐ̯ pʊŋkt",
            "say": "der Punkt"
          },
          {
            "de": "anders",
            "type": "adverb",
            "en": "differently",
            "vi": "theo cách khác",
            "ipa": "ˈandɐs",
            "say": "anders",
            "usageHelp": {
              "de": "Anders heißt hier auf eine andere Weise. Es wird nicht zu andere oder anderen dekliniert.",
              "en": "Anders means in a different way here and is not declined to andere or anderen.",
              "vi": "anders ở đây nghĩa là theo cách khác. Không đổi nó thành andere/anderen; đó là cách dùng của từ khác, không phải biến cách trạng từ anders."
            }
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        }
      },
      {
        "simple": "Ja, genau.",
        "simpleEn": "Yes, exactly.",
        "simpleVi": "Đúng rồi.",
        "tactful": "Da bin ich ganz deiner Meinung.",
        "en": "I completely agree with you on that.",
        "vi": "Ở điểm đó, mình hoàn toàn đồng ý với bạn.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "die Meinung",
            "type": "noun",
            "en": "opinion",
            "vi": "ý kiến; quan điểm",
            "plural": "die Meinungen",
            "ipa": "diː ˈmaɪ̯nʊŋ",
            "say": "die Meinung"
          },
          {
            "de": "ganz",
            "type": "adverb",
            "en": "completely; entirely",
            "vi": "hoàn toàn",
            "ipa": "ɡants",
            "say": "ganz"
          }
        ],
        "analysis": {
          "pattern": "deiner Meinung sein · Dativ",
          "de": "Deiner Meinung ist hier Dativ Singular; die Wendung lautet jemandes Meinung sein. Deiner richtet sich nach dem femininen Nomen Meinung.",
          "en": "Deiner Meinung is dative singular here; the expression is jemandes Meinung sein. Deiner agrees with Meinung.",
          "vi": "deiner Meinung là Dativ số ít; deiner hòa hợp với danh từ giống cái Meinung. Cụm jemandes Meinung sein diễn đạt cùng quan điểm với ai."
        }
      },
      {
        "simple": "Das ist dein Fehler.",
        "tactful": "Mir ist aufgefallen, dass dir hier ein Fehler unterlaufen ist.",
        "vi": "Mình nhận thấy bạn đã mắc một lỗi ở đây.",
        "simpleEn": "That is your fault.",
        "simpleVi": "Đó là lỗi của bạn.",
        "en": "I noticed that you made a mistake here.",
        "vocabulary": [
          {
            "de": "auffallen",
            "type": "verb",
            "en": "to notice; to stand out",
            "vi": "được chú ý; khiến ai nhận thấy",
            "ipa": "ˈaʊ̯fˌfalən",
            "say": "auffallen"
          },
          {
            "de": "der Fehler",
            "type": "noun",
            "en": "mistake; error",
            "vi": "lỗi",
            "plural": "die Fehler",
            "ipa": "deːɐ̯ ˈfeːlɐ",
            "say": "der Fehler"
          },
          {
            "de": "unterlaufen",
            "type": "verb",
            "ipa": "ʊntɐˈlaʊ̯fn̩",
            "en": "to occur unintentionally (of a mistake)",
            "vi": "xảy ra do sơ suất, thường nói về lỗi",
            "say": "unterlaufen"
          }
        ],
        "analysis": {
          "pattern": "jemandem auffallen · jemandem unterlaufen · Perfekt mit sein",
          "de": "Mir ist Dativ zu auffallen; dir ist Dativ zu unterlaufen. Ein Fehler ist das Subjekt im dass-Satz. Beide Verben bilden hier das Perfekt mit sein; unterlaufen ist ein Partizip ohne ge-.",
          "en": "Mir is dative with auffallen; dir is dative with unterlaufen. Ein Fehler is the subject of the dass-clause. Both verbs take sein in the perfect here; unterlaufen has no ge- in the participle.",
          "vi": "mir ở Dativ với auffallen; dir ở Dativ với unterlaufen. ein Fehler là chủ ngữ của mệnh đề dass. Cả hai động từ dùng sein ở Perfekt trong câu này; Partizip unterlaufen không thêm ge-."
        },
        "source": "document"
      },
      {
        "simple": "Das nervt.",
        "tactful": "Das stört mich, und ich würde gerne darüber sprechen.",
        "vi": "Điều đó khiến mình khó chịu và mình muốn trao đổi về nó.",
        "simpleEn": "That is annoying.",
        "simpleVi": "Thật bực mình.",
        "en": "That bothers me, and I would like to talk about it.",
        "vocabulary": [
          {
            "de": "stören",
            "type": "verb",
            "en": "to disturb; to bother",
            "vi": "làm phiền",
            "ipa": "ˈʃtøːʁən",
            "say": "stören"
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói",
            "ipa": "ˈʃpʁɛçn̩",
            "say": "sprechen"
          },
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó",
            "ipa": "daˈʁyːbɐ",
            "say": "darüber",
            "usageHelp": {
              "de": "Darüber ist da + über und verweist auf das Thema oder den Anlass.",
              "en": "Darüber is da plus über and refers to a topic or cause.",
              "vi": "darüber = da + über, chỉ chủ đề hoặc sự việc đã nhắc đến, ví dụ sprechen über hoặc sich freuen über."
            }
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
        },
        "source": "document"
      },
      {
        "simple": "Vergiss es.",
        "tactful": "Lass uns das vorerst nicht weiterverfolgen.",
        "vi": "Trước mắt chúng ta đừng tiếp tục theo đuổi việc đó nữa nhé.",
        "simpleEn": "Forget it.",
        "simpleVi": "Bỏ đi.",
        "en": "Let us not pursue that any further for now.",
        "vocabulary": [
          {
            "de": "vorerst",
            "type": "adverb",
            "en": "for now",
            "vi": "trước mắt",
            "ipa": "foːɐ̯ˈʔeːɐ̯st",
            "say": "vorerst",
            "usageHelp": {
              "de": "Vorerst begrenzt die Aussage auf die Zeit bis zu einer späteren Entscheidung.",
              "en": "Vorerst limits the statement to the period before a later decision.",
              "vi": "vorerst chỉ thời gian trước mắt, tạm thời, trước khi có quyết định tiếp theo."
            }
          },
          {
            "de": "weiterverfolgen",
            "type": "verb",
            "en": "to pursue further",
            "vi": "tiếp tục theo đuổi",
            "ipa": "ˈvaɪ̯tɐfɛɐ̯ˌfɔlɡən",
            "say": "weiterverfolgen"
          }
        ],
        "analysis": {
          "pattern": "lass uns + Infinitiv",
          "de": "Lass ist Imperativ von lassen; das Vollverb bleibt im Infinitiv.",
          "en": "Lass is the imperative of lassen; the main verb remains infinitive.",
          "vi": "Lass là mệnh lệnh của lassen; động từ chính giữ nguyên mẫu sau uns."
        },
        "source": "document"
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 3,
    "de": "Ausrufe & starke Reaktionen",
    "en": "Exclamations & strong reactions",
    "vi": "Cảm thán và phản ứng mạnh",
    "intro": {
      "de": "Bei Überraschung, Ärger oder Begeisterung. Betonung und Mimik können die Aussage sogar umkehren.",
      "en": "For surprise, irritation, or excitement. Emphasis and facial expression can even reverse the meaning.",
      "vi": "Khi ngạc nhiên, bực mình hoặc hào hứng. Nhấn giọng và nét mặt thậm chí có thể làm đổi ý câu nói."
    },
    "rows": [
      {
        "tactful": "Das ist wirklich ärgerlich.",
        "en": "That is really annoying.",
        "vi": "Chuyện đó thật sự gây bực mình.",
        "vocabulary": [
          {
            "de": "ärgerlich",
            "type": "adjective",
            "en": "annoying",
            "vi": "gây bực mình",
            "ipa": "ˈʔɛʁɡɐlɪç",
            "say": "ärgerlich"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự",
            "ipa": "ˈvɪʁklɪç",
            "say": "wirklich",
            "usageHelp": {
              "de": "Wirklich verstärkt hier die Aussage im Sinn von tatsächlich oder sehr.",
              "en": "Wirklich strengthens the statement here, meaning really or genuinely.",
              "vi": "wirklich nhấn mạnh sự việc là thực sự; không có đuôi theo giống hay cách của danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "So ein Mist!",
        "simpleEn": "What a mess! / Damn!",
        "simpleVi": "Chết tiệt / Chán thật!"
      },
      {
        "tactful": "Darüber freue ich mich wirklich sehr.",
        "en": "I am really very pleased about that.",
        "vi": "Mình thật sự rất vui về điều đó.",
        "vocabulary": [
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng",
            "ipa": "zɪç ˈfʁɔʏ̯ən",
            "say": "sich freuen"
          },
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó",
            "ipa": "daˈʁyːbɐ",
            "say": "darüber",
            "usageHelp": {
              "de": "Darüber ist da + über und verweist auf das Thema oder den Anlass.",
              "en": "Darüber is da plus über and refers to a topic or cause.",
              "vi": "darüber = da + über, chỉ chủ đề hoặc sự việc đã nhắc đến, ví dụ sprechen über hoặc sich freuen über."
            }
          }
        ],
        "analysis": {
          "pattern": "Reflexivpronomen",
          "de": "Das Reflexivpronomen richtet sich nach dem Subjekt und der Verbverbindung, zum Beispiel ich → mich.",
          "en": "The reflexive pronoun depends on the subject and verb expression, for example ich → mich.",
          "vi": "Đại từ phản thân phụ thuộc chủ ngữ và cấu trúc động từ, ví dụ ich → mich."
        },
        "source": "legacy-adapted",
        "simple": "Das ist ja toll!",
        "simpleEn": "That’s great! (can be sarcastic)",
        "simpleVi": "Tuyệt quá! (có thể mỉa mai tùy giọng)"
      },
      {
        "tactful": "Das ist dir wirklich gut gelungen.",
        "en": "You did that really well.",
        "vi": "Bạn thực sự làm tốt việc đó.",
        "vocabulary": [
          {
            "de": "gelingen",
            "type": "verb",
            "en": "to turn out well; to succeed",
            "vi": "thành công; có kết quả tốt",
            "ipa": "ɡəˈlɪŋən",
            "say": "gelingen"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự",
            "ipa": "ˈvɪʁklɪç",
            "say": "wirklich",
            "usageHelp": {
              "de": "Wirklich verstärkt hier die Aussage im Sinn von tatsächlich oder sehr.",
              "en": "Wirklich strengthens the statement here, meaning really or genuinely.",
              "vi": "wirklich nhấn mạnh sự việc là thực sự; không có đuôi theo giống hay cách của danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "legacy-adapted",
        "simple": "Nicht schlecht!",
        "simpleEn": "Not bad!",
        "simpleVi": "Khá đấy / Không tệ!"
      },
      {
        "tactful": "Das erscheint mir nicht nachvollziehbar.",
        "en": "That does not seem understandable to me.",
        "vi": "Mình thấy điều đó chưa hợp lý hoặc chưa thể hiểu được.",
        "vocabulary": [
          {
            "de": "erscheinen",
            "type": "verb",
            "en": "to seem; to appear",
            "vi": "có vẻ; xuất hiện",
            "ipa": "ɛɐ̯ˈʃaɪ̯nən",
            "say": "erscheinen"
          },
          {
            "de": "nachvollziehbar",
            "type": "adjective",
            "en": "understandable; comprehensible",
            "vi": "có thể hiểu được",
            "ipa": "ˈnaːxfɔlˌtsiːbaːɐ̯",
            "say": "nachvollziehbar"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "So ein Quatsch!",
        "simpleEn": "What nonsense!",
        "simpleVi": "Vớ vẩn thật!"
      },
      {
        "tactful": "Diese Entwicklung überrascht mich wirklich.",
        "en": "This development really surprises me.",
        "vi": "Diễn biến này thật sự khiến mình ngạc nhiên.",
        "vocabulary": [
          {
            "de": "die Entwicklung",
            "type": "noun",
            "en": "development",
            "vi": "diễn biến",
            "plural": "die Entwicklungen",
            "ipa": "diː ɛntˈvɪklʊŋ",
            "say": "die Entwicklung"
          },
          {
            "de": "überraschen",
            "type": "verb",
            "en": "to surprise",
            "vi": "làm ngạc nhiên",
            "ipa": "yːbɐˈʁaʃn̩",
            "say": "überraschen"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "legacy-adapted",
        "simple": "Das ist ja irre!",
        "simpleEn": "That’s crazy!",
        "simpleVi": "Khó tin thật / Ghê thật!"
      },
      {
        "tactful": "Dann sind wir uns darüber einig.",
        "en": "Then we are agreed on that.",
        "vi": "Vậy chúng ta thống nhất về điều đó nhé.",
        "vocabulary": [
          {
            "de": "sich einig sein",
            "type": "phrase",
            "en": "to be in agreement",
            "vi": "thống nhất với nhau",
            "ipa": "zɪç ˈaɪ̯nɪç zaɪ̯n",
            "say": "sich einig sein"
          },
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó",
            "ipa": "daˈʁyːbɐ",
            "say": "darüber",
            "usageHelp": {
              "de": "Darüber ist da + über und verweist auf das Thema oder den Anlass.",
              "en": "Darüber is da plus über and refers to a topic or cause.",
              "vi": "darüber = da + über, chỉ chủ đề hoặc sự việc đã nhắc đến, ví dụ sprechen über hoặc sich freuen über."
            }
          }
        ],
        "analysis": {
          "pattern": "sich einig sein über + Akkusativ",
          "de": "Uns gehört zu sich einig sein; darüber verweist auf das Thema der Einigung.",
          "en": "Uns belongs to sich einig sein; darüber refers to the topic of agreement.",
          "vi": "uns thuộc cụm sich einig sein; darüber chỉ vấn đề hai bên thống nhất."
        },
        "source": "legacy-adapted",
        "simple": "Abgemacht!",
        "simpleEn": "Deal!",
        "simpleVi": "Chốt nhé / Quyết định vậy nhé!"
      },
      {
        "tactful": "Das finde ich nicht akzeptabel.",
        "en": "I do not find that acceptable.",
        "vi": "Mình thấy điều đó không thể chấp nhận.",
        "vocabulary": [
          {
            "de": "akzeptabel",
            "type": "adjective",
            "en": "acceptable",
            "vi": "chấp nhận được",
            "ipa": "aktsɛpˈtaːbl̩",
            "say": "akzeptabel"
          },
          {
            "de": "finden",
            "type": "verb",
            "en": "to find; to consider",
            "vi": "thấy; cho là",
            "ipa": "ˈfɪndn̩",
            "say": "finden"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Das ist die Höhe!",
        "simpleEn": "That’s outrageous!",
        "simpleVi": "Thật quá quắt / Quá đáng hết sức!"
      },
      {
        "tactful": "Für mich ist jetzt eine Grenze erreicht.",
        "en": "For me, a limit has now been reached.",
        "vi": "Với mình thì bây giờ đã tới giới hạn rồi.",
        "vocabulary": [
          {
            "de": "die Grenze",
            "type": "noun",
            "en": "boundary; limit",
            "vi": "ranh giới; giới hạn",
            "plural": "die Grenzen",
            "ipa": "diː ˈɡʁɛntsə",
            "say": "die Grenze"
          },
          {
            "de": "erreichen",
            "type": "verb",
            "en": "to reach",
            "vi": "đạt tới",
            "ipa": "ɛɐ̯ˈʁaɪ̯çn̩",
            "say": "erreichen"
          }
        ],
        "analysis": {
          "pattern": "sein + Partizip II",
          "de": "Sein + erreicht beschreibt hier den erreichten Zustand, nicht den Vorgang.",
          "en": "Sein plus erreicht describes the resulting state rather than the process here.",
          "vi": "sein + erreicht mô tả trạng thái đã đạt tới, không nhấn vào quá trình."
        },
        "source": "legacy-adapted",
        "simple": "Es reicht!",
        "simpleEn": "That’s enough!",
        "simpleVi": "Đủ rồi đấy!"
      },
      {
        "tactful": "Das war für mich wirklich zu viel.",
        "en": "That really was too much for me.",
        "vi": "Việc đó thực sự đã quá sức với mình.",
        "vocabulary": [
          {
            "de": "zu viel",
            "type": "phrase",
            "en": "too much",
            "vi": "quá nhiều; quá mức",
            "ipa": "tsuː fiːl",
            "say": "zu viel"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì",
            "ipa": "zaɪ̯n",
            "say": "sein"
          }
        ],
        "analysis": {
          "pattern": "Präteritum",
          "de": "War und hatte sind Präteritumformen von sein und haben.",
          "en": "War and hatte are past-tense forms of sein and haben.",
          "vi": "war và hatte là dạng Präteritum của sein và haben."
        },
        "source": "legacy-adapted",
        "simple": "Das hat mir gereicht!",
        "simpleEn": "I’ve had enough of that!",
        "simpleVi": "Thế là tôi đủ ngán rồi."
      },
      {
        "tactful": "Meinst du das tatsächlich ernst?",
        "en": "Do you really mean that seriously?",
        "vi": "Bạn thực sự nói nghiêm túc vậy sao?",
        "vocabulary": [
          {
            "de": "meinen",
            "type": "verb",
            "en": "to mean; to think",
            "vi": "có ý nói; cho rằng",
            "ipa": "ˈmaɪ̯nən",
            "say": "meinen"
          },
          {
            "de": "tatsächlich",
            "type": "adverb",
            "en": "really; actually",
            "vi": "thực sự",
            "ipa": "ˈtaːtˌzɛçlɪç",
            "say": "tatsächlich"
          },
          {
            "de": "ernst",
            "type": "adjective",
            "ipa": "ɛʁnst",
            "en": "serious; seriously",
            "vi": "nghiêm túc",
            "say": "ernst"
          }
        ],
        "analysis": {
          "pattern": "Ja-/Nein-Frage",
          "de": "Das konjugierte Verb steht vor dem Subjekt.",
          "en": "The conjugated verb precedes the subject.",
          "vi": "Động từ chia đứng trước chủ ngữ trong câu hỏi có/không."
        },
        "source": "legacy-adapted",
        "simple": "Das ist nicht dein Ernst!",
        "simpleEn": "You can’t be serious!",
        "simpleVi": "Bạn không nói thật đấy chứ!"
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 4,
    "de": "Pläne & Grenzen",
    "en": "Plans & boundaries",
    "vi": "Kế hoạch và ranh giới",
    "intro": {
      "de": "Beim Verabreden, Grenzen setzen und Organisieren. Unter Freunden ist du normal; im formellen Kontakt lieber Sie.",
      "en": "When making plans, setting boundaries, or organising something. Friends usually use du; in formal situations, prefer Sie.",
      "vi": "Khi hẹn gặp, đặt giới hạn hoặc sắp xếp công việc. Bạn bè thường dùng du; trong tình huống trang trọng nên dùng Sie."
    },
    "rows": [
      {
        "tactful": "Ich nehme gerne daran teil.",
        "en": "I would be happy to take part in that.",
        "vi": "Mình sẵn lòng tham gia việc đó.",
        "vocabulary": [
          {
            "de": "teilnehmen",
            "type": "verb",
            "en": "to participate",
            "vi": "tham gia",
            "ipa": "ˈtaɪ̯lˌneːmən",
            "say": "teilnehmen"
          },
          {
            "de": "daran",
            "type": "adverb",
            "en": "in it; in that",
            "vi": "vào việc đó",
            "ipa": "daˈʁan",
            "say": "daran",
            "usageHelp": {
              "de": "Daran ist da + an in teilnehmen an.",
              "en": "Daran is da plus an in teilnehmen an.",
              "vi": "daran = da + an trong teilnehmen an: tham gia vào việc đó."
            }
          }
        ],
        "analysis": {
          "pattern": "teilnehmen an + Dativ",
          "de": "Teilnehmen ist trennbar: nehme … teil. Daran ersetzt an + die erwähnte Sache.",
          "en": "Teilnehmen is separable: nehme … teil. Daran replaces an plus the previously mentioned matter.",
          "vi": "teilnehmen là động từ tách: nehme … teil. Daran thay cho an + sự việc đã nhắc tới; teilnehmen an đi với Dativ."
        },
        "source": "legacy-adapted",
        "simple": "Ich bin dabei.",
        "simpleEn": "I’m in.",
        "simpleVi": "Tôi tham gia / Cho tôi tham gia với."
      },
      {
        "tactful": "Das hängt von den jeweiligen Umständen ab.",
        "en": "That depends on the particular circumstances.",
        "vi": "Điều đó phụ thuộc vào hoàn cảnh cụ thể.",
        "vocabulary": [
          {
            "de": "abhängen von",
            "type": "verb",
            "en": "to depend on",
            "vi": "phụ thuộc vào",
            "ipa": "ˈapˌhɛŋən fɔn",
            "say": "abhängen von"
          },
          {
            "de": "der Umstand",
            "type": "noun",
            "en": "circumstance",
            "vi": "hoàn cảnh; điều kiện",
            "plural": "die Umstände",
            "ipa": "deːɐ̯ ˈʊmʃtant",
            "say": "der Umstand",
            "formHelp": {
              "base": "der Umstand",
              "surface": "Umständen",
              "example": "von den jeweiligen Umständen",
              "de": "Der Plural ist Umstände. Nach von steht Dativ Plural: Umständen mit zusätzlichem -n.",
              "en": "The plural is Umstände. After von, dative plural adds -n: Umständen.",
              "vi": "Số nhiều là Umstände. Sau von phải dùng Dativ (cách 3) số nhiều nên thêm -n: Umständen. Đây là thay đổi của danh từ."
            }
          },
          {
            "de": "jeweilig",
            "type": "adjective",
            "ipa": "ˈjeːvaɪ̯lɪç",
            "en": "respective; particular",
            "vi": "tương ứng; cụ thể trong từng trường hợp",
            "say": "jeweilig",
            "formHelp": {
              "base": "jeweilig",
              "surface": "jeweiligen",
              "example": "von den jeweiligen Umständen",
              "de": "Von verlangt Dativ. Nach den im Dativ Plural erhält das Adjektiv -en; Umstände bekommt zusätzlich das Dativ-Plural-n.",
              "en": "Von takes dative. After den in dative plural, the adjective takes -en; Umstände also adds the dative-plural -n.",
              "vi": "von dùng Dativ (cách 3). Sau den ở Dativ số nhiều, tính từ nhận -en; danh từ Umstände thêm -n thành Umständen. Hai đuôi này thuộc hai từ khác nhau."
            }
          }
        ],
        "analysis": {
          "pattern": "abhängen von + Dativ · jeweilig → jeweiligen",
          "de": "Abhängen ist trennbar: hängt … ab. Von verlangt Dativ: den jeweiligen Umständen. Das Adjektiv hat -en, und Umstände erhält im Dativ Plural ein zusätzliches -n.",
          "en": "Abhängen is separable: hängt … ab. Von takes dative: den jeweiligen Umständen. The adjective ends in -en, and Umstände adds -n in dative plural.",
          "vi": "abhängen là động từ tách: hängt … ab. von dùng Dativ: den jeweiligen Umständen. Tính từ nhận đuôi -en; Umstände thêm -n ở Dativ số nhiều."
        },
        "source": "legacy-adapted",
        "simple": "Es kommt darauf an.",
        "simpleEn": "It depends.",
        "simpleVi": "Còn tùy."
      },
      {
        "tactful": "Könntest du mir den Zusammenhang bitte genauer erklären?",
        "en": "Could you explain the context more clearly, please?",
        "vi": "Bạn giải thích ngữ cảnh rõ hơn giúp mình được không?",
        "vocabulary": [
          {
            "de": "der Zusammenhang",
            "type": "noun",
            "en": "connection; context",
            "vi": "mối liên hệ; ngữ cảnh",
            "plural": "die Zusammenhänge",
            "ipa": "deːɐ̯ tsuˈzamənˌhaŋ",
            "say": "der Zusammenhang"
          },
          {
            "de": "erklären",
            "type": "verb",
            "en": "to explain",
            "vi": "giải thích",
            "ipa": "ɛɐ̯ˈklɛːʁən",
            "say": "erklären"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "legacy-adapted",
        "simple": "Wovon redest du?",
        "simpleEn": "What are you talking about?",
        "simpleVi": "Bạn đang nói chuyện gì vậy?"
      },
      {
        "tactful": "Lass uns das so stehen lassen.",
        "en": "Let us leave it at that.",
        "vi": "Chúng ta cứ để như vậy nhé.",
        "vocabulary": [
          {
            "de": "stehen lassen",
            "type": "phrase",
            "en": "to leave as it is",
            "vi": "để nguyên như vậy",
            "ipa": "ˈʃteːən ˈlasn̩",
            "say": "stehen lassen"
          },
          {
            "de": "lassen",
            "type": "verb",
            "en": "to let; to leave",
            "vi": "để; cho phép",
            "ipa": "ˈlasn̩",
            "say": "lassen"
          }
        ],
        "analysis": {
          "pattern": "lass uns + Infinitiv",
          "de": "Lass ist Imperativ von lassen; das Vollverb bleibt im Infinitiv.",
          "en": "Lass is the imperative of lassen; the main verb remains infinitive.",
          "vi": "Lass là mệnh lệnh của lassen; động từ chính giữ nguyên mẫu sau uns."
        },
        "source": "legacy-adapted",
        "simple": "Was soll’s!",
        "simpleEn": "Whatever!",
        "simpleVi": "Thôi kệ / Kệ vậy!"
      },
      {
        "tactful": "Damit müssen wir uns nicht sofort befassen.",
        "en": "We do not need to deal with that immediately.",
        "vi": "Chúng ta không cần xử lý việc đó ngay lập tức.",
        "vocabulary": [
          {
            "de": "sich befassen mit",
            "type": "verb",
            "en": "to deal with",
            "vi": "xử lý; xem xét",
            "ipa": "zɪç bəˈfasn̩ mɪt",
            "say": "sich befassen mit"
          },
          {
            "de": "sofort",
            "type": "adverb",
            "en": "immediately",
            "vi": "ngay lập tức",
            "ipa": "zoˈfɔʁt",
            "say": "sofort",
            "usageHelp": {
              "de": "Sofort beantwortet hier die Frage wann: ohne Verzögerung.",
              "en": "Sofort answers when: without delay.",
              "vi": "sofort trả lời câu hỏi khi nào: ngay lập tức, không trì hoãn."
            }
          },
          {
            "de": "damit",
            "type": "adverb",
            "ipa": "daˈmɪt",
            "en": "with that; with it",
            "vi": "với việc đó; bằng điều đó",
            "say": "damit",
            "usageHelp": {
              "de": "Damit ist hier da + mit und ersetzt eine Sache nach mit; es ist in diesen Beispielen nicht die Konjunktion des Zwecks.",
              "en": "Damit is da plus mit here, replacing a matter following mit; it is not the purpose conjunction in these examples.",
              "vi": "damit ở các câu này là da + mit, thay cho mit + việc đó; không phải liên từ để chỉ mục đích là để."
            }
          }
        ],
        "analysis": {
          "pattern": "sich befassen mit + Dativ → damit",
          "de": "Uns gehört zu sich befassen. Damit ersetzt mit + das Thema. Nach müssen steht befassen als Infinitiv am Ende; es folgt kein zu.",
          "en": "Uns belongs to sich befassen. Damit replaces mit plus the topic. After müssen, befassen stays infinitive at the end without zu.",
          "vi": "uns thuộc cụm sich befassen. damit thay cho mit + vấn đề đang nói. Sau müssen, befassen ở nguyên mẫu cuối câu, không thêm zu."
        },
        "source": "legacy-adapted",
        "simple": "Das hat Zeit.",
        "simpleEn": "That can wait.",
        "simpleVi": "Chuyện đó để sau cũng được."
      },
      {
        "simple": "Kein Problem.",
        "tactful": "Sehr gerne.",
        "vi": "Rất sẵn lòng.",
        "simpleEn": "No problem.",
        "simpleVi": "Không có gì.",
        "en": "My pleasure.",
        "vocabulary": [
          {
            "de": "gern",
            "type": "adverb",
            "en": "gladly; with pleasure",
            "vi": "sẵn lòng; thích",
            "ipa": "ɡɛʁn",
            "say": "gern",
            "usageHelp": {
              "de": "Gern und gerne sind gleichbedeutende Varianten; -e in gerne ist hier keine Adjektivendung.",
              "en": "Gern and gerne are equivalent variants; the -e in gerne is not an adjective ending here.",
              "vi": "gern và gerne là hai cách dùng cùng nghĩa. Chữ -e trong gerne không phải đuôi biến cách của tính từ."
            },
            "formHelp": {
              "base": "gern",
              "surface": "gerne",
              "de": "Gern und gerne sind gleichbedeutende Varianten. Das -e ist hier keine Deklinationsendung.",
              "en": "Gern and gerne are equivalent variants. The -e is not a declension ending here.",
              "vi": "gern và gerne là hai cách dùng tương đương. Chữ -e này không phải đuôi biến cách."
            }
          },
          {
            "de": "sehr",
            "type": "adverb",
            "en": "very; very much",
            "vi": "rất",
            "ipa": "zeːɐ̯",
            "say": "sehr"
          }
        ],
        "analysis": {
          "pattern": "Verkürzter Satz",
          "de": "Diese feste Wendung kann ohne konjugiertes Verb als vollständiger Gesprächsbeitrag stehen.",
          "en": "This fixed expression can function as a complete contribution without a conjugated verb.",
          "vi": "Cụm cố định này có thể dùng độc lập trong hội thoại dù không có động từ chia."
        },
        "source": "document"
      },
      {
        "tactful": "Ich möchte jetzt gerne einen Moment allein sein.",
        "en": "I would like a moment to myself now.",
        "vi": "Bây giờ mình muốn ở một mình một lát.",
        "vocabulary": [
          {
            "de": "allein",
            "type": "adjective",
            "en": "alone",
            "vi": "một mình",
            "ipa": "aˈlaɪ̯n",
            "say": "allein"
          },
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente",
            "ipa": "deːɐ̯ moˈmɛnt",
            "say": "der Moment"
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Lass mich in Ruhe!",
        "simpleEn": "Leave me alone!",
        "simpleVi": "Để tôi yên!"
      },
      {
        "tactful": "Ich wäre jetzt an der Reihe.",
        "en": "It would be my turn now.",
        "vi": "Bây giờ đến lượt mình rồi.",
        "vocabulary": [
          {
            "de": "an der Reihe sein",
            "type": "phrase",
            "en": "to have one's turn",
            "vi": "đến lượt",
            "ipa": "an deːɐ̯ ˈʁaɪ̯ə zaɪ̯n",
            "say": "an der Reihe sein"
          },
          {
            "de": "jetzt",
            "type": "adverb",
            "en": "now",
            "vi": "bây giờ",
            "ipa": "jɛtst",
            "say": "jetzt",
            "usageHelp": {
              "de": "Jetzt beantwortet die Frage wann: im gegenwärtigen Moment.",
              "en": "Jetzt answers when: at the present moment.",
              "vi": "jetzt trả lời khi nào: bây giờ, ở thời điểm hiện tại."
            }
          }
        ],
        "analysis": {
          "pattern": "wäre + an der Reihe",
          "de": "Wäre ist Konjunktiv II von sein; an der Reihe sein ist eine feste Verbindung.",
          "en": "Wäre is subjunctive II of sein; an der Reihe sein is a fixed expression.",
          "vi": "wäre là Konjunktiv II của sein; an der Reihe sein là cụm cố định nghĩa là đến lượt."
        },
        "source": "legacy-adapted",
        "simple": "Ich bin dran.",
        "simpleEn": "It’s my turn.",
        "simpleVi": "Đến lượt tôi."
      },
      {
        "tactful": "Vielen Dank, ich habe verstanden.",
        "en": "Thank you; I have understood.",
        "vi": "Cảm ơn, mình đã hiểu.",
        "vocabulary": [
          {
            "de": "verstehen",
            "type": "verb",
            "en": "to understand",
            "vi": "hiểu",
            "ipa": "fɛɐ̯ˈʃteːən",
            "say": "verstehen"
          },
          {
            "de": "der Dank",
            "type": "noun",
            "en": "thanks; gratitude",
            "vi": "lời cảm ơn",
            "plural": "kein gebräuchlicher Plural in dieser Bedeutung",
            "ipa": "deːɐ̯ daŋk",
            "say": "der Dank"
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "legacy-adapted",
        "simple": "Alles klar.",
        "simpleEn": "All right. / Got it.",
        "simpleVi": "Rõ rồi / Hiểu rồi / Được rồi."
      },
      {
        "tactful": "Ich sehe noch nicht, wie uns das unserem Ziel näherbringt.",
        "en": "I do not yet see how that brings us closer to our goal.",
        "vi": "Mình chưa thấy việc đó giúp chúng ta tiến gần mục tiêu thế nào.",
        "vocabulary": [
          {
            "de": "das Ziel",
            "type": "noun",
            "en": "goal",
            "vi": "mục tiêu",
            "plural": "die Ziele",
            "ipa": "das tsiːl",
            "say": "das Ziel"
          },
          {
            "de": "sehen",
            "type": "verb",
            "en": "to see",
            "vi": "nhìn; nhận thấy",
            "ipa": "ˈzeːən",
            "say": "sehen"
          },
          {
            "de": "noch nicht",
            "type": "phrase",
            "ipa": "nɔx nɪçt",
            "en": "not yet",
            "vi": "chưa",
            "say": "noch nicht"
          }
        ],
        "analysis": {
          "pattern": "noch nicht · jemanden einer Sache näherbringen",
          "de": "Noch nicht verneint bis zum gegenwärtigen Zeitpunkt. Uns ist Akkusativ, unserem Ziel ist Dativ; das ist das Subjekt. Näherbringt steht am Ende der indirekten Frage mit wie.",
          "en": "Noch nicht means not up to the present time. Uns is accusative, unserem Ziel is dative, and das is the subject. Näherbringt ends the indirect question introduced by wie.",
          "vi": "noch nicht nghĩa là chưa tính đến hiện tại. uns ở Akkusativ; unserem Ziel ở Dativ; das là chủ ngữ. näherbringt đứng cuối câu hỏi gián tiếp mở đầu bằng wie."
        },
        "source": "legacy-adapted",
        "simple": "Das hat keinen Sinn.",
        "simpleEn": "That makes no sense.",
        "simpleVi": "Làm vậy chẳng có ích gì."
      },
      {
        "simple": "Nein.",
        "tactful": "Danke, aber das möchte ich nicht.",
        "vi": "Cảm ơn, nhưng mình không muốn như vậy.",
        "simpleEn": "No.",
        "simpleVi": "Không.",
        "en": "Thank you, but I do not want that.",
        "vocabulary": [
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng",
            "ipa": "ˈmœçtn̩",
            "say": "möchten"
          },
          {
            "de": "aber",
            "type": "conjunction",
            "en": "but",
            "vi": "nhưng",
            "ipa": "ˈaːbɐ",
            "say": "aber"
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
        },
        "source": "document"
      },
      {
        "simple": "Lass das.",
        "tactful": "Bitte hör damit auf.",
        "vi": "Bạn dừng việc đó lại nhé.",
        "simpleEn": "Stop that.",
        "simpleVi": "Đừng làm thế nữa.",
        "en": "Please stop doing that.",
        "vocabulary": [
          {
            "de": "aufhören",
            "type": "verb",
            "en": "to stop",
            "vi": "dừng lại",
            "ipa": "ˈaʊ̯fˌhøːʁən",
            "say": "aufhören"
          },
          {
            "de": "bitte",
            "type": "adverb",
            "en": "please",
            "vi": "làm ơn; nhé",
            "ipa": "ˈbɪtə",
            "say": "bitte"
          },
          {
            "de": "damit",
            "type": "adverb",
            "ipa": "daˈmɪt",
            "en": "with that; with it",
            "vi": "với việc đó; bằng điều đó",
            "say": "damit",
            "usageHelp": {
              "de": "Damit ist hier da + mit und ersetzt eine Sache nach mit; es ist in diesen Beispielen nicht die Konjunktion des Zwecks.",
              "en": "Damit is da plus mit here, replacing a matter following mit; it is not the purpose conjunction in these examples.",
              "vi": "damit ở các câu này là da + mit, thay cho mit + việc đó; không phải liên từ để chỉ mục đích là để."
            }
          }
        ],
        "analysis": {
          "pattern": "aufhören mit + Dativ → damit",
          "de": "Hör ist der Imperativ von aufhören; auf steht am Ende. Damit ersetzt mit + die Handlung, die aufhören soll.",
          "en": "Hör is the imperative of aufhören; auf comes at the end. Damit replaces mit plus the action that should stop.",
          "vi": "Hör là mệnh lệnh của aufhören; auf đứng cuối. damit thay cho mit + hành động cần dừng; không mang nghĩa để trong câu này."
        },
        "source": "document"
      },
      {
        "simple": "Das geht nicht.",
        "tactful": "Das ist für mich leider nicht möglich.",
        "vi": "Tiếc là việc đó không thể thực hiện được với mình.",
        "simpleEn": "That will not work.",
        "simpleVi": "Như vậy không được.",
        "en": "Unfortunately, that is not possible for me.",
        "vocabulary": [
          {
            "de": "möglich",
            "type": "adjective",
            "en": "possible",
            "vi": "có thể xảy ra",
            "ipa": "ˈmøːklɪç",
            "say": "möglich"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là",
            "ipa": "ˈlaɪ̯dɐ",
            "say": "leider",
            "usageHelp": {
              "de": "Leider kommentiert die gesamte Aussage als bedauerlich, nicht die Eigenschaft eines Nomens.",
              "en": "Leider comments on the whole statement as regrettable, rather than describing a noun.",
              "vi": "leider bình luận cả sự việc là đáng tiếc, không nêu đặc điểm của một danh từ nên không chia đuôi tính từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "document"
      },
      {
        "simple": "Egal.",
        "tactful": "Ich habe keine besondere Vorliebe.",
        "vi": "Mình không có sở thích lựa chọn nào đặc biệt.",
        "simpleEn": "Whatever.",
        "simpleVi": "Sao cũng được.",
        "en": "I have no particular preference.",
        "vocabulary": [
          {
            "de": "die Vorliebe",
            "type": "noun",
            "en": "preference",
            "vi": "sở thích; sự ưu tiên",
            "plural": "die Vorlieben",
            "ipa": "diː ˈfoːɐ̯ˌliːbə",
            "say": "die Vorliebe"
          },
          {
            "de": "haben",
            "type": "verb",
            "en": "to have",
            "vi": "có",
            "ipa": "ˈhaːbn̩",
            "say": "haben"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "document"
      },
      {
        "simple": "Warum meldest du dich nicht?",
        "tactful": "Ich würde mich freuen, öfter von dir zu hören.",
        "vi": "Mình sẽ vui nếu được nghe tin từ bạn thường xuyên hơn.",
        "simpleEn": "Why do you not get in touch?",
        "simpleVi": "Sao bạn không liên lạc?",
        "en": "I would be happy to hear from you more often.",
        "vocabulary": [
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng",
            "ipa": "zɪç ˈfʁɔʏ̯ən",
            "say": "sich freuen"
          },
          {
            "de": "öfter",
            "type": "adverb",
            "en": "more often",
            "vi": "thường xuyên hơn",
            "ipa": "ˈœftɐ",
            "say": "öfter",
            "formHelp": {
              "base": "oft",
              "surface": "öfter",
              "de": "Öfter ist Komparativ von oft mit Umlaut und -er, keine Adjektivdeklination.",
              "en": "Öfter is the comparative of oft, with an umlaut and -er, not adjective declension.",
              "vi": "öfter là so sánh hơn của oft, có đổi o → ö và thêm -er; đây không phải biến cách tính từ."
            }
          }
        ],
        "analysis": {
          "pattern": "sich freuen, von jemandem zu hören · würde + Infinitiv",
          "de": "Würde wird konjugiert; freuen bleibt Infinitiv. Von dir gehört zu hören und nennt den Kontaktgeber. Öfter ist ein Komparativ; zu hören ergänzt freuen.",
          "en": "Würde is conjugated; freuen stays infinitive. Von dir belongs to hören and identifies whose news is heard. Öfter is a comparative; zu hören complements freuen.",
          "vi": "Würde được chia; freuen giữ nguyên mẫu. von dir đi với hören và chỉ người mình nhận tin. öfter là dạng so sánh hơn; zu hören bổ sung cho freuen."
        },
        "source": "document"
      },
      {
        "simple": "Ich bin sauer.",
        "tactful": "Ich ärgere mich darüber und möchte das gerne ansprechen.",
        "vi": "Mình bực về việc đó và muốn trao đổi rõ.",
        "simpleEn": "I am angry.",
        "simpleVi": "Mình đang giận.",
        "en": "I am upset about that and would like to bring it up.",
        "vocabulary": [
          {
            "de": "sich ärgern über",
            "type": "verb",
            "en": "to be annoyed about",
            "vi": "bực mình về",
            "ipa": "zɪç ˈʔɛʁɡɐn ˈyːbɐ",
            "say": "sich ärgern über"
          },
          {
            "de": "ansprechen",
            "type": "verb",
            "en": "to bring up; to address",
            "vi": "đề cập; trao đổi về",
            "ipa": "ˈanˌʃpʁɛçn̩",
            "say": "ansprechen"
          },
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó",
            "ipa": "daˈʁyːbɐ",
            "say": "darüber",
            "usageHelp": {
              "de": "Darüber ist da + über und verweist auf das Thema oder den Anlass.",
              "en": "Darüber is da plus über and refers to a topic or cause.",
              "vi": "darüber = da + über, chỉ chủ đề hoặc sự việc đã nhắc đến, ví dụ sprechen über hoặc sich freuen über."
            }
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
        },
        "source": "document"
      },
      {
        "simple": "Geht morgen?",
        "simpleVi": "Ngày mai được không?",
        "tactful": "Würde es dir morgen passen?",
        "vi": "Ngày mai có tiện cho bạn không?",
        "en": "Would tomorrow work for you?",
        "simpleEn": "Does tomorrow work?",
        "vocabulary": [
          {
            "de": "passen",
            "type": "verb",
            "en": "to fit; to suit",
            "vi": "vừa; phù hợp; tiện",
            "ipa": "ˈpasn̩",
            "say": "passen"
          },
          {
            "de": "morgen",
            "type": "adverb",
            "en": "tomorrow",
            "vi": "ngày mai",
            "ipa": "ˈmɔʁɡən",
            "say": "morgen",
            "usageHelp": {
              "de": "Morgen bedeutet hier am nächsten Tag. Das Nomen der Morgen bedeutet dagegen die Tageszeit und wird großgeschrieben.",
              "en": "Morgen here means tomorrow. The noun der Morgen means the morning and is capitalized instead.",
              "vi": "morgen trong câu này là ngày mai, viết thường. Khác với danh từ der Morgen nghĩa là buổi sáng, viết hoa."
            }
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich komme später.",
        "simpleVi": "Mình đến sau.",
        "tactful": "Ich werde etwas später da sein.",
        "vi": "Mình sẽ có mặt muộn hơn một chút.",
        "en": "I will be there a little later.",
        "simpleEn": "I will come later.",
        "vocabulary": [
          {
            "de": "später",
            "type": "adverb",
            "en": "later",
            "vi": "muộn hơn; sau đó",
            "ipa": "ˈʃpɛːtɐ",
            "say": "später",
            "formHelp": {
              "base": "spät",
              "surface": "später",
              "de": "Später ist Komparativ von spät; die Form wird hier adverbial gebraucht.",
              "en": "Später is the comparative of spät, used adverbially here.",
              "vi": "später là so sánh hơn của spät, trong câu dùng làm trạng ngữ: muộn hơn. -er không phải đuôi giống/cách."
            }
          },
          {
            "de": "da sein",
            "type": "phrase",
            "en": "to be there; to be present",
            "vi": "có mặt",
            "ipa": "daː zaɪ̯n",
            "say": "da sein"
          },
          {
            "de": "etwas",
            "type": "adverb",
            "ipa": "ˈɛtvas",
            "en": "a little; somewhat",
            "vi": "một chút; hơi",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "werden + Infinitiv",
          "de": "Werden bildet mit sein das Futur I: werde … da sein. Etwas ist hier ein Gradadverb im Sinn von ein wenig.",
          "en": "Werden plus sein forms the future: werde … da sein. Etwas is a degree adverb here, meaning a little.",
          "vi": "werden kết hợp với nguyên mẫu sein tạo Futur I: werde … da sein. etwas ở đây là trạng từ chỉ mức độ: một chút, hơi."
        },
        "source": "editorial"
      },
      {
        "simple": "Heute nicht.",
        "simpleVi": "Hôm nay không được.",
        "tactful": "Heute passt es mir leider nicht.",
        "vi": "Tiếc là hôm nay mình không tiện.",
        "en": "Unfortunately, today does not work for me.",
        "simpleEn": "Not today.",
        "vocabulary": [
          {
            "de": "passen",
            "type": "verb",
            "en": "to fit; to suit",
            "vi": "vừa; phù hợp; tiện",
            "ipa": "ˈpasn̩",
            "say": "passen"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là",
            "ipa": "ˈlaɪ̯dɐ",
            "say": "leider",
            "usageHelp": {
              "de": "Leider kommentiert die gesamte Aussage als bedauerlich, nicht die Eigenschaft eines Nomens.",
              "en": "Leider comments on the whole statement as regrettable, rather than describing a noun.",
              "vi": "leider bình luận cả sự việc là đáng tiếc, không nêu đặc điểm của một danh từ nên không chia đuôi tính từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "editorial"
      },
      {
        "simple": "Sag mir Bescheid.",
        "simpleVi": "Báo mình nhé.",
        "tactful": "Gib mir bitte Bescheid, sobald du etwas weißt.",
        "vi": "Báo mình biết ngay khi bạn có thông tin nhé.",
        "en": "Please let me know as soon as you know something.",
        "simpleEn": "Let me know.",
        "vocabulary": [
          {
            "de": "Bescheid geben",
            "type": "phrase",
            "en": "to let someone know",
            "vi": "báo cho ai biết",
            "ipa": "bəˈʃaɪ̯t ˈɡeːbn̩",
            "say": "Bescheid geben"
          },
          {
            "de": "sobald",
            "type": "conjunction",
            "en": "as soon as",
            "vi": "ngay khi",
            "ipa": "zoˈbalt",
            "say": "sobald"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "sobald + … + Verb am Ende",
          "de": "Sobald leitet einen zeitlichen Nebensatz ein; weißt steht am Ende.",
          "en": "Sobald introduces a time clause; weißt comes at its end.",
          "vi": "sobald mở đầu mệnh đề thời gian; weißt đứng cuối mệnh đề đó."
        },
        "source": "editorial"
      },
      {
        "simple": "Kein Foto!",
        "simpleVi": "Không chụp ảnh!",
        "tactful": "Ich möchte nicht fotografiert werden.",
        "vi": "Mình không muốn bị chụp ảnh.",
        "en": "I do not want to be photographed.",
        "simpleEn": "No photo!",
        "vocabulary": [
          {
            "de": "fotografieren",
            "type": "verb",
            "en": "to photograph",
            "vi": "chụp ảnh",
            "ipa": "fotoɡʁaˈfiːʁən",
            "say": "fotografieren"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng",
            "ipa": "ˈmœçtn̩",
            "say": "möchten"
          }
        ],
        "analysis": {
          "pattern": "möchte + Partizip II + werden",
          "de": "Fotografiert werden ist ein passiver Infinitiv. Möchte wird nach dem Subjekt konjugiert.",
          "en": "Fotografiert werden is a passive infinitive. Möchte is conjugated for the subject.",
          "vi": "fotografiert werden là cụm nguyên mẫu bị động. möchte được chia theo chủ ngữ."
        },
        "source": "editorial"
      },
      {
        "simple": "Lösch das.",
        "simpleVi": "Xóa cái đó đi.",
        "tactful": "Könntest du diesen Beitrag bitte löschen?",
        "vi": "Bạn có thể xóa bài đăng này giúp mình không?",
        "en": "Could you delete this post, please?",
        "simpleEn": "Delete that.",
        "vocabulary": [
          {
            "de": "der Beitrag",
            "type": "noun",
            "en": "post; contribution",
            "vi": "bài đăng; đóng góp",
            "plural": "die Beiträge",
            "ipa": "deːɐ̯ ˈbaɪ̯tʁaːk",
            "say": "der Beitrag"
          },
          {
            "de": "löschen",
            "type": "verb",
            "en": "to delete",
            "vi": "xóa",
            "ipa": "ˈlœʃn̩",
            "say": "löschen"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      },
      {
        "simple": "Das ist privat.",
        "simpleVi": "Đó là chuyện riêng.",
        "tactful": "Darüber möchte ich lieber nicht sprechen.",
        "vi": "Mình không muốn nói về chuyện đó.",
        "en": "I would rather not talk about that.",
        "simpleEn": "That is private.",
        "vocabulary": [
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó",
            "ipa": "daˈʁyːbɐ",
            "say": "darüber",
            "usageHelp": {
              "de": "Darüber ist da + über und verweist auf das Thema oder den Anlass.",
              "en": "Darüber is da plus über and refers to a topic or cause.",
              "vi": "darüber = da + über, chỉ chủ đề hoặc sự việc đã nhắc đến, ví dụ sprechen über hoặc sich freuen über."
            }
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói",
            "ipa": "ˈʃpʁɛçn̩",
            "say": "sprechen"
          },
          {
            "de": "lieber",
            "type": "adverb",
            "ipa": "ˈliːbɐ",
            "en": "rather; preferably",
            "vi": "thích hơn; muốn hơn",
            "say": "lieber",
            "usageHelp": {
              "de": "Lieber ist hier der Komparativ des Adverbs gern.",
              "en": "Lieber is the comparative of the adverb gern here.",
              "vi": "lieber ở đây là so sánh hơn của trạng từ gern: muốn/thích hơn; không phải nhận đuôi theo danh từ."
            },
            "formHelp": {
              "base": "gern",
              "surface": "lieber",
              "de": "Lieber ist der Komparativ des Adverbs gern. Die Form hängt hier nicht von einem Nomen ab.",
              "en": "Lieber is the comparative of the adverb gern. Its form does not depend on a noun here.",
              "vi": "lieber là so sánh hơn của trạng từ gern: muốn/thích hơn. Dạng này không do giống hay cách của một danh từ quyết định."
            }
          }
        ],
        "analysis": {
          "pattern": "lieber nicht · gern → lieber",
          "de": "Möchte wird konjugiert; sprechen steht als Infinitiv am Ende. Lieber ist hier der Komparativ des Adverbs gern. Darüber ersetzt über + das Thema.",
          "en": "Möchte is conjugated; sprechen is the final infinitive. Lieber is the comparative of the adverb gern here. Darüber replaces über plus the topic.",
          "vi": "möchte được chia; sprechen ở nguyên mẫu cuối. lieber ở đây là so sánh hơn của trạng từ gern. darüber thay cho über + chủ đề đang nói."
        },
        "source": "editorial"
      },
      {
        "simple": "Schreib nicht so spät.",
        "simpleVi": "Đừng nhắn muộn thế.",
        "tactful": "Könntest du mir bitte etwas früher schreiben?",
        "vi": "Bạn có thể nhắn mình sớm hơn một chút không?",
        "en": "Could you message me a little earlier, please?",
        "simpleEn": "Do not message so late.",
        "vocabulary": [
          {
            "de": "früh",
            "type": "adjective",
            "en": "early",
            "vi": "sớm",
            "ipa": "fʁyː",
            "say": "früh",
            "formHelp": {
              "base": "früh",
              "surface": "früher",
              "example": "etwas früher schreiben",
              "de": "Früher ist Komparativ von früh. Die Form ergänzt schreiben; -er ist eine Vergleichsform, keine Deklinationsendung.",
              "en": "Früher is the comparative of früh. It modifies schreiben; -er is comparative, not a declension ending.",
              "vi": "früher là so sánh hơn của früh: sớm hơn. Nó bổ nghĩa cho schreiben; -er là dấu so sánh, không phải đuôi biến cách."
            }
          },
          {
            "de": "schreiben",
            "type": "verb",
            "en": "to write",
            "vi": "viết; nhắn tin",
            "ipa": "ˈʃʁaɪ̯bn̩",
            "say": "schreiben"
          },
          {
            "de": "etwas",
            "type": "adverb",
            "ipa": "ˈɛtvas",
            "en": "a little; somewhat",
            "vi": "một chút; hơi",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende. Etwas ist hier ein Gradadverb im Sinn von ein wenig.",
          "en": "Subjunctive II of können; the other infinitive comes at the end. Etwas is a degree adverb here, meaning a little.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu. etwas ở đây là trạng từ chỉ mức độ: một chút, hơi."
        },
        "source": "editorial"
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 5,
    "de": "Gespräch & Bitten",
    "en": "Conversation & requests",
    "vi": "Trò chuyện và nhờ giúp",
    "intro": {
      "de": "Bitten, Rückfragen und Gesprächsbeiträge. Wähle du oder Sie nach Beziehung und vereinbarter Anrede.",
      "en": "Requests, clarification and contributions to a conversation. Choose du or Sie according to the relationship and agreed form of address.",
      "vi": "Nhờ giúp, hỏi lại và góp ý trong hội thoại. Chọn du hay Sie theo quan hệ và cách xưng hô hai bên đã thống nhất."
    },
    "rows": [
      {
        "tactful": "Könntest du mir bitte kurz zuhören?",
        "en": "Could you listen to me briefly, please?",
        "vi": "Bạn nghe mình nói một chút được không?",
        "vocabulary": [
          {
            "de": "zuhören",
            "type": "verb",
            "en": "to listen attentively",
            "vi": "chú ý lắng nghe",
            "ipa": "ˈtsuːˌhøːʁən",
            "say": "zuhören"
          },
          {
            "de": "kurz",
            "type": "adjective",
            "en": "brief; short",
            "vi": "ngắn; trong chốc lát",
            "ipa": "kʊʁts",
            "say": "kurz"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "legacy-adapted",
        "simple": "Hör mal zu.",
        "simpleEn": "Listen.",
        "simpleVi": "Nghe tôi nói này."
      },
      {
        "tactful": "In diesem Punkt gebe ich dir recht.",
        "en": "I agree with you on this point.",
        "vi": "Ở điểm này, mình đồng ý với bạn.",
        "vocabulary": [
          {
            "de": "der Punkt",
            "type": "noun",
            "en": "point",
            "vi": "điểm; ý",
            "plural": "die Punkte",
            "ipa": "deːɐ̯ pʊŋkt",
            "say": "der Punkt"
          },
          {
            "de": "recht geben",
            "type": "phrase",
            "en": "to agree with someone",
            "vi": "đồng ý với ai",
            "ipa": "ʁɛçt ˈɡeːbn̩",
            "say": "recht geben"
          }
        ],
        "analysis": {
          "pattern": "jemandem zustimmen / recht geben",
          "de": "Dir steht im Dativ. Zustimmen ist trennbar: stimme … zu; jemandem recht geben verlangt ebenfalls Dativ.",
          "en": "Dir is dative. Zustimmen is separable: stimme … zu; jemandem recht geben also takes dative.",
          "vi": "dir ở Dativ. zustimmen là động từ tách: stimme … zu; jemandem recht geben cũng dùng Dativ chỉ người."
        },
        "source": "legacy-adapted",
        "simple": "Du hast recht.",
        "simpleEn": "You’re right.",
        "simpleVi": "Bạn nói đúng."
      },
      {
        "tactful": "Möchtest du mir erzählen, was dich gerade beschäftigt?",
        "en": "Would you like to tell me what is on your mind?",
        "vi": "Bạn có muốn kể điều gì đang khiến bạn bận tâm không?",
        "vocabulary": [
          {
            "de": "beschäftigen",
            "type": "verb",
            "en": "to occupy; to preoccupy",
            "vi": "khiến bận tâm",
            "ipa": "bəˈʃɛftɪɡən",
            "say": "beschäftigen"
          },
          {
            "de": "erzählen",
            "type": "verb",
            "en": "to tell; to narrate",
            "vi": "kể chuyện",
            "ipa": "ɛɐ̯ˈtsɛːlən",
            "say": "erzählen"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Was ist los?",
        "simpleEn": "What’s wrong?",
        "simpleVi": "Có chuyện gì vậy?"
      },
      {
        "tactful": "Bitte sei vorsichtig.",
        "en": "Please be careful.",
        "vi": "Bạn hãy cẩn thận nhé.",
        "vocabulary": [
          {
            "de": "vorsichtig",
            "type": "adjective",
            "en": "careful",
            "vi": "cẩn thận",
            "ipa": "ˈfoːɐ̯ˌzɪçtɪç",
            "say": "vorsichtig"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì",
            "ipa": "zaɪ̯n",
            "say": "sein"
          }
        ],
        "analysis": {
          "pattern": "Imperativ von sein: sei",
          "de": "Sei ist die unregelmäßige Imperativform von sein für du; vorsichtig ist ein prädikatives Adjektiv.",
          "en": "Sei is the irregular du-imperative of sein; vorsichtig is a predicative adjective.",
          "vi": "Sei là mệnh lệnh bất quy tắc của sein cho du; vorsichtig là tính từ vị ngữ, không chia đuôi."
        },
        "source": "legacy-adapted",
        "simple": "Pass auf!",
        "simpleEn": "Watch out!",
        "simpleVi": "Cẩn thận / Chú ý nhé!"
      },
      {
        "tactful": "Könntest du mir bitte einen kurzen Moment geben?",
        "en": "Could you give me a brief moment, please?",
        "vi": "Bạn cho mình một chút thời gian được không?",
        "vocabulary": [
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente",
            "ipa": "deːɐ̯ moˈmɛnt",
            "say": "der Moment"
          },
          {
            "de": "geben",
            "type": "verb",
            "en": "to give",
            "vi": "cho; đưa",
            "ipa": "ˈɡeːbn̩",
            "say": "geben"
          },
          {
            "de": "kurz",
            "type": "adjective",
            "ipa": "kʊʁts",
            "en": "short; brief",
            "vi": "ngắn; ngắn gọn",
            "say": "kurz",
            "formHelp": {
              "base": "kurz",
              "surface": "kurzen",
              "example": "einen kurzen Moment",
              "de": "Moment ist maskulin und steht als Objekt im Akkusativ: einen Moment. Das Adjektiv nach einem ein-Wort hat hier die Endung -en.",
              "en": "Moment is masculine accusative: einen Moment. Following an ein-type determiner, the adjective has the ending -en here.",
              "vi": "Moment giống đực, là tân ngữ Akkusativ (cách 4): einen Moment. Tính từ sau từ loại ein nhận đuôi -en ở trường hợp này: einen kurzen Moment."
            }
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "legacy-adapted",
        "simple": "Warte einen Moment.",
        "simpleEn": "Wait a moment.",
        "simpleVi": "Đợi một lát."
      },
      {
        "tactful": "Ich möchte Sie bitten, damit aufzuhören.",
        "en": "I would like to ask you to stop doing that.",
        "vi": "Tôi muốn đề nghị anh/chị dừng việc đó lại.",
        "vocabulary": [
          {
            "de": "bitten",
            "type": "verb",
            "en": "to ask; to request",
            "vi": "đề nghị; nhờ",
            "ipa": "ˈbɪtn̩",
            "say": "bitten"
          },
          {
            "de": "aufhören",
            "type": "verb",
            "en": "to stop",
            "vi": "dừng lại",
            "ipa": "ˈaʊ̯fˌhøːʁən",
            "say": "aufhören"
          },
          {
            "de": "damit",
            "type": "adverb",
            "ipa": "daˈmɪt",
            "en": "with that; with it",
            "vi": "với việc đó; bằng điều đó",
            "say": "damit",
            "usageHelp": {
              "de": "Damit ist hier da + mit und ersetzt eine Sache nach mit; es ist in diesen Beispielen nicht die Konjunktion des Zwecks.",
              "en": "Damit is da plus mit here, replacing a matter following mit; it is not the purpose conjunction in these examples.",
              "vi": "damit ở các câu này là da + mit, thay cho mit + việc đó; không phải liên từ để chỉ mục đích là để."
            }
          }
        ],
        "analysis": {
          "pattern": "bitten + zu-Infinitiv · aufhören mit → damit",
          "de": "Aufzuhören ist der zu-Infinitiv von aufhören: zu steht zwischen auf und hören. Damit ersetzt mit + die gemeinte Handlung.",
          "en": "Aufzuhören is the zu-infinitive of aufhören: zu comes between auf and hören. Damit replaces mit plus the action referred to.",
          "vi": "aufzuhören là nguyên mẫu có zu của aufhören: zu nằm giữa auf và hören. damit thay cho mit + hành động đang nhắc đến."
        },
        "source": "legacy-adapted",
        "simple": "Lassen Sie das bitte.",
        "simpleEn": "Please stop that.",
        "simpleVi": "Xin anh/chị đừng làm vậy nữa. (Sie lịch sự)"
      },
      {
        "tactful": "Hätten Sie einen Moment Zeit?",
        "en": "Would you have a moment?",
        "vi": "Anh/chị có chút thời gian không?",
        "vocabulary": [
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente",
            "ipa": "deːɐ̯ moˈmɛnt",
            "say": "der Moment"
          },
          {
            "de": "die Zeit",
            "type": "noun",
            "en": "time",
            "vi": "thời gian",
            "plural": "die Zeiten",
            "ipa": "diː tsaɪ̯t",
            "say": "die Zeit"
          }
        ],
        "analysis": {
          "pattern": "hätten + Akkusativ · einen Moment Zeit",
          "de": "Hätten ist Konjunktiv II von haben. Die feste Verbindung einen Moment Zeit haben bezeichnet eine kurze Zeitspanne; einen Moment steht im Akkusativ.",
          "en": "Hätten is subjunctive II of haben. The expression einen Moment Zeit haben means to have a short amount of time; einen Moment is accusative.",
          "vi": "Hätten là Konjunktiv II của haben. Cụm einen Moment Zeit haben nghĩa là có một chút thời gian; einen Moment ở Akkusativ (cách 4)."
        },
        "source": "legacy-adapted",
        "simple": "Darf ich kurz stören?",
        "simpleEn": "May I interrupt for a moment?",
        "simpleVi": "Xin phép làm phiền một chút được không?"
      },
      {
        "tactful": "Könntest du mir das bitte anders erklären?",
        "en": "Could you explain that to me differently, please?",
        "vi": "Bạn có thể giải thích điều đó theo cách khác giúp mình không?",
        "vocabulary": [
          {
            "de": "erklären",
            "type": "verb",
            "en": "to explain",
            "vi": "giải thích",
            "ipa": "ɛɐ̯ˈklɛːʁən",
            "say": "erklären"
          },
          {
            "de": "anders",
            "type": "adverb",
            "en": "differently",
            "vi": "theo cách khác",
            "ipa": "ˈandɐs",
            "say": "anders",
            "usageHelp": {
              "de": "Anders heißt hier auf eine andere Weise. Es wird nicht zu andere oder anderen dekliniert.",
              "en": "Anders means in a different way here and is not declined to andere or anderen.",
              "vi": "anders ở đây nghĩa là theo cách khác. Không đổi nó thành andere/anderen; đó là cách dùng của từ khác, không phải biến cách trạng từ anders."
            }
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "legacy-adapted",
        "simple": "Ich verstehe nur Bahnhof.",
        "simpleEn": "It’s all Greek to me.",
        "simpleVi": "Tôi chẳng hiểu gì cả. (thành ngữ)"
      },
      {
        "tactful": "Möchtest du mitkommen?",
        "en": "Would you like to come along?",
        "vi": "Bạn có muốn đi cùng không?",
        "vocabulary": [
          {
            "de": "mitkommen",
            "type": "verb",
            "en": "to come along",
            "vi": "đi cùng",
            "ipa": "ˈmɪtˌkɔmən",
            "say": "mitkommen"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng",
            "ipa": "ˈmœçtn̩",
            "say": "möchten"
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Komm mit!",
        "simpleEn": "Come with me!",
        "simpleVi": "Đi cùng tôi nào!"
      },
      {
        "tactful": "Wollen wir jetzt losgehen?",
        "en": "Shall we head off now?",
        "vi": "Bây giờ chúng ta đi nhé?",
        "vocabulary": [
          {
            "de": "losgehen",
            "type": "verb",
            "en": "to start; to set off",
            "vi": "bắt đầu; khởi hành",
            "ipa": "ˈloːsˌɡeːən",
            "say": "losgehen"
          },
          {
            "de": "jetzt",
            "type": "adverb",
            "en": "now",
            "vi": "bây giờ",
            "ipa": "jɛtst",
            "say": "jetzt",
            "usageHelp": {
              "de": "Jetzt beantwortet die Frage wann: im gegenwärtigen Moment.",
              "en": "Jetzt answers when: at the present moment.",
              "vi": "jetzt trả lời khi nào: bây giờ, ở thời điểm hiện tại."
            }
          }
        ],
        "analysis": {
          "pattern": "Ja-/Nein-Frage",
          "de": "Das konjugierte Verb steht vor dem Subjekt.",
          "en": "The conjugated verb precedes the subject.",
          "vi": "Động từ chia đứng trước chủ ngữ trong câu hỏi có/không."
        },
        "source": "legacy-adapted",
        "simple": "Lass uns gehen.",
        "simpleEn": "Let’s go.",
        "simpleVi": "Chúng ta đi thôi."
      },
      {
        "simple": "Hilf mir bitte.",
        "tactful": "Könntest du mir kurz dabei helfen?",
        "vi": "Bạn có thể giúp mình việc này một chút không?",
        "simpleEn": "Please help me.",
        "simpleVi": "Giúp mình với nhé.",
        "en": "Could you briefly help me with this?",
        "vocabulary": [
          {
            "de": "helfen",
            "type": "verb",
            "en": "to help",
            "vi": "giúp đỡ",
            "ipa": "ˈhɛlfn̩",
            "say": "helfen"
          },
          {
            "de": "kurz",
            "type": "adjective",
            "en": "brief; short",
            "vi": "ngắn; trong chốc lát",
            "ipa": "kʊʁts",
            "say": "kurz"
          },
          {
            "de": "dabei",
            "type": "adverb",
            "ipa": "daˈbaɪ̯",
            "en": "with that; while doing it",
            "vi": "trong việc đó; khi làm việc đó",
            "say": "dabei",
            "usageHelp": {
              "de": "Dabei ist da + bei; die genaue Bedeutung hängt hier von helfen bei oder der genannten Tätigkeit ab.",
              "en": "Dabei is da plus bei; here its meaning depends on helfen bei or the activity mentioned.",
              "vi": "dabei = da + bei; trong helfen bei là giúp làm việc đó, còn ở câu về may mắn là khi làm việc đó."
            }
          }
        ],
        "analysis": {
          "pattern": "helfen bei + Dativ → dabei · jemandem helfen",
          "de": "Mir ist Dativ, weil helfen eine Person im Dativ verlangt. Dabei ersetzt bei + die Aufgabe. Könntest ist Konjunktiv II; helfen steht als Infinitiv am Ende.",
          "en": "Mir is dative because helfen takes a dative person. Dabei replaces bei plus the task. Könntest is subjunctive II; helfen is the final infinitive.",
          "vi": "mir ở Dativ vì helfen yêu cầu người được giúp ở Dativ. dabei thay cho bei + công việc. Könntest là Konjunktiv II; helfen ở nguyên mẫu cuối câu."
        },
        "source": "document"
      },
      {
        "simple": "Ich kann nicht.",
        "tactful": "Das ist mir leider nicht möglich.",
        "vi": "Tiếc là mình không thể làm được việc đó.",
        "simpleEn": "I cannot.",
        "simpleVi": "Mình không thể.",
        "en": "Unfortunately, that is not possible for me.",
        "vocabulary": [
          {
            "de": "möglich",
            "type": "adjective",
            "en": "possible",
            "vi": "có thể xảy ra",
            "ipa": "ˈmøːklɪç",
            "say": "möglich"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là",
            "ipa": "ˈlaɪ̯dɐ",
            "say": "leider",
            "usageHelp": {
              "de": "Leider kommentiert die gesamte Aussage als bedauerlich, nicht die Eigenschaft eines Nomens.",
              "en": "Leider comments on the whole statement as regrettable, rather than describing a noun.",
              "vi": "leider bình luận cả sự việc là đáng tiếc, không nêu đặc điểm của một danh từ nên không chia đuôi tính từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "document"
      },
      {
        "simple": "Keine Zeit.",
        "tactful": "Im Moment passt es mir leider nicht so gut.",
        "vi": "Hiện tại mình chưa tiện lắm.",
        "simpleEn": "No time.",
        "simpleVi": "Không có thời gian.",
        "en": "Unfortunately, now is not a very good time for me.",
        "vocabulary": [
          {
            "de": "passen",
            "type": "verb",
            "en": "to fit; to suit",
            "vi": "vừa; phù hợp; tiện",
            "ipa": "ˈpasn̩",
            "say": "passen"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là",
            "ipa": "ˈlaɪ̯dɐ",
            "say": "leider",
            "usageHelp": {
              "de": "Leider kommentiert die gesamte Aussage als bedauerlich, nicht die Eigenschaft eines Nomens.",
              "en": "Leider comments on the whole statement as regrettable, rather than describing a noun.",
              "vi": "leider bình luận cả sự việc là đáng tiếc, không nêu đặc điểm của một danh từ nên không chia đuôi tính từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "document"
      },
      {
        "simple": "Ich kann das.",
        "tactful": "Ich traue mir diese Aufgabe zu.",
        "vi": "Mình tin mình có thể làm được việc này.",
        "simpleEn": "I can do that.",
        "simpleVi": "Tôi làm được việc đó.",
        "en": "I feel capable of doing this task.",
        "vocabulary": [
          {
            "de": "sich zutrauen",
            "type": "verb",
            "en": "to feel capable of",
            "vi": "tin mình có thể làm được",
            "ipa": "zɪç ˈtsuːˌtʁaʊ̯ən",
            "say": "sich zutrauen"
          },
          {
            "de": "die Aufgabe",
            "type": "noun",
            "en": "task",
            "vi": "nhiệm vụ; bài tập",
            "plural": "die Aufgaben",
            "ipa": "diː ˈaʊ̯fˌɡaːbə",
            "say": "die Aufgabe"
          }
        ],
        "analysis": {
          "pattern": "sich etwas zutrauen",
          "de": "Zutrauen ist trennbar: traue … zu. Mir ist Dativ, diese Aufgabe ist Akkusativ.",
          "en": "Zutrauen is separable: traue … zu. Mir is dative; diese Aufgabe is accusative.",
          "vi": "zutrauen là động từ tách: traue … zu. mir ở Dativ; diese Aufgabe ở Akkusativ."
        },
        "source": "document"
      },
      {
        "simple": "Ich bin fertig.",
        "tactful": "Damit bin ich am Ende meiner Ausführungen angekommen.",
        "vi": "Đến đây tôi đã trình bày xong.",
        "simpleEn": "I am finished.",
        "simpleVi": "Tôi xong rồi.",
        "en": "That brings me to the end of my remarks.",
        "vocabulary": [
          {
            "de": "ankommen",
            "type": "verb",
            "en": "to arrive",
            "vi": "đến; được nhận",
            "ipa": "ˈanˌkɔmən",
            "say": "ankommen"
          },
          {
            "de": "die Ausführung",
            "type": "noun",
            "en": "explanation; account",
            "vi": "phần trình bày",
            "plural": "die Ausführungen",
            "ipa": "diː ˈaʊ̯sˌfyːʁʊŋ",
            "say": "die Ausführung"
          },
          {
            "de": "damit",
            "type": "adverb",
            "ipa": "daˈmɪt",
            "en": "with that; with it",
            "vi": "với việc đó; bằng điều đó",
            "say": "damit",
            "usageHelp": {
              "de": "Damit ist hier da + mit und ersetzt eine Sache nach mit; es ist in diesen Beispielen nicht die Konjunktion des Zwecks.",
              "en": "Damit is da plus mit here, replacing a matter following mit; it is not the purpose conjunction in these examples.",
              "vi": "damit ở các câu này là da + mit, thay cho mit + việc đó; không phải liên từ để chỉ mục đích là để."
            }
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "document"
      },
      {
        "simple": "Was?",
        "simpleVi": "Gì cơ?",
        "tactful": "Entschuldigung, könnten Sie das bitte noch einmal sagen?",
        "vi": "Xin lỗi, anh/chị có thể nói lại một lần nữa không?",
        "en": "Sorry, could you say that again, please?",
        "simpleEn": "What?",
        "vocabulary": [
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết",
            "ipa": "ˈzaːɡən",
            "say": "sagen"
          },
          {
            "de": "noch einmal",
            "type": "phrase",
            "en": "once again",
            "vi": "một lần nữa",
            "ipa": "nɔx ˈaɪ̯nmaːl",
            "say": "noch einmal"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      },
      {
        "simple": "Langsamer, bitte.",
        "simpleVi": "Chậm hơn giúp tôi.",
        "tactful": "Könnten Sie bitte etwas langsamer sprechen?",
        "vi": "Anh/chị có thể nói chậm hơn một chút không?",
        "en": "Could you speak a little more slowly, please?",
        "simpleEn": "More slowly, please.",
        "vocabulary": [
          {
            "de": "langsam",
            "type": "adjective",
            "en": "slow",
            "vi": "chậm",
            "ipa": "ˈlaŋzaːm",
            "say": "langsam",
            "formHelp": {
              "base": "langsam",
              "surface": "langsamer",
              "example": "etwas langsamer sprechen",
              "de": "Langsamer ist Komparativ von langsam. -er bezeichnet hier den Vergleich, nicht Genus oder Kasus; das Adjektiv wird adverbial zu sprechen gebraucht.",
              "en": "Langsamer is the comparative of langsam. Here -er marks comparison, not gender or case; the adjective is used adverbially with sprechen.",
              "vi": "langsamer là so sánh hơn của langsam: chậm hơn. -er ở đây chỉ so sánh, không phải đuôi giống/cách. Trong câu này nó làm trạng ngữ bổ nghĩa cho sprechen."
            }
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói",
            "ipa": "ˈʃpʁɛçn̩",
            "say": "sprechen"
          },
          {
            "de": "etwas",
            "type": "adverb",
            "ipa": "ˈɛtvas",
            "en": "a little; somewhat",
            "vi": "một chút; hơi",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende. Etwas ist hier ein Gradadverb im Sinn von ein wenig.",
          "en": "Subjunctive II of können; the other infinitive comes at the end. Etwas is a degree adverb here, meaning a little.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu. etwas ở đây là trạng từ chỉ mức độ: một chút, hơi."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich verstehe das nicht.",
        "simpleVi": "Tôi không hiểu điều đó.",
        "tactful": "Könntest du mir das bitte noch einmal erklären?",
        "vi": "Bạn có thể giải thích lại điều đó cho mình được không?",
        "en": "Could you explain that to me once again, please?",
        "simpleEn": "I do not understand that.",
        "vocabulary": [
          {
            "de": "erklären",
            "type": "verb",
            "en": "to explain",
            "vi": "giải thích",
            "ipa": "ɛɐ̯ˈklɛːʁən",
            "say": "erklären"
          },
          {
            "de": "noch einmal",
            "type": "phrase",
            "en": "once again",
            "vi": "một lần nữa",
            "ipa": "nɔx ˈaɪ̯nmaːl",
            "say": "noch einmal"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      },
      {
        "simple": "Also morgen?",
        "simpleVi": "Vậy ngày mai à?",
        "tactful": "Habe ich Sie richtig verstanden: Unser Termin ist morgen?",
        "vi": "Tôi hiểu đúng chứ: lịch hẹn của chúng ta là ngày mai?",
        "en": "Have I understood you correctly: our appointment is tomorrow?",
        "simpleEn": "So, tomorrow?",
        "vocabulary": [
          {
            "de": "der Termin",
            "type": "noun",
            "en": "appointment",
            "vi": "lịch hẹn; cuộc hẹn",
            "plural": "die Termine",
            "ipa": "deːɐ̯ tɛʁˈmiːn",
            "say": "der Termin"
          },
          {
            "de": "richtig",
            "type": "adjective",
            "en": "correct; right",
            "vi": "đúng",
            "ipa": "ˈʁɪçtɪç",
            "say": "richtig"
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich will auch etwas sagen.",
        "simpleVi": "Tôi cũng muốn nói.",
        "tactful": "Darf ich dazu kurz etwas ergänzen?",
        "vi": "Tôi có thể bổ sung ngắn một ý về việc đó không?",
        "en": "May I briefly add something to that?",
        "simpleEn": "I want to say something too.",
        "vocabulary": [
          {
            "de": "dürfen",
            "type": "verb",
            "en": "may; to be allowed to",
            "vi": "được phép",
            "ipa": "ˈdʏʁfn̩",
            "say": "dürfen"
          },
          {
            "de": "ergänzen",
            "type": "verb",
            "en": "to add; to supplement",
            "vi": "bổ sung",
            "ipa": "ɛɐ̯ˈɡɛntsn̩",
            "say": "ergänzen"
          },
          {
            "de": "dazu",
            "type": "adverb",
            "ipa": "daˈtsuː",
            "en": "to that; on that point",
            "vi": "vào việc đó; về điểm đó",
            "say": "dazu",
            "usageHelp": {
              "de": "Dazu ist da + zu und verweist auf den besprochenen Punkt.",
              "en": "Dazu is da plus zu and refers to the point under discussion.",
              "vi": "dazu = da + zu, trỏ đến điểm đang được bàn, không phải đuôi -zu của một từ."
            }
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "dazu · etwas · darf ich",
          "de": "Dazu verweist auf den besprochenen Punkt. Etwas ist hier ein Indefinitpronomen. Darf ist Präsens von dürfen; ergänzen steht als Infinitiv am Ende.",
          "en": "Dazu refers to the point under discussion. Etwas is an indefinite pronoun here. Darf is present indicative of dürfen; ergänzen is the final infinitive.",
          "vi": "dazu chỉ điểm đang bàn. etwas ở đây là đại từ bất định. Darf là hiện tại của dürfen; ergänzen ở nguyên mẫu cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Moment!",
        "simpleVi": "Khoan!",
        "tactful": "Darf ich kurz unterbrechen?",
        "vi": "Cho tôi ngắt lời một chút được không?",
        "en": "May I interrupt briefly?",
        "simpleEn": "One moment!",
        "vocabulary": [
          {
            "de": "unterbrechen",
            "type": "verb",
            "en": "to interrupt",
            "vi": "ngắt lời; tạm dừng",
            "ipa": "ʊntɐˈbʁɛçn̩",
            "say": "unterbrechen"
          },
          {
            "de": "dürfen",
            "type": "verb",
            "en": "may; to be allowed to",
            "vi": "được phép",
            "ipa": "ˈdʏʁfn̩",
            "say": "dürfen"
          }
        ],
        "analysis": {
          "pattern": "darf ich + Infinitiv",
          "de": "Darf ist Präsens von dürfen, nicht Konjunktiv II.",
          "en": "Darf is present indicative of dürfen, not subjunctive II.",
          "vi": "Darf là hiện tại của dürfen, không phải Konjunktiv II."
        },
        "source": "editorial"
      },
      {
        "simple": "Lassen Sie mich reden.",
        "simpleVi": "Để tôi nói.",
        "tactful": "Ich würde den Gedanken gerne noch zu Ende führen.",
        "vi": "Tôi muốn nói hết ý này trước.",
        "en": "I would like to finish this thought first.",
        "simpleEn": "Let me speak.",
        "vocabulary": [
          {
            "de": "zu Ende führen",
            "type": "phrase",
            "en": "to bring to completion",
            "vi": "hoàn tất; nói hết ý",
            "ipa": "tsu ˈʔɛndə ˈfyːʁən",
            "say": "zu Ende führen"
          },
          {
            "de": "der Gedanke",
            "type": "noun",
            "en": "thought",
            "vi": "ý nghĩ; ý đang nói",
            "plural": "die Gedanken",
            "ipa": "deːɐ̯ ɡəˈdaŋkə",
            "say": "der Gedanke"
          },
          {
            "de": "noch",
            "type": "adverb",
            "ipa": "nɔx",
            "en": "still; yet; some more",
            "vi": "vẫn; còn; thêm",
            "say": "noch",
            "usageHelp": {
              "de": "Noch kann eine Fortdauer oder eine zusätzliche Menge ausdrücken; die Bedeutung hängt von der Verbindung ab.",
              "en": "Noch can indicate continuation or an additional amount, depending on the expression.",
              "vi": "noch có thể là vẫn/còn hoặc thêm một ít; cần đọc theo cả cụm, như noch nicht = chưa."
            }
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Zurück zum Thema.",
        "simpleVi": "Quay lại chủ đề.",
        "tactful": "Können wir noch einmal auf die ursprüngliche Frage zurückkommen?",
        "vi": "Chúng ta quay lại câu hỏi ban đầu được không?",
        "en": "Could we return to the original question?",
        "simpleEn": "Back to the topic.",
        "vocabulary": [
          {
            "de": "zurückkommen auf",
            "type": "verb",
            "en": "to return to a topic",
            "vi": "quay lại một chủ đề",
            "ipa": "tsuˈʁʏkˌkɔmən aʊ̯f",
            "say": "zurückkommen auf"
          },
          {
            "de": "die Frage",
            "type": "noun",
            "en": "question",
            "vi": "câu hỏi",
            "plural": "die Fragen",
            "ipa": "diː ˈfʁaːɡə",
            "say": "die Frage"
          },
          {
            "de": "ursprünglich",
            "type": "adjective",
            "ipa": "ˈuːɐ̯ˌʃpʁʏŋlɪç",
            "en": "original; initial",
            "vi": "ban đầu",
            "say": "ursprünglich",
            "formHelp": {
              "base": "ursprünglich",
              "surface": "ursprüngliche",
              "example": "auf die ursprüngliche Frage",
              "de": "Frage ist feminin; auf verlangt bei zurückkommen auf hier Akkusativ. Nach die erhält das Adjektiv die Endung -e.",
              "en": "Frage is feminine; zurückkommen auf takes accusative here. After die, the adjective has the ending -e.",
              "vi": "Frage giống cái; zurückkommen auf trong cấu trúc này dùng Akkusativ (cách 4). Sau die, tính từ nhận đuôi -e: die ursprüngliche Frage."
            }
          }
        ],
        "analysis": {
          "pattern": "zurückkommen auf + Akkusativ · ursprünglich → ursprüngliche",
          "de": "Nach können bleibt zurückkommen als Infinitiv am Ende. Auf verlangt hier Akkusativ: auf die ursprüngliche Frage. Ursprüngliche ist die flektierte Form von ursprünglich.",
          "en": "After können, zurückkommen stays infinitive at the end. Auf takes accusative here: auf die ursprüngliche Frage. Ursprüngliche is the inflected form of ursprünglich.",
          "vi": "Sau können, zurückkommen giữ nguyên mẫu ở cuối. auf ở đây dùng Akkusativ: auf die ursprüngliche Frage. ursprüngliche là dạng đã chia đuôi của ursprünglich."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich habe noch etwas.",
        "simpleEn": "I have something else.",
        "simpleVi": "Tôi còn một ý.",
        "tactful": "Darf ich zu diesem Punkt noch etwas hinzufügen?",
        "en": "May I add something to this point?",
        "vi": "Tôi bổ sung thêm một ý về điểm này được không?",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "der Punkt",
            "type": "noun",
            "en": "point",
            "vi": "điểm; ý",
            "plural": "die Punkte",
            "ipa": "deːɐ̯ pʊŋkt",
            "say": "der Punkt"
          },
          {
            "de": "hinzufügen",
            "type": "verb",
            "en": "to add",
            "vi": "thêm vào; bổ sung",
            "ipa": "hɪnˈtsuːˌfyːɡən",
            "say": "hinzufügen"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          },
          {
            "de": "noch",
            "type": "adverb",
            "ipa": "nɔx",
            "en": "still; yet; some more",
            "vi": "vẫn; còn; thêm",
            "say": "noch",
            "usageHelp": {
              "de": "Noch kann eine Fortdauer oder eine zusätzliche Menge ausdrücken; die Bedeutung hängt von der Verbindung ab.",
              "en": "Noch can indicate continuation or an additional amount, depending on the expression.",
              "vi": "noch có thể là vẫn/còn hoặc thêm một ít; cần đọc theo cả cụm, như noch nicht = chưa."
            }
          }
        ],
        "analysis": {
          "pattern": "darf ich + Infinitiv",
          "de": "Darf ist Präsens von dürfen, nicht Konjunktiv II.",
          "en": "Darf is present indicative of dürfen, not subjunctive II.",
          "vi": "Darf là hiện tại của dürfen, không phải Konjunktiv II."
        }
      },
      {
        "simple": "Wer ist da?",
        "simpleVi": "Ai đấy?",
        "tactful": "Darf ich fragen, mit wem ich spreche?",
        "vi": "Cho tôi hỏi tôi đang nói chuyện với ai được không?",
        "en": "May I ask who I am speaking with?",
        "simpleEn": "Who is this?",
        "vocabulary": [
          {
            "de": "fragen",
            "type": "verb",
            "en": "to ask",
            "vi": "hỏi",
            "ipa": "ˈfʁaːɡən",
            "say": "fragen"
          },
          {
            "de": "mit wem",
            "type": "phrase",
            "en": "with whom",
            "vi": "với ai",
            "ipa": "mɪt veːm",
            "say": "mit wem"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Jetzt nicht.",
        "simpleVi": "Giờ không được.",
        "tactful": "Im Moment ist es mir leider nicht möglich.",
        "vi": "Tiếc là hiện giờ tôi không thể làm việc đó.",
        "en": "Unfortunately, I cannot do that at the moment.",
        "simpleEn": "Not right now.",
        "vocabulary": [
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại",
            "ipa": "ɪm moˈmɛnt",
            "say": "im Moment"
          },
          {
            "de": "möglich",
            "type": "adjective",
            "en": "possible",
            "vi": "có thể xảy ra",
            "ipa": "ˈmøːklɪç",
            "say": "möglich"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "editorial"
      },
      {
        "simple": "Schicken Sie eine Mail.",
        "simpleVi": "Gửi email đi.",
        "tactful": "Könnten Sie mir das bitte per E-Mail schicken?",
        "vi": "Anh/chị có thể gửi việc đó cho tôi qua email được không?",
        "en": "Could you send that to me by email, please?",
        "simpleEn": "Send an email.",
        "vocabulary": [
          {
            "de": "schicken",
            "type": "verb",
            "en": "to send",
            "vi": "gửi",
            "ipa": "ˈʃɪkn̩",
            "say": "schicken"
          },
          {
            "de": "die E-Mail",
            "type": "noun",
            "en": "email",
            "vi": "thư điện tử",
            "plural": "die E-Mails",
            "ipa": "diː ˈiːmeɪ̯l",
            "say": "die E-Mail"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      },
      {
        "simple": "Antworten Sie bitte.",
        "simpleVi": "Trả lời giúp tôi.",
        "tactful": "Könnten Sie mir bitte eine Rückmeldung geben?",
        "vi": "Anh/chị có thể phản hồi giúp tôi được không?",
        "en": "Could you give me a reply, please?",
        "simpleEn": "Please reply.",
        "vocabulary": [
          {
            "de": "die Rückmeldung",
            "type": "noun",
            "en": "reply; feedback",
            "vi": "phản hồi",
            "plural": "die Rückmeldungen",
            "ipa": "diː ˈʁʏkˌmɛldʊŋ",
            "say": "die Rückmeldung"
          },
          {
            "de": "geben",
            "type": "verb",
            "en": "to give",
            "vi": "cho; đưa",
            "ipa": "ˈɡeːbn̩",
            "say": "geben"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 6,
    "de": "Begrüßen & wünschen",
    "en": "Greetings & wishes",
    "vi": "Chào hỏi và lời chúc",
    "intro": {
      "de": "Bei Begrüßungen und Anlässen; wähle die passende Tageszeit und Beziehung.",
      "en": "For greetings and special occasions; choose a greeting that fits the time of day and your relationship.",
      "vi": "Khi chào hỏi hoặc trong dịp đặc biệt; chọn lời chào phù hợp thời điểm và mối quan hệ."
    },
    "rows": [
      {
        "simple": "Wie geht’s?",
        "tactful": "Wie geht es dir in letzter Zeit?",
        "vi": "Dạo gần đây bạn thế nào?",
        "simpleEn": "How are you?",
        "simpleVi": "Bạn khỏe không?",
        "en": "How have you been lately?",
        "vocabulary": [
          {
            "de": "gehen",
            "type": "verb",
            "en": "to go; to be going",
            "vi": "đi; diễn ra",
            "ipa": "ˈɡeːən",
            "say": "gehen"
          },
          {
            "de": "in letzter Zeit",
            "type": "phrase",
            "en": "lately",
            "vi": "gần đây",
            "ipa": "ɪn ˈlɛtstɐ tsaɪ̯t",
            "say": "in letzter Zeit"
          }
        ],
        "analysis": {
          "pattern": "W-Frage + konjugiertes Verb",
          "de": "Das Fragewort steht zuerst, danach folgt das konjugierte Verb.",
          "en": "The question word comes first, followed by the conjugated verb.",
          "vi": "Từ để hỏi đứng đầu, theo sau là động từ đã chia."
        },
        "source": "document"
      },
      {
        "tactful": "Ich freue mich auf unser nächstes Treffen.",
        "en": "I look forward to our next meeting.",
        "vi": "Mình mong lần gặp tiếp theo của chúng ta.",
        "vocabulary": [
          {
            "de": "sich freuen auf + Akkusativ",
            "type": "verb",
            "en": "to look forward to",
            "vi": "mong chờ",
            "ipa": "zɪç ˈfʁɔʏ̯ən aʊ̯f",
            "say": "sich freuen auf"
          },
          {
            "de": "das Treffen",
            "type": "noun",
            "en": "meeting",
            "vi": "cuộc gặp",
            "plural": "die Treffen",
            "ipa": "das ˈtʁɛfn̩",
            "say": "das Treffen"
          }
        ],
        "analysis": {
          "pattern": "Reflexivpronomen",
          "de": "Das Reflexivpronomen richtet sich nach dem Subjekt und der Verbverbindung, zum Beispiel ich → mich.",
          "en": "The reflexive pronoun depends on the subject and verb expression, for example ich → mich.",
          "vi": "Đại từ phản thân phụ thuộc chủ ngữ và cấu trúc động từ, ví dụ ich → mich."
        },
        "source": "legacy-adapted",
        "simple": "Bis dann!",
        "simpleEn": "See you later!",
        "simpleVi": "Hẹn gặp lại nhé!"
      },
      {
        "tactful": "Ich wünsche dir alles Gute und viel Freude zum Geburtstag.",
        "en": "I wish you all the best and much happiness for your birthday.",
        "vi": "Mình chúc bạn mọi điều tốt đẹp và nhiều niềm vui nhân dịp sinh nhật.",
        "vocabulary": [
          {
            "de": "wünschen",
            "type": "verb",
            "en": "to wish",
            "vi": "chúc; mong muốn",
            "ipa": "ˈvʏnʃn̩",
            "say": "wünschen"
          },
          {
            "de": "der Geburtstag",
            "type": "noun",
            "en": "birthday",
            "vi": "sinh nhật",
            "plural": "die Geburtstage",
            "ipa": "deːɐ̯ ɡəˈbuːɐ̯tstaːk",
            "say": "der Geburtstag"
          },
          {
            "de": "alles Gute",
            "type": "phrase",
            "ipa": "ˈaləs ˈɡuːtə",
            "en": "all the best",
            "vi": "mọi điều tốt đẹp",
            "say": "alles Gute",
            "usageHelp": {
              "de": "Gute ist nach alles substantiviert und wird großgeschrieben; die feste Form lautet alles Gute.",
              "en": "Gute is nominalized after alles and capitalized; the fixed form is alles Gute.",
              "vi": "Gute được danh từ hóa sau alles nên viết hoa. Cụm cố định là alles Gute: mọi điều tốt đẹp; không nhầm với etwas Gutes."
            },
            "formHelp": {
              "base": "gut",
              "surface": "Gute",
              "example": "alles Gute",
              "de": "Gut wird hier substantiviert. Nach alles lautet die feste Form Gute mit Großbuchstaben und -e; nach etwas heißt es dagegen etwas Gutes.",
              "en": "Gut is nominalized here. After alles, the fixed form is capitalized Gute with -e; after etwas, it is etwas Gutes instead.",
              "vi": "gut được danh từ hóa ở đây. Sau alles dùng Gute, viết hoa và có -e; nhưng sau etwas lại là etwas Gutes với -es. Không gắn một đuôi giống nhau cho mọi trường hợp."
            }
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ. Gute wird nach alles als substantiviertes Adjektiv großgeschrieben.",
          "en": "The recipient is dative; the wish is accusative. Gute is capitalized after alles because it is a nominalized adjective.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ. Gute viết hoa sau alles vì là tính từ đã được danh từ hóa."
        },
        "source": "legacy-adapted",
        "simple": "Alles Gute zum Geburtstag!",
        "simpleEn": "Happy birthday!",
        "simpleVi": "Chúc mừng sinh nhật!"
      },
      {
        "tactful": "Schön, dass du da bist.",
        "en": "It is lovely that you are here.",
        "vi": "Thật vui vì bạn có mặt ở đây.",
        "vocabulary": [
          {
            "de": "schön",
            "type": "adjective",
            "en": "lovely; beautiful",
            "vi": "đẹp; thật vui",
            "ipa": "ʃøːn",
            "say": "schön"
          },
          {
            "de": "da sein",
            "type": "phrase",
            "en": "to be there; to be present",
            "vi": "có mặt",
            "ipa": "daː zaɪ̯n",
            "say": "da sein"
          }
        ],
        "analysis": {
          "pattern": "dass + … + Verb am Ende",
          "de": "Das konjugierte Verb steht am Ende des dass-Satzes.",
          "en": "The conjugated verb comes at the end of the dass-clause.",
          "vi": "Động từ chia đứng cuối mệnh đề mở đầu bằng dass."
        },
        "source": "legacy-adapted",
        "simple": "Herzlich willkommen!",
        "simpleEn": "A warm welcome!",
        "simpleVi": "Nhiệt liệt chào mừng!"
      },
      {
        "tactful": "Entschuldigung, könnten Sie das bitte wiederholen?",
        "en": "Excuse me, could you repeat that, please?",
        "vi": "Xin lỗi, anh/chị có thể nhắc lại điều đó không?",
        "vocabulary": [
          {
            "de": "wiederholen",
            "type": "verb",
            "en": "to repeat",
            "vi": "nhắc lại",
            "ipa": "viːdɐˈhoːlən",
            "say": "wiederholen"
          },
          {
            "de": "die Entschuldigung",
            "type": "noun",
            "en": "apology; excuse",
            "vi": "lời xin lỗi",
            "plural": "die Entschuldigungen",
            "ipa": "diː ɛntˈʃʊldɪɡʊŋ",
            "say": "die Entschuldigung"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "legacy-adapted",
        "simple": "Wie bitte?",
        "simpleEn": "Pardon? / What did you say?",
        "simpleVi": "Xin lỗi, bạn nói gì cơ? (giọng mạnh có thể bất bình)"
      },
      {
        "tactful": "Ich wünsche euch einen guten Appetit.",
        "en": "I wish you an enjoyable meal.",
        "vi": "Mình chúc mọi người ăn ngon miệng.",
        "vocabulary": [
          {
            "de": "wünschen",
            "type": "verb",
            "en": "to wish",
            "vi": "chúc; mong muốn",
            "ipa": "ˈvʏnʃn̩",
            "say": "wünschen"
          },
          {
            "de": "der Appetit",
            "type": "noun",
            "en": "appetite",
            "vi": "cảm giác ngon miệng",
            "plural": "kein gebräuchlicher Plural in dieser Bedeutung",
            "ipa": "deːɐ̯ apeˈtiːt",
            "say": "der Appetit"
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ.",
          "en": "The recipient is dative; the wish is accusative.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ."
        },
        "source": "legacy-adapted",
        "simple": "Guten Appetit!",
        "simpleEn": "Enjoy your meal!",
        "simpleVi": "Chúc ngon miệng!"
      },
      {
        "tactful": "Ich möchte auf unsere gemeinsame Zeit anstoßen.",
        "en": "I would like to toast our time together.",
        "vi": "Mình muốn nâng ly chúc khoảng thời gian bên nhau.",
        "vocabulary": [
          {
            "de": "anstoßen",
            "type": "verb",
            "en": "to toast; to clink glasses",
            "vi": "nâng ly; chạm ly",
            "ipa": "ˈanˌʃtoːsn̩",
            "say": "anstoßen"
          },
          {
            "de": "die Zeit",
            "type": "noun",
            "en": "time",
            "vi": "thời gian",
            "plural": "die Zeiten",
            "ipa": "diː tsaɪ̯t",
            "say": "die Zeit"
          },
          {
            "de": "gemeinsam",
            "type": "adjective",
            "ipa": "ɡəˈmaɪ̯nzaːm",
            "en": "shared; together",
            "vi": "chung; cùng nhau",
            "say": "gemeinsam",
            "formHelp": {
              "base": "gemeinsam",
              "surface": "gemeinsame",
              "example": "auf unsere gemeinsame Zeit",
              "de": "Zeit ist feminin; anstoßen auf verlangt Akkusativ. Nach unsere erhält gemeinsam hier die Endung -e.",
              "en": "Zeit is feminine; anstoßen auf takes accusative. After unsere, gemeinsam has the ending -e here.",
              "vi": "Zeit giống cái; anstoßen auf dùng Akkusativ (cách 4). Sau unsere, gemeinsam nhận đuôi -e trong câu này."
            }
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Prost! / Zum Wohl!",
        "simpleEn": "Cheers!",
        "simpleVi": "Cạn ly / Chúc sức khỏe!"
      },
      {
        "tactful": "Ich wünsche dir eine sichere und angenehme Fahrt.",
        "en": "I wish you a safe and pleasant journey.",
        "vi": "Mình chúc bạn có chuyến đi an toàn và dễ chịu.",
        "vocabulary": [
          {
            "de": "wünschen",
            "type": "verb",
            "en": "to wish",
            "vi": "chúc; mong muốn",
            "ipa": "ˈvʏnʃn̩",
            "say": "wünschen"
          },
          {
            "de": "sicher",
            "type": "adjective",
            "en": "certain; sure",
            "vi": "chắc chắn",
            "ipa": "ˈzɪçɐ",
            "say": "sicher",
            "formHelp": {
              "base": "sicher",
              "surface": "sichere",
              "example": "eine sichere und angenehme Fahrt",
              "de": "Fahrt ist feminin und steht als Wunschobjekt im Akkusativ. Nach eine haben sichere und angenehme die Endung -e.",
              "en": "Fahrt is feminine accusative as the object of the wish. After eine, sichere and angenehme have the ending -e.",
              "vi": "Fahrt giống cái, là tân ngữ Akkusativ (cách 4) của lời chúc. Sau eine, cả sichere và angenehme đều nhận -e."
            }
          },
          {
            "de": "angenehm",
            "type": "adjective",
            "ipa": "ˈanɡəneːm",
            "en": "pleasant",
            "vi": "dễ chịu",
            "say": "angenehm",
            "formHelp": {
              "base": "angenehm",
              "surface": "angenehme",
              "example": "eine sichere und angenehme Fahrt",
              "de": "Angenehm beschreibt Fahrt. Nach eine im Akkusativ Feminin lautet die Form angenehme mit -e.",
              "en": "Angenehm describes Fahrt. After eine in feminine accusative, it becomes angenehme with -e.",
              "vi": "angenehm bổ nghĩa cho Fahrt. Sau eine ở Akkusativ (cách 4) giống cái, dạng dùng là angenehme với đuôi -e."
            }
          },
          {
            "de": "die Fahrt",
            "type": "noun",
            "ipa": "diː faːɐ̯t",
            "en": "journey; ride",
            "vi": "chuyến đi",
            "say": "die Fahrt",
            "plural": "die Fahrten"
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ.",
          "en": "The recipient is dative; the wish is accusative.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ."
        },
        "source": "legacy-adapted",
        "simple": "Gute Fahrt!",
        "simpleEn": "Have a safe trip!",
        "simpleVi": "Chúc đi đường an toàn!"
      },
      {
        "tactful": "Ich wünsche dir eine erholsame Nacht.",
        "en": "I wish you a restful night.",
        "vi": "Mình chúc bạn một đêm nghỉ ngơi thật tốt.",
        "vocabulary": [
          {
            "de": "wünschen",
            "type": "verb",
            "en": "to wish",
            "vi": "chúc; mong muốn",
            "ipa": "ˈvʏnʃn̩",
            "say": "wünschen"
          },
          {
            "de": "erholsam",
            "type": "adjective",
            "en": "restful",
            "vi": "giúp nghỉ ngơi; thư thái",
            "ipa": "ɛɐ̯ˈhoːlzaːm",
            "say": "erholsam",
            "formHelp": {
              "base": "erholsam",
              "surface": "erholsame",
              "example": "eine erholsame Nacht",
              "de": "Nacht ist feminin und steht nach wünschen im Akkusativ. Nach eine wird erholsam zu erholsame.",
              "en": "Nacht is feminine accusative after wünschen. After eine, erholsam becomes erholsame.",
              "vi": "Nacht giống cái và ở Akkusativ (cách 4) sau wünschen. Sau eine, erholsam đổi thành erholsame, thêm -e."
            }
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ.",
          "en": "The recipient is dative; the wish is accusative.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ."
        },
        "source": "legacy-adapted",
        "simple": "Gute Nacht!",
        "simpleEn": "Good night!",
        "simpleVi": "Chúc ngủ ngon!"
      },
      {
        "tactful": "Ich wünsche dir viel Erfolg.",
        "en": "I wish you every success.",
        "vi": "Mình chúc bạn thành công.",
        "vocabulary": [
          {
            "de": "wünschen",
            "type": "verb",
            "en": "to wish",
            "vi": "chúc; mong muốn",
            "ipa": "ˈvʏnʃn̩",
            "say": "wünschen"
          },
          {
            "de": "der Erfolg",
            "type": "noun",
            "en": "success",
            "vi": "thành công",
            "plural": "die Erfolge",
            "ipa": "deːɐ̯ ɛɐ̯ˈfɔlk",
            "say": "der Erfolg"
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ.",
          "en": "The recipient is dative; the wish is accusative.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ."
        },
        "source": "legacy-adapted",
        "simple": "Viel Glück!",
        "simpleEn": "Good luck!",
        "simpleVi": "Chúc may mắn!"
      },
      {
        "simple": "Alles gut?",
        "tactful": "Ist bei dir alles in Ordnung?",
        "vi": "Mọi chuyện với bạn vẫn ổn chứ?",
        "simpleEn": "Everything okay?",
        "simpleVi": "Mọi chuyện ổn chứ?",
        "en": "Is everything all right with you?",
        "vocabulary": [
          {
            "de": "in Ordnung",
            "type": "phrase",
            "en": "all right; in order",
            "vi": "ổn; đúng quy củ",
            "ipa": "ɪn ˈʔɔʁdnʊŋ",
            "say": "in Ordnung"
          },
          {
            "de": "alles",
            "type": "pronoun",
            "en": "everything",
            "vi": "mọi thứ; mọi chuyện",
            "ipa": "ˈaləs",
            "say": "alles"
          }
        ],
        "analysis": {
          "pattern": "Ja-/Nein-Frage",
          "de": "Das konjugierte Verb steht vor dem Subjekt.",
          "en": "The conjugated verb precedes the subject.",
          "vi": "Động từ chia đứng trước chủ ngữ trong câu hỏi có/không."
        },
        "source": "document"
      },
      {
        "simple": "Tschüss!",
        "tactful": "Mach’s gut und komm gut nach Hause!",
        "vi": "Giữ gìn nhé, về nhà an toàn!",
        "simpleEn": "Bye!",
        "simpleVi": "Tạm biệt!",
        "en": "Take care and get home safely!",
        "vocabulary": [
          {
            "de": "nach Hause",
            "type": "phrase",
            "en": "home; towards home",
            "vi": "về nhà",
            "ipa": "naːx ˈhaʊ̯zə",
            "say": "nach Hause"
          },
          {
            "de": "kommen",
            "type": "verb",
            "en": "to come; to happen",
            "vi": "đến; xảy ra",
            "ipa": "ˈkɔmən",
            "say": "kommen"
          }
        ],
        "analysis": {
          "pattern": "Imperativ: machen → mach · kommen → komm",
          "de": "Mach und komm sind Imperativformen für du. Mach’s ist die Kurzform von mach es; nach Hause bezeichnet die Richtung.",
          "en": "Mach and komm are du-imperatives. Mach’s is short for mach es; nach Hause indicates direction.",
          "vi": "Mach và komm là mệnh lệnh cho du. Mach’s rút gọn từ mach es; nach Hause chỉ hướng về nhà."
        },
        "source": "document"
      },
      {
        "simple": "Ich sage einfach du.",
        "simpleEn": "I will just use du.",
        "simpleVi": "Tôi cứ xưng du nhé.",
        "tactful": "Können wir uns duzen?",
        "en": "Can we use du with each other?",
        "vi": "Chúng ta xưng du với nhau được không?",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "sich duzen",
            "type": "verb",
            "en": "to address each other as du",
            "vi": "xưng du với nhau",
            "ipa": "zɪç ˈduːtsn̩",
            "say": "sich duzen"
          },
          {
            "de": "können",
            "type": "verb",
            "en": "can; to be able to",
            "vi": "có thể",
            "ipa": "ˈkœnən",
            "say": "können"
          }
        ],
        "analysis": {
          "pattern": "können + sich duzen",
          "de": "Können ist Indikativ Präsens. Uns ist das reziproke Pronomen zu sich duzen.",
          "en": "Können is present indicative. Uns is the reciprocal pronoun in sich duzen.",
          "vi": "Können là hiện tại thông thường. uns là đại từ chỉ quan hệ hai bên trong sich duzen."
        }
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 7,
    "de": "Kurze Reaktionen",
    "en": "Short reactions",
    "vi": "Phản hồi ngắn",
    "intro": {
      "de": "Als spontane Antwort; oft reicht ein Wort, aber die Intonation trägt die Haltung.",
      "en": "As a spontaneous reply; one word is often enough, but intonation carries your attitude.",
      "vi": "Dùng để phản hồi tự nhiên; đôi khi một từ là đủ, nhưng ngữ điệu thể hiện thái độ."
    },
    "rows": [
      {
        "tactful": "Ja, selbstverständlich.",
        "en": "Yes, of course.",
        "vi": "Vâng, tất nhiên rồi.",
        "vocabulary": [
          {
            "de": "selbstverständlich",
            "type": "adjective",
            "en": "self-evident; of course",
            "vi": "hiển nhiên; tất nhiên",
            "ipa": "ˌzɛlpstfɛɐ̯ˈʃtɛntlɪç",
            "say": "selbstverständlich"
          },
          {
            "de": "ja",
            "type": "adverb",
            "en": "yes",
            "vi": "vâng; có",
            "ipa": "jaː",
            "say": "ja"
          }
        ],
        "analysis": {
          "pattern": "Verkürzter Satz",
          "de": "Diese feste Wendung kann ohne konjugiertes Verb als vollständiger Gesprächsbeitrag stehen.",
          "en": "This fixed expression can function as a complete contribution without a conjugated verb.",
          "vi": "Cụm cố định này có thể dùng độc lập trong hội thoại dù không có động từ chia."
        },
        "source": "legacy-adapted",
        "simple": "Na klar!",
        "simpleEn": "Of course!",
        "simpleVi": "Tất nhiên rồi!"
      },
      {
        "simple": "Ach so.",
        "simpleEn": "Oh, I see.",
        "simpleVi": "À, ra vậy.",
        "tactful": "Verstanden, danke für die Information.",
        "en": "Understood; thank you for the information.",
        "vi": "Tôi hiểu rồi, cảm ơn thông tin của anh/chị.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "verstehen",
            "type": "verb",
            "en": "to understand",
            "vi": "hiểu",
            "ipa": "fɛɐ̯ˈʃteːən",
            "say": "verstehen"
          },
          {
            "de": "die Information",
            "type": "noun",
            "en": "information",
            "vi": "thông tin",
            "plural": "die Informationen",
            "ipa": "diː ɪnfɔʁmaˈtsi̯oːn",
            "say": "die Information"
          }
        ],
        "analysis": {
          "pattern": "verstehen → verstanden",
          "de": "Verstanden ist Partizip II von verstehen und steht hier als verkürzter Satz.",
          "en": "Verstanden is the past participle of verstehen, used as a shortened sentence here.",
          "vi": "Verstanden là Partizip II của verstehen, dùng trong câu rút gọn ở đây."
        }
      },
      {
        "tactful": "Das überrascht mich wirklich.",
        "en": "That really surprises me.",
        "vi": "Điều đó thật sự khiến mình ngạc nhiên.",
        "vocabulary": [
          {
            "de": "überraschen",
            "type": "verb",
            "en": "to surprise",
            "vi": "làm ngạc nhiên",
            "ipa": "yːbɐˈʁaʃn̩",
            "say": "überraschen"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự",
            "ipa": "ˈvɪʁklɪç",
            "say": "wirklich",
            "usageHelp": {
              "de": "Wirklich verstärkt hier die Aussage im Sinn von tatsächlich oder sehr.",
              "en": "Wirklich strengthens the statement here, meaning really or genuinely.",
              "vi": "wirklich nhấn mạnh sự việc là thực sự; không có đuôi theo giống hay cách của danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "legacy-adapted",
        "simple": "Ach was!",
        "simpleEn": "Oh, come on! / Really?",
        "simpleVi": "Thật sao / Làm gì có! (tùy ngữ cảnh)"
      },
      {
        "simple": "Schade.",
        "tactful": "Das finde ich wirklich bedauerlich.",
        "vi": "Mình thật sự thấy điều đó đáng tiếc.",
        "simpleEn": "What a shame.",
        "simpleVi": "Tiếc quá.",
        "en": "I find that truly regrettable.",
        "vocabulary": [
          {
            "de": "bedauerlich",
            "type": "adjective",
            "en": "regrettable",
            "vi": "đáng tiếc",
            "ipa": "bəˈdaʊ̯ɐlɪç",
            "say": "bedauerlich"
          },
          {
            "de": "finden",
            "type": "verb",
            "en": "to find; to consider",
            "vi": "thấy; cho là",
            "ipa": "ˈfɪndn̩",
            "say": "finden"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "document"
      },
      {
        "tactful": "Ist das tatsächlich so?",
        "en": "Is that really the case?",
        "vi": "Thực sự là như vậy sao?",
        "vocabulary": [
          {
            "de": "tatsächlich",
            "type": "adverb",
            "en": "really; actually",
            "vi": "thực sự",
            "ipa": "ˈtaːtˌzɛçlɪç",
            "say": "tatsächlich"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì",
            "ipa": "zaɪ̯n",
            "say": "sein"
          }
        ],
        "analysis": {
          "pattern": "Ja-/Nein-Frage",
          "de": "Das konjugierte Verb steht vor dem Subjekt.",
          "en": "The conjugated verb precedes the subject.",
          "vi": "Động từ chia đứng trước chủ ngữ trong câu hỏi có/không."
        },
        "source": "legacy-adapted",
        "simple": "Echt?",
        "simpleEn": "Really?",
        "simpleVi": "Thật à?"
      },
      {
        "tactful": "Das ist wirklich außergewöhnlich.",
        "en": "That really is extraordinary.",
        "vi": "Điều đó thật sự khác thường.",
        "vocabulary": [
          {
            "de": "außergewöhnlich",
            "type": "adjective",
            "en": "extraordinary",
            "vi": "khác thường",
            "ipa": "ˈaʊ̯sɐɡəˌvøːnlɪç",
            "say": "außergewöhnlich"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự",
            "ipa": "ˈvɪʁklɪç",
            "say": "wirklich",
            "usageHelp": {
              "de": "Wirklich verstärkt hier die Aussage im Sinn von tatsächlich oder sehr.",
              "en": "Wirklich strengthens the statement here, meaning really or genuinely.",
              "vi": "wirklich nhấn mạnh sự việc là thực sự; không có đuôi theo giống hay cách của danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Krass!",
        "simpleEn": "That’s wild! / Awesome!",
        "simpleVi": "Ghê thật / Đỉnh thật / Sốc thật! (khẩu ngữ)"
      },
      {
        "tactful": "Das klingt wirklich schwierig.",
        "en": "That really sounds difficult.",
        "vi": "Nghe có vẻ thực sự khó khăn.",
        "vocabulary": [
          {
            "de": "schwierig",
            "type": "adjective",
            "en": "difficult",
            "vi": "khó",
            "ipa": "ˈʃviːʁɪç",
            "say": "schwierig"
          },
          {
            "de": "klingen",
            "type": "verb",
            "en": "to sound",
            "vi": "nghe có vẻ",
            "ipa": "ˈklɪŋən",
            "say": "klingen"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Oh je!",
        "simpleEn": "Oh dear!",
        "simpleVi": "Ôi trời / Ôi thôi! (lo lắng)"
      },
      {
        "tactful": "Habe ich das richtig verstanden?",
        "en": "Have I understood that correctly?",
        "vi": "Mình hiểu như vậy có đúng không?",
        "vocabulary": [
          {
            "de": "richtig",
            "type": "adjective",
            "en": "correct; right",
            "vi": "đúng",
            "ipa": "ˈʁɪçtɪç",
            "say": "richtig"
          },
          {
            "de": "verstehen",
            "type": "verb",
            "en": "to understand",
            "vi": "hiểu",
            "ipa": "fɛɐ̯ˈʃteːən",
            "say": "verstehen"
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "legacy-adapted",
        "simple": "Stimmt’s?",
        "simpleEn": "Right? / Isn’t that so?",
        "simpleVi": "Đúng không?"
      },
      {
        "tactful": "Ich bin da noch nicht ganz überzeugt.",
        "en": "I am not entirely convinced about that yet.",
        "vi": "Mình vẫn chưa hoàn toàn bị thuyết phục về điều đó.",
        "vocabulary": [
          {
            "de": "überzeugt",
            "type": "adjective",
            "en": "convinced",
            "vi": "được thuyết phục; tin chắc",
            "ipa": "yːbɐˈtsɔʏ̯kt",
            "say": "überzeugt"
          },
          {
            "de": "noch",
            "type": "adverb",
            "en": "still; yet",
            "vi": "vẫn; còn",
            "ipa": "nɔx",
            "say": "noch",
            "usageHelp": {
              "de": "Noch kann eine Fortdauer oder eine zusätzliche Menge ausdrücken; die Bedeutung hängt von der Verbindung ab.",
              "en": "Noch can indicate continuation or an additional amount, depending on the expression.",
              "vi": "noch có thể là vẫn/còn hoặc thêm một ít; cần đọc theo cả cụm, như noch nicht = chưa."
            }
          },
          {
            "de": "noch nicht",
            "type": "phrase",
            "ipa": "nɔx nɪçt",
            "en": "not yet",
            "vi": "chưa",
            "say": "noch nicht"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Na ja …",
        "simpleEn": "Well… / So-so.",
        "simpleVi": "Ừm / Cũng tàm tạm / Thôi thì…"
      },
      {
        "simple": "Danke.",
        "tactful": "Das weiß ich wirklich zu schätzen.",
        "vi": "Mình thực sự trân trọng điều đó.",
        "simpleEn": "Thanks.",
        "simpleVi": "Cảm ơn.",
        "en": "I really appreciate that.",
        "vocabulary": [
          {
            "de": "schätzen",
            "type": "verb",
            "en": "to appreciate; to value",
            "vi": "trân trọng; đánh giá cao",
            "ipa": "ˈʃɛtsn̩",
            "say": "schätzen"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự",
            "ipa": "ˈvɪʁklɪç",
            "say": "wirklich",
            "usageHelp": {
              "de": "Wirklich verstärkt hier die Aussage im Sinn von tatsächlich oder sehr.",
              "en": "Wirklich strengthens the statement here, meaning really or genuinely.",
              "vi": "wirklich nhấn mạnh sự việc là thực sự; không có đuôi theo giống hay cách của danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "etwas zu schätzen wissen",
          "de": "Weiß ist Präsens von wissen. Zu schätzen gehört zur festen Verbindung etwas zu schätzen wissen.",
          "en": "Weiß is the present form of wissen. Zu schätzen belongs to the fixed expression etwas zu schätzen wissen.",
          "vi": "Weiß là hiện tại của wissen. zu schätzen thuộc cụm cố định etwas zu schätzen wissen."
        },
        "source": "document"
      },
      {
        "simple": "Gut gemacht!",
        "tactful": "Das hast du wirklich gut hinbekommen.",
        "vi": "Bạn đã xử lý việc đó rất tốt.",
        "simpleEn": "Well done!",
        "simpleVi": "Làm tốt lắm!",
        "en": "You handled that really well.",
        "vocabulary": [
          {
            "de": "hinbekommen",
            "type": "verb",
            "en": "to manage; to get right",
            "vi": "xoay xở; làm được",
            "ipa": "ˈhɪnbəˌkɔmən",
            "say": "hinbekommen"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự",
            "ipa": "ˈvɪʁklɪç",
            "say": "wirklich",
            "usageHelp": {
              "de": "Wirklich verstärkt hier die Aussage im Sinn von tatsächlich oder sehr.",
              "en": "Wirklich strengthens the statement here, meaning really or genuinely.",
              "vi": "wirklich nhấn mạnh sự việc là thực sự; không có đuôi theo giống hay cách của danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "document"
      },
      {
        "simple": "Passt schon.",
        "simpleEn": "It is okay.",
        "simpleVi": "Ổn mà.",
        "tactful": "Für mich ist das so in Ordnung, danke.",
        "en": "That is fine with me as it is, thank you.",
        "vi": "Với mình thì như vậy ổn rồi, cảm ơn.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "in Ordnung",
            "type": "phrase",
            "en": "all right; in order",
            "vi": "ổn; đúng quy củ",
            "ipa": "ɪn ˈʔɔʁdnʊŋ",
            "say": "in Ordnung"
          },
          {
            "de": "danken",
            "type": "verb",
            "en": "to thank",
            "vi": "cảm ơn",
            "ipa": "ˈdaŋkn̩",
            "say": "danken"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        }
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 8,
    "de": "Gefühle & Zustände",
    "en": "Feelings & states",
    "vi": "Cảm xúc và trạng thái",
    "intro": {
      "de": "Wenn du über Bedürfnisse, Stimmung oder Belastung sprichst. Direktheit ist nicht immer unhöflich.",
      "en": "When talking about needs, mood, or stress. Being direct is not always impolite.",
      "vi": "Khi nói về nhu cầu, tâm trạng hoặc áp lực. Nói thẳng không phải lúc nào cũng bất lịch sự."
    },
    "rows": [
      {
        "tactful": "So möchte ich nicht weitermachen.",
        "en": "I do not want to carry on like this.",
        "vi": "Mình không muốn tiếp tục như thế này.",
        "vocabulary": [
          {
            "de": "weitermachen",
            "type": "verb",
            "en": "to continue",
            "vi": "tiếp tục",
            "ipa": "ˈvaɪ̯tɐˌmaxn̩",
            "say": "weitermachen"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng",
            "ipa": "ˈmœçtn̩",
            "say": "möchten"
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Ich habe die Nase voll.",
        "simpleEn": "I’m fed up.",
        "simpleVi": "Tôi chán ngấy rồi / Ngán tận cổ rồi."
      },
      {
        "tactful": "Ich bin sehr erleichtert.",
        "en": "I am very relieved.",
        "vi": "Mình cảm thấy rất nhẹ nhõm.",
        "vocabulary": [
          {
            "de": "erleichtert",
            "type": "adjective",
            "en": "relieved",
            "vi": "nhẹ nhõm",
            "ipa": "ɛɐ̯ˈlaɪ̯çtɐt",
            "say": "erleichtert"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì",
            "ipa": "zaɪ̯n",
            "say": "sein"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Mir fällt ein Stein vom Herzen.",
        "simpleEn": "That’s a weight off my shoulders.",
        "simpleVi": "Tôi nhẹ cả người. (thành ngữ đầy đủ)"
      },
      {
        "tactful": "Ich bin im Moment sehr erschöpft.",
        "en": "I am very exhausted at the moment.",
        "vi": "Hiện giờ mình rất kiệt sức.",
        "vocabulary": [
          {
            "de": "erschöpft",
            "type": "adjective",
            "en": "exhausted",
            "vi": "kiệt sức",
            "ipa": "ɛɐ̯ˈʃœpft",
            "say": "erschöpft"
          },
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại",
            "ipa": "ɪm moˈmɛnt",
            "say": "im Moment"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Ich bin fix und fertig.",
        "simpleEn": "I’m completely exhausted.",
        "simpleVi": "Tôi kiệt sức / suy sụp rồi."
      },
      {
        "tactful": "Mein Budget ist im Moment leider sehr knapp.",
        "en": "Unfortunately, my budget is very tight at the moment.",
        "vi": "Tiếc là ngân sách của mình hiện rất eo hẹp.",
        "vocabulary": [
          {
            "de": "das Budget",
            "type": "noun",
            "en": "budget",
            "vi": "ngân sách",
            "plural": "die Budgets",
            "ipa": "das byˈdʒeː",
            "say": "das Budget"
          },
          {
            "de": "knapp",
            "type": "adjective",
            "en": "scarce; tight",
            "vi": "hạn hẹp; eo hẹp",
            "ipa": "knap",
            "say": "knapp"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Ich bin pleite.",
        "simpleEn": "I’m broke.",
        "simpleVi": "Tôi cháy túi rồi. (thân mật)"
      },
      {
        "tactful": "Ich würde mich über etwas Abwechslung freuen.",
        "en": "I would welcome a little variety.",
        "vi": "Mình sẽ rất vui nếu có chút thay đổi cho đỡ đơn điệu.",
        "vocabulary": [
          {
            "de": "die Abwechslung",
            "type": "noun",
            "en": "variety; change",
            "vi": "sự thay đổi cho đỡ đơn điệu",
            "plural": "die Abwechslungen",
            "ipa": "diː ˈapˌvɛkslʊŋ",
            "say": "die Abwechslung"
          },
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng",
            "ipa": "zɪç ˈfʁɔʏ̯ən",
            "say": "sich freuen"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Mir ist langweilig.",
        "simpleEn": "I’m bored.",
        "simpleVi": "Tôi đang thấy chán."
      },
      {
        "tactful": "Ich möchte mich dafür aufrichtig entschuldigen.",
        "en": "I would like to sincerely apologize for that.",
        "vi": "Mình muốn chân thành xin lỗi về việc đó.",
        "vocabulary": [
          {
            "de": "sich entschuldigen",
            "type": "verb",
            "en": "to apologize",
            "vi": "xin lỗi",
            "ipa": "zɪç ɛntˈʃʊldɪɡən",
            "say": "sich entschuldigen"
          },
          {
            "de": "aufrichtig",
            "type": "adjective",
            "en": "sincere",
            "vi": "chân thành",
            "ipa": "ˈaʊ̯fˌʁɪçtɪç",
            "say": "aufrichtig"
          },
          {
            "de": "dafür",
            "type": "adverb",
            "ipa": "daˈfyːɐ̯",
            "en": "for that; for it",
            "vi": "cho việc đó; về việc đó",
            "say": "dafür",
            "usageHelp": {
              "de": "Dafür verbindet da mit für und ersetzt die genannte Sache nach zuständig für oder sich entschuldigen für.",
              "en": "Dafür combines da with für and replaces the matter referred to in zuständig für or sich entschuldigen für.",
              "vi": "dafür = da + für, thay cho việc đã nhắc tới trong zuständig für hoặc sich entschuldigen für. Không phải thêm đuôi vào da."
            }
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Es tut mir leid.",
        "simpleEn": "I’m sorry.",
        "simpleVi": "Tôi xin lỗi / Tôi rất tiếc."
      },
      {
        "tactful": "Könnte ich bitte ein Glas Wasser bekommen?",
        "en": "Could I have a glass of water, please?",
        "vi": "Cho mình xin một cốc nước được không?",
        "vocabulary": [
          {
            "de": "das Glas",
            "type": "noun",
            "en": "glass",
            "vi": "cốc; ly",
            "plural": "die Gläser",
            "ipa": "das ɡlaːs",
            "say": "das Glas"
          },
          {
            "de": "bekommen",
            "type": "verb",
            "en": "to get; to receive",
            "vi": "nhận; được cấp",
            "ipa": "bəˈkɔmən",
            "say": "bekommen"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "legacy-adapted",
        "simple": "Ich habe Durst.",
        "simpleEn": "I’m thirsty.",
        "simpleVi": "Tôi khát."
      },
      {
        "tactful": "Ich würde gerne etwas essen.",
        "en": "I would like to have something to eat.",
        "vi": "Mình muốn ăn chút gì đó.",
        "vocabulary": [
          {
            "de": "essen",
            "type": "verb",
            "en": "to eat",
            "vi": "ăn",
            "ipa": "ˈɛsn̩",
            "say": "essen"
          },
          {
            "de": "gern",
            "type": "adverb",
            "en": "gladly; with pleasure",
            "vi": "sẵn lòng; thích",
            "ipa": "ɡɛʁn",
            "say": "gern",
            "usageHelp": {
              "de": "Gern und gerne sind gleichbedeutende Varianten; -e in gerne ist hier keine Adjektivendung.",
              "en": "Gern and gerne are equivalent variants; the -e in gerne is not an adjective ending here.",
              "vi": "gern và gerne là hai cách dùng cùng nghĩa. Chữ -e trong gerne không phải đuôi biến cách của tính từ."
            },
            "formHelp": {
              "base": "gern",
              "surface": "gerne",
              "de": "Gern und gerne sind gleichbedeutende Varianten. Das -e ist hier keine Deklinationsendung.",
              "en": "Gern and gerne are equivalent variants. The -e is not a declension ending here.",
              "vi": "gern và gerne là hai cách dùng tương đương. Chữ -e này không phải đuôi biến cách."
            }
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Ich habe Hunger.",
        "simpleEn": "I’m hungry.",
        "simpleVi": "Tôi đói."
      },
      {
        "simple": "Beruhige dich.",
        "tactful": "Wir können in Ruhe darüber sprechen.",
        "vi": "Chúng ta có thể bình tĩnh trao đổi chuyện này.",
        "simpleEn": "Calm down.",
        "simpleVi": "Bình tĩnh đi.",
        "en": "We can talk about it calmly.",
        "vocabulary": [
          {
            "de": "in Ruhe",
            "type": "phrase",
            "en": "calmly; without hurry",
            "vi": "bình tĩnh; thong thả",
            "ipa": "ɪn ˈʁuːə",
            "say": "in Ruhe"
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói",
            "ipa": "ˈʃpʁɛçn̩",
            "say": "sprechen"
          },
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó",
            "ipa": "daˈʁyːbɐ",
            "say": "darüber",
            "usageHelp": {
              "de": "Darüber ist da + über und verweist auf das Thema oder den Anlass.",
              "en": "Darüber is da plus über and refers to a topic or cause.",
              "vi": "darüber = da + über, chỉ chủ đề hoặc sự việc đã nhắc đến, ví dụ sprechen über hoặc sich freuen über."
            }
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
        },
        "source": "document"
      },
      {
        "simple": "Ich brauche einen Termin.",
        "simpleVi": "Tôi cần lịch hẹn.",
        "tactful": "Ich hätte gerne einen Termin, bitte.",
        "vi": "Cho tôi đặt một lịch hẹn nhé.",
        "en": "I would like an appointment, please.",
        "simpleEn": "I need an appointment.",
        "vocabulary": [
          {
            "de": "der Termin",
            "type": "noun",
            "en": "appointment",
            "vi": "lịch hẹn; cuộc hẹn",
            "plural": "die Termine",
            "ipa": "deːɐ̯ tɛʁˈmiːn",
            "say": "der Termin"
          },
          {
            "de": "hätte gern",
            "type": "phrase",
            "en": "would like to have",
            "vi": "muốn có; muốn gọi món",
            "ipa": "ˈhɛtə ɡɛʁn",
            "say": "hätte gern"
          }
        ],
        "analysis": {
          "pattern": "hätte/hätten + Akkusativ",
          "de": "Hätte/hätten ist Konjunktiv II von haben; das Objekt steht im Akkusativ.",
          "en": "Hätte/hätten is subjunctive II of haben; its object is accusative.",
          "vi": "hätte/hätten là Konjunktiv II của haben; tân ngữ trực tiếp ở Akkusativ."
        },
        "source": "editorial"
      },
      {
        "simple": "Das tut weh.",
        "simpleVi": "Chỗ đó đau.",
        "tactful": "An dieser Stelle habe ich Schmerzen.",
        "vi": "Tôi bị đau ở vị trí này.",
        "en": "I am in pain at this spot.",
        "simpleEn": "That hurts.",
        "vocabulary": [
          {
            "de": "die Stelle",
            "type": "noun",
            "en": "spot; place",
            "vi": "vị trí; chỗ",
            "plural": "die Stellen",
            "ipa": "diː ˈʃtɛlə",
            "say": "die Stelle"
          },
          {
            "de": "der Schmerz",
            "type": "noun",
            "en": "pain",
            "vi": "cơn đau",
            "plural": "die Schmerzen",
            "ipa": "deːɐ̯ ʃmɛʁts",
            "say": "der Schmerz"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "editorial"
      },
      {
        "simple": "Wie nehme ich das?",
        "simpleVi": "Tôi uống cái này thế nào?",
        "tactful": "Können Sie mir bitte erklären, wann und wie ich dieses Medikament einnehmen soll?",
        "vi": "Anh/chị giải thích giúp tôi cần dùng thuốc này lúc nào và như thế nào được không?",
        "en": "Could you explain when and how I should take this medication, please?",
        "simpleEn": "How do I take this?",
        "vocabulary": [
          {
            "de": "das Medikament",
            "type": "noun",
            "en": "medication",
            "vi": "thuốc",
            "plural": "die Medikamente",
            "ipa": "das medikaˈmɛnt",
            "say": "das Medikament"
          },
          {
            "de": "einnehmen",
            "type": "verb",
            "en": "to take medicine",
            "vi": "dùng; uống thuốc",
            "ipa": "ˈaɪ̯nˌneːmən",
            "say": "einnehmen"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende. Dieses ist ein Demonstrativartikel im Akkusativ Neutrum zu Medikament; -es gehört hier zum Artikelwort.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last. Dieses is a neuter accusative demonstrative determiner agreeing with Medikament; -es belongs to the determiner here.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối. dieses là từ chỉ định ở Akkusativ giống trung, hòa hợp với Medikament; đuôi -es ở đây nằm ở từ chỉ định, không phải danh từ."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich habe Angst.",
        "simpleVi": "Tôi sợ.",
        "tactful": "Ich habe Angst und möchte gerne darüber sprechen.",
        "vi": "Mình đang sợ và muốn nói về điều đó.",
        "en": "I am afraid and would like to talk about it.",
        "simpleEn": "I am afraid.",
        "vocabulary": [
          {
            "de": "die Angst",
            "type": "noun",
            "en": "fear",
            "vi": "nỗi sợ",
            "plural": "die Ängste",
            "ipa": "diː aŋst",
            "say": "die Angst"
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói",
            "ipa": "ˈʃpʁɛçn̩",
            "say": "sprechen"
          },
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó",
            "ipa": "daˈʁyːbɐ",
            "say": "darüber",
            "usageHelp": {
              "de": "Darüber ist da + über und verweist auf das Thema oder den Anlass.",
              "en": "Darüber is da plus über and refers to a topic or cause.",
              "vi": "darüber = da + über, chỉ chủ đề hoặc sự việc đã nhắc đến, ví dụ sprechen über hoặc sich freuen über."
            }
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
        },
        "source": "editorial"
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 9,
    "de": "Häufige Fragen",
    "en": "Common questions",
    "vi": "Câu hỏi thường gặp",
    "intro": {
      "de": "Fragen nach Befinden, Informationen und Orientierung. Mit vertrauten Personen passt oft du; in formellen Situationen kann Sie passen.",
      "en": "Questions about well-being, information and finding your way. Du often suits familiar people; Sie may suit formal situations.",
      "vi": "Hỏi thăm, hỏi thông tin và phương hướng. du thường hợp khi thân quen; Sie có thể phù hợp trong giao tiếp trang trọng."
    },
    "rows": [
      {
        "tactful": "Gibt es etwas, das du mit mir besprechen möchtest?",
        "en": "Is there something you would like to discuss with me?",
        "vi": "Có điều gì bạn muốn trao đổi với mình không?",
        "vocabulary": [
          {
            "de": "besprechen",
            "type": "verb",
            "en": "to discuss",
            "vi": "bàn bạc",
            "ipa": "bəˈʃpʁɛçn̩",
            "say": "besprechen"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng",
            "ipa": "ˈmœçtn̩",
            "say": "möchten"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "Relativsatz",
          "de": "Das Relativpronomen bezieht sich auf ein Nomen; das konjugierte Verb steht am Ende.",
          "en": "The relative pronoun refers to a noun; the conjugated verb comes last.",
          "vi": "Đại từ quan hệ liên hệ tới một danh từ; động từ chia đứng cuối mệnh đề quan hệ."
        },
        "source": "legacy-adapted",
        "simple": "Was ist denn?",
        "simpleEn": "What’s the matter?",
        "simpleVi": "Có chuyện gì thế / Sao vậy?"
      },
      {
        "tactful": "Wie läuft es bei dir im Moment?",
        "en": "How are things going for you at the moment?",
        "vi": "Hiện tại mọi chuyện với bạn thế nào?",
        "vocabulary": [
          {
            "de": "laufen",
            "type": "verb",
            "en": "to go; to run",
            "vi": "diễn ra; chạy",
            "ipa": "ˈlaʊ̯fn̩",
            "say": "laufen"
          },
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại",
            "ipa": "ɪm moˈmɛnt",
            "say": "im Moment"
          }
        ],
        "analysis": {
          "pattern": "W-Frage + konjugiertes Verb",
          "de": "Das Fragewort steht zuerst, danach folgt das konjugierte Verb.",
          "en": "The question word comes first, followed by the conjugated verb.",
          "vi": "Từ để hỏi đứng đầu, theo sau là động từ đã chia."
        },
        "source": "legacy-adapted",
        "simple": "Was geht ab?",
        "simpleEn": "What’s up?",
        "simpleVi": "Có gì mới / Đang có chuyện gì thế? (rất thân mật)"
      },
      {
        "tactful": "Könnten Sie mir bitte sagen, wie spät es ist?",
        "en": "Could you tell me what time it is, please?",
        "vi": "Anh/chị cho tôi biết bây giờ là mấy giờ được không?",
        "vocabulary": [
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết",
            "ipa": "ˈzaːɡən",
            "say": "sagen"
          },
          {
            "de": "spät",
            "type": "adjective",
            "en": "late",
            "vi": "muộn",
            "ipa": "ʃpɛːt",
            "say": "spät"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Wie spät ist es?",
        "simpleEn": "What time is it?",
        "simpleVi": "Mấy giờ rồi?"
      },
      {
        "tactful": "Darf ich fragen, wie du heißt?",
        "en": "May I ask what your name is?",
        "vi": "Mình có thể hỏi tên bạn được không?",
        "vocabulary": [
          {
            "de": "fragen",
            "type": "verb",
            "en": "to ask",
            "vi": "hỏi",
            "ipa": "ˈfʁaːɡən",
            "say": "fragen"
          },
          {
            "de": "dürfen",
            "type": "verb",
            "en": "may; to be allowed to",
            "vi": "được phép",
            "ipa": "ˈdʏʁfn̩",
            "say": "dürfen"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Wie heißt du?",
        "simpleEn": "What’s your name?",
        "simpleVi": "Bạn tên gì? (thân mật)"
      },
      {
        "tactful": "Darf ich fragen, woher du kommst?",
        "en": "May I ask where you come from?",
        "vi": "Mình có thể hỏi bạn đến từ đâu được không?",
        "vocabulary": [
          {
            "de": "fragen",
            "type": "verb",
            "en": "to ask",
            "vi": "hỏi",
            "ipa": "ˈfʁaːɡən",
            "say": "fragen"
          },
          {
            "de": "kommen",
            "type": "verb",
            "en": "to come; to happen",
            "vi": "đến; xảy ra",
            "ipa": "ˈkɔmən",
            "say": "kommen"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Woher kommst du?",
        "simpleEn": "Where are you from?",
        "simpleVi": "Bạn đến từ đâu? (thân mật)"
      },
      {
        "tactful": "Gibt es etwas Neues, das du gerne erzählen möchtest?",
        "en": "Is there anything new you would like to share?",
        "vi": "Có chuyện gì mới bạn muốn kể không?",
        "vocabulary": [
          {
            "de": "erzählen",
            "type": "verb",
            "en": "to tell; to narrate",
            "vi": "kể chuyện",
            "ipa": "ɛɐ̯ˈtsɛːlən",
            "say": "erzählen"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng",
            "ipa": "ˈmœçtn̩",
            "say": "möchten"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          },
          {
            "de": "neu",
            "type": "adjective",
            "ipa": "nɔʏ̯",
            "en": "new",
            "vi": "mới",
            "say": "neu",
            "formHelp": {
              "base": "neu",
              "surface": "Neues",
              "example": "etwas Neues",
              "de": "Neues ist ein substantiviertes Adjektiv nach etwas. Es wird großgeschrieben und hat die starke Endung -es im Neutrum.",
              "en": "Neues is a nominalized adjective after etwas. It is capitalized and takes the strong neuter ending -es.",
              "vi": "Neues là tính từ được danh từ hóa sau etwas: một điều gì đó mới. Vì vậy viết hoa N và nhận đuôi mạnh -es ở giống trung."
            }
          }
        ],
        "analysis": {
          "pattern": "etwas Neues · substantiviertes Adjektiv · Relativsatz",
          "de": "Nach etwas steht Neues als substantiviertes Adjektiv mit Großbuchstaben und -es. Das ist das Relativpronomen dazu; möchtest steht am Ende des Relativsatzes.",
          "en": "After etwas, Neues is a capitalized nominalized adjective ending in -es. Das is its relative pronoun; möchtest ends the relative clause.",
          "vi": "Sau etwas, Neues là tính từ được danh từ hóa, viết hoa và nhận đuôi -es. das là đại từ quan hệ liên hệ với phần này; möchtest đứng cuối mệnh đề quan hệ."
        },
        "source": "legacy-adapted",
        "simple": "Was gibt’s Neues?",
        "simpleEn": "What’s new?",
        "simpleVi": "Có gì mới không?"
      },
      {
        "tactful": "Wie fühlst du dich im Moment?",
        "en": "How are you feeling at the moment?",
        "vi": "Hiện giờ bạn cảm thấy thế nào?",
        "vocabulary": [
          {
            "de": "sich fühlen",
            "type": "verb",
            "en": "to feel",
            "vi": "cảm thấy",
            "ipa": "zɪç ˈfyːlən",
            "say": "sich fühlen"
          },
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại",
            "ipa": "ɪm moˈmɛnt",
            "say": "im Moment"
          }
        ],
        "analysis": {
          "pattern": "W-Frage + konjugiertes Verb",
          "de": "Das Fragewort steht zuerst, danach folgt das konjugierte Verb.",
          "en": "The question word comes first, followed by the conjugated verb.",
          "vi": "Từ để hỏi đứng đầu, theo sau là động từ đã chia."
        },
        "source": "legacy-adapted",
        "simple": "Geht es dir gut?",
        "simpleEn": "Are you okay?",
        "simpleVi": "Bạn có ổn không?"
      },
      {
        "tactful": "Möchtest du erzählen, ob etwas passiert ist?",
        "en": "Would you like to say whether something happened?",
        "vi": "Bạn có muốn kể xem có chuyện gì xảy ra không?",
        "vocabulary": [
          {
            "de": "erzählen",
            "type": "verb",
            "en": "to tell; to narrate",
            "vi": "kể chuyện",
            "ipa": "ɛɐ̯ˈtsɛːlən",
            "say": "erzählen"
          },
          {
            "de": "passieren",
            "type": "verb",
            "en": "to happen",
            "vi": "xảy ra",
            "ipa": "paˈsiːʁən",
            "say": "passieren"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Ist was passiert?",
        "simpleEn": "Did something happen?",
        "simpleVi": "Có chuyện gì xảy ra à?"
      },
      {
        "tactful": "Könntest du mir bitte bei dieser Aufgabe helfen?",
        "en": "Could you help me with this task, please?",
        "vi": "Bạn giúp mình làm việc này được không?",
        "vocabulary": [
          {
            "de": "helfen",
            "type": "verb",
            "en": "to help",
            "vi": "giúp đỡ",
            "ipa": "ˈhɛlfn̩",
            "say": "helfen"
          },
          {
            "de": "die Aufgabe",
            "type": "noun",
            "en": "task",
            "vi": "nhiệm vụ; bài tập",
            "plural": "die Aufgaben",
            "ipa": "diː ˈaʊ̯fˌɡaːbə",
            "say": "die Aufgabe"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "legacy-adapted",
        "simple": "Kannst du mir helfen?",
        "simpleEn": "Can you help me?",
        "simpleVi": "Bạn giúp tôi được không? (thân mật)"
      },
      {
        "simple": "Ist hier frei?",
        "simpleVi": "Chỗ này trống không?",
        "tactful": "Entschuldigung, ist dieser Platz noch frei?",
        "vi": "Xin lỗi, chỗ này còn trống không?",
        "en": "Excuse me, is this seat still available?",
        "simpleEn": "Is this seat free?",
        "vocabulary": [
          {
            "de": "der Platz",
            "type": "noun",
            "en": "seat; place",
            "vi": "chỗ ngồi; chỗ",
            "plural": "die Plätze",
            "ipa": "deːɐ̯ plats",
            "say": "der Platz"
          },
          {
            "de": "frei",
            "type": "adjective",
            "en": "free; available",
            "vi": "trống; còn chỗ",
            "ipa": "fʁaɪ̯",
            "say": "frei"
          },
          {
            "de": "noch",
            "type": "adverb",
            "ipa": "nɔx",
            "en": "still; yet; some more",
            "vi": "vẫn; còn; thêm",
            "say": "noch",
            "usageHelp": {
              "de": "Noch kann eine Fortdauer oder eine zusätzliche Menge ausdrücken; die Bedeutung hängt von der Verbindung ab.",
              "en": "Noch can indicate continuation or an additional amount, depending on the expression.",
              "vi": "noch có thể là vẫn/còn hoặc thêm một ít; cần đọc theo cả cụm, như noch nicht = chưa."
            }
          }
        ],
        "analysis": {
          "pattern": "Ja-/Nein-Frage",
          "de": "Das konjugierte Verb steht vor dem Subjekt.",
          "en": "The conjugated verb precedes the subject.",
          "vi": "Động từ chia đứng trước chủ ngữ trong câu hỏi có/không."
        },
        "source": "editorial"
      },
      {
        "simple": "Gehen Sie weg.",
        "simpleVi": "Tránh ra.",
        "tactful": "Könnten Sie bitte kurz zur Seite gehen?",
        "vi": "Anh/chị có thể tránh sang một bên một chút không?",
        "en": "Could you step to the side for a moment, please?",
        "simpleEn": "Move away.",
        "vocabulary": [
          {
            "de": "zur Seite",
            "type": "phrase",
            "en": "to the side",
            "vi": "sang một bên",
            "ipa": "tsuːɐ̯ ˈzaɪ̯tə",
            "say": "zur Seite"
          },
          {
            "de": "gehen",
            "type": "verb",
            "en": "to go; to be going",
            "vi": "đi; diễn ra",
            "ipa": "ˈɡeːən",
            "say": "gehen"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      },
      {
        "simple": "Wo muss ich hin?",
        "simpleVi": "Tôi phải đi đâu?",
        "tactful": "Können Sie mir bitte sagen, an welchem Gleis der Zug nach Köln abfährt?",
        "vi": "Anh/chị cho biết tàu đi Köln xuất phát ở đường ray nào được không?",
        "en": "Could you tell me which platform the train to Cologne leaves from?",
        "simpleEn": "Where do I need to go?",
        "vocabulary": [
          {
            "de": "das Gleis",
            "type": "noun",
            "en": "railway track",
            "vi": "đường ray",
            "plural": "die Gleise",
            "ipa": "das ɡlaɪ̯s",
            "say": "das Gleis"
          },
          {
            "de": "abfahren",
            "type": "verb",
            "en": "to depart",
            "vi": "khởi hành",
            "ipa": "ˈapˌfaːʁən",
            "say": "abfahren"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Der Zug ist weg.",
        "simpleVi": "Tàu đi mất rồi.",
        "tactful": "Mein Zug ist bereits abgefahren.",
        "vi": "Chuyến tàu của tôi đã khởi hành rồi.",
        "en": "My train has already departed.",
        "simpleEn": "The train has left.",
        "vocabulary": [
          {
            "de": "abfahren",
            "type": "verb",
            "en": "to depart",
            "vi": "khởi hành",
            "ipa": "ˈapˌfaːʁən",
            "say": "abfahren"
          },
          {
            "de": "bereits",
            "type": "adverb",
            "en": "already",
            "vi": "đã; rồi",
            "ipa": "bəˈʁaɪ̯ts",
            "say": "bereits",
            "usageHelp": {
              "de": "Bereits ist eine formellere Variante von schon im Sinn von schon geschehen.",
              "en": "Bereits is a more formal alternative to schon, meaning already.",
              "vi": "bereits có nghĩa là đã/rồi, gần nghĩa schon; không phải dạng có thêm đuôi để hòa hợp với danh từ."
            }
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "editorial"
      }
    ],
    "topics": [],
    "source": "merged"
  },
  {
    "id": 10,
    "de": "Alltag & Reaktionen",
    "en": "Everyday situations",
    "vi": "Tình huống đời thường",
    "intro": {
      "de": "Beim Reagieren auf Fehler, Überraschung oder eine erledigte Aufgabe.",
      "en": "When reacting to a mistake, surprise, or a completed task.",
      "vi": "Khi phản ứng trước lỗi, điều bất ngờ hoặc một việc vừa hoàn thành."
    },
    "rows": [
      {
        "tactful": "So etwas kann jedem passieren.",
        "en": "That can happen to anyone.",
        "vi": "Chuyện như vậy có thể xảy ra với bất kỳ ai.",
        "vocabulary": [
          {
            "de": "passieren",
            "type": "verb",
            "en": "to happen",
            "vi": "xảy ra",
            "ipa": "paˈsiːʁən",
            "say": "passieren"
          },
          {
            "de": "jedem",
            "type": "pronoun",
            "en": "to anyone; to everyone",
            "vi": "với bất kỳ ai; Dativ của jeder",
            "ipa": "ˈjeːdəm",
            "say": "jedem"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Das kann passieren.",
        "simpleEn": "These things happen.",
        "simpleVi": "Chuyện đó có thể xảy ra mà. (an ủi)"
      },
      {
        "tactful": "Das kann ich kaum glauben.",
        "en": "I can hardly believe that.",
        "vi": "Mình gần như không thể tin được điều đó.",
        "vocabulary": [
          {
            "de": "glauben",
            "type": "verb",
            "en": "to believe",
            "vi": "tin",
            "ipa": "ˈɡlaʊ̯bn̩",
            "say": "glauben"
          },
          {
            "de": "kaum",
            "type": "adverb",
            "en": "hardly",
            "vi": "gần như không",
            "ipa": "kaʊ̯m",
            "say": "kaum",
            "usageHelp": {
              "de": "Kaum begrenzt die Aussage hier: fast nicht.",
              "en": "Kaum limits the statement here: almost not.",
              "vi": "kaum ở đây nghĩa là gần như không, không phải một đuôi biến đổi của tính từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Nicht zu fassen!",
        "simpleEn": "Unbelievable!",
        "simpleVi": "Không thể tin nổi!"
      },
      {
        "tactful": "Das finde ich wirklich bemerkenswert.",
        "en": "I find that truly remarkable.",
        "vi": "Mình thấy điều đó thật đáng chú ý.",
        "vocabulary": [
          {
            "de": "bemerkenswert",
            "type": "adjective",
            "en": "remarkable",
            "vi": "đáng chú ý",
            "ipa": "bəˈmɛʁkn̩sˌveːɐ̯t",
            "say": "bemerkenswert"
          },
          {
            "de": "finden",
            "type": "verb",
            "en": "to find; to consider",
            "vi": "thấy; cho là",
            "ipa": "ˈfɪndn̩",
            "say": "finden"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Das ist doch Wahnsinn!",
        "simpleEn": "That’s insane!",
        "simpleVi": "Thật điên rồ / khó tin!"
      },
      {
        "tactful": "Das ist mir im Moment zu viel.",
        "en": "This is too much for me at the moment.",
        "vi": "Hiện giờ việc này quá sức với mình.",
        "vocabulary": [
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại",
            "ipa": "ɪm moˈmɛnt",
            "say": "im Moment"
          },
          {
            "de": "zu viel",
            "type": "phrase",
            "en": "too much",
            "vi": "quá nhiều; quá mức",
            "ipa": "tsuː fiːl",
            "say": "zu viel"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Ich kann nicht mehr.",
        "simpleEn": "I can’t take it anymore.",
        "simpleVi": "Tôi không chịu nổi nữa / hết sức rồi."
      },
      {
        "tactful": "Das können wir gerne umsetzen.",
        "en": "We would be happy to implement that.",
        "vi": "Chúng ta có thể thực hiện việc đó.",
        "vocabulary": [
          {
            "de": "umsetzen",
            "type": "verb",
            "en": "to implement",
            "vi": "thực hiện; triển khai",
            "ipa": "ˈʊmˌzɛtsn̩",
            "say": "umsetzen"
          },
          {
            "de": "können",
            "type": "verb",
            "en": "can; to be able to",
            "vi": "có thể",
            "ipa": "ˈkœnən",
            "say": "können"
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Das lässt sich machen.",
        "simpleEn": "That can be arranged.",
        "simpleVi": "Việc đó làm được / Có thể thu xếp."
      },
      {
        "tactful": "Das ist für mich ebenfalls erkennbar.",
        "en": "That is apparent to me too.",
        "vi": "Mình cũng có thể nhận thấy điều đó.",
        "vocabulary": [
          {
            "de": "erkennbar",
            "type": "adjective",
            "en": "recognizable; apparent",
            "vi": "có thể nhận thấy",
            "ipa": "ɛɐ̯ˈkɛnbaːɐ̯",
            "say": "erkennbar"
          },
          {
            "de": "ebenfalls",
            "type": "adverb",
            "en": "also; likewise",
            "vi": "cũng",
            "ipa": "ˈeːbn̩ˌfals",
            "say": "ebenfalls",
            "usageHelp": {
              "de": "Ebenfalls bedeutet auch oder ebenso; -s ist Teil des Wortes und keine Pluralendung.",
              "en": "Ebenfalls means also or likewise; -s belongs to the word and is not a plural ending.",
              "vi": "ebenfalls nghĩa là cũng/tương tự. -s là một phần của từ, không phải đuôi số nhiều."
            }
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Das sieht man.",
        "simpleEn": "You can tell.",
        "simpleVi": "Nhìn là thấy / Điều đó thể hiện rõ."
      },
      {
        "tactful": "Ich bin bereit, wir können anfangen.",
        "en": "I am ready; we can begin.",
        "vi": "Mình đã sẵn sàng, chúng ta có thể bắt đầu.",
        "vocabulary": [
          {
            "de": "bereit",
            "type": "adjective",
            "en": "ready",
            "vi": "sẵn sàng",
            "ipa": "bəˈʁaɪ̯t",
            "say": "bereit"
          },
          {
            "de": "anfangen",
            "type": "verb",
            "en": "to begin",
            "vi": "bắt đầu",
            "ipa": "ˈanˌfaŋən",
            "say": "anfangen"
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
        },
        "source": "legacy-adapted",
        "simple": "Ich bin so weit.",
        "simpleEn": "I’m ready.",
        "simpleVi": "Tôi sẵn sàng rồi."
      },
      {
        "tactful": "Damit hatte ich bereits gerechnet.",
        "en": "I had already expected that.",
        "vi": "Mình đã dự tính điều đó rồi.",
        "vocabulary": [
          {
            "de": "rechnen mit",
            "type": "verb",
            "en": "to expect; to reckon with",
            "vi": "dự tính; tính đến",
            "ipa": "ˈʁɛçnən mɪt",
            "say": "rechnen mit"
          },
          {
            "de": "bereits",
            "type": "adverb",
            "en": "already",
            "vi": "đã; rồi",
            "ipa": "bəˈʁaɪ̯ts",
            "say": "bereits",
            "usageHelp": {
              "de": "Bereits ist eine formellere Variante von schon im Sinn von schon geschehen.",
              "en": "Bereits is a more formal alternative to schon, meaning already.",
              "vi": "bereits có nghĩa là đã/rồi, gần nghĩa schon; không phải dạng có thêm đuôi để hòa hợp với danh từ."
            }
          },
          {
            "de": "damit",
            "type": "adverb",
            "ipa": "daˈmɪt",
            "en": "with that; with it",
            "vi": "với việc đó; bằng điều đó",
            "say": "damit",
            "usageHelp": {
              "de": "Damit ist hier da + mit und ersetzt eine Sache nach mit; es ist in diesen Beispielen nicht die Konjunktion des Zwecks.",
              "en": "Damit is da plus mit here, replacing a matter following mit; it is not the purpose conjunction in these examples.",
              "vi": "damit ở các câu này là da + mit, thay cho mit + việc đó; không phải liên từ để chỉ mục đích là để."
            }
          }
        ],
        "analysis": {
          "pattern": "rechnen mit + Dativ → damit · hatte + Partizip II",
          "de": "Damit ersetzt mit + das erwartete Ereignis. Hatte … gerechnet ist Plusquamperfekt; rechnen bleibt in dieser Bedeutung mit mit verbunden.",
          "en": "Damit replaces mit plus the expected event. Hatte … gerechnet is past perfect; rechnen takes mit in this meaning.",
          "vi": "damit thay cho mit + điều đã dự tính. hatte … gerechnet là Plusquamperfekt; rechnen trong nghĩa dự tính đi với mit."
        },
        "source": "legacy-adapted",
        "simple": "Das wundert mich nicht.",
        "simpleEn": "That doesn’t surprise me.",
        "simpleVi": "Tôi không ngạc nhiên về chuyện đó."
      },
      {
        "tactful": "Vielen Dank, ich bin informiert.",
        "en": "Thank you; I have the information.",
        "vi": "Cảm ơn, mình đã nắm thông tin.",
        "vocabulary": [
          {
            "de": "informiert",
            "type": "adjective",
            "en": "informed",
            "vi": "đã nắm thông tin",
            "ipa": "ɪnfɔʁˈmiːɐ̯t",
            "say": "informiert"
          },
          {
            "de": "der Dank",
            "type": "noun",
            "en": "thanks; gratitude",
            "vi": "lời cảm ơn",
            "plural": "kein gebräuchlicher Plural in dieser Bedeutung",
            "ipa": "deːɐ̯ daŋk",
            "say": "der Dank"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
        },
        "source": "legacy-adapted",
        "simple": "Ich weiß Bescheid.",
        "simpleEn": "I’m in the know.",
        "simpleVi": "Tôi nắm được thông tin rồi."
      },
      {
        "tactful": "Ich freue mich, dass es jetzt losgeht.",
        "en": "I am happy that it is starting now.",
        "vi": "Mình rất vui vì giờ việc đó bắt đầu.",
        "vocabulary": [
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng",
            "ipa": "zɪç ˈfʁɔʏ̯ən",
            "say": "sich freuen"
          },
          {
            "de": "losgehen",
            "type": "verb",
            "en": "to start; to set off",
            "vi": "bắt đầu; khởi hành",
            "ipa": "ˈloːsˌɡeːən",
            "say": "losgehen"
          }
        ],
        "analysis": {
          "pattern": "dass + … + Verb am Ende",
          "de": "Das konjugierte Verb steht am Ende des dass-Satzes.",
          "en": "The conjugated verb comes at the end of the dass-clause.",
          "vi": "Động từ chia đứng cuối mệnh đề mở đầu bằng dass."
        },
        "source": "legacy-adapted",
        "simple": "Endlich!",
        "simpleEn": "Finally!",
        "simpleVi": "Cuối cùng cũng… / Mãi mới được!"
      },
      {
        "simple": "Ich weiß nicht.",
        "tactful": "Das weiß ich leider nicht; ich müsste es erst prüfen.",
        "vi": "Tiếc là tôi chưa biết điều đó; tôi cần kiểm tra trước.",
        "simpleEn": "I do not know.",
        "simpleVi": "Tôi không biết.",
        "en": "Unfortunately, I do not know that; I would need to check first.",
        "vocabulary": [
          {
            "de": "wissen",
            "type": "verb",
            "en": "to know",
            "vi": "biết",
            "ipa": "ˈvɪsn̩",
            "say": "wissen"
          },
          {
            "de": "prüfen",
            "type": "verb",
            "en": "to check; to examine",
            "vi": "kiểm tra",
            "ipa": "ˈpʁyːfn̩",
            "say": "prüfen"
          },
          {
            "de": "erst",
            "type": "adverb",
            "ipa": "eːɐ̯st",
            "en": "first; before doing something else",
            "vi": "trước tiên; trước khi làm việc khác",
            "say": "erst",
            "usageHelp": {
              "de": "Erst bezeichnet hier einen Schritt, der vor einem anderen erfolgen muss.",
              "en": "Erst marks a step that has to happen before another here.",
              "vi": "erst ở đây chỉ bước cần làm trước bước khác, không phải đuôi từ."
            }
          }
        ],
        "analysis": {
          "pattern": "müsste + Infinitiv · erst",
          "de": "Müsste ist Konjunktiv II von müssen; prüfen steht als Infinitiv am Ende. Erst nennt hier den notwendigen ersten Schritt, bevor eine Antwort möglich ist.",
          "en": "Müsste is subjunctive II of müssen; prüfen is the final infinitive. Erst identifies the step that comes before an answer can be given.",
          "vi": "müsste là Konjunktiv II của müssen; prüfen đứng cuối ở nguyên mẫu. erst chỉ bước cần làm trước khi có thể trả lời, không mang nghĩa đầu tiên về thứ hạng."
        },
        "source": "document"
      },
      {
        "simple": "Warte.",
        "tactful": "Einen Moment bitte, ich schaue kurz nach.",
        "vi": "Xin chờ một lát, tôi kiểm tra ngay.",
        "simpleEn": "Wait.",
        "simpleVi": "Chờ đã.",
        "en": "One moment, please; I will quickly check.",
        "vocabulary": [
          {
            "de": "nachschauen",
            "type": "verb",
            "en": "to look up; to check",
            "vi": "tra cứu; kiểm tra lại",
            "ipa": "ˈnaːxˌʃaʊ̯ən",
            "say": "nachschauen"
          },
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente",
            "ipa": "deːɐ̯ moˈmɛnt",
            "say": "der Moment"
          }
        ],
        "analysis": {
          "pattern": "Trennbares Verb",
          "de": "Im Hauptsatz wird das Präfix abgetrennt und steht am Ende, sofern kein Modalverb den Infinitiv verlangt.",
          "en": "In a main clause, the separable prefix comes at the end unless a modal requires the infinitive.",
          "vi": "Ở câu chính, tiền tố tách ra và đứng cuối khi không có động từ tình thái yêu cầu dạng nguyên mẫu."
        },
        "source": "document"
      },
      {
        "simple": "Ich mache das.",
        "tactful": "Ich kümmere mich darum und gebe Ihnen Bescheid.",
        "vi": "Tôi sẽ xử lý và thông báo lại.",
        "simpleEn": "I will do that.",
        "simpleVi": "Tôi sẽ làm việc đó.",
        "en": "I will take care of it and let you know.",
        "vocabulary": [
          {
            "de": "sich kümmern um",
            "type": "verb",
            "en": "to take care of",
            "vi": "chăm lo; xử lý việc gì",
            "ipa": "zɪç ˈkʏmɐn ʊm",
            "say": "sich kümmern um"
          },
          {
            "de": "Bescheid geben",
            "type": "phrase",
            "en": "to let someone know",
            "vi": "báo cho ai biết",
            "ipa": "bəˈʃaɪ̯t ˈɡeːbn̩",
            "say": "Bescheid geben"
          },
          {
            "de": "darum",
            "type": "adverb",
            "ipa": "daˈʁʊm",
            "en": "about that; of that",
            "vi": "về việc đó; lo việc đó",
            "say": "darum",
            "usageHelp": {
              "de": "Darum ist hier da + um in sich kümmern um.",
              "en": "Darum is da plus um here in sich kümmern um.",
              "vi": "darum ở đây = da + um trong sich kümmern um: lo việc đó; không nên dịch thành vì vậy trong câu này."
            }
          }
        ],
        "analysis": {
          "pattern": "sich kümmern um + Akkusativ → darum · jemandem Bescheid geben",
          "de": "Mich gehört zu sich kümmern. Darum ersetzt um + die genannte Aufgabe, nicht einen Folgesatz im Sinn von deshalb. Ihnen ist Dativ in jemandem Bescheid geben.",
          "en": "Mich belongs to sich kümmern. Darum replaces um plus the task mentioned, rather than meaning therefore here. Ihnen is dative in jemandem Bescheid geben.",
          "vi": "mich thuộc cụm sich kümmern. darum thay cho um + việc cần xử lý, không mang nghĩa vì vậy ở đây. Ihnen ở Dativ trong jemandem Bescheid geben."
        },
        "source": "document"
      },
      {
        "simple": "Hoffentlich schaffen wir das.",
        "simpleEn": "Hopefully we can do it.",
        "simpleVi": "Hy vọng chúng ta làm được.",
        "tactful": "Ich hoffe sehr, dass wir das schaffen.",
        "en": "I very much hope that we can do it.",
        "vi": "Mình rất hy vọng chúng ta làm được việc đó.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "hoffen",
            "type": "verb",
            "en": "to hope",
            "vi": "hy vọng",
            "ipa": "ˈhɔfn̩",
            "say": "hoffen"
          },
          {
            "de": "schaffen",
            "type": "verb",
            "en": "to manage; to accomplish",
            "vi": "xoay xở làm được; hoàn thành",
            "ipa": "ˈʃafn̩",
            "say": "schaffen"
          }
        ],
        "analysis": {
          "pattern": "dass + … + Verb am Ende",
          "de": "Das konjugierte Verb steht am Ende des dass-Satzes.",
          "en": "The conjugated verb comes at the end of the dass-clause.",
          "vi": "Động từ chia đứng cuối mệnh đề mở đầu bằng dass."
        }
      },
      {
        "simple": "Vielleicht kommt er heute.",
        "simpleEn": "Maybe he will come today.",
        "simpleVi": "Có lẽ hôm nay anh ấy đến.",
        "tactful": "Es ist möglich, dass er heute kommt.",
        "en": "It is possible that he will come today.",
        "vi": "Có khả năng hôm nay anh ấy đến.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "möglich",
            "type": "adjective",
            "en": "possible",
            "vi": "có thể xảy ra",
            "ipa": "ˈmøːklɪç",
            "say": "möglich"
          },
          {
            "de": "kommen",
            "type": "verb",
            "en": "to come; to happen",
            "vi": "đến; xảy ra",
            "ipa": "ˈkɔmən",
            "say": "kommen"
          }
        ],
        "analysis": {
          "pattern": "dass + … + Verb am Ende",
          "de": "Das konjugierte Verb steht am Ende des dass-Satzes.",
          "en": "The conjugated verb comes at the end of the dass-clause.",
          "vi": "Động từ chia đứng cuối mệnh đề mở đầu bằng dass."
        }
      },
      {
        "simple": "Ist halt so.",
        "simpleEn": "That is just how it is.",
        "simpleVi": "Nó là vậy thôi.",
        "tactful": "Das lässt sich leider nicht ändern.",
        "en": "Unfortunately, that cannot be changed.",
        "vi": "Tiếc là điều đó không thay đổi được.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "sich ändern",
            "type": "verb",
            "en": "to change",
            "vi": "thay đổi",
            "ipa": "zɪç ˈʔɛndɐn",
            "say": "sich ändern"
          },
          {
            "de": "lassen",
            "type": "verb",
            "en": "to let; to leave",
            "vi": "để; cho phép",
            "ipa": "ˈlasn̩",
            "say": "lassen"
          }
        ],
        "analysis": {
          "pattern": "sich lassen + Infinitiv",
          "de": "Lässt sich ändern entspricht hier kann geändert werden.",
          "en": "Lässt sich ändern means can be changed here.",
          "vi": "lässt sich ändern ở đây tương đương với có thể thay đổi được."
        }
      },
      {
        "simple": "Haben Sie kurz Zeit?",
        "simpleEn": "Do you have a moment?",
        "simpleVi": "Anh/chị có chút thời gian không?",
        "tactful": "Hätten Sie einen Moment Zeit für eine Rückfrage?",
        "en": "Would you have a moment for a follow-up question?",
        "vi": "Anh/chị có chút thời gian cho tôi hỏi lại một việc không?",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente",
            "ipa": "deːɐ̯ moˈmɛnt",
            "say": "der Moment"
          },
          {
            "de": "die Rückfrage",
            "type": "noun",
            "en": "follow-up question",
            "vi": "câu hỏi để làm rõ",
            "plural": "die Rückfragen",
            "ipa": "diː ˈʁʏkˌfʁaːɡə",
            "say": "die Rückfrage"
          }
        ],
        "analysis": {
          "pattern": "hätte/hätten + Akkusativ",
          "de": "Hätte/hätten ist Konjunktiv II von haben; das Objekt steht im Akkusativ.",
          "en": "Hätte/hätten is subjunctive II of haben; its object is accusative.",
          "vi": "hätte/hätten là Konjunktiv II của haben; tân ngữ trực tiếp ở Akkusativ."
        }
      },
      {
        "simple": "Keine Ahnung.",
        "simpleEn": "No idea.",
        "simpleVi": "Tôi không biết.",
        "tactful": "Das kann ich Ihnen im Moment leider nicht beantworten.",
        "en": "Unfortunately, I cannot answer that at the moment.",
        "vi": "Tiếc là hiện tại tôi không thể trả lời anh/chị điều đó.",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "beantworten",
            "type": "verb",
            "en": "to answer",
            "vi": "trả lời",
            "ipa": "bəˈʔantvɔʁtn̩",
            "say": "beantworten"
          },
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại",
            "ipa": "ɪm moˈmɛnt",
            "say": "im Moment"
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
        }
      },
      {
        "simple": "Ich will einen Kaffee.",
        "tactful": "Ich hätte gerne einen Kaffee, bitte.",
        "vi": "Cho tôi một cà phê nhé.",
        "simpleEn": "I want a coffee.",
        "simpleVi": "Tôi muốn một cà phê.",
        "en": "I would like a coffee, please.",
        "vocabulary": [
          {
            "de": "hätte gern",
            "type": "phrase",
            "en": "would like to have",
            "vi": "muốn có; muốn gọi món",
            "ipa": "ˈhɛtə ɡɛʁn",
            "say": "hätte gern"
          },
          {
            "de": "der Kaffee",
            "type": "noun",
            "en": "coffee",
            "vi": "cà phê",
            "plural": "die Kaffees (Sorten oder Portionen)",
            "ipa": "deːɐ̯ ˈkafe",
            "say": "der Kaffee"
          }
        ],
        "analysis": {
          "pattern": "hätte/hätten + Akkusativ",
          "de": "Hätte/hätten ist Konjunktiv II von haben; das Objekt steht im Akkusativ.",
          "en": "Hätte/hätten is subjunctive II of haben; its object is accusative.",
          "vi": "hätte/hätten là Konjunktiv II của haben; tân ngữ trực tiếp ở Akkusativ."
        },
        "source": "document"
      },
      {
        "simple": "Zu teuer.",
        "tactful": "Das liegt leider über meinem Budget.",
        "vi": "Tiếc là giá này vượt ngân sách của tôi.",
        "simpleEn": "Too expensive.",
        "simpleVi": "Đắt quá.",
        "en": "Unfortunately, that is above my budget.",
        "vocabulary": [
          {
            "de": "liegen",
            "type": "verb",
            "en": "to lie; to be situated",
            "vi": "nằm; ở một mức nào đó",
            "ipa": "ˈliːɡən",
            "say": "liegen"
          },
          {
            "de": "das Budget",
            "type": "noun",
            "en": "budget",
            "vi": "ngân sách",
            "plural": "die Budgets",
            "ipa": "das byˈdʒeː",
            "say": "das Budget"
          },
          {
            "de": "über + Dativ",
            "type": "preposition",
            "ipa": "ˈyːbɐ",
            "en": "above; over a stated limit",
            "vi": "cao hơn; vượt một mức nào đó",
            "say": "über"
          }
        ],
        "analysis": {
          "pattern": "über + Dativ · liegen über einem Betrag",
          "de": "Über meinem Budget nennt eine überschrittene finanzielle Grenze. In dieser festen Angabe mit liegen steht über mit Dativ; meinem ist Dativ Neutrum.",
          "en": "Über meinem Budget refers to an exceeded financial limit. In this expression with liegen, über takes dative; meinem is dative neuter.",
          "vi": "über meinem Budget chỉ mức vượt ngân sách. Trong cách diễn đạt với liegen này, über dùng Dativ; meinem là Dativ giống trung."
        },
        "source": "document"
      },
      {
        "simple": "Wo ist der Bahnhof?",
        "tactful": "Entschuldigung, könnten Sie mir sagen, wie ich zum Bahnhof komme?",
        "vi": "Xin lỗi, anh/chị có thể chỉ tôi đường đến ga không?",
        "simpleEn": "Where is the station?",
        "simpleVi": "Nhà ga ở đâu?",
        "en": "Excuse me, could you tell me how to get to the station?",
        "vocabulary": [
          {
            "de": "der Bahnhof",
            "type": "noun",
            "en": "train station",
            "vi": "nhà ga",
            "plural": "die Bahnhöfe",
            "ipa": "deːɐ̯ ˈbaːnˌhoːf",
            "say": "der Bahnhof"
          },
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết",
            "ipa": "ˈzaːɡən",
            "say": "sagen"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "document"
      },
      {
        "simple": "Mein Fehler.",
        "simpleVi": "Lỗi của tôi.",
        "tactful": "Da habe ich mich vertan, bitte entschuldigen Sie.",
        "vi": "Tôi đã nhầm ở chỗ đó, mong anh/chị thông cảm.",
        "en": "I made a mistake there; please excuse me.",
        "simpleEn": "My mistake.",
        "vocabulary": [
          {
            "de": "sich vertun",
            "type": "verb",
            "en": "to make a mistake",
            "vi": "nhầm lẫn",
            "ipa": "zɪç fɛɐ̯ˈtuːn",
            "say": "sich vertun"
          },
          {
            "de": "sich entschuldigen",
            "type": "verb",
            "en": "to apologize",
            "vi": "xin lỗi",
            "ipa": "zɪç ɛntˈʃʊldɪɡən",
            "say": "sich entschuldigen"
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich bin zu spät.",
        "simpleVi": "Tôi đến muộn.",
        "tactful": "Entschuldigen Sie bitte meine Verspätung.",
        "vi": "Xin lỗi anh/chị vì tôi đến muộn.",
        "en": "Please excuse my lateness.",
        "simpleEn": "I am late.",
        "vocabulary": [
          {
            "de": "sich entschuldigen",
            "type": "verb",
            "en": "to apologize",
            "vi": "xin lỗi",
            "ipa": "zɪç ɛntˈʃʊldɪɡən",
            "say": "sich entschuldigen"
          },
          {
            "de": "die Verspätung",
            "type": "noun",
            "en": "delay; lateness",
            "vi": "sự chậm trễ; việc đến muộn",
            "plural": "die Verspätungen",
            "ipa": "diː fɛɐ̯ˈʃpɛːtʊŋ",
            "say": "die Verspätung"
          }
        ],
        "analysis": {
          "pattern": "Imperativ: Verb + Sie",
          "de": "Bei der formellen Aufforderung steht das Verb vor Sie.",
          "en": "In the formal imperative, the verb precedes Sie.",
          "vi": "Trong mệnh lệnh trang trọng, động từ đứng trước Sie."
        },
        "source": "editorial"
      },
      {
        "simple": "Das wollte ich nicht.",
        "simpleVi": "Tôi không định như vậy.",
        "tactful": "Es tut mir leid, das war nicht meine Absicht.",
        "vi": "Mình xin lỗi, đó không phải chủ ý của mình.",
        "en": "I am sorry; that was not my intention.",
        "simpleEn": "I did not mean that.",
        "vocabulary": [
          {
            "de": "die Absicht",
            "type": "noun",
            "en": "intention",
            "vi": "ý định",
            "plural": "die Absichten",
            "ipa": "diː ˈapˌzɪçt",
            "say": "die Absicht"
          },
          {
            "de": "leidtun",
            "type": "verb",
            "en": "to be sorry",
            "vi": "lấy làm tiếc",
            "ipa": "ˈlaɪ̯tˌtuːn",
            "say": "leidtun"
          }
        ],
        "analysis": {
          "pattern": "Präteritum",
          "de": "War und hatte sind Präteritumformen von sein und haben.",
          "en": "War and hatte are past-tense forms of sein and haben.",
          "vi": "war và hatte là dạng Präteritum của sein và haben."
        },
        "source": "editorial"
      },
      {
        "simple": "Falsch geschickt.",
        "simpleVi": "Gửi nhầm rồi.",
        "tactful": "Entschuldigen Sie bitte, die vorige Nachricht war nicht für Sie bestimmt.",
        "vi": "Xin lỗi, tin nhắn trước không phải gửi cho anh/chị.",
        "en": "Sorry, the previous message was not intended for you.",
        "simpleEn": "Sent to the wrong person.",
        "vocabulary": [
          {
            "de": "die Nachricht",
            "type": "noun",
            "en": "message",
            "vi": "tin nhắn; tin tức",
            "plural": "die Nachrichten",
            "ipa": "diː ˈnaːxˌʁɪçt",
            "say": "die Nachricht"
          },
          {
            "de": "bestimmt für",
            "type": "phrase",
            "en": "intended for",
            "vi": "dành cho",
            "ipa": "bəˈʃtɪmt fyːɐ̯",
            "say": "bestimmt für"
          }
        ],
        "analysis": {
          "pattern": "Präteritum von sein: war",
          "de": "War ist die Präteritumform von sein. Für Sie nennt den vorgesehenen Empfänger.",
          "en": "War is the past-tense form of sein. Für Sie identifies the intended recipient.",
          "vi": "War là Präteritum của sein. für Sie chỉ người nhận dự kiến."
        },
        "source": "editorial"
      },
      {
        "simple": "Noch Wasser.",
        "simpleVi": "Thêm nước.",
        "tactful": "Könnten wir bitte noch etwas Wasser bekommen?",
        "vi": "Cho chúng tôi xin thêm chút nước được không?",
        "en": "Could we have some more water, please?",
        "simpleEn": "More water.",
        "vocabulary": [
          {
            "de": "bekommen",
            "type": "verb",
            "en": "to get; to receive",
            "vi": "nhận; được cấp",
            "ipa": "bəˈkɔmən",
            "say": "bekommen"
          },
          {
            "de": "das Wasser",
            "type": "noun",
            "en": "water",
            "vi": "nước",
            "plural": "kein gebräuchlicher Plural in dieser Bedeutung",
            "ipa": "das ˈvasɐ",
            "say": "das Wasser"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          },
          {
            "de": "noch",
            "type": "adverb",
            "ipa": "nɔx",
            "en": "still; yet; some more",
            "vi": "vẫn; còn; thêm",
            "say": "noch",
            "usageHelp": {
              "de": "Noch kann eine Fortdauer oder eine zusätzliche Menge ausdrücken; die Bedeutung hängt von der Verbindung ab.",
              "en": "Noch can indicate continuation or an additional amount, depending on the expression.",
              "vi": "noch có thể là vẫn/còn hoặc thêm một ít; cần đọc theo cả cụm, như noch nicht = chưa."
            }
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      },
      {
        "simple": "Das ist falsch.",
        "simpleVi": "Cái này sai rồi.",
        "tactful": "Entschuldigung, das entspricht nicht meiner Bestellung.",
        "vi": "Xin lỗi, món này không đúng với đơn tôi đã gọi.",
        "en": "Excuse me, that does not match my order.",
        "simpleEn": "That is wrong.",
        "vocabulary": [
          {
            "de": "entsprechen",
            "type": "verb",
            "en": "to correspond to; to match",
            "vi": "tương ứng; phù hợp",
            "ipa": "ɛntˈʃpʁɛçn̩",
            "say": "entsprechen"
          },
          {
            "de": "die Bestellung",
            "type": "noun",
            "en": "order",
            "vi": "đơn đặt hàng; món đã gọi",
            "plural": "die Bestellungen",
            "ipa": "diː bəˈʃtɛlʊŋ",
            "say": "die Bestellung"
          }
        ],
        "analysis": {
          "pattern": "Dativ",
          "de": "Entsprechen verlangt Dativ: meiner Bestellung.",
          "en": "Entsprechen takes dative: meiner Bestellung.",
          "vi": "entsprechen đi với Dativ: meiner Bestellung."
        },
        "source": "editorial"
      },
      {
        "simple": "Die Rechnung.",
        "simpleVi": "Hóa đơn.",
        "tactful": "Ich würde gerne bezahlen, bitte.",
        "vi": "Cho tôi thanh toán nhé.",
        "en": "I would like to pay, please.",
        "simpleEn": "The bill.",
        "vocabulary": [
          {
            "de": "bezahlen",
            "type": "verb",
            "en": "to pay for",
            "vi": "thanh toán",
            "ipa": "bəˈtsaːlən",
            "say": "bezahlen"
          },
          {
            "de": "gern",
            "type": "adverb",
            "en": "gladly; with pleasure",
            "vi": "sẵn lòng; thích",
            "ipa": "ɡɛʁn",
            "say": "gern",
            "usageHelp": {
              "de": "Gern und gerne sind gleichbedeutende Varianten; -e in gerne ist hier keine Adjektivendung.",
              "en": "Gern and gerne are equivalent variants; the -e in gerne is not an adjective ending here.",
              "vi": "gern và gerne là hai cách dùng cùng nghĩa. Chữ -e trong gerne không phải đuôi biến cách của tính từ."
            },
            "formHelp": {
              "base": "gern",
              "surface": "gerne",
              "de": "Gern und gerne sind gleichbedeutende Varianten. Das -e ist hier keine Deklinationsendung.",
              "en": "Gern and gerne are equivalent variants. The -e is not a declension ending here.",
              "vi": "gern và gerne là hai cách dùng tương đương. Chữ -e này không phải đuôi biến cách."
            }
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Ist das mit Nüssen?",
        "simpleVi": "Món này có hạt không?",
        "tactful": "Könnten Sie bitte prüfen, ob das Nüsse enthält?",
        "vi": "Anh/chị kiểm tra giúp món này có các loại hạt không?",
        "en": "Could you check whether this contains nuts, please?",
        "simpleEn": "Does that contain nuts?",
        "vocabulary": [
          {
            "de": "prüfen",
            "type": "verb",
            "en": "to check; to examine",
            "vi": "kiểm tra",
            "ipa": "ˈpʁyːfn̩",
            "say": "prüfen"
          },
          {
            "de": "enthalten",
            "type": "verb",
            "en": "to contain",
            "vi": "chứa",
            "ipa": "ɛntˈhaltn̩",
            "say": "enthalten"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich zahle mit Karte.",
        "simpleEn": "I am paying by card.",
        "simpleVi": "Tôi trả bằng thẻ.",
        "tactful": "Könnte ich bitte mit Karte bezahlen?",
        "en": "Could I pay by card, please?",
        "vi": "Tôi thanh toán bằng thẻ được không?",
        "source": "pdf",
        "vocabulary": [
          {
            "de": "bezahlen",
            "type": "verb",
            "en": "to pay for",
            "vi": "thanh toán",
            "ipa": "bəˈtsaːlən",
            "say": "bezahlen"
          },
          {
            "de": "die Karte",
            "type": "noun",
            "en": "card; map; menu",
            "vi": "thẻ; bản đồ; thực đơn",
            "plural": "die Karten",
            "ipa": "diː ˈkaʁtə",
            "say": "die Karte"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        }
      },
      {
        "simple": "Ich will das zurückgeben.",
        "simpleVi": "Tôi muốn trả món này.",
        "tactful": "Ich würde diesen Artikel gerne zurückgeben.",
        "vi": "Tôi muốn trả lại sản phẩm này.",
        "en": "I would like to return this item.",
        "simpleEn": "I want to return this.",
        "vocabulary": [
          {
            "de": "zurückgeben",
            "type": "verb",
            "en": "to return; to give back",
            "vi": "trả lại",
            "ipa": "tsuˈʁʏkˌɡeːbn̩",
            "say": "zurückgeben"
          },
          {
            "de": "der Artikel",
            "type": "noun",
            "en": "item; article",
            "vi": "món hàng; mạo từ; bài viết",
            "plural": "die Artikel",
            "ipa": "deːɐ̯ aʁˈtiːkl̩",
            "say": "der Artikel"
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Das ist kaputt.",
        "simpleVi": "Cái này hỏng rồi.",
        "tactful": "Dieser Artikel funktioniert leider nicht mehr.",
        "vi": "Tiếc là sản phẩm này không hoạt động nữa.",
        "en": "Unfortunately, this item no longer works.",
        "simpleEn": "This is broken.",
        "vocabulary": [
          {
            "de": "der Artikel",
            "type": "noun",
            "en": "item; article",
            "vi": "món hàng; mạo từ; bài viết",
            "plural": "die Artikel",
            "ipa": "deːɐ̯ aʁˈtiːkl̩",
            "say": "der Artikel"
          },
          {
            "de": "funktionieren",
            "type": "verb",
            "en": "to work; to function",
            "vi": "hoạt động",
            "ipa": "fʊŋktsi̯oˈniːʁən",
            "say": "funktionieren"
          },
          {
            "de": "nicht mehr",
            "type": "phrase",
            "ipa": "nɪçt meːɐ̯",
            "en": "no longer; not anymore",
            "vi": "không còn nữa",
            "say": "nicht mehr"
          }
        ],
        "analysis": {
          "pattern": "nicht mehr · Adverbial der Zeit",
          "de": "Nicht mehr bedeutet, dass der frühere Zustand aufgehört hat. Es ist nicht gleichbedeutend mit noch nicht.",
          "en": "Nicht mehr means an earlier state has ended. It does not mean the same as noch nicht.",
          "vi": "nicht mehr nghĩa là trạng thái trước đây đã chấm dứt: không còn nữa. Khác với noch nicht: chưa."
        },
        "source": "editorial"
      },
      {
        "simple": "Zu klein.",
        "simpleVi": "Nhỏ quá.",
        "tactful": "Das ist mir leider etwas zu klein.",
        "vi": "Tiếc là món này hơi nhỏ với tôi.",
        "en": "Unfortunately, that is a little too small for me.",
        "simpleEn": "Too small.",
        "vocabulary": [
          {
            "de": "klein",
            "type": "adjective",
            "en": "small",
            "vi": "nhỏ",
            "ipa": "klaɪ̯n",
            "say": "klein"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là",
            "ipa": "ˈlaɪ̯dɐ",
            "say": "leider",
            "usageHelp": {
              "de": "Leider kommentiert die gesamte Aussage als bedauerlich, nicht die Eigenschaft eines Nomens.",
              "en": "Leider comments on the whole statement as regrettable, rather than describing a noun.",
              "vi": "leider bình luận cả sự việc là đáng tiếc, không nêu đặc điểm của một danh từ nên không chia đuôi tính từ."
            }
          },
          {
            "de": "etwas",
            "type": "adverb",
            "ipa": "ˈɛtvas",
            "en": "a little; somewhat",
            "vi": "một chút; hơi",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "zu + Adjektiv",
          "de": "Zu steigert hier den Grad: zu klein; etwas schwächt ihn ab. Klein ist kein Komparativ.",
          "en": "Zu marks excess degree in zu klein; etwas softens it. Klein is not a comparative.",
          "vi": "zu đánh dấu mức quá: zu klein; etwas làm nhẹ mức độ. klein không phải dạng so sánh hơn."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich warte schon lange.",
        "simpleVi": "Tôi đợi lâu rồi.",
        "tactful": "Könnten Sie mir bitte sagen, wie lange ich noch warten muss?",
        "vi": "Anh/chị cho tôi biết tôi còn phải đợi bao lâu được không?",
        "en": "Could you tell me how much longer I need to wait, please?",
        "simpleEn": "I have been waiting a long time.",
        "vocabulary": [
          {
            "de": "warten",
            "type": "verb",
            "en": "to wait",
            "vi": "chờ",
            "ipa": "ˈvaʁtn̩",
            "say": "warten"
          },
          {
            "de": "wie lange",
            "type": "phrase",
            "en": "how long",
            "vi": "bao lâu",
            "ipa": "viː ˈlaŋə",
            "say": "wie lange"
          },
          {
            "de": "noch",
            "type": "adverb",
            "ipa": "nɔx",
            "en": "still; yet; some more",
            "vi": "vẫn; còn; thêm",
            "say": "noch",
            "usageHelp": {
              "de": "Noch kann eine Fortdauer oder eine zusätzliche Menge ausdrücken; die Bedeutung hängt von der Verbindung ab.",
              "en": "Noch can indicate continuation or an additional amount, depending on the expression.",
              "vi": "noch có thể là vẫn/còn hoặc thêm một ít; cần đọc theo cả cụm, như noch nicht = chưa."
            }
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Leiser!",
        "simpleVi": "Nhỏ tiếng thôi!",
        "tactful": "Könnten Sie die Lautstärke bitte etwas reduzieren?",
        "vi": "Anh/chị giảm âm lượng một chút giúp tôi được không?",
        "en": "Could you lower the volume a little, please?",
        "simpleEn": "Quieter!",
        "vocabulary": [
          {
            "de": "die Lautstärke",
            "type": "noun",
            "en": "volume",
            "vi": "âm lượng",
            "plural": "die Lautstärken",
            "ipa": "diː ˈlaʊ̯tˌʃtɛʁkə",
            "say": "die Lautstärke"
          },
          {
            "de": "reduzieren",
            "type": "verb",
            "en": "to reduce",
            "vi": "giảm",
            "ipa": "ʁeduˈtsiːʁən",
            "say": "reduzieren"
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      },
      {
        "simple": "Räumen Sie das weg.",
        "simpleVi": "Dọn cái đó đi.",
        "tactful": "Könnten Sie das bitte wegräumen?",
        "vi": "Anh/chị có thể dọn món đó đi giúp tôi không?",
        "en": "Could you move that away, please?",
        "simpleEn": "Move that away.",
        "vocabulary": [
          {
            "de": "wegräumen",
            "type": "verb",
            "en": "to clear away",
            "vi": "dọn đi",
            "ipa": "ˈvɛkˌʁɔʏ̯mən",
            "say": "wegräumen"
          },
          {
            "de": "können",
            "type": "verb",
            "en": "can; to be able to",
            "vi": "có thể",
            "ipa": "ˈkœnən",
            "say": "können"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      },
      {
        "simple": "Ihr Paket ist hier.",
        "simpleVi": "Bưu kiện của anh/chị ở đây.",
        "tactful": "Ich habe Ihr Paket hier für Sie aufbewahrt.",
        "vi": "Tôi đã giữ bưu kiện của anh/chị ở đây.",
        "en": "I have kept your parcel here for you.",
        "simpleEn": "Your parcel is here.",
        "vocabulary": [
          {
            "de": "das Paket",
            "type": "noun",
            "en": "parcel",
            "vi": "bưu kiện",
            "plural": "die Pakete",
            "ipa": "das paˈkeːt",
            "say": "das Paket"
          },
          {
            "de": "aufbewahren",
            "type": "verb",
            "en": "to keep safely; to store",
            "vi": "giữ; cất giữ",
            "ipa": "ˈaʊ̯fbəˌvaːʁən",
            "say": "aufbewahren"
          }
        ],
        "analysis": {
          "pattern": "haben/sein + Partizip II",
          "de": "Das Hilfsverb wird konjugiert, das Partizip II steht am Ende des Teilsatzes.",
          "en": "The auxiliary is conjugated; the past participle comes at the end of the clause.",
          "vi": "Trợ động từ chia theo chủ ngữ; Partizip II đứng cuối mệnh đề."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich brauche Ruhe.",
        "simpleVi": "Tôi cần yên tĩnh.",
        "tactful": "Ich würde jetzt gerne etwas zur Ruhe kommen.",
        "vi": "Bây giờ mình muốn được yên tĩnh nghỉ ngơi một chút.",
        "en": "I would like to have some peace and quiet now.",
        "simpleEn": "I need quiet.",
        "vocabulary": [
          {
            "de": "zur Ruhe kommen",
            "type": "phrase",
            "en": "to settle down; to find quiet",
            "vi": "nghỉ ngơi; yên tĩnh lại",
            "ipa": "tsuːɐ̯ ˈʁuːə ˈkɔmən",
            "say": "zur Ruhe kommen"
          },
          {
            "de": "gern",
            "type": "adverb",
            "en": "gladly; with pleasure",
            "vi": "sẵn lòng; thích",
            "ipa": "ɡɛʁn",
            "say": "gern",
            "usageHelp": {
              "de": "Gern und gerne sind gleichbedeutende Varianten; -e in gerne ist hier keine Adjektivendung.",
              "en": "Gern and gerne are equivalent variants; the -e in gerne is not an adjective ending here.",
              "vi": "gern và gerne là hai cách dùng cùng nghĩa. Chữ -e trong gerne không phải đuôi biến cách của tính từ."
            },
            "formHelp": {
              "base": "gern",
              "surface": "gerne",
              "de": "Gern und gerne sind gleichbedeutende Varianten. Das -e ist hier keine Deklinationsendung.",
              "en": "Gern and gerne are equivalent variants. The -e is not a declension ending here.",
              "vi": "gern và gerne là hai cách dùng tương đương. Chữ -e này không phải đuôi biến cách."
            }
          },
          {
            "de": "etwas",
            "type": "pronoun",
            "ipa": "ˈɛtvas",
            "en": "something; some",
            "vi": "điều gì đó; một ít",
            "say": "etwas"
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Die Heizung geht nicht.",
        "simpleVi": "Máy sưởi không chạy.",
        "tactful": "Die Heizung funktioniert leider nicht.",
        "vi": "Tiếc là hệ thống sưởi không hoạt động.",
        "en": "Unfortunately, the heating is not working.",
        "simpleEn": "The heating is not working.",
        "vocabulary": [
          {
            "de": "die Heizung",
            "type": "noun",
            "en": "heating; heater",
            "vi": "hệ thống sưởi; máy sưởi",
            "plural": "die Heizungen",
            "ipa": "diː ˈhaɪ̯tsʊŋ",
            "say": "die Heizung"
          },
          {
            "de": "funktionieren",
            "type": "verb",
            "en": "to work; to function",
            "vi": "hoạt động",
            "ipa": "fʊŋktsi̯oˈniːʁən",
            "say": "funktionieren"
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "editorial"
      },
      {
        "simple": "Ich bin nicht da.",
        "simpleVi": "Tôi không ở nhà.",
        "tactful": "Zu diesem Zeitpunkt bin ich leider nicht da.",
        "vi": "Tiếc là vào thời điểm đó tôi không có mặt.",
        "en": "Unfortunately, I will not be there at that time.",
        "simpleEn": "I will not be there.",
        "vocabulary": [
          {
            "de": "der Zeitpunkt",
            "type": "noun",
            "en": "point in time",
            "vi": "thời điểm",
            "plural": "die Zeitpunkte",
            "ipa": "deːɐ̯ ˈtsaɪ̯tˌpʊŋkt",
            "say": "der Zeitpunkt"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là",
            "ipa": "ˈlaɪ̯dɐ",
            "say": "leider",
            "usageHelp": {
              "de": "Leider kommentiert die gesamte Aussage als bedauerlich, nicht die Eigenschaft eines Nomens.",
              "en": "Leider comments on the whole statement as regrettable, rather than describing a noun.",
              "vi": "leider bình luận cả sự việc là đáng tiếc, không nêu đặc điểm của một danh từ nên không chia đuôi tính từ."
            }
          }
        ],
        "analysis": {
          "pattern": "Präsens · Aussagesatz",
          "de": "Das konjugierte Verb steht an zweiter Satzgliedposition; das Vorfeld kann aus mehreren Wörtern bestehen.",
          "en": "The conjugated verb occupies the second constituent position; the first constituent may contain several words.",
          "vi": "Động từ chia ở vị trí thành phần thứ hai; thành phần đầu có thể gồm nhiều từ."
        },
        "source": "editorial"
      },
      {
        "simple": "Was kostet das?",
        "simpleVi": "Cái đó giá bao nhiêu?",
        "tactful": "Könnten Sie mir bitte sagen, was das kostet?",
        "vi": "Anh/chị cho tôi biết món đó giá bao nhiêu được không?",
        "en": "Could you tell me how much that costs, please?",
        "simpleEn": "How much does that cost?",
        "vocabulary": [
          {
            "de": "kosten",
            "type": "verb",
            "en": "to cost",
            "vi": "có giá",
            "ipa": "ˈkɔstn̩",
            "say": "kosten"
          },
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết",
            "ipa": "ˈzaːɡən",
            "say": "sagen"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
        },
        "source": "editorial"
      },
      {
        "simple": "Schreiben Sie das auf.",
        "simpleVi": "Viết điều đó ra.",
        "tactful": "Könnten Sie das bitte schriftlich festhalten?",
        "vi": "Anh/chị có thể ghi việc đó lại bằng văn bản giúp tôi không?",
        "en": "Could you put that in writing, please?",
        "simpleEn": "Write that down.",
        "vocabulary": [
          {
            "de": "schriftlich",
            "type": "adjective",
            "en": "written; in writing",
            "vi": "bằng văn bản",
            "ipa": "ˈʃʁɪftlɪç",
            "say": "schriftlich"
          },
          {
            "de": "festhalten",
            "type": "verb",
            "en": "to record; to put in writing",
            "vi": "ghi lại",
            "ipa": "ˈfɛstˌhaltn̩",
            "say": "festhalten"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
        },
        "source": "editorial"
      }
    ],
    "topics": [],
    "source": "merged"
  }
];
