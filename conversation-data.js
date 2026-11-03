// Unified comparisons inside the existing Leben hub; alternatives reviewed for intent and grammatical accuracy.
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
            "vi": "hy vọng"
          },
          {
            "de": "bald",
            "type": "adverb",
            "en": "soon",
            "vi": "sớm"
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
            "vi": "lo lắng"
          },
          {
            "de": "brauchen",
            "type": "verb",
            "en": "to need",
            "vi": "cần"
          }
        ],
        "analysis": {
          "pattern": "nicht/kein + brauchen + zu + Infinitiv",
          "de": "Zu steht vor dem Infinitiv machen; dir gehört zu sich Sorgen machen.",
          "en": "Zu precedes the infinitive machen; dir belongs to sich Sorgen machen.",
          "vi": "zu đứng trước nguyên mẫu machen; dir thuộc cụm phản thân sich Sorgen machen."
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
            "vi": "chúc; mong muốn"
          },
          {
            "de": "die Zeit",
            "type": "noun",
            "en": "time",
            "vi": "thời gian",
            "plural": "die Zeiten (các thời kỳ hoặc thời điểm)"
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ.",
          "en": "The recipient is dative; the wish is accusative.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ."
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
            "vi": "có trách nhiệm; phụ trách"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
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
            "plural": "die Präferenzen"
          },
          {
            "de": "haben",
            "type": "verb",
            "en": "to have",
            "vi": "có"
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
            "vi": "chúc; mong muốn"
          },
          {
            "de": "der Erfolg",
            "type": "noun",
            "en": "success",
            "vi": "thành công",
            "plural": "die Erfolge"
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ.",
          "en": "The recipient is dative; the wish is accusative.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ."
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
            "vi": "chúc; mong muốn"
          },
          {
            "de": "die Freude",
            "type": "noun",
            "en": "joy",
            "vi": "niềm vui",
            "plural": "die Freuden"
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
            "vi": "im lặng"
          },
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente"
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
            "vi": "đảm nhận; chi trả"
          },
          {
            "de": "die Rechnung",
            "type": "noun",
            "en": "bill; invoice",
            "vi": "hóa đơn",
            "plural": "die Rechnungen"
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
            "vi": "vui mừng"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự"
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
            "vi": "vui mừng"
          },
          {
            "de": "das Lob",
            "type": "noun",
            "en": "praise",
            "vi": "lời khen",
            "plural": "thường không dùng số nhiều"
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
            "plural": "thường không dùng số nhiều trong nghĩa may mắn"
          },
          {
            "de": "tatsächlich",
            "type": "adverb",
            "en": "really; actually",
            "vi": "thực sự"
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
            "vi": "thân thiện; tốt bụng"
          },
          {
            "de": "das Kompliment",
            "type": "noun",
            "en": "compliment",
            "vi": "lời khen",
            "plural": "die Komplimente"
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
            "vi": "vui mừng"
          },
          {
            "de": "die Anerkennung",
            "type": "noun",
            "en": "recognition; appreciation",
            "vi": "sự ghi nhận",
            "plural": "die Anerkennungen"
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
            "plural": "die Ergebnisse"
          },
          {
            "de": "gefallen",
            "type": "verb",
            "en": "to please; to appeal",
            "vi": "làm hài lòng; được thích"
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
            "vi": "vui mừng"
          },
          {
            "de": "die Rückmeldung",
            "type": "noun",
            "en": "reply; feedback",
            "vi": "phản hồi",
            "plural": "die Rückmeldungen"
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
            "plural": "die Punkte"
          },
          {
            "de": "die Meinung",
            "type": "noun",
            "en": "opinion",
            "vi": "ý kiến; quan điểm",
            "plural": "die Meinungen"
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
            "plural": "die Sichten"
          },
          {
            "de": "bedeuten",
            "type": "verb",
            "en": "to mean",
            "vi": "có nghĩa"
          }
        ],
        "analysis": {
          "pattern": "W-Frage + konjugiertes Verb",
          "de": "Das Fragewort steht zuerst, danach folgt das konjugierte Verb.",
          "en": "The question word comes first, followed by the conjugated verb.",
          "vi": "Từ để hỏi đứng đầu, theo sau là động từ đã chia."
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
            "plural": "die Eindrücke"
          },
          {
            "de": "ganz",
            "type": "adverb",
            "en": "completely; entirely",
            "vi": "hoàn toàn"
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
            "plural": "die Vorschläge"
          },
          {
            "de": "in Ordnung",
            "type": "phrase",
            "en": "all right",
            "vi": "ổn; chấp nhận được"
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
            "vi": "đồng ý; nhất trí"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì"
          }
        ],
        "analysis": {
          "pattern": "Adjektiv als Prädikativ",
          "de": "Das Adjektiv bleibt nach sein, klingen, erscheinen oder finden in dieser Funktion ohne Deklinationsendung.",
          "en": "Used predicatively after sein, klingen, erscheinen or finden, the adjective has no inflectional ending here.",
          "vi": "Tính từ làm vị ngữ sau sein, klingen, erscheinen hoặc finden trong cấu trúc này không nhận đuôi biến cách."
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
            "vi": "thể hiện; hiện ra"
          },
          {
            "de": "auch",
            "type": "adverb",
            "en": "also; too",
            "vi": "cũng"
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
            "vi": "nói; cho biết"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là"
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
            "plural": "die Hinweise"
          },
          {
            "de": "wissen",
            "type": "verb",
            "en": "to know",
            "vi": "biết"
          }
        ],
        "analysis": {
          "pattern": "Präteritum",
          "de": "War und hatte sind Präteritumformen von sein und haben.",
          "en": "War and hatte are past-tense forms of sein and haben.",
          "vi": "war và hatte là dạng Präteritum của sein và haben."
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
            "vi": "làm ngạc nhiên"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự"
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
            "vi": "đồng ý; nhất trí"
          },
          {
            "de": "machen",
            "type": "verb",
            "en": "to do; to make",
            "vi": "làm"
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
            "vi": "ổn; đúng quy củ"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì"
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
            "plural": "thường không dùng số nhiều"
          },
          {
            "de": "richtig",
            "type": "adjective",
            "en": "correct; right",
            "vi": "đúng"
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
            "plural": "die Punkte"
          },
          {
            "de": "der Schluss",
            "type": "noun",
            "en": "end; conclusion",
            "vi": "phần kết; kết thúc",
            "plural": "die Schlüsse"
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
            "vi": "muộn"
          },
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết"
          }
        ],
        "analysis": {
          "pattern": "würde/würden + Infinitiv",
          "de": "Würde wird konjugiert; der Infinitiv des Vollverbs steht am Ende.",
          "en": "Würde is conjugated; the lexical verb stays in the infinitive at the end.",
          "vi": "würde chia theo chủ ngữ; động từ chính giữ nguyên mẫu và đứng cuối."
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
            "plural": "die Punkte"
          },
          {
            "de": "anders",
            "type": "adverb",
            "en": "differently",
            "vi": "theo cách khác"
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
            "plural": "die Meinungen"
          },
          {
            "de": "ganz",
            "type": "adverb",
            "en": "completely; entirely",
            "vi": "hoàn toàn"
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
            "vi": "được chú ý; khiến ai nhận thấy"
          },
          {
            "de": "der Fehler",
            "type": "noun",
            "en": "mistake; error",
            "vi": "lỗi",
            "plural": "die Fehler"
          }
        ],
        "analysis": {
          "pattern": "dass + … + Verb am Ende",
          "de": "Das konjugierte Verb steht am Ende des dass-Satzes.",
          "en": "The conjugated verb comes at the end of the dass-clause.",
          "vi": "Động từ chia đứng cuối mệnh đề mở đầu bằng dass."
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
            "vi": "làm phiền"
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói"
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
            "vi": "trước mắt"
          },
          {
            "de": "weiterverfolgen",
            "type": "verb",
            "en": "to pursue further",
            "vi": "tiếp tục theo đuổi"
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
            "vi": "gây bực mình"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự"
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
            "vi": "vui mừng"
          },
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó"
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
            "vi": "thành công; có kết quả tốt"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự"
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
            "vi": "có vẻ; xuất hiện"
          },
          {
            "de": "nachvollziehbar",
            "type": "adjective",
            "en": "understandable; comprehensible",
            "vi": "có thể hiểu được"
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
            "plural": "die Entwicklungen"
          },
          {
            "de": "überraschen",
            "type": "verb",
            "en": "to surprise",
            "vi": "làm ngạc nhiên"
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
            "vi": "thống nhất với nhau"
          },
          {
            "de": "darüber",
            "type": "adverb",
            "en": "about it; about that",
            "vi": "về việc đó"
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
            "vi": "chấp nhận được"
          },
          {
            "de": "finden",
            "type": "verb",
            "en": "to find; to consider",
            "vi": "thấy; cho là"
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
            "plural": "die Grenzen"
          },
          {
            "de": "erreichen",
            "type": "verb",
            "en": "to reach",
            "vi": "đạt tới"
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
            "vi": "quá nhiều; quá mức"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì"
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
            "vi": "có ý nói; cho rằng"
          },
          {
            "de": "tatsächlich",
            "type": "adverb",
            "en": "really; actually",
            "vi": "thực sự"
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
            "vi": "tham gia"
          },
          {
            "de": "daran",
            "type": "adverb",
            "en": "in it; in that",
            "vi": "vào việc đó"
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
            "vi": "phụ thuộc vào"
          },
          {
            "de": "der Umstand",
            "type": "noun",
            "en": "circumstance",
            "vi": "hoàn cảnh; điều kiện",
            "plural": "die Umstände"
          }
        ],
        "analysis": {
          "pattern": "Trennbares Verb",
          "de": "Im Hauptsatz wird das Präfix abgetrennt und steht am Ende, sofern kein Modalverb den Infinitiv verlangt.",
          "en": "In a main clause, the separable prefix comes at the end unless a modal requires the infinitive.",
          "vi": "Ở câu chính, tiền tố tách ra và đứng cuối khi không có động từ tình thái yêu cầu dạng nguyên mẫu."
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
            "plural": "die Zusammenhänge"
          },
          {
            "de": "erklären",
            "type": "verb",
            "en": "to explain",
            "vi": "giải thích"
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
            "vi": "để nguyên như vậy"
          },
          {
            "de": "lassen",
            "type": "verb",
            "en": "to let; to leave",
            "vi": "để; cho phép"
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
            "vi": "xử lý; xem xét"
          },
          {
            "de": "sofort",
            "type": "adverb",
            "en": "immediately",
            "vi": "ngay lập tức"
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
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
            "vi": "sẵn lòng; thích"
          },
          {
            "de": "sehr",
            "type": "adverb",
            "en": "very; very much",
            "vi": "rất"
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
            "vi": "một mình"
          },
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente"
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
            "vi": "đến lượt"
          },
          {
            "de": "jetzt",
            "type": "adverb",
            "en": "now",
            "vi": "bây giờ"
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
            "vi": "hiểu"
          },
          {
            "de": "der Dank",
            "type": "noun",
            "en": "thanks; gratitude",
            "vi": "lời cảm ơn",
            "plural": "thường không dùng số nhiều"
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
            "plural": "die Ziele"
          },
          {
            "de": "sehen",
            "type": "verb",
            "en": "to see",
            "vi": "nhìn; nhận thấy"
          }
        ],
        "analysis": {
          "pattern": "Indirekte Frage + Verb am Ende",
          "de": "Das Fragewort oder ob leitet den Nebensatz ein; dessen konjugiertes Verb steht am Ende.",
          "en": "The question word or ob introduces the subordinate clause, whose conjugated verb comes last.",
          "vi": "Từ để hỏi hoặc ob mở đầu mệnh đề phụ; động từ chia của mệnh đề đó đứng cuối."
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
            "vi": "muốn; mong muốn một cách nhẹ nhàng"
          },
          {
            "de": "aber",
            "type": "conjunction",
            "en": "but",
            "vi": "nhưng"
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
            "vi": "dừng lại"
          },
          {
            "de": "bitte",
            "type": "adverb",
            "en": "please",
            "vi": "làm ơn; nhé"
          }
        ],
        "analysis": {
          "pattern": "aufhören → hör … auf",
          "de": "Hör ist der Imperativ für du; das trennbare Präfix auf steht am Ende. Damit verweist auf die Handlung.",
          "en": "Hör is the du-imperative; the separable prefix auf comes at the end. Damit refers to the action.",
          "vi": "Hör là mệnh lệnh cho du; tiền tố tách auf đứng cuối. Damit chỉ hành động đang được nhắc tới."
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
            "vi": "có thể xảy ra"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là"
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
            "plural": "die Vorlieben"
          },
          {
            "de": "haben",
            "type": "verb",
            "en": "to have",
            "vi": "có"
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
            "vi": "vui mừng"
          },
          {
            "de": "öfter",
            "type": "adverb",
            "en": "more often",
            "vi": "thường xuyên hơn"
          }
        ],
        "analysis": {
          "pattern": "würde + sich freuen + zu-Infinitiv",
          "de": "Würde wird konjugiert; freuen bleibt Infinitiv. Von dir gehört zu hören; zu hören ergänzt freuen.",
          "en": "Würde is conjugated; freuen remains infinitive. Von dir belongs to hören; zu hören complements freuen.",
          "vi": "Würde được chia; freuen giữ nguyên mẫu. von dir đi với hören; zu hören bổ sung cho freuen."
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
            "vi": "bực mình về"
          },
          {
            "de": "ansprechen",
            "type": "verb",
            "en": "to bring up; to address",
            "vi": "đề cập; trao đổi về"
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
            "vi": "vừa; phù hợp; tiện"
          },
          {
            "de": "morgen",
            "type": "adverb",
            "en": "tomorrow",
            "vi": "ngày mai"
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
            "vi": "muộn hơn; sau đó"
          },
          {
            "de": "da sein",
            "type": "phrase",
            "en": "to be there; to be present",
            "vi": "có mặt"
          }
        ],
        "analysis": {
          "pattern": "werden + Infinitiv",
          "de": "Werden bildet mit sein das Futur I: werde … da sein.",
          "en": "Werden plus sein forms the future: werde … da sein.",
          "vi": "werden kết hợp với nguyên mẫu sein tạo Futur I: werde … da sein."
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
            "vi": "vừa; phù hợp; tiện"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là"
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
            "vi": "báo cho ai biết"
          },
          {
            "de": "sobald",
            "type": "conjunction",
            "en": "as soon as",
            "vi": "ngay khi"
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
            "vi": "chụp ảnh"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng"
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
            "plural": "die Beiträge"
          },
          {
            "de": "löschen",
            "type": "verb",
            "en": "to delete",
            "vi": "xóa"
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
            "vi": "về việc đó"
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói"
          }
        ],
        "analysis": {
          "pattern": "möchte + Infinitiv",
          "de": "Möchte ist eine Konjunktiv-II-Form von mögen; der weitere Infinitiv steht am Ende.",
          "en": "Möchte is a subjunctive II form of mögen; the other infinitive comes at the end.",
          "vi": "möchte là dạng Konjunktiv II của mögen; động từ nguyên mẫu còn lại đứng cuối."
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
            "vi": "sớm"
          },
          {
            "de": "schreiben",
            "type": "verb",
            "en": "to write",
            "vi": "viết; nhắn tin"
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
            "vi": "chú ý lắng nghe"
          },
          {
            "de": "kurz",
            "type": "adjective",
            "en": "brief; short",
            "vi": "ngắn; trong chốc lát"
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
            "plural": "die Punkte"
          },
          {
            "de": "recht geben",
            "type": "phrase",
            "en": "to agree with someone",
            "vi": "đồng ý với ai"
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
            "vi": "khiến bận tâm"
          },
          {
            "de": "erzählen",
            "type": "verb",
            "en": "to tell; to narrate",
            "vi": "kể chuyện"
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
            "vi": "cẩn thận"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì"
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
            "plural": "die Momente"
          },
          {
            "de": "geben",
            "type": "verb",
            "en": "to give",
            "vi": "cho; đưa"
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
            "vi": "đề nghị; nhờ"
          },
          {
            "de": "aufhören",
            "type": "verb",
            "en": "to stop",
            "vi": "dừng lại"
          }
        ],
        "analysis": {
          "pattern": "zu + Infinitiv",
          "de": "Aufzuhören ist der zu-Infinitiv von aufhören; zu steht zwischen Präfix und Stamm.",
          "en": "Aufzuhören is the zu-infinitive of aufhören; zu goes between the prefix and stem.",
          "vi": "aufzuhören là nguyên mẫu có zu của aufhören; zu nằm giữa tiền tố và thân động từ."
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
            "plural": "die Momente"
          },
          {
            "de": "die Zeit",
            "type": "noun",
            "en": "time",
            "vi": "thời gian",
            "plural": "die Zeiten (các thời kỳ hoặc thời điểm)"
          }
        ],
        "analysis": {
          "pattern": "hätte/hätten + Akkusativ",
          "de": "Hätte/hätten ist Konjunktiv II von haben; das Objekt steht im Akkusativ.",
          "en": "Hätte/hätten is subjunctive II of haben; its object is accusative.",
          "vi": "hätte/hätten là Konjunktiv II của haben; tân ngữ trực tiếp ở Akkusativ."
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
            "vi": "giải thích"
          },
          {
            "de": "anders",
            "type": "adverb",
            "en": "differently",
            "vi": "theo cách khác"
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
            "vi": "đi cùng"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng"
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
            "vi": "bắt đầu; khởi hành"
          },
          {
            "de": "jetzt",
            "type": "adverb",
            "en": "now",
            "vi": "bây giờ"
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
            "vi": "giúp đỡ"
          },
          {
            "de": "kurz",
            "type": "adjective",
            "en": "brief; short",
            "vi": "ngắn; trong chốc lát"
          }
        ],
        "analysis": {
          "pattern": "könnte/könntest/könnten + Infinitiv",
          "de": "Konjunktiv II von können; der weitere Infinitiv steht am Ende.",
          "en": "Subjunctive II of können; the other infinitive comes at the end.",
          "vi": "Konjunktiv II của können; động từ nguyên mẫu còn lại đứng cuối câu."
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
            "vi": "có thể xảy ra"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là"
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
            "vi": "vừa; phù hợp; tiện"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là"
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
            "vi": "tin mình có thể làm được"
          },
          {
            "de": "die Aufgabe",
            "type": "noun",
            "en": "task",
            "vi": "nhiệm vụ; bài tập",
            "plural": "die Aufgaben"
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
            "vi": "đến; được nhận"
          },
          {
            "de": "die Ausführung",
            "type": "noun",
            "en": "explanation; account",
            "vi": "phần trình bày",
            "plural": "die Ausführungen"
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
            "vi": "nói; cho biết"
          },
          {
            "de": "noch einmal",
            "type": "phrase",
            "en": "once again",
            "vi": "một lần nữa"
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
            "vi": "chậm"
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói"
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
            "vi": "giải thích"
          },
          {
            "de": "noch einmal",
            "type": "phrase",
            "en": "once again",
            "vi": "một lần nữa"
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
            "plural": "die Termine"
          },
          {
            "de": "richtig",
            "type": "adjective",
            "en": "correct; right",
            "vi": "đúng"
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
            "vi": "được phép"
          },
          {
            "de": "ergänzen",
            "type": "verb",
            "en": "to add; to supplement",
            "vi": "bổ sung"
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
            "vi": "ngắt lời; tạm dừng"
          },
          {
            "de": "dürfen",
            "type": "verb",
            "en": "may; to be allowed to",
            "vi": "được phép"
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
            "vi": "hoàn tất; nói hết ý"
          },
          {
            "de": "der Gedanke",
            "type": "noun",
            "en": "thought",
            "vi": "ý nghĩ; ý đang nói",
            "plural": "die Gedanken"
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
            "vi": "quay lại một chủ đề"
          },
          {
            "de": "die Frage",
            "type": "noun",
            "en": "question",
            "vi": "câu hỏi",
            "plural": "die Fragen"
          }
        ],
        "analysis": {
          "pattern": "Modalverb + Infinitiv",
          "de": "Das Modalverb wird konjugiert; das andere Verb steht im Infinitiv am Satzende.",
          "en": "The modal is conjugated; the other verb stays in the infinitive at the end.",
          "vi": "Động từ tình thái được chia; động từ còn lại giữ nguyên mẫu và đứng cuối."
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
            "plural": "die Punkte"
          },
          {
            "de": "hinzufügen",
            "type": "verb",
            "en": "to add",
            "vi": "thêm vào; bổ sung"
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
            "vi": "hỏi"
          },
          {
            "de": "mit wem",
            "type": "phrase",
            "en": "with whom",
            "vi": "với ai"
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
            "vi": "hiện tại"
          },
          {
            "de": "möglich",
            "type": "adjective",
            "en": "possible",
            "vi": "có thể xảy ra"
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
            "vi": "gửi"
          },
          {
            "de": "die E-Mail",
            "type": "noun",
            "en": "email",
            "vi": "thư điện tử",
            "plural": "die E-Mails"
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
            "plural": "die Rückmeldungen"
          },
          {
            "de": "geben",
            "type": "verb",
            "en": "to give",
            "vi": "cho; đưa"
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
            "vi": "đi; diễn ra"
          },
          {
            "de": "in letzter Zeit",
            "type": "phrase",
            "en": "lately",
            "vi": "gần đây"
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
            "vi": "mong chờ"
          },
          {
            "de": "das Treffen",
            "type": "noun",
            "en": "meeting",
            "vi": "cuộc gặp",
            "plural": "die Treffen"
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
            "vi": "chúc; mong muốn"
          },
          {
            "de": "der Geburtstag",
            "type": "noun",
            "en": "birthday",
            "vi": "sinh nhật",
            "plural": "die Geburtstage"
          }
        ],
        "analysis": {
          "pattern": "wünschen + Dativ + Akkusativ",
          "de": "Die Person steht im Dativ; der Wunsch steht im Akkusativ.",
          "en": "The recipient is dative; the wish is accusative.",
          "vi": "Người nhận lời chúc ở Dativ; điều được chúc ở Akkusativ."
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
            "vi": "đẹp; thật vui"
          },
          {
            "de": "da sein",
            "type": "phrase",
            "en": "to be there; to be present",
            "vi": "có mặt"
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
            "vi": "nhắc lại"
          },
          {
            "de": "die Entschuldigung",
            "type": "noun",
            "en": "apology; excuse",
            "vi": "lời xin lỗi",
            "plural": "die Entschuldigungen"
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
            "vi": "chúc; mong muốn"
          },
          {
            "de": "der Appetit",
            "type": "noun",
            "en": "appetite",
            "vi": "cảm giác ngon miệng",
            "plural": "thường không dùng số nhiều"
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
            "vi": "nâng ly; chạm ly"
          },
          {
            "de": "die Zeit",
            "type": "noun",
            "en": "time",
            "vi": "thời gian",
            "plural": "die Zeiten (các thời kỳ hoặc thời điểm)"
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
            "vi": "chúc; mong muốn"
          },
          {
            "de": "sicher",
            "type": "adjective",
            "en": "certain; sure",
            "vi": "chắc chắn"
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
            "vi": "chúc; mong muốn"
          },
          {
            "de": "erholsam",
            "type": "adjective",
            "en": "restful",
            "vi": "giúp nghỉ ngơi; thư thái"
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
            "vi": "chúc; mong muốn"
          },
          {
            "de": "der Erfolg",
            "type": "noun",
            "en": "success",
            "vi": "thành công",
            "plural": "die Erfolge"
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
            "vi": "ổn; đúng quy củ"
          },
          {
            "de": "alles",
            "type": "pronoun",
            "en": "everything",
            "vi": "mọi thứ; mọi chuyện"
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
            "vi": "về nhà"
          },
          {
            "de": "kommen",
            "type": "verb",
            "en": "to come; to happen",
            "vi": "đến; xảy ra"
          }
        ],
        "analysis": {
          "pattern": "lass uns + Infinitiv",
          "de": "Lass ist Imperativ von lassen; das Vollverb bleibt im Infinitiv.",
          "en": "Lass is the imperative of lassen; the main verb remains infinitive.",
          "vi": "Lass là mệnh lệnh của lassen; động từ chính giữ nguyên mẫu sau uns."
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
            "vi": "xưng du với nhau"
          },
          {
            "de": "können",
            "type": "verb",
            "en": "can; to be able to",
            "vi": "có thể"
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
            "vi": "hiển nhiên; tất nhiên"
          },
          {
            "de": "ja",
            "type": "adverb",
            "en": "yes",
            "vi": "vâng; có"
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
            "vi": "hiểu"
          },
          {
            "de": "die Information",
            "type": "noun",
            "en": "information",
            "vi": "thông tin",
            "plural": "die Informationen"
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
            "vi": "làm ngạc nhiên"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự"
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
            "vi": "đáng tiếc"
          },
          {
            "de": "finden",
            "type": "verb",
            "en": "to find; to consider",
            "vi": "thấy; cho là"
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
            "vi": "thực sự"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì"
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
            "vi": "khác thường"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự"
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
            "vi": "khó"
          },
          {
            "de": "klingen",
            "type": "verb",
            "en": "to sound",
            "vi": "nghe có vẻ"
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
            "vi": "đúng"
          },
          {
            "de": "verstehen",
            "type": "verb",
            "en": "to understand",
            "vi": "hiểu"
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
            "vi": "được thuyết phục; tin chắc"
          },
          {
            "de": "noch",
            "type": "adverb",
            "en": "still; yet",
            "vi": "vẫn; còn"
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
            "vi": "trân trọng; đánh giá cao"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự"
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
            "vi": "xoay xở; làm được"
          },
          {
            "de": "wirklich",
            "type": "adverb",
            "en": "really",
            "vi": "thực sự"
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
            "vi": "ổn; đúng quy củ"
          },
          {
            "de": "danken",
            "type": "verb",
            "en": "to thank",
            "vi": "cảm ơn"
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
            "vi": "tiếp tục"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng"
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
            "vi": "nhẹ nhõm"
          },
          {
            "de": "sein",
            "type": "verb",
            "en": "to be",
            "vi": "là; ở; thì"
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
            "vi": "kiệt sức"
          },
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại"
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
            "plural": "die Budgets"
          },
          {
            "de": "knapp",
            "type": "adjective",
            "en": "scarce; tight",
            "vi": "hạn hẹp; eo hẹp"
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
            "plural": "die Abwechslungen"
          },
          {
            "de": "sich freuen",
            "type": "verb",
            "en": "to be pleased",
            "vi": "vui mừng"
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
            "vi": "xin lỗi"
          },
          {
            "de": "aufrichtig",
            "type": "adjective",
            "en": "sincere",
            "vi": "chân thành"
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
            "plural": "die Gläser"
          },
          {
            "de": "bekommen",
            "type": "verb",
            "en": "to get; to receive",
            "vi": "nhận; được cấp"
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
            "vi": "ăn"
          },
          {
            "de": "gern",
            "type": "adverb",
            "en": "gladly; with pleasure",
            "vi": "sẵn lòng; thích"
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
            "vi": "bình tĩnh; thong thả"
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói"
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
            "plural": "die Termine"
          },
          {
            "de": "hätte gern",
            "type": "phrase",
            "en": "would like to have",
            "vi": "muốn có; muốn gọi món"
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
            "plural": "die Stellen"
          },
          {
            "de": "der Schmerz",
            "type": "noun",
            "en": "pain",
            "vi": "cơn đau",
            "plural": "die Schmerzen"
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
            "plural": "die Medikamente"
          },
          {
            "de": "einnehmen",
            "type": "verb",
            "en": "to take medicine",
            "vi": "dùng; uống thuốc"
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
            "plural": "die Ängste"
          },
          {
            "de": "sprechen",
            "type": "verb",
            "en": "to speak",
            "vi": "nói"
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
            "vi": "bàn bạc"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng"
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
            "vi": "diễn ra; chạy"
          },
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại"
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
            "vi": "nói; cho biết"
          },
          {
            "de": "spät",
            "type": "adjective",
            "en": "late",
            "vi": "muộn"
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
            "vi": "hỏi"
          },
          {
            "de": "dürfen",
            "type": "verb",
            "en": "may; to be allowed to",
            "vi": "được phép"
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
            "vi": "hỏi"
          },
          {
            "de": "kommen",
            "type": "verb",
            "en": "to come; to happen",
            "vi": "đến; xảy ra"
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
            "vi": "kể chuyện"
          },
          {
            "de": "möchten",
            "type": "verb",
            "en": "would like",
            "vi": "muốn; mong muốn một cách nhẹ nhàng"
          }
        ],
        "analysis": {
          "pattern": "Relativsatz",
          "de": "Das Relativpronomen bezieht sich auf ein Nomen; das konjugierte Verb steht am Ende.",
          "en": "The relative pronoun refers to a noun; the conjugated verb comes last.",
          "vi": "Đại từ quan hệ liên hệ tới một danh từ; động từ chia đứng cuối mệnh đề quan hệ."
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
            "vi": "cảm thấy"
          },
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại"
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
            "vi": "kể chuyện"
          },
          {
            "de": "passieren",
            "type": "verb",
            "en": "to happen",
            "vi": "xảy ra"
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
            "vi": "giúp đỡ"
          },
          {
            "de": "die Aufgabe",
            "type": "noun",
            "en": "task",
            "vi": "nhiệm vụ; bài tập",
            "plural": "die Aufgaben"
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
            "plural": "die Plätze"
          },
          {
            "de": "frei",
            "type": "adjective",
            "en": "free; available",
            "vi": "trống; còn chỗ"
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
            "vi": "sang một bên"
          },
          {
            "de": "gehen",
            "type": "verb",
            "en": "to go; to be going",
            "vi": "đi; diễn ra"
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
            "plural": "die Gleise"
          },
          {
            "de": "abfahren",
            "type": "verb",
            "en": "to depart",
            "vi": "khởi hành"
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
            "vi": "khởi hành"
          },
          {
            "de": "bereits",
            "type": "adverb",
            "en": "already",
            "vi": "đã; rồi"
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
            "vi": "xảy ra"
          },
          {
            "de": "jedem",
            "type": "pronoun",
            "en": "to anyone; to everyone",
            "vi": "với bất kỳ ai; Dativ của jeder"
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
            "vi": "tin"
          },
          {
            "de": "kaum",
            "type": "adverb",
            "en": "hardly",
            "vi": "gần như không"
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
            "vi": "đáng chú ý"
          },
          {
            "de": "finden",
            "type": "verb",
            "en": "to find; to consider",
            "vi": "thấy; cho là"
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
            "vi": "hiện tại"
          },
          {
            "de": "zu viel",
            "type": "phrase",
            "en": "too much",
            "vi": "quá nhiều; quá mức"
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
            "vi": "thực hiện; triển khai"
          },
          {
            "de": "können",
            "type": "verb",
            "en": "can; to be able to",
            "vi": "có thể"
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
            "vi": "có thể nhận thấy"
          },
          {
            "de": "ebenfalls",
            "type": "adverb",
            "en": "also; likewise",
            "vi": "cũng"
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
            "vi": "sẵn sàng"
          },
          {
            "de": "anfangen",
            "type": "verb",
            "en": "to begin",
            "vi": "bắt đầu"
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
            "vi": "dự tính; tính đến"
          },
          {
            "de": "bereits",
            "type": "adverb",
            "en": "already",
            "vi": "đã; rồi"
          }
        ],
        "analysis": {
          "pattern": "hatte + Partizip II",
          "de": "Hatte + gerechnet bildet das Plusquamperfekt.",
          "en": "Hatte plus gerechnet forms the past perfect.",
          "vi": "hatte + gerechnet tạo Plusquamperfekt."
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
            "vi": "đã nắm thông tin"
          },
          {
            "de": "der Dank",
            "type": "noun",
            "en": "thanks; gratitude",
            "vi": "lời cảm ơn",
            "plural": "thường không dùng số nhiều"
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
            "vi": "vui mừng"
          },
          {
            "de": "losgehen",
            "type": "verb",
            "en": "to start; to set off",
            "vi": "bắt đầu; khởi hành"
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
            "vi": "biết"
          },
          {
            "de": "prüfen",
            "type": "verb",
            "en": "to check; to examine",
            "vi": "kiểm tra"
          }
        ],
        "analysis": {
          "pattern": "müsste + Infinitiv",
          "de": "Müsste ist Konjunktiv II von müssen, nicht eine würde-Konstruktion.",
          "en": "Müsste is subjunctive II of müssen, not a würde construction.",
          "vi": "müsste là Konjunktiv II của müssen, không phải cấu trúc würde."
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
            "vi": "tra cứu; kiểm tra lại"
          },
          {
            "de": "der Moment",
            "type": "noun",
            "en": "moment",
            "vi": "khoảnh khắc; một lát",
            "plural": "die Momente"
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
            "vi": "chăm lo; xử lý việc gì"
          },
          {
            "de": "Bescheid geben",
            "type": "phrase",
            "en": "to let someone know",
            "vi": "báo cho ai biết"
          }
        ],
        "analysis": {
          "pattern": "Reflexivpronomen",
          "de": "Das Reflexivpronomen richtet sich nach dem Subjekt und der Verbverbindung, zum Beispiel ich → mich.",
          "en": "The reflexive pronoun depends on the subject and verb expression, for example ich → mich.",
          "vi": "Đại từ phản thân phụ thuộc chủ ngữ và cấu trúc động từ, ví dụ ich → mich."
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
            "vi": "hy vọng"
          },
          {
            "de": "schaffen",
            "type": "verb",
            "en": "to manage; to accomplish",
            "vi": "xoay xở làm được; hoàn thành"
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
            "vi": "có thể xảy ra"
          },
          {
            "de": "kommen",
            "type": "verb",
            "en": "to come; to happen",
            "vi": "đến; xảy ra"
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
            "vi": "thay đổi"
          },
          {
            "de": "lassen",
            "type": "verb",
            "en": "to let; to leave",
            "vi": "để; cho phép"
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
            "plural": "die Momente"
          },
          {
            "de": "die Rückfrage",
            "type": "noun",
            "en": "follow-up question",
            "vi": "câu hỏi để làm rõ",
            "plural": "die Rückfragen"
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
            "vi": "trả lời"
          },
          {
            "de": "im Moment",
            "type": "phrase",
            "en": "at the moment",
            "vi": "hiện tại"
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
            "vi": "muốn có; muốn gọi món"
          },
          {
            "de": "der Kaffee",
            "type": "noun",
            "en": "coffee",
            "vi": "cà phê",
            "plural": "die Kaffees (các loại hoặc suất cà phê)"
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
            "vi": "nằm; ở một mức nào đó"
          },
          {
            "de": "das Budget",
            "type": "noun",
            "en": "budget",
            "vi": "ngân sách",
            "plural": "die Budgets"
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
            "plural": "die Bahnhöfe"
          },
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết"
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
            "vi": "nhầm lẫn"
          },
          {
            "de": "sich entschuldigen",
            "type": "verb",
            "en": "to apologize",
            "vi": "xin lỗi"
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
            "vi": "xin lỗi"
          },
          {
            "de": "die Verspätung",
            "type": "noun",
            "en": "delay; lateness",
            "vi": "sự chậm trễ; việc đến muộn",
            "plural": "die Verspätungen"
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
            "plural": "die Absichten"
          },
          {
            "de": "leidtun",
            "type": "verb",
            "en": "to be sorry",
            "vi": "lấy làm tiếc"
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
            "plural": "die Nachrichten"
          },
          {
            "de": "bestimmt für",
            "type": "phrase",
            "en": "intended for",
            "vi": "dành cho"
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
            "vi": "nhận; được cấp"
          },
          {
            "de": "das Wasser",
            "type": "noun",
            "en": "water",
            "vi": "nước",
            "plural": "thường không dùng số nhiều"
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
            "vi": "tương ứng; phù hợp"
          },
          {
            "de": "die Bestellung",
            "type": "noun",
            "en": "order",
            "vi": "đơn đặt hàng; món đã gọi",
            "plural": "die Bestellungen"
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
            "vi": "thanh toán"
          },
          {
            "de": "gern",
            "type": "adverb",
            "en": "gladly; with pleasure",
            "vi": "sẵn lòng; thích"
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
            "vi": "kiểm tra"
          },
          {
            "de": "enthalten",
            "type": "verb",
            "en": "to contain",
            "vi": "chứa"
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
            "vi": "thanh toán"
          },
          {
            "de": "die Karte",
            "type": "noun",
            "en": "card; map; menu",
            "vi": "thẻ; bản đồ; thực đơn",
            "plural": "die Karten"
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
            "vi": "trả lại"
          },
          {
            "de": "der Artikel",
            "type": "noun",
            "en": "item; article",
            "vi": "món hàng; mạo từ; bài viết",
            "plural": "die Artikel"
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
            "plural": "die Artikel"
          },
          {
            "de": "funktionieren",
            "type": "verb",
            "en": "to work; to function",
            "vi": "hoạt động"
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
            "vi": "nhỏ"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là"
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
            "vi": "chờ"
          },
          {
            "de": "wie lange",
            "type": "phrase",
            "en": "how long",
            "vi": "bao lâu"
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
            "plural": "die Lautstärken"
          },
          {
            "de": "reduzieren",
            "type": "verb",
            "en": "to reduce",
            "vi": "giảm"
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
            "vi": "dọn đi"
          },
          {
            "de": "können",
            "type": "verb",
            "en": "can; to be able to",
            "vi": "có thể"
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
            "plural": "die Pakete"
          },
          {
            "de": "aufbewahren",
            "type": "verb",
            "en": "to keep safely; to store",
            "vi": "giữ; cất giữ"
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
            "vi": "nghỉ ngơi; yên tĩnh lại"
          },
          {
            "de": "gern",
            "type": "adverb",
            "en": "gladly; with pleasure",
            "vi": "sẵn lòng; thích"
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
            "plural": "die Heizungen"
          },
          {
            "de": "funktionieren",
            "type": "verb",
            "en": "to work; to function",
            "vi": "hoạt động"
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
            "plural": "die Zeitpunkte"
          },
          {
            "de": "leider",
            "type": "adverb",
            "en": "unfortunately",
            "vi": "tiếc là"
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
            "vi": "có giá"
          },
          {
            "de": "sagen",
            "type": "verb",
            "en": "to say; to tell",
            "vi": "nói; cho biết"
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
            "vi": "bằng văn bản"
          },
          {
            "de": "festhalten",
            "type": "verb",
            "en": "to record; to put in writing",
            "vi": "ghi lại"
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
