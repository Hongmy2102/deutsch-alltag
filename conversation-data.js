// Original document examples and editorial additions; no social-media quotations.
const conversationGroups = [
  {
    "vi": "Chào hỏi và xã giao",
    "rows": [
      {
        "simple": "Wie geht’s?",
        "tactful": "Wie läuft’s bei dir?",
        "vi": "Dạo này mọi chuyện thế nào?"
      },
      {
        "simple": "Alles gut?",
        "tactful": "Ist bei dir alles in Ordnung?",
        "vi": "Mọi chuyện với bạn vẫn ổn chứ?"
      },
      {
        "simple": "Tschüss!",
        "tactful": "Mach’s gut und komm gut nach Hause!",
        "vi": "Giữ gìn nhé, về nhà an toàn!"
      }
    ],
    "id": 1,
    "de": "Begrüßung & Smalltalk",
    "en": "Greetings & small talk",
    "topics": [
      "kontakte"
    ],
    "audience": "Bạn bè, người đã quen",
    "register": "du · thân mật",
    "usage": "Khi gặp mặt, hỏi thăm hoặc tạm biệt; không dùng du với khách lạ nếu chưa thống nhất cách xưng hô.",
    "source": "document"
  },
  {
    "vi": "Cảm ơn và đáp lời",
    "rows": [
      {
        "simple": "Kein Problem.",
        "tactful": "Sehr gerne, jederzeit wieder!",
        "vi": "Rất sẵn lòng, lần sau cũng vậy nhé!"
      },
      {
        "simple": "Danke.",
        "tactful": "Das weiß ich wirklich zu schätzen.",
        "vi": "Mình thực sự trân trọng điều đó."
      },
      {
        "simple": "Gut gemacht!",
        "tactful": "Das hast du wirklich gut hinbekommen.",
        "vi": "Bạn đã xử lý việc đó rất tốt."
      }
    ],
    "id": 2,
    "de": "Dank & Reaktionen",
    "en": "Thanks & responses",
    "topics": [
      "kontakte",
      "arbeit"
    ],
    "audience": "Bạn bè, đồng nghiệp đã dùng du",
    "register": "du · thân mật",
    "usage": "Sau khi được giúp hoặc khi ghi nhận kết quả; jederzeit wieder là sẵn lòng giúp lần sau, không phải lời hứa vô điều kiện.",
    "source": "document"
  },
  {
    "vi": "Nhờ giúp đỡ và từ chối",
    "rows": [
      {
        "simple": "Hilf mir bitte.",
        "tactful": "Könntest du mir kurz dabei helfen?",
        "vi": "Bạn có thể giúp mình việc này một chút không?"
      },
      {
        "simple": "Ich kann nicht.",
        "tactful": "Heute schaffe ich es leider nicht.",
        "vi": "Tiếc là hôm nay mình không xoay xở được."
      },
      {
        "simple": "Keine Zeit.",
        "tactful": "Im Moment passt es mir leider nicht so gut.",
        "vi": "Hiện tại mình chưa tiện lắm."
      }
    ],
    "id": 3,
    "de": "Bitten & Absagen",
    "en": "Requests & declining",
    "topics": [
      "alltag",
      "gesundheit"
    ],
    "audience": "Người quen, gia đình",
    "register": "du / không nêu đại từ",
    "usage": "Nhờ hỗ trợ hoặc từ chối lịch hẹn; nói rõ giới hạn thời gian nếu cần.",
    "source": "document"
  },
  {
    "vi": "Đồng ý và bất đồng",
    "rows": [
      {
        "simple": "Okay.",
        "tactful": "Das klingt nach einem guten Plan.",
        "vi": "Nghe có vẻ là một kế hoạch hợp lý."
      },
      {
        "simple": "Das stimmt nicht.",
        "tactful": "Ich sehe das etwas anders.",
        "vi": "Mình nhìn nhận việc này hơi khác."
      },
      {
        "simple": "Du hast unrecht.",
        "tactful": "Ich verstehe deinen Punkt, sehe aber einen anderen Aspekt.",
        "vi": "Mình hiểu ý bạn, nhưng còn nhìn thấy một khía cạnh khác."
      }
    ],
    "id": 4,
    "de": "Zustimmung & Widerspruch",
    "en": "Agreeing & disagreeing",
    "topics": [
      "arbeit",
      "freizeit"
    ],
    "audience": "Bạn bè, đồng nghiệp đã dùng du",
    "register": "du / không nêu đại từ",
    "usage": "Thảo luận kế hoạch, khác quan điểm; câu dài giúp giải thích chứ không tự động lịch sự hơn.",
    "source": "document"
  },
  {
    "vi": "Lắng nghe và đồng cảm",
    "rows": [
      {
        "simple": "Ach so.",
        "tactful": "Jetzt verstehe ich besser, was du meinst.",
        "vi": "Giờ mình hiểu rõ hơn ý bạn."
      },
      {
        "simple": "Schade.",
        "tactful": "Das tut mir leid zu hören.",
        "vi": "Mình rất tiếc khi nghe điều đó."
      },
      {
        "simple": "Beruhige dich.",
        "tactful": "Wir können in Ruhe darüber sprechen.",
        "vi": "Chúng ta có thể bình tĩnh trao đổi chuyện này."
      }
    ],
    "id": 5,
    "de": "Zuhören & Mitgefühl",
    "en": "Listening & empathy",
    "topics": [
      "gesundheit",
      "kontakte"
    ],
    "audience": "Người quen đang chia sẻ khó khăn",
    "register": "du / không nêu đại từ",
    "usage": "Nghe và đồng cảm; không ép người kia phải bình tĩnh hay phải kể chuyện.",
    "source": "document"
  },
  {
    "vi": "Đặt ranh giới",
    "rows": [
      {
        "simple": "Nein.",
        "tactful": "Danke, aber das möchte ich nicht.",
        "vi": "Cảm ơn, nhưng mình không muốn như vậy."
      },
      {
        "simple": "Lass das.",
        "tactful": "Bitte hör damit auf. Das ist mir unangenehm.",
        "vi": "Làm ơn dừng lại. Điều đó khiến mình không thoải mái."
      },
      {
        "simple": "Das geht nicht.",
        "tactful": "Für mich ist diese Lösung leider nicht akzeptabel.",
        "vi": "Rất tiếc, phương án này không thể chấp nhận đối với mình."
      }
    ],
    "id": 6,
    "de": "Grenzen setzen",
    "en": "Setting boundaries",
    "topics": [
      "kontakte",
      "wohnung"
    ],
    "audience": "Người đang vượt giới hạn của bạn",
    "register": "du / không nêu đại từ",
    "usage": "Từ chối và yêu cầu dừng. Nein là đủ khi cần bảo vệ ranh giới; không phải làm mềm mọi lời từ chối.",
    "source": "document"
  },
  {
    "vi": "Nhận lời khen",
    "rows": [
      {
        "simple": "War nichts Besonderes.",
        "tactful": "Vielen Dank! Ich habe mir viel Mühe gegeben.",
        "vi": "Cảm ơn! Mình đã dành nhiều công sức."
      },
      {
        "simple": "Nur Glück.",
        "tactful": "Die gute Vorbereitung hat sich ausgezahlt.",
        "vi": "Sự chuẩn bị kỹ đã được đền đáp."
      },
      {
        "simple": "Jeder könnte das.",
        "tactful": "Danke, ich freue mich über das Ergebnis.",
        "vi": "Cảm ơn, mình rất vui với kết quả."
      }
    ],
    "id": 7,
    "de": "Komplimente annehmen",
    "en": "Accepting compliments",
    "topics": [
      "arbeit",
      "kontakte"
    ],
    "audience": "Người khen bạn",
    "register": "Không nêu đại từ",
    "usage": "Nhận lời khen khi phù hợp; câu về chuẩn bị không thay thế Nur Glück nếu kết quả thật sự do may mắn.",
    "source": "document"
  },
  {
    "vi": "Giao tiếp công sở",
    "rows": [
      {
        "simple": "Ich weiß nicht.",
        "tactful": "Das müsste ich noch einmal prüfen.",
        "vi": "Tôi cần kiểm tra lại việc đó."
      },
      {
        "simple": "Warte.",
        "tactful": "Einen Moment bitte, ich schaue kurz nach.",
        "vi": "Xin chờ một lát, tôi kiểm tra ngay."
      },
      {
        "simple": "Ich mache das.",
        "tactful": "Ich kümmere mich darum und gebe Ihnen Bescheid.",
        "vi": "Tôi sẽ xử lý và thông báo lại."
      }
    ],
    "id": 8,
    "de": "Am Arbeitsplatz",
    "en": "At work",
    "topics": [
      "arbeit"
    ],
    "audience": "Khách hàng, người lạ trong công việc",
    "register": "Sie · trang trọng ở câu thông báo",
    "usage": "Khi chưa chắc thông tin hoặc cần kiểm tra; chỉ hứa phản hồi khi có thể thực hiện.",
    "source": "document"
  },
  {
    "vi": "Giải quyết mâu thuẫn",
    "rows": [
      {
        "simple": "Das ist dein Fehler.",
        "tactful": "Lass uns gemeinsam schauen, wie es dazu gekommen ist.",
        "vi": "Hãy cùng xem vì sao chuyện này xảy ra."
      },
      {
        "simple": "Das nervt.",
        "tactful": "Ich würde mir wünschen, dass wir das anders lösen.",
        "vi": "Mình mong chúng ta giải quyết việc này theo cách khác."
      },
      {
        "simple": "Vergiss es.",
        "tactful": "Lass uns nach einer Lösung suchen, mit der beide Seiten leben können.",
        "vi": "Hãy tìm giải pháp mà cả hai bên có thể chấp nhận."
      }
    ],
    "id": 9,
    "de": "Konflikte lösen",
    "en": "Resolving conflicts",
    "topics": [
      "wohnung",
      "arbeit"
    ],
    "audience": "Đồng nghiệp, người quen",
    "register": "du / wir · cùng giải quyết",
    "usage": "Khi có bất đồng thông thường; tìm giải pháp không đồng nghĩa chia đều trách nhiệm khi lỗi đã rõ.",
    "source": "document"
  },
  {
    "vi": "Bạn bè và các mối quan hệ",
    "rows": [
      {
        "simple": "Egal.",
        "tactful": "Mir ist beides recht. Was wäre dir lieber?",
        "vi": "Cả hai đều được với mình. Bạn thích phương án nào hơn?"
      },
      {
        "simple": "Warum meldest du dich nicht?",
        "tactful": "Ich würde mich freuen, öfter von dir zu hören.",
        "vi": "Mình sẽ vui nếu được nghe tin từ bạn thường xuyên hơn."
      },
      {
        "simple": "Ich bin sauer.",
        "tactful": "Das hat mich verletzt, und ich möchte gerne darüber sprechen.",
        "vi": "Điều đó khiến mình tổn thương và mình muốn trao đổi."
      }
    ],
    "id": 10,
    "de": "Freundschaft & Beziehungen",
    "en": "Friends & relationships",
    "topics": [
      "freizeit"
    ],
    "audience": "Bạn bè, người thân",
    "register": "du · thân mật",
    "usage": "Nêu mong muốn, sở thích và cảm xúc; đây là lời mời trao đổi, không buộc người kia phản hồi.",
    "source": "document"
  },
  {
    "vi": "Mua sắm và dịch vụ",
    "rows": [
      {
        "simple": "Ich will einen Kaffee.",
        "tactful": "Ich hätte gerne einen Kaffee, bitte.",
        "vi": "Cho tôi một cà phê nhé."
      },
      {
        "simple": "Zu teuer.",
        "tactful": "Das liegt leider über meinem Budget.",
        "vi": "Tiếc là giá này vượt ngân sách của tôi."
      },
      {
        "simple": "Wo ist der Bahnhof?",
        "tactful": "Entschuldigung, könnten Sie mir sagen, wie ich zum Bahnhof komme?",
        "vi": "Xin lỗi, anh/chị có thể chỉ tôi đường đến ga không?"
      }
    ],
    "id": 11,
    "de": "Einkaufen & Service",
    "en": "Shopping & services",
    "topics": [
      "essen",
      "kleidung",
      "stadt",
      "reisen"
    ],
    "audience": "Nhân viên phục vụ, người lạ",
    "register": "Sie / không nêu đại từ",
    "usage": "Gọi món, nói về ngân sách, hỏi đường; nói ngắn gọn vẫn phù hợp khi đông người.",
    "source": "document"
  },
  {
    "vi": "Phỏng vấn và thuyết trình",
    "rows": [
      {
        "simple": "Ich kann das.",
        "tactful": "Ich bringe bereits praktische Erfahrung in diesem Bereich mit.",
        "vi": "Tôi đã có kinh nghiệm thực tế trong lĩnh vực này."
      },
      {
        "simple": "Keine Ahnung.",
        "tactful": "Dazu würde ich gerne zunächst die Rahmenbedingungen klären.",
        "vi": "Trước tiên tôi muốn làm rõ các điều kiện liên quan."
      },
      {
        "simple": "Ich bin fertig.",
        "tactful": "Damit komme ich zum Schluss meiner Präsentation.",
        "vi": "Đến đây tôi xin kết thúc phần trình bày."
      }
    ],
    "id": 12,
    "de": "Vorstellungsgespräch & Präsentation",
    "en": "Interviews & presentations",
    "topics": [
      "arbeit",
      "arbeitsauftraege"
    ],
    "audience": "Nhà tuyển dụng, người nghe thuyết trình",
    "register": "Không nêu đại từ",
    "usage": "Nói rõ năng lực, xin thêm dữ kiện hoặc kết bài; chỉ nói có kinh nghiệm khi đúng thực tế.",
    "source": "document"
  },
  {
    "id": 13,
    "de": "Nachfragen & Verstehen",
    "en": "Clarifying & understanding",
    "vi": "Hỏi lại khi chưa hiểu",
    "topics": [
      "kontakte",
      "arbeit",
      "arbeitsauftraege"
    ],
    "audience": "Giáo viên, nhân viên, người chưa quen",
    "register": "Sie · lịch sự",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Was?",
        "simpleVi": "Gì cơ?",
        "tactful": "Entschuldigung, könnten Sie das bitte noch einmal sagen?",
        "vi": "Xin lỗi, anh/chị có thể nói lại một lần nữa không?",
        "en": "Sorry, could you say that again, please?",
        "when": "Không nghe rõ lời nói.",
        "note": "Was? dễ nghe cộc với người lạ; dùng Wie bitte? cũng ngắn và tự nhiên."
      },
      {
        "simple": "Langsamer, bitte.",
        "simpleVi": "Chậm hơn giúp tôi.",
        "tactful": "Könnten Sie bitte etwas langsamer sprechen? Ich lerne noch Deutsch.",
        "vi": "Anh/chị có thể nói chậm hơn một chút không? Tôi vẫn đang học tiếng Đức.",
        "en": "Could you speak a little more slowly, please? I am still learning German.",
        "when": "Cuộc nói chuyện diễn ra quá nhanh.",
        "note": "Câu ngắn có bitte vẫn là yêu cầu lịch sự; giải thích lý do giúp người nghe điều chỉnh."
      },
      {
        "simple": "Ich verstehe das nicht.",
        "simpleVi": "Tôi không hiểu điều đó.",
        "tactful": "Könnten Sie mir ein Beispiel dazu geben?",
        "vi": "Anh/chị có thể cho tôi một ví dụ về điều đó không?",
        "en": "Could you give me an example of that?",
        "when": "Cần làm rõ ý, không chỉ nghe lại.",
        "note": "Hỏi ví dụ có ích khi nghe được từ nhưng chưa hiểu nội dung."
      },
      {
        "simple": "Also morgen?",
        "simpleVi": "Vậy ngày mai à?",
        "tactful": "Habe ich Sie richtig verstanden: Wir treffen uns morgen um zehn?",
        "vi": "Tôi hiểu đúng chứ: chúng ta gặp nhau lúc mười giờ ngày mai?",
        "en": "Have I understood you correctly: we are meeting tomorrow at ten?",
        "when": "Xác nhận thời gian trước khi kết thúc.",
        "note": "Nhắc lại dữ kiện cụ thể để người kia sửa nếu cần."
      }
    ]
  },
  {
    "id": 14,
    "de": "Unterbrechen & zu Wort kommen",
    "en": "Interrupting & taking a turn",
    "vi": "Ngắt lời và xin lượt nói",
    "topics": [
      "arbeit",
      "kontakte",
      "arbeitsauftraege"
    ],
    "audience": "Đồng nghiệp và người đang trao đổi",
    "register": "Sie / không nêu đại từ",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Ich will auch etwas sagen.",
        "simpleVi": "Tôi cũng muốn nói.",
        "tactful": "Darf ich dazu kurz etwas ergänzen?",
        "vi": "Tôi có thể bổ sung ngắn một ý về việc đó không?",
        "en": "May I briefly add something to that?",
        "when": "Muốn góp ý trong cuộc họp.",
        "note": "Đợi một khoảng ngừng nếu có thể; lời mở đầu không thay thế việc lắng nghe."
      },
      {
        "simple": "Moment!",
        "simpleVi": "Khoan!",
        "tactful": "Entschuldigung, darf ich kurz nachfragen, bevor wir weitermachen?",
        "vi": "Xin lỗi, tôi hỏi rõ một chút trước khi chúng ta tiếp tục được không?",
        "en": "Sorry, may I ask a quick question before we continue?",
        "when": "Chưa rõ một dữ kiện đang được thảo luận.",
        "note": "Nếu cần cảnh báo nguy hiểm, nói Stopp! ngay, không vòng vo."
      },
      {
        "simple": "Lassen Sie mich reden.",
        "simpleVi": "Để tôi nói.",
        "tactful": "Ich würde den Gedanken gerne noch zu Ende führen.",
        "vi": "Tôi muốn nói hết ý này trước.",
        "en": "I would like to finish this thought first.",
        "when": "Bị ngắt lời giữa câu.",
        "note": "Nêu nhu cầu thay vì công kích; câu ngắn vẫn phù hợp nếu liên tục bị chen ngang."
      },
      {
        "simple": "Zurück zum Thema.",
        "simpleVi": "Quay lại chủ đề.",
        "tactful": "Können wir noch einmal auf die ursprüngliche Frage zurückkommen?",
        "vi": "Chúng ta quay lại câu hỏi ban đầu được không?",
        "en": "Could we return to the original question?",
        "when": "Cuộc trao đổi đi quá xa mục tiêu.",
        "note": "Nói với cả nhóm, tránh nhắm vào một cá nhân."
      }
    ]
  },
  {
    "id": 15,
    "de": "Sich entschuldigen & korrigieren",
    "en": "Apologizing & correcting",
    "vi": "Xin lỗi và sửa sai",
    "topics": [
      "arbeit",
      "alltag",
      "kontakte"
    ],
    "audience": "Khách hàng, đồng nghiệp, người lạ",
    "register": "Sie / không nêu đại từ",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Mein Fehler.",
        "simpleVi": "Lỗi của tôi.",
        "tactful": "Da habe ich mich vertan. Ich korrigiere das gleich.",
        "vi": "Tôi đã nhầm ở chỗ đó. Tôi sẽ sửa ngay.",
        "en": "I made a mistake there. I will correct it right away.",
        "when": "Gửi sai thông tin hoặc ghi nhầm.",
        "note": "Thừa nhận lỗi và nêu bước sửa cụ thể; chỉ nói gleich khi thực sự có thể sửa ngay."
      },
      {
        "simple": "Ich bin zu spät.",
        "simpleVi": "Tôi đến muộn.",
        "tactful": "Entschuldigen Sie bitte die Verspätung. Danke, dass Sie gewartet haben.",
        "vi": "Xin lỗi vì đến muộn. Cảm ơn anh/chị đã đợi.",
        "en": "Please excuse my being late. Thank you for waiting.",
        "when": "Đến trễ một cuộc hẹn.",
        "note": "Nếu biết sẽ muộn, báo trước và đưa giờ đến dự kiến."
      },
      {
        "simple": "Das wollte ich nicht.",
        "simpleVi": "Tôi không định như vậy.",
        "tactful": "Meine Formulierung war unpassend. Es tut mir leid.",
        "vi": "Cách diễn đạt của tôi không phù hợp. Tôi xin lỗi.",
        "en": "My wording was inappropriate. I am sorry.",
        "when": "Lời nói làm người khác tổn thương.",
        "note": "Không dùng ý định của mình để phủ nhận tác động với người nghe."
      },
      {
        "simple": "Falsch geschickt.",
        "simpleVi": "Gửi nhầm rồi.",
        "tactful": "Entschuldigen Sie bitte, die vorige Nachricht war nicht für Sie bestimmt.",
        "vi": "Xin lỗi, tin nhắn trước không phải gửi cho anh/chị.",
        "en": "Sorry, the previous message was not intended for you.",
        "when": "Nhắn nhầm người trong công việc.",
        "note": "Nếu có thông tin nhạy cảm, xử lý theo quy định thay vì chỉ gửi lời xin lỗi."
      }
    ]
  },
  {
    "id": 16,
    "de": "Termine & Planänderungen",
    "en": "Appointments & changing plans",
    "vi": "Hẹn lịch, đổi lịch và đổi kế hoạch",
    "topics": [
      "alltag",
      "freizeit",
      "arbeit"
    ],
    "audience": "Bạn bè hoặc đồng nghiệp đã dùng du",
    "register": "du · thân mật",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Geht morgen?",
        "simpleVi": "Ngày mai được không?",
        "tactful": "Würde dir morgen gegen drei passen?",
        "vi": "Khoảng ba giờ ngày mai có tiện cho bạn không?",
        "en": "Would around three tomorrow work for you?",
        "when": "Đề nghị giờ hẹn với người quen.",
        "note": "gegen drei là khoảng ba giờ, không phải đúng ba giờ."
      },
      {
        "simple": "Ich komme später.",
        "simpleVi": "Mình đến sau.",
        "tactful": "Ich bin etwa zehn Minuten später da. Passt das für dich noch?",
        "vi": "Mình sẽ đến muộn khoảng mười phút. Bạn còn tiện không?",
        "en": "I will be about ten minutes late. Does that still work for you?",
        "when": "Có thay đổi giờ đến.",
        "note": "Báo ngay khi biết; không giả định người kia có thể đợi."
      },
      {
        "simple": "Heute nicht.",
        "simpleVi": "Hôm nay không được.",
        "tactful": "Heute schaffe ich es leider nicht. Wie wäre es am Donnerstag?",
        "vi": "Tiếc là hôm nay mình không thu xếp được. Thứ Năm thì sao?",
        "en": "I cannot make it today, unfortunately. How about Thursday?",
        "when": "Từ chối nhưng vẫn muốn gặp.",
        "note": "Chỉ đưa lịch khác nếu thực sự muốn và có thể tham gia."
      },
      {
        "simple": "Sag mir Bescheid.",
        "simpleVi": "Báo mình nhé.",
        "tactful": "Gib mir bitte bis morgen Bescheid, damit ich planen kann.",
        "vi": "Báo mình trước ngày mai nhé, để mình sắp xếp.",
        "en": "Please let me know by tomorrow so I can plan.",
        "when": "Cần chốt số người hoặc đặt chỗ.",
        "note": "Nêu hạn và lý do; đến hạn có thể cần tự quyết định."
      }
    ]
  },
  {
    "id": 17,
    "de": "Im Café & Restaurant",
    "en": "At cafés & restaurants",
    "vi": "Quán cà phê và nhà hàng",
    "topics": [
      "essen",
      "reisen"
    ],
    "audience": "Nhân viên quán ăn, nhà hàng",
    "register": "Sie / không nêu đại từ",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Noch Wasser.",
        "simpleVi": "Thêm nước.",
        "tactful": "Könnten wir bitte noch eine Flasche Wasser bekommen?",
        "vi": "Cho chúng tôi thêm một chai nước được không?",
        "en": "Could we have another bottle of water, please?",
        "when": "Gọi thêm đồ trong lúc ăn.",
        "note": "Nêu rõ loại và số lượng để tránh hiểu nhầm."
      },
      {
        "simple": "Das ist falsch.",
        "simpleVi": "Cái này sai rồi.",
        "tactful": "Entschuldigung, ich hatte die vegetarische Variante bestellt. Könnten Sie das bitte prüfen?",
        "vi": "Xin lỗi, tôi đã gọi món chay. Anh/chị kiểm tra giúp được không?",
        "en": "Excuse me, I ordered the vegetarian option. Could you check that, please?",
        "when": "Món được đưa ra không đúng đơn.",
        "note": "Nếu dị ứng, nói rõ dị ứng; không dùng từ chay thay cho thông tin y tế."
      },
      {
        "simple": "Die Rechnung.",
        "simpleVi": "Hóa đơn.",
        "tactful": "Wir würden gerne zahlen. Könnten wir bitte getrennt zahlen?",
        "vi": "Chúng tôi muốn thanh toán. Chúng tôi trả riêng được không?",
        "en": "We would like to pay. Could we pay separately, please?",
        "when": "Muốn thanh toán riêng từng người.",
        "note": "getrennt trả riêng; zusammen trả chung. Hỏi trước nếu nhóm đông."
      },
      {
        "simple": "Ist das mit Nüssen?",
        "simpleVi": "Món này có hạt không?",
        "tactful": "Ich habe eine Nussallergie. Können Sie bitte prüfen, ob das Gericht Nüsse enthält?",
        "vi": "Tôi dị ứng các loại hạt. Anh/chị kiểm tra giúp món này có hạt không?",
        "en": "I have a nut allergy. Could you check whether this dish contains nuts?",
        "when": "Cần thông tin về thành phần gây dị ứng.",
        "note": "Đây là lời thông báo rõ ràng, không bảo đảm món an toàn; cần hỏi thêm nguy cơ lẫn thành phần nếu có liên quan."
      }
    ]
  },
  {
    "id": 18,
    "de": "Umtausch & Reklamation",
    "en": "Returns & complaints",
    "vi": "Đổi hàng và khiếu nại",
    "topics": [
      "kleidung",
      "essen",
      "alltag"
    ],
    "audience": "Nhân viên bán hàng hoặc chăm sóc khách hàng",
    "register": "Sie · lịch sự",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Ich will das zurückgeben.",
        "simpleVi": "Tôi muốn trả món này.",
        "tactful": "Ich würde diesen Artikel gerne zurückgeben. Welche Möglichkeiten gibt es?",
        "vi": "Tôi muốn trả sản phẩm này. Có những phương án nào?",
        "en": "I would like to return this item. What options are available?",
        "when": "Hỏi chính sách trả hàng.",
        "note": "Đổi ý mua không tự động có quyền trả hàng ở mọi cửa hàng."
      },
      {
        "simple": "Das ist kaputt.",
        "simpleVi": "Cái này hỏng rồi.",
        "tactful": "Der Artikel funktioniert seit gestern nicht mehr. Wie können wir das klären?",
        "vi": "Sản phẩm không hoạt động từ hôm qua. Chúng ta xử lý thế nào?",
        "en": "The item has not worked since yesterday. How can we resolve this?",
        "when": "Báo lỗi sản phẩm sau khi mua.",
        "note": "Mô tả lỗi và mang chứng từ nếu có; tránh khẳng định nguyên nhân khi chưa rõ."
      },
      {
        "simple": "Zu klein.",
        "simpleVi": "Nhỏ quá.",
        "tactful": "Die Größe passt leider nicht. Haben Sie das auch eine Nummer größer?",
        "vi": "Tiếc là cỡ này không vừa. Có cỡ lớn hơn một số không?",
        "en": "Unfortunately, this size does not fit. Do you have it one size larger?",
        "when": "Thử quần áo hoặc giày.",
        "note": "eine Nummer größer thường dùng cho cỡ; không đánh giá cơ thể người mặc."
      },
      {
        "simple": "Ich warte schon lange.",
        "simpleVi": "Tôi đợi lâu rồi.",
        "tactful": "Ich warte seit zwanzig Minuten. Können Sie mir sagen, wann ich ungefähr dran bin?",
        "vi": "Tôi đợi hai mươi phút rồi. Anh/chị cho biết khoảng khi nào đến lượt tôi không?",
        "en": "I have been waiting for twenty minutes. Could you tell me roughly when it will be my turn?",
        "when": "Cần biết thời gian chờ tại quầy.",
        "note": "Nêu thời gian thực tế và hỏi thông tin thay vì quy lỗi cho nhân viên."
      }
    ]
  },
  {
    "id": 19,
    "de": "Bus, Bahn & unterwegs",
    "en": "Public transport & getting around",
    "vi": "Xe buýt, tàu và trên đường",
    "topics": [
      "stadt",
      "reisen"
    ],
    "audience": "Hành khách hoặc nhân viên vận tải",
    "register": "Sie · lịch sự",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Ist hier frei?",
        "simpleVi": "Chỗ này trống không?",
        "tactful": "Entschuldigung, ist dieser Platz noch frei?",
        "vi": "Xin lỗi, chỗ này còn trống không?",
        "en": "Excuse me, is this seat still available?",
        "when": "Muốn ngồi cạnh người lạ.",
        "note": "Cả hai cách đều tự nhiên; câu dài chỉ thêm lời mở đầu."
      },
      {
        "simple": "Gehen Sie weg.",
        "simpleVi": "Tránh ra.",
        "tactful": "Entschuldigung, ich müsste hier aussteigen. Darf ich kurz vorbei?",
        "vi": "Xin lỗi, tôi cần xuống ở đây. Cho tôi đi qua một chút được không?",
        "en": "Excuse me, I need to get off here. May I get past?",
        "when": "Đi ra cửa tàu hoặc xe buýt đông.",
        "note": "Nếu nguy hiểm hay bị chặn có chủ ý, có thể cần yêu cầu trực tiếp hơn."
      },
      {
        "simple": "Wo muss ich hin?",
        "simpleVi": "Tôi phải đi đâu?",
        "tactful": "Können Sie mir bitte sagen, an welchem Gleis der Zug nach Köln abfährt?",
        "vi": "Anh/chị cho biết tàu đi Köln xuất phát ở đường ray nào được không?",
        "en": "Could you tell me which platform the train to Cologne leaves from?",
        "when": "Hỏi nhân viên trong nhà ga.",
        "note": "Nêu điểm đến và kiểm tra lại bảng điện vì đường ray có thể thay đổi."
      },
      {
        "simple": "Der Zug ist weg.",
        "simpleVi": "Tàu đi mất rồi.",
        "tactful": "Ich habe meinen Anschluss verpasst. Welche Verbindung kann ich jetzt nehmen?",
        "vi": "Tôi lỡ chuyến nối tiếp rồi. Giờ tôi có thể đi chuyến nào?",
        "en": "I missed my connection. Which service can I take now?",
        "when": "Xin hỗ trợ khi lỡ tàu nối chuyến.",
        "note": "Hỏi thêm vé hiện có dùng được không; câu này không xác nhận quyền đi tàu khác."
      }
    ]
  },
  {
    "id": 20,
    "de": "Nachbarn & gemeinsamer Raum",
    "en": "Neighbors & shared spaces",
    "vi": "Hàng xóm và không gian chung",
    "topics": [
      "wohnung"
    ],
    "audience": "Hàng xóm chưa thân",
    "register": "Sie · lịch sự",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Leiser!",
        "simpleVi": "Nhỏ tiếng thôi!",
        "tactful": "Die Musik ist bei mir deutlich zu hören. Könnten Sie sie bitte etwas leiser stellen?",
        "vi": "Tôi nghe rất rõ tiếng nhạc bên nhà mình. Anh/chị giảm âm lượng một chút được không?",
        "en": "I can hear the music clearly in my apartment. Could you turn it down a little, please?",
        "when": "Tiếng nhạc ảnh hưởng việc nghỉ ngơi.",
        "note": "Mô tả tác động; không cần suy đoán người kia cố tình gây phiền."
      },
      {
        "simple": "Räumen Sie das weg.",
        "simpleVi": "Dọn cái đó đi.",
        "tactful": "Könnten Sie bitte den Durchgang frei machen? Ich komme mit dem Kinderwagen nicht durch.",
        "vi": "Anh/chị dọn lối đi giúp được không? Tôi không đưa xe đẩy em bé qua được.",
        "en": "Could you clear the passage, please? I cannot get through with the stroller.",
        "when": "Đồ vật chắn lối đi chung.",
        "note": "Nêu trở ngại cụ thể; lối thoát hiểm cần được giữ thông thoáng."
      },
      {
        "simple": "Ihr Paket ist hier.",
        "simpleVi": "Bưu kiện của anh/chị ở đây.",
        "tactful": "Ich habe ein Paket für Sie angenommen. Wann möchten Sie es abholen?",
        "vi": "Tôi đã nhận giúp bưu kiện. Khi nào anh/chị muốn lấy?",
        "en": "I accepted a parcel for you. When would you like to collect it?",
        "when": "Thông báo đã nhận hộ bưu kiện.",
        "note": "Chỉ nói đã nhận khi đúng thực tế; không công khai thông tin người nhận."
      },
      {
        "simple": "Ich brauche Ruhe.",
        "simpleVi": "Tôi cần yên tĩnh.",
        "tactful": "Ich arbeite morgen früh. Können wir eine Uhrzeit vereinbaren, ab der es ruhiger wird?",
        "vi": "Mai tôi làm sớm. Chúng ta thống nhất giờ giảm tiếng ồn được không?",
        "en": "I work early tomorrow. Can we agree on a time after which it will be quieter?",
        "when": "Trao đổi trước một buổi tụ họp.",
        "note": "Thỏa thuận cá nhân không thay thế nội quy hoặc quyền của các bên."
      }
    ]
  },
  {
    "id": 21,
    "de": "Telefon & Nachrichten",
    "en": "Calls & messages",
    "vi": "Điện thoại và tin nhắn",
    "topics": [
      "alltag",
      "arbeit",
      "kontakte"
    ],
    "audience": "Đối tác công việc hoặc người chưa quen",
    "register": "Sie · lịch sự",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Wer ist da?",
        "simpleVi": "Ai đấy?",
        "tactful": "Darf ich fragen, mit wem ich spreche?",
        "vi": "Cho tôi hỏi tôi đang nói chuyện với ai được không?",
        "en": "May I ask who I am speaking with?",
        "when": "Người gọi chưa giới thiệu tên.",
        "note": "Không cung cấp thông tin riêng chỉ vì người gọi nói mình là nhân viên một cơ quan."
      },
      {
        "simple": "Jetzt nicht.",
        "simpleVi": "Giờ không được.",
        "tactful": "Ich bin gerade in einem Gespräch. Darf ich Sie in einer halben Stunde zurückrufen?",
        "vi": "Tôi đang có cuộc trao đổi. Nửa tiếng nữa tôi gọi lại được không?",
        "en": "I am in a conversation right now. May I call you back in half an hour?",
        "when": "Không thể nghe điện thoại lúc này.",
        "note": "Chọn mốc giờ mình thực hiện được; không phải giải thích chi tiết chuyện riêng."
      },
      {
        "simple": "Schicken Sie eine Mail.",
        "simpleVi": "Gửi email đi.",
        "tactful": "Könnten Sie mir die Einzelheiten bitte per E-Mail schicken? Dann kann ich sie in Ruhe prüfen.",
        "vi": "Anh/chị gửi chi tiết qua email giúp tôi được không? Như vậy tôi có thể xem kỹ.",
        "en": "Could you send me the details by email, please? Then I can review them properly.",
        "when": "Cần thông tin bằng văn bản.",
        "note": "Có thể xin xác nhận lại địa chỉ, tránh đọc dữ liệu nhạy cảm nơi công cộng."
      },
      {
        "simple": "Antworten Sie bitte.",
        "simpleVi": "Trả lời giúp tôi.",
        "tactful": "Ich wollte kurz nachfragen, ob meine Nachricht angekommen ist.",
        "vi": "Tôi muốn hỏi nhanh xem anh/chị đã nhận được tin nhắn của tôi chưa.",
        "en": "I just wanted to check whether my message arrived.",
        "when": "Theo dõi một tin nhắn sau thời gian chờ phù hợp.",
        "note": "Nếu cần câu trả lời trước hạn, nêu hạn cụ thể; không mặc định người nhận luôn sẵn sàng."
      }
    ]
  },
  {
    "id": 22,
    "de": "Beim Arzt & in der Apotheke",
    "en": "At the doctor & pharmacy",
    "vi": "Bác sĩ và hiệu thuốc",
    "topics": [
      "gesundheit"
    ],
    "audience": "Nhân viên y tế, dược sĩ",
    "register": "Sie · lịch sự",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Ich brauche einen Termin.",
        "simpleVi": "Tôi cần lịch hẹn.",
        "tactful": "Ich habe seit zwei Tagen Beschwerden. Wäre ein Termin in dieser Woche möglich?",
        "vi": "Tôi có triệu chứng hai ngày nay. Tuần này có thể đặt lịch khám không?",
        "en": "I have had symptoms for two days. Would an appointment this week be possible?",
        "when": "Đặt lịch khám thông thường.",
        "note": "Không dùng lời hẹn mềm nếu đang cần cấp cứu; nói rõ triệu chứng và mức khẩn cấp."
      },
      {
        "simple": "Das tut weh.",
        "simpleVi": "Chỗ đó đau.",
        "tactful": "Hier tut es besonders weh, vor allem beim Bewegen.",
        "vi": "Chỗ này đau nhiều, nhất là khi cử động.",
        "en": "It hurts particularly here, especially when I move.",
        "when": "Mô tả vị trí và hoàn cảnh gây đau.",
        "note": "Không cần làm nhẹ mức đau để nghe lịch sự; nói chính xác trải nghiệm của mình."
      },
      {
        "simple": "Wie nehme ich das?",
        "simpleVi": "Tôi uống cái này thế nào?",
        "tactful": "Können Sie mir bitte erklären, wann und wie ich dieses Medikament einnehmen soll?",
        "vi": "Anh/chị giải thích giúp tôi cần dùng thuốc này lúc nào và như thế nào được không?",
        "en": "Could you explain when and how I should take this medication, please?",
        "when": "Chưa rõ hướng dẫn dùng thuốc.",
        "note": "Nhắc lại hướng dẫn để xác nhận; không tự suy ra liều từ ví dụ học tiếng."
      },
      {
        "simple": "Ich habe Angst.",
        "simpleVi": "Tôi sợ.",
        "tactful": "Ich bin wegen der Untersuchung etwas angespannt. Können Sie mir die nächsten Schritte erklären?",
        "vi": "Tôi hơi căng thẳng về buổi khám. Anh/chị giải thích các bước tiếp theo được không?",
        "en": "I am a little anxious about the examination. Could you explain the next steps?",
        "when": "Cần hiểu quy trình trước khi khám.",
        "note": "Nếu sợ nhiều, nói đúng mức độ thay vì thêm etwas; không phải giảm nhẹ cảm xúc thật."
      }
    ]
  },
  {
    "id": 23,
    "de": "Miete, Reparaturen & Absprachen",
    "en": "Renting, repairs & arrangements",
    "vi": "Thuê nhà, sửa chữa và thỏa thuận",
    "topics": [
      "wohnung"
    ],
    "audience": "Chủ nhà, quản lý nhà, thợ sửa",
    "register": "Sie · lịch sự",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Die Heizung geht nicht.",
        "simpleVi": "Máy sưởi không chạy.",
        "tactful": "Seit gestern funktioniert die Heizung nicht. Wann kann jemand zur Reparatur kommen?",
        "vi": "Hệ thống sưởi không hoạt động từ hôm qua. Khi nào có người đến sửa được?",
        "en": "The heating has not worked since yesterday. When can someone come to repair it?",
        "when": "Báo hỏng và xin lịch sửa.",
        "note": "Ghi rõ thời điểm và phạm vi lỗi; câu này không phải tư vấn pháp lý về tiền thuê."
      },
      {
        "simple": "Ich bin nicht da.",
        "simpleVi": "Tôi không ở nhà.",
        "tactful": "Zu diesem Termin bin ich leider nicht zu Hause. Können wir eine andere Uhrzeit vereinbaren?",
        "vi": "Tiếc là giờ đó tôi không ở nhà. Chúng ta hẹn giờ khác được không?",
        "en": "Unfortunately, I will not be home at that time. Can we arrange a different time?",
        "when": "Không thể tiếp thợ theo lịch dự kiến.",
        "note": "Đề xuất một hoặc hai khung giờ có thể đáp ứng."
      },
      {
        "simple": "Was kostet das?",
        "simpleVi": "Cái đó giá bao nhiêu?",
        "tactful": "Könnten Sie mir vorab sagen, mit welchen Kosten ich ungefähr rechnen muss?",
        "vi": "Anh/chị cho biết trước chi phí dự kiến khoảng bao nhiêu được không?",
        "en": "Could you tell me in advance roughly what costs I should expect?",
        "when": "Hỏi dự toán trước khi đồng ý làm.",
        "note": "Ước tính không phải giá cố định; hỏi rõ phí phát sinh nếu cần."
      },
      {
        "simple": "Schreiben Sie das auf.",
        "simpleVi": "Viết điều đó ra.",
        "tactful": "Könnten Sie mir die Vereinbarung bitte noch einmal schriftlich bestätigen?",
        "vi": "Anh/chị xác nhận lại thỏa thuận bằng văn bản giúp tôi được không?",
        "en": "Could you confirm the agreement in writing, please?",
        "when": "Chốt thời gian hoặc nội dung sửa chữa.",
        "note": "Văn bản giúp tránh nhớ khác nhau; không mặc nhiên tạo quyền hay nghĩa vụ mới."
      }
    ]
  },
  {
    "id": 24,
    "de": "Privatsphäre & digitale Grenzen",
    "en": "Privacy & digital boundaries",
    "vi": "Riêng tư và ranh giới trên mạng",
    "topics": [
      "kontakte",
      "freizeit",
      "arbeit"
    ],
    "audience": "Bạn bè, người quen hoặc nhóm đã dùng du",
    "register": "du · thân mật",
    "usage": "Chọn câu theo mục đích và hoàn cảnh cụ thể dưới mỗi thẻ.",
    "source": "editorial",
    "rows": [
      {
        "simple": "Kein Foto!",
        "simpleVi": "Không chụp ảnh!",
        "tactful": "Ich möchte nicht fotografiert werden. Bitte respektiere das.",
        "vi": "Mình không muốn bị chụp ảnh. Bạn tôn trọng điều đó nhé.",
        "en": "I do not want to be photographed. Please respect that.",
        "when": "Không đồng ý người khác chụp ảnh mình.",
        "note": "Kein Foto! là phù hợp khi cần dừng ngay; không cần biện minh."
      },
      {
        "simple": "Lösch das.",
        "simpleVi": "Xóa cái đó đi.",
        "tactful": "Bitte nimm das Foto von mir aus deinem Beitrag. Ich möchte nicht, dass es dort öffentlich zu sehen ist.",
        "vi": "Bạn gỡ ảnh có mình khỏi bài đăng nhé. Mình không muốn ảnh đó hiển thị công khai ở đó.",
        "en": "Please remove the photo of me from your post. I do not want it to be publicly visible there.",
        "when": "Ảnh của mình đã được đăng ngoài mong muốn.",
        "note": "Nêu ảnh hoặc bài cụ thể; đây là yêu cầu giao tiếp, không phải kết luận pháp lý."
      },
      {
        "simple": "Das ist privat.",
        "simpleVi": "Đó là chuyện riêng.",
        "tactful": "Darüber möchte ich lieber nicht sprechen. Lass uns über etwas anderes reden.",
        "vi": "Mình không muốn nói về chuyện đó. Mình chuyển sang chuyện khác nhé.",
        "en": "I would rather not talk about that. Let us talk about something else.",
        "when": "Bị hỏi chuyện cá nhân.",
        "note": "Có thể nói Das ist privat mà không cần đưa đề tài thay thế."
      },
      {
        "simple": "Schreib nicht so spät.",
        "simpleVi": "Đừng nhắn muộn thế.",
        "tactful": "Ich lese Nachrichten abends nicht mehr. Wenn es nicht dringend ist, antworte ich am nächsten Tag.",
        "vi": "Buổi tối mình không đọc tin nhắn nữa. Nếu không khẩn cấp, hôm sau mình sẽ trả lời.",
        "en": "I do not read messages in the evening. If it is not urgent, I reply the next day.",
        "when": "Thống nhất kỳ vọng trả lời tin nhắn.",
        "note": "Nói về khả năng phản hồi của mình; không cam kết hỗ trợ khẩn cấp nếu không thể."
      }
    ]
  }
];
