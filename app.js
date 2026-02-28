// 三四年级古诗闯关（浙江省采用统编版）数据与逻辑
// 参考篇目来源：古文岛（统编版小学古诗文分册目录）https://www.gushiwen.cn/gushi/xiaoxue.aspx

const POEMS = [
  { id: "3-上-望洞庭", grade: 3, term: "上", title: "望洞庭", author: "刘禹锡", dynasty: "唐",
    lines: ["湖光秋月两相和，潭面无风镜未磨。", "遥望洞庭山水翠，白银盘里一青螺。"],
    summary: "秋夜湖月相和，借盘螺比喻洞庭山与湖面。",
    qa: [
      { q: "“白银盘里一青螺”用了什么修辞？", options: ["比喻", "对偶", "夸张", "设问"], answer: 0 },
      { q: "“镜未磨”形容潭面怎样的状态？", options: ["平静光滑", "波涛汹涌", "昏暗无光", "水浅见底"], answer: 0 }
    ],
    keywords: ["秋月","潭面","洞庭","白银盘","青螺"]
  },
  { id: "3-上-山行", grade: 3, term: "上", title: "山行", author: "杜牧", dynasty: "唐",
    lines: ["远上寒山石径斜，白云生处有人家。", "停车坐爱枫林晚，霜叶红于二月花。"],
    summary: "描写秋山枫林晚景，霜叶红于春花。",
    qa: [
      { q: "“霜叶红于二月花”表达了什么？", options: ["秋景不输春景", "春天更美", "夏景酷热", "冬景萧瑟"], answer: 0 },
      { q: "“白云生处有人家”写出了什么特点？", options: ["山居人家隐于云间", "人多嘈杂", "城市繁华", "旷野荒芜"], answer: 0 }
    ],
    keywords: ["寒山","石径","枫林","霜叶","二月花"]
  },
  { id: "3-上-夜书所见", grade: 3, term: "上", title: "夜书所见", author: "叶绍翁", dynasty: "南宋",
    lines: ["萧萧梧叶送寒声，江上秋风动客情。", "知有儿童挑促织，夜深篱落一灯明。"],
    summary: "秋夜景与童趣相映，孤灯温暖客愁。",
    qa: [
      { q: "“动客情”主要指哪种情感？", options: ["思乡", "喜悦", "愤怒", "豪迈"], answer: 0 },
      { q: "诗中表现秋夜的意象是哪些？", options: ["梧叶、秋风、促织、孤灯", "桃花、春雨", "雪花、梅枝", "荷叶、蝉声"], answer: 0 }
    ],
    keywords: ["梧叶","秋风","客情","促织","孤灯"]
  },
  { id: "3-上-鹿柴", grade: 3, term: "上", title: "鹿柴", author: "王维", dynasty: "唐",
    lines: ["空山不见人，但闻人语响。", "返景入深林，复照青苔上。"],
    summary: "空山人声，返照青苔，幽静空灵。",
    qa: [
      { q: "“返景入深林”中的“返景”指什么？", options: ["夕阳的余晖", "月光", "灯光", "星光"], answer: 0 },
      { q: "全诗氛围更接近于？", options: ["宁静空灵", "喧嚣热闹", "悲凉萧瑟", "紧张忙碌"], answer: 0 }
    ],
    keywords: ["空山","人语","返景","深林","青苔"]
  },
  { id: "3-上-望天门山", grade: 3, term: "上", title: "望天门山", author: "李白", dynasty: "唐",
    lines: ["天门中断楚江开，碧水东流至此回。", "两岸青山相对出，孤帆一片日边来。"],
    summary: "天门山夹江而开，孤帆远来，壮阔明丽。",
    qa: [
      { q: "“天门中断楚江开”描写了什么？", options: ["江从山间穿过", "大海汹涌", "夜色朦胧", "风雪交加"], answer: 0 },
      { q: "“孤帆一片日边来”呈现的画面是？", options: ["远景光影结合", "近景细腻", "月夜静谧", "风雨交加"], answer: 0 }
    ],
    keywords: ["天门","楚江","碧水","青山","孤帆"]
  },
  { id: "3-上-饮湖上初晴后雨", grade: 3, term: "上", title: "饮湖上初晴后雨", author: "苏轼", dynasty: "宋",
    lines: ["水光潋滟晴方好，山色空蒙雨亦奇。", "欲把西湖比西子，淡妆浓抹总相宜。"],
    summary: "西湖晴雨皆美，以西子比喻湖之美。",
    qa: [
      { q: "“淡妆浓抹总相宜”比喻了什么？", options: ["西湖晴雨不同的美", "西湖桥很多", "西湖人很多", "西湖鱼很多"], answer: 0 },
      { q: "“潋滟”“空蒙”分别对应？", options: ["晴与雨", "风与雪", "雾与霜", "晴与风"], answer: 0 }
    ],
    keywords: ["西湖","潋滟","空蒙","西子","淡妆浓抹"]
  },

  { id: "3-下-绝句", grade: 3, term: "下", title: "绝句", author: "杜甫", dynasty: "唐",
    lines: ["迟日江山丽，春风花草香。", "泥融飞燕子，沙暖睡鸳鸯。"],
    summary: "早春景致温柔明媚，动静相映。",
    qa: [
      { q: "“泥融飞燕子，沙暖睡鸳鸯”写的是？", options: ["动植物在春天的生机", "烈日炎炎", "秋叶飘零", "冬雪纷飞"], answer: 0 },
      { q: "“迟日江山丽”中的“迟日”指？", options: ["春日渐长的阳光", "傍晚灯光", "月光", "晨雾"], answer: 0 }
    ],
    keywords: ["迟日","江山","春风","燕子","鸳鸯"]
  },
  { id: "3-下-惠崇春江晚景", grade: 3, term: "下", title: "惠崇春江晚景", author: "苏轼", dynasty: "宋",
    lines: ["竹外桃花三两枝，春江水暖鸭先知。", "蒌蒿满地芦芽短，正是河豚欲上时。"],
    summary: "春江晚景生动，鸭与河豚暗示物候。",
    qa: [
      { q: "“鸭先知”表现了什么？", options: ["动物对季节的敏感", "人类的聪明", "天气酷热", "渔民辛苦"], answer: 0 },
      { q: "“蒌蒿满地芦芽短”描写了什么？", options: ["春草萌发景象", "冬雪覆盖", "秋叶遍地", "夏木成荫"], answer: 0 }
    ],
    keywords: ["春江","鸭","桃花","蒌蒿","芦芽","河豚"]
  },
  { id: "3-下-三衢道中", grade: 3, term: "下", title: "三衢道中", author: "曾几", dynasty: "宋",
    lines: ["梅子黄时日日晴，小溪泛尽却山行。", "绿阴不减来时路，添得黄鹂四五声。"],
    summary: "梅黄时节山行，绿阴黄鹂，清新恬淡。",
    qa: [
      { q: "“梅子黄时日日晴”指的是？", options: ["初夏晴好时令", "冬季严寒", "春雨绵绵", "秋霜时节"], answer: 0 },
      { q: "诗中“添得”表达了什么感觉？", options: ["愉悦增添", "悲伤加重", "惊讶不安", "劳累烦闷"], answer: 0 }
    ],
    keywords: ["梅子黄","小溪","山行","绿阴","黄鹂"]
  },
  { id: "3-下-元日", grade: 3, term: "下", title: "元日", author: "王安石", dynasty: "宋",
    lines: ["爆竹声中一岁除，春风送暖入屠苏。", "千门万户曈曈日，总把新桃换旧符。"],
    summary: "新年习俗与万户更新，喜庆温暖。",
    qa: [
      { q: "“屠苏”在诗中指什么？", options: ["年酒", "菜肴", "鼓乐", "灯笼"], answer: 0 },
      { q: "哪句写出贴春联的习俗？", options: ["总把新桃换旧符", "爆竹声中一岁除", "春风送暖入屠苏", "曈曈日"], answer: 0 }
    ],
    keywords: ["爆竹","屠苏","曈曈日","新桃","旧符"]
  },
  { id: "3-下-清明", grade: 3, term: "下", title: "清明", author: "杜牧", dynasty: "唐",
    lines: ["清明时节雨纷纷，路上行人欲断魂。", "借问酒家何处有？牧童遥指杏花村。"],
    summary: "清明细雨，行人悲伤，牧童指路。",
    qa: [
      { q: "“欲断魂”表达了什么心情？", options: ["悲伤凄迷", "喜悦欢腾", "愤怒不平", "轻松自在"], answer: 0 },
      { q: "“杏花村”在诗中意指？", options: ["酒家所在", "果园", "村口", "山寨"], answer: 0 }
    ],
    keywords: ["清明","雨纷纷","行人","酒家","杏花村"]
  },
  { id: "3-下-九月九日忆山东兄弟", grade: 3, term: "下", title: "九月九日忆山东兄弟", author: "王维", dynasty: "唐",
    lines: ["独在异乡为异客，每逢佳节倍思亲。", "遥知兄弟登高处，遍插茱萸少一人。"],
    summary: "重阳佳节思亲浓，登高插茱萸。",
    qa: [
      { q: "“少一人”指的是谁？", options: ["诗人自己", "陌生人", "母亲", "友人"], answer: 0 },
      { q: "“遍插茱萸”反映了什么习俗？", options: ["重阳登高避祸", "端午赛龙舟", "中秋赏月", "元宵猜灯谜"], answer: 0 }
    ],
    keywords: ["异乡","佳节","思亲","登高","茱萸"]
  },
  { id: "3-下-忆江南", grade: 3, term: "下", title: "忆江南", author: "白居易", dynasty: "唐",
    lines: ["江南好，风景旧曾谙。", "日出江花红胜火，春来江水绿如蓝。", "能不忆江南？"],
    summary: "总领江南之美，以反问加强思念。",
    qa: [
      { q: "“能不忆江南？”属于哪种修辞？", options: ["反问", "设问", "比喻", "对偶"], answer: 0 },
      { q: "“旧曾谙”的“谙”意思是？", options: ["熟悉", "陌生", "美丽", "热闹"], answer: 0 }
    ],
    keywords: ["江南","江花","江水","红胜火","绿如蓝"]
  },
  { id: "3-下-滁州西涧", grade: 3, term: "下", title: "滁州西涧", author: "韦应物", dynasty: "唐",
    lines: ["独怜幽草涧边生，上有黄鹂深树鸣。", "春潮带雨晚来急，野渡无人舟自横。"],
    summary: "幽草黄鹂，春潮急雨，野渡无人，清冷意境。",
    qa: [
      { q: "“舟自横”渲染了怎样的氛围？", options: ["寂寥清冷", "热闹非凡", "危急惊险", "喜庆祥和"], answer: 0 },
      { q: "“深树鸣”的主体是？", options: ["黄鹂", "杜鹃", "燕子", "鸳鸯"], answer: 0 }
    ],
    keywords: ["幽草","涧边","黄鹂","春潮","野渡","舟自横"]
  },
  { id: "3-下-大林寺桃花", grade: 3, term: "下", title: "大林寺桃花", author: "白居易", dynasty: "唐",
    lines: ["人间四月芳菲尽，山寺桃花始盛开。", "长恨春归无觅处，不知转入此中来。"],
    summary: "山寺桃花晚开，巧遇春光别样。",
    qa: [
      { q: "“人间四月芳菲尽”对比了什么？", options: ["山寺桃花始盛开", "秋叶飘零", "夏雨滂沱", "冬雪严寒"], answer: 0 },
      { q: "“不知转入此中来”表达了？", options: ["对春光不期而遇的惊喜", "对春光的厌烦", "对秋景的喜爱", "对冬景的恐惧"], answer: 0 }
    ],
    keywords: ["四月","芳菲","山寺","桃花","春归"]
  },

  { id: "4-上-暮江吟", grade: 4, term: "上", title: "暮江吟", author: "白居易", dynasty: "唐",
    lines: ["一道残阳铺水中，半江瑟瑟半江红。", "可怜九月初三夜，露似珍珠月似弓。"],
    summary: "夕阳映江，色彩分明；夜露如珠，月如弓。",
    qa: [
      { q: "“半江瑟瑟半江红”是因为？", options: ["光线角度造成色差", "水太浅", "江水污染", "风很大"], answer: 0 },
      { q: "“露似珍珠月似弓”属于？", options: ["比喻", "对偶", "设问", "夸张"], answer: 0 }
    ],
    keywords: ["残阳","半江红","九月","露","月"]
  },
  { id: "4-上-题西林壁", grade: 4, term: "上", title: "题西林壁", author: "苏轼", dynasty: "宋",
    lines: ["横看成岭侧成峰，远近高低各不同。", "不识庐山真面目，只缘身在此山中。"],
    summary: "角度不同认识不同，身在其中难见全貌。",
    qa: [
      { q: "“不识庐山真面目”揭示的道理是？", options: ["身处其中难以看清整体", "山太高看不清", "天气不好看不清", "人太多看不清"], answer: 0 },
      { q: "“横看”“侧看”强调了？", options: ["观察角度变化", "时间变化", "人物变化", "天气变化"], answer: 0 }
    ],
    keywords: ["成岭","成峰","远近高低","真面目","此山中"]
  },
  { id: "4-上-出塞", grade: 4, term: "上", title: "出塞", author: "王昌龄", dynasty: "唐",
    lines: ["秦时明月汉时关，万里长征人未还。", "但使龙城飞将在，不教胡马度阴山。"],
    summary: "借古抒怀，盼良将镇边。",
    qa: [
      { q: "“秦时明月汉时关”表达了什么感慨？", options: ["战争绵延持久", "风景旖旎", "生活安宁", "农事繁忙"], answer: 0 },
      { q: "“飞将”指谁？", options: ["李广", "李靖", "班超", "岳飞"], answer: 0 }
    ],
    keywords: ["明月","关塞","长征","飞将","阴山"]
  },
  { id: "4-上-凉州词", grade: 4, term: "上", title: "凉州词", author: "王翰", dynasty: "唐",
    lines: ["葡萄美酒夜光杯，欲饮琵琶马上催。", "醉卧沙场君莫笑，古来征战几人回？"],
    summary: "边塞豪饮，感叹征战少回。",
    qa: [
      { q: "“夜光杯”常指？", options: ["玉杯", "瓷杯", "木杯", "金杯"], answer: 0 },
      { q: "“几人回”传达了什么情感？", options: ["对征战的悲凉感慨", "对胜利的喜悦", "对敌人的恐惧", "对家乡的厌恶"], answer: 0 }
    ],
    keywords: ["葡萄美酒","夜光杯","琵琶","沙场","征战"]
  },
  { id: "4-上-夏日绝句", grade: 4, term: "上", title: "夏日绝句", author: "李清照", dynasty: "宋",
    lines: ["生当作人杰，死亦为鬼雄。", "至今思项羽，不肯过江东。"],
    summary: "崇尚人杰气节，赞项羽不愿苟且归东。",
    qa: [
      { q: "“生当作人杰，死亦为鬼雄”表达什么？", options: ["人格与气节的追求", "对财富的追求", "对享乐的追求", "对权力的追求"], answer: 0 },
      { q: "“不肯过江东”评价项羽？", options: ["不愿苟且偷生", "贪生怕死", "贪恋江东", "畏敌退却"], answer: 0 }
    ],
    keywords: ["人杰","鬼雄","项羽","江东"]
  },
  { id: "4-上-嫦娥", grade: 4, term: "上", title: "嫦娥", author: "李商隐", dynasty: "唐",
    lines: ["云母屏风烛影深，长河渐落晓星沉。", "嫦娥应悔偷灵药，碧海青天夜夜心。"],
    summary: "夜深静景，嫦娥或悔孤寂。",
    qa: [
      { q: "“应悔”表达的语气是？", options: ["推测", "肯定", "质问", "否定"], answer: 0 },
      { q: "表现夜色的词有？", options: ["烛影、晓星", "桃花、春雨", "雪花、梅枝", "蝉声、晚风"], answer: 0 }
    ],
    keywords: ["云母屏风","烛影","长河","晓星","嫦娥"]
  },
  { id: "4-上-别董大", grade: 4, term: "上", title: "别董大", author: "高适", dynasty: "唐",
    lines: ["千里黄云白日曛，北风吹雁雪纷纷。", "莫愁前路无知己，天下谁人不识君。"],
    summary: "寒风送别，安慰友人不愁无知己。",
    qa: [
      { q: "“白日曛”写出了什么景象？", options: ["昏暗朦胧的天色", "烈日当空", "晴空万里", "夜色深沉"], answer: 0 },
      { q: "“谁人不识君”表达？", options: ["友人名满天下", "无人认识他", "他很平凡", "他很神秘"], answer: 0 }
    ],
    keywords: ["黄云","北风","雁","雪纷纷","知己"]
  },

  { id: "4-下-四时田园杂兴", grade: 4, term: "下", title: "四时田园杂兴（其一）", author: "范成大", dynasty: "宋",
    lines: ["梅子金黄杏子肥，麦花雪白菜花稀。", "日长篱落无人过，惟有蜻蜓蛱蝶飞。"],
    summary: "初夏丰收与静谧田园景象。",
    qa: [
      { q: "“麦花雪白”说明了什么时令特征？", options: ["麦子开花成熟在即", "冬雪纷飞", "春花烂漫", "秋叶飘零"], answer: 0 },
      { q: "全诗氛围是？", options: ["恬静悠闲", "喧嚣嘈杂", "悲凉萧瑟", "紧张忙碌"], answer: 0 }
    ],
    keywords: ["梅子","杏子","麦花","篱落","蜻蜓","蛱蝶"]
  },
  { id: "4-下-宿新市徐公店", grade: 4, term: "下", title: "宿新市徐公店", author: "杨万里", dynasty: "宋",
    lines: ["篱落疏疏一径深，树头花落未成阴。", "儿童急走追黄蝶，飞入菜花无处寻。"],
    summary: "初夏乡村童趣与田园景象。",
    qa: [
      { q: "“未成阴”说明了什么时令？", options: ["树叶未繁茂的初夏", "深冬", "盛夏酷热", "深秋"], answer: 0 },
      { q: "“无处寻”的原因是？", options: ["黄蝶隐入菜花", "黄蝶飞走很远", "黄蝶被抓住", "黄蝶停在树上"], answer: 0 }
    ],
    keywords: ["篱落","一径","花落","儿童","黄蝶","菜花"]
  },
  { id: "4-下-清平乐·村居", grade: 4, term: "下", title: "清平乐·村居", author: "辛弃疾", dynasty: "宋",
    lines: ["茅檐低小，溪上青青草。", "醉里吴音相媚好，白发谁家翁媪。", "大儿锄豆溪东，中儿正织鸡笼。", "最喜小儿无赖，溪头卧剥莲蓬。"],
    summary: "村居生活温馨富有生气，田园乐趣。",
    qa: [
      { q: "词中最能体现童趣的是？", options: ["溪头卧剥莲蓬", "锄豆溪东", "织鸡笼", "醉里吴音"], answer: 0 },
      { q: "“吴音”指的是？", options: ["江南方言", "歌声", "笑声", "哭声"], answer: 0 }
    ],
    keywords: ["茅檐","吴音","翁媪","锄豆","鸡笼","莲蓬"]
  },
  { id: "4-下-芙蓉楼送辛渐", grade: 4, term: "下", title: "芙蓉楼送辛渐", author: "王昌龄", dynasty: "唐",
    lines: ["寒雨连江夜入吴，平明送客楚山孤。", "洛阳亲友如相问，一片冰心在玉壶。"],
    summary: "江雨送别，自许清白之心。",
    qa: [
      { q: "“冰心在玉壶”比喻了什么？", options: ["清白高洁的心", "冰冷的心", "坚硬的心", "悲伤的心"], answer: 0 },
      { q: "“寒雨连江”渲染了何种氛围？", options: ["凄冷离别", "热闹喜庆", "轻松愉快", "惊险紧张"], answer: 0 }
    ],
    keywords: ["寒雨","连江","吴","楚山","冰心","玉壶"]
  },
  { id: "4-下-塞下曲", grade: 4, term: "下", title: "塞下曲", author: "卢纶", dynasty: "唐",
    lines: ["鹫翎金仆姑，燕尾绣蝥弧。", "独立扬新令，千营共一呼。"],
    summary: "军营整肃，发令严明，边塞雄风。",
    qa: [
      { q: "“千营共一呼”体现了？", options: ["军令统一严整", "人声嘈杂", "自由散漫", "安静无声"], answer: 0 },
      { q: "诗中“金仆姑”“蝥弧”属于？", options: ["兵器与旗号", "鸟类与兽类", "花草与树木", "山川与河流"], answer: 0 }
    ],
    keywords: ["鹫翎","金仆姑","燕尾","蝥弧","扬令","千营"]
  },
  { id: "4-下-墨梅", grade: 4, term: "下", title: "墨梅", author: "王冕", dynasty: "元",
    lines: ["我家洗砚池头树，朵朵花开淡墨痕。", "不要人夸颜色好，只留清气满乾坤。"],
    summary: "赞梅之清气与高洁，不事颜色。",
    qa: [
      { q: "“清气满乾坤”表达了什么？", options: ["高洁品格的赞美", "颜色艳丽", "气味难闻", "花朵稀少"], answer: 0 },
      { q: "“淡墨痕”意在强调？", options: ["不以颜色取胜", "颜色极艳", "颜色极暗", "花朵枯萎"], answer: 0 }
    ],
    keywords: ["洗砚池","淡墨痕","颜色","清气","乾坤"]
  },
  { id: "4-下-江畔独步寻花", grade: 4, term: "下", title: "江畔独步寻花（其五）", author: "杜甫", dynasty: "唐",
    lines: ["黄师塔前江水东，春光懒困倚微风。", "桃花一簇开无主，可爱深红爱浅红。"],
    summary: "春光懒困，桃花自开，闲适喜爱之情。",
    qa: [
      { q: "“开无主”表达了什么特点？", options: ["自然生长不经修饰", "被人看管", "花木稀少", "花期已尽"], answer: 0 },
      { q: "“深红”“浅红”体现了？", options: ["色彩的丰富与喜爱", "季节的更替", "风的强弱", "雨的大小"], answer: 0 }
    ],
    keywords: ["黄师塔","江水东","春光","微风","桃花","深红浅红"]
  },
  { id: "4-下-独坐敬亭山", grade: 4, term: "下", title: "独坐敬亭山", author: "李白", dynasty: "唐",
    lines: ["众鸟高飞尽，孤云独去闲。", "相看两不厌，只有敬亭山。"],
    summary: "以鸟云写静，人与山相看不厌。",
    qa: [
      { q: "“相看两不厌”表达了？", options: ["人与山互相欣赏", "山很高很险", "人很多很吵", "天气很好很暖"], answer: 0 },
      { q: "表现孤独的意象有？", options: ["众鸟、孤云", "花草、蝴蝶", "江水、渔舟", "桃花、细雨"], answer: 0 }
    ],
    keywords: ["众鸟","孤云","相看","敬亭山"]
  }
];

const COMMON_FUNCTION_WORDS = ["之", "其", "而", "于", "以", "者", "也", "乃", "若", "且", "与", "焉", "所", "则", "乎"];

function buildFunctionCandidates(poem) {
  const virtual = shuffle(COMMON_FUNCTION_WORDS).slice(0, 6);
  const text = poem.lines.join("");
  const chars = Array.from(text.replace(/[，。！？、；：\s]/g, ""));
  const contentCandidates = shuffle(chars).slice(0, 8);
  const mix = shuffle([...virtual, ...contentCandidates]);
  return mix.map(t => ({ text: t, isFunction: COMMON_FUNCTION_WORDS.includes(t) }));
}
function poemFunctionWords(poem) {
  const set = new Set(COMMON_FUNCTION_WORDS);
  const chars = Array.from(poem.lines.join(""));
  return [...new Set(chars.filter(c => set.has(c)))];
}

const STORAGE_KEY = "poem_mastery_v2";
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { passed: [], modules: {} };
  } catch {
    return { passed: [], modules: {} };
  }
}
function saveProgress(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = {
  progress: loadProgress(),
  currentPoemId: null,
  functionCandidates: [],
  functionSelected: new Set(),
  functionPoemSelected: new Set(),
  dictationBlanks: [],
  segmentationGaps: new Set(),
  segmentationTargets: new Set(),
  vocabSelected: new Set(),
};

const poemListEl = document.getElementById("poemList");
const gradeFilterEl = document.getElementById("gradeFilter");
const termFilterEl = document.getElementById("termFilter");
const statusFilterEl = document.getElementById("statusFilter");
const progressTextEl = document.getElementById("progressText");
const progressBarEl = document.getElementById("progressBar");
const poemTitleEl = document.getElementById("poemTitle");
const poemMetaEl = document.getElementById("poemMeta");
const poemTextEl = document.getElementById("poemText");
const lockNoticeEl = document.getElementById("lockNotice");
const modulesEl = document.getElementById("modules");
const footerActionsEl = document.getElementById("footerActions");
const finishPoemBtn = document.getElementById("finishPoem");
const toggleHideBtn = document.getElementById("toggleHide");
const markRecitePassBtn = document.getElementById("markRecitePass");
const reciteStatusEl = document.getElementById("reciteStatus");
const meaningQuestionsEl = document.getElementById("meaningQuestions");
const submitMeaningBtn = document.getElementById("submitMeaning");
const resetMeaningBtn = document.getElementById("resetMeaning");
const meaningStatusEl = document.getElementById("meaningStatus");
const functionChoicesEl = document.getElementById("functionChoices");
const functionPoemEl = document.getElementById("functionPoem");
const submitFunctionBtn = document.getElementById("submitFunction");
const resetFunctionBtn = document.getElementById("resetFunction");
const functionStatusEl = document.getElementById("functionStatus");
const dictationAreaEl = document.getElementById("dictationArea");
const submitDictationBtn = document.getElementById("submitDictation");
const resetDictationBtn = document.getElementById("resetDictation");
const dictationStatusEl = document.getElementById("dictationStatus");
const segmentationAreaEl = document.getElementById("segmentationArea");
const segmentationLineCountEl = document.getElementById("segmentationLineCount");
const submitSegmentationBtn = document.getElementById("submitSegmentation");
const resetSegmentationBtn = document.getElementById("resetSegmentation");
const segmentationStatusEl = document.getElementById("segmentationStatus");
const vocabChoicesEl = document.getElementById("vocabChoices");
const submitVocabBtn = document.getElementById("submitVocab");
const resetVocabBtn = document.getElementById("resetVocab");
const vocabStatusEl = document.getElementById("vocabStatus");
const roleSelectEl = document.getElementById("roleSelect");
const parentPwdEl = document.getElementById("parentPwd");
const loginBtnEl = document.getElementById("loginBtn");
const userStatusEl = document.getElementById("userStatus");
const toggleAnswersBtn = document.getElementById("toggleAnswers");
const answersPanelEl = document.getElementById("answersPanel");
const answersContentEl = document.getElementById("answersContent");

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`panel-${btn.dataset.tab}`).classList.add("active");
  });
});

gradeFilterEl.addEventListener("change", renderPoemList);
termFilterEl.addEventListener("change", renderPoemList);
statusFilterEl.addEventListener("change", renderPoemList);
roleSelectEl.addEventListener("change", () => {
  const v = roleSelectEl.value;
  parentPwdEl.classList.toggle("hidden", v !== "parent");
});
loginBtnEl.addEventListener("click", () => {
  const v = roleSelectEl.value;
  if (v === "parent") {
    const pwd = parentPwdEl.value || "";
    if (pwd !== "888888") {
      alert("家长密码错误");
      return;
    }
    state.role = "parent";
  } else {
    state.role = "student";
  }
  localStorage.setItem("role", state.role);
  applyRoleUI();
  if (state.role === "parent" && state.currentPoemId) {
    buildAnswers(currentPoem());
  }
});
toggleAnswersBtn.addEventListener("click", () => {
  const showing = !answersPanelEl.classList.contains("hidden");
  if (showing) {
    answersPanelEl.classList.add("hidden");
  } else {
    answersPanelEl.classList.remove("hidden");
    if (state.currentPoemId) buildAnswers(currentPoem());
  }
});

function renderProgress() {
  const total = POEMS.length;
  const done = state.progress.passed.length;
  progressTextEl.textContent = `进度：${done} / ${total}`;
  progressBarEl.style.width = `${Math.round((done / total) * 100)}%`;
}

function renderPoemList() {
  const gradeFilter = gradeFilterEl.value;
  const termFilter = termFilterEl.value;
  const statusFilter = statusFilterEl.value;
  poemListEl.innerHTML = "";
  const filtered = POEMS.filter(p =>
    (gradeFilter === "all" || p.grade.toString() === gradeFilter) &&
    (termFilter === "all" || p.term === termFilter)
  );
  filtered.forEach((poem, idx) => {
    const prev = filtered[idx - 1];
    const unlocked = idx === 0 || (prev && state.progress.passed.includes(prev.id));
    const passed = state.progress.passed.includes(poem.id);
    const status = passed ? "passed" : (unlocked ? "open" : "locked");
    if (statusFilter !== "all" && status !== statusFilter) return;
    const li = document.createElement("li");
    li.className = "poem-item";
    li.innerHTML = `
      <span>${poem.title} <span class="badge">${poem.author}</span></span>
      <span class="status-badge">${status === "passed" ? "已过关" : status === "open" ? "可学习" : "未解锁"}</span>
    `;
    li.addEventListener("click", () => selectPoem(poem.id, filtered));
    poemListEl.appendChild(li);
  });
}

function selectPoem(id, currentList = null) {
  state.currentPoemId = id;
  const poem = POEMS.find(p => p.id === id);
  poemTitleEl.textContent = poem.title;
  poemMetaEl.textContent = `${poem.dynasty}·${poem.author}｜${poem.grade}年级·${poem.term}册`;
  poemTextEl.textContent = poem.lines.join("\n");
  const list = currentList || POEMS.filter(p => p.grade === poem.grade && p.term === poem.term);
  const idx = list.findIndex(p => p.id === id);
  const prev = list[idx - 1];
  const unlocked = idx === 0 || (prev && state.progress.passed.includes(prev.id));
  lockNoticeEl.classList.toggle("hidden", unlocked);
  modulesEl.classList.toggle("hidden", !unlocked);
  footerActionsEl.classList.toggle("hidden", !unlocked);

  reciteStatusEl.textContent = "";
  reciteHidden = false;
  poemTextEl.style.filter = "none";

  buildMeaning(poem);
  buildFunction(poem);
  buildDictation(poem);
  buildSegmentation(poem);
  buildVocab(poem);
  if (state.role === "parent" && !answersPanelEl.classList.contains("hidden")) {
    buildAnswers(poem);
  }
  updateFooter(poem);
}

let reciteHidden = false;
toggleHideBtn.addEventListener("click", () => {
  reciteHidden = !reciteHidden;
  poemTextEl.style.filter = reciteHidden ? "blur(0.35rem)" : "none";
});
markRecitePassBtn.addEventListener("click", () => {
  setModulePassed("recite", true);
  reciteStatusEl.textContent = "背诵通过";
  reciteStatusEl.className = "status ok";
  updateFooter();
});

function buildMeaning(poem) {
  meaningStatusEl.textContent = "";
  meaningStatusEl.className = "status";
  meaningQuestionsEl.innerHTML = "";
  poem.qa.forEach((qa, i) => {
    const div = document.createElement("div");
    div.className = "question";
    const opts = qa.options.map((opt, idx) => {
      return `<label class="choice"><input type="radio" name="q${i}" value="${idx}"/><span>${opt}</span></label>`;
    }).join("");
    div.innerHTML = `<div><strong>问题${i + 1}：</strong>${qa.q}</div><div class="choices">${opts}</div>`;
    meaningQuestionsEl.appendChild(div);
  });
}
submitMeaningBtn.addEventListener("click", () => {
  const poem = currentPoem();
  let ok = true;
  poem.qa.forEach((qa, i) => {
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    if (!sel || parseInt(sel.value, 10) !== qa.answer) ok = false;
  });
  if (ok) {
    setModulePassed("meaning", true);
    meaningStatusEl.textContent = "释义自测通过";
    meaningStatusEl.className = "status ok";
  } else {
    meaningStatusEl.textContent = "还有答案不正确或未选择";
    meaningStatusEl.className = "status warn";
  }
  updateFooter();
});
resetMeaningBtn.addEventListener("click", () => buildMeaning(currentPoem()));

function buildFunction(poem) {
  functionStatusEl.textContent = "";
  functionStatusEl.className = "status";
  state.functionSelected = new Set();
  state.functionPoemSelected = new Set();
  state.functionCandidates = buildFunctionCandidates(poem);

  functionChoicesEl.innerHTML = "";
  state.functionCandidates.forEach((c, idx) => {
    const label = document.createElement("label");
    label.className = "choice";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("change", () => {
      if (input.checked) state.functionSelected.add(idx);
      else state.functionSelected.delete(idx);
    });
    const span = document.createElement("span");
    span.textContent = c.text;
    label.appendChild(input);
    label.appendChild(span);
    functionChoicesEl.appendChild(label);
  });

  functionPoemEl.innerHTML = "";
  const chars = Array.from(poem.lines.join(""));
  chars.forEach((ch, i) => {
    const isChar = !/[，。！？、；：\s]/.test(ch);
    const el = document.createElement("span");
    el.textContent = ch;
    el.className = "char" + (isChar ? "" : " muted");
    if (isChar) {
      el.addEventListener("click", () => {
        const key = `${ch}-${i}`;
        if (state.functionPoemSelected.has(key)) {
          state.functionPoemSelected.delete(key);
          el.classList.remove("selected");
        } else {
          state.functionPoemSelected.add(key);
          el.classList.add("selected");
        }
      });
    }
    functionPoemEl.appendChild(el);
  });
}
submitFunctionBtn.addEventListener("click", () => {
  const A_correctIdx = state.functionCandidates
    .map((c, idx) => ({ idx, isFunction: c.isFunction }))
    .filter(x => x.isFunction)
    .map(x => x.idx);
  const A_selected = [...state.functionSelected].sort((a, b) => a - b);
  const A_ok = arraysEqual(A_selected, A_correctIdx);

  const poem = currentPoem();
  const targetSet = new Set(poemFunctionWords(poem));
  const B_selectedChars = new Set(
    [...state.functionPoemSelected].map(key => key.split("-")[0])
  );
  let B_ok = true;
  for (const ch of B_selectedChars) {
    if (!targetSet.has(ch)) { B_ok = false; break; }
  }
  if (targetSet.size > 0 && B_selectedChars.size === 0) B_ok = false;

  if (A_ok && B_ok) {
    setModulePassed("function", true);
    functionStatusEl.textContent = "虚实词自测通过";
    functionStatusEl.className = "status ok";
  } else {
    functionStatusEl.textContent = "请检查虚词选择或诗中点选";
    functionStatusEl.className = "status warn";
  }
  updateFooter();
});
resetFunctionBtn.addEventListener("click", () => buildFunction(currentPoem()));

function buildDictation(poem) {
  dictationStatusEl.textContent = "";
  dictationStatusEl.className = "status";
  dictationAreaEl.innerHTML = "";
  state.dictationBlanks = [];
  const text = poem.lines.join("\n");
  const chars = Array.from(text);
  const candidates = chars.map((ch, i) => ({ ch, i }))
    .filter(x => !/[，。！？、；：\s]/.test(x.ch));
  const blanks = shuffle(candidates).slice(0, Math.min(6, Math.max(3, Math.floor(candidates.length / 12))));
  const blankSet = new Set(blanks.map(b => b.i));
  const container = document.createElement("div");
  chars.forEach((ch, i) => {
    if (blankSet.has(i)) {
      const span = document.createElement("span");
      span.className = "blank";
      const input = document.createElement("input");
      input.maxLength = 1;
      input.dataset.index = i;
      span.appendChild(input);
      container.appendChild(span);
      state.dictationBlanks.push({ index: i, answer: ch, input });
    } else {
      const t = document.createTextNode(ch);
      container.appendChild(t);
    }
  });
  dictationAreaEl.appendChild(container);
}
submitDictationBtn.addEventListener("click", () => {
  let ok = true;
  state.dictationBlanks.forEach(b => {
    const val = (b.input.value || "").trim();
    if (val !== b.answer) ok = false;
  });
  if (ok) {
    setModulePassed("dictation", true);
    dictationStatusEl.textContent = "据义默写通过";
    dictationStatusEl.className = "status ok";
  } else {
    dictationStatusEl.textContent = "有空格未正确填写";
    dictationStatusEl.className = "status warn";
  }
  updateFooter();
});
resetDictationBtn.addEventListener("click", () => buildDictation(currentPoem()));

function buildSegmentation(poem) {
  segmentationStatusEl.textContent = "";
  segmentationStatusEl.className = "status";
  segmentationAreaEl.innerHTML = "";
  state.segmentationGaps = new Set();
  state.segmentationTargets = new Set();
  const lines = poem.lines;
  segmentationLineCountEl.textContent = lines.length.toString();
  const full = lines.join("");
  for (let i = 0; i < full.length; i++) {
    const ch = full[i];
    const span = document.createElement("span");
    span.className = "seg-char";
    span.textContent = ch;
    segmentationAreaEl.appendChild(span);
    if (i < full.length - 1) {
      const gap = document.createElement("span");
      gap.className = "seg-gap off";
      gap.dataset.index = i;
      gap.title = "点击此处设置换行";
      gap.addEventListener("click", () => {
        const idx = parseInt(gap.dataset.index, 10);
        if (state.segmentationGaps.has(idx)) {
          state.segmentationGaps.delete(idx);
          gap.classList.remove("on");
          gap.classList.add("off");
        } else {
          state.segmentationGaps.add(idx);
          gap.classList.remove("off");
          gap.classList.add("on");
        }
      });
      segmentationAreaEl.appendChild(gap);
    }
  }
  let cursor = 0;
  lines.forEach(line => {
    cursor += line.length;
    if (cursor < full.length) state.segmentationTargets.add(cursor - 1);
  });
}
submitSegmentationBtn.addEventListener("click", () => {
  const sel = [...state.segmentationGaps].sort((a, b) => a - b);
  const target = [...state.segmentationTargets].sort((a, b) => a - b);
  const ok = arraysEqual(sel, target);
  if (ok) {
    setModulePassed("segmentation", true);
    segmentationStatusEl.textContent = "断句自测通过";
    segmentationStatusEl.className = "status ok";
  } else {
    segmentationStatusEl.textContent = "断句位置不正确，请重试";
    segmentationStatusEl.className = "status warn";
  }
  updateFooter();
});
resetSegmentationBtn.addEventListener("click", () => buildSegmentation(currentPoem()));

function buildVocab(poem) {
  vocabStatusEl.textContent = "";
  vocabStatusEl.className = "status";
  vocabChoicesEl.innerHTML = "";
  state.vocabSelected = new Set();
  const distractors = shuffle(POEMS.flatMap(p => p.keywords || []).filter(k => !(poem.keywords || []).includes(k))).slice(0, 6);
  const all = shuffle([...(poem.keywords || []).slice(0, 4), ...distractors]).slice(0, 10);
  all.forEach(word => {
    const label = document.createElement("label");
    label.className = "choice";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("change", () => {
      if (input.checked) state.vocabSelected.add(word);
      else state.vocabSelected.delete(word);
    });
    const span = document.createElement("span");
    span.textContent = word;
    label.appendChild(input);
    label.appendChild(span);
    vocabChoicesEl.appendChild(label);
  });
}
submitVocabBtn.addEventListener("click", () => {
  const poem = currentPoem();
  const keys = new Set(poem.keywords || []);
  let ok = true;
  for (const w of state.vocabSelected) {
    if (!keys.has(w)) { ok = false; break; }
  }
  if (ok && state.vocabSelected.size >= Math.min(2, keys.size)) {
    setModulePassed("vocab", true);
    vocabStatusEl.textContent = "字词识记通过";
    vocabStatusEl.className = "status ok";
  } else {
    vocabStatusEl.textContent = "请选择本诗的关键词（至少选择两个）";
    vocabStatusEl.className = "status warn";
  }
  updateFooter();
});
resetVocabBtn.addEventListener("click", () => buildVocab(currentPoem()));

function buildAnswers(poem) {
  const blocks = [];
  const meaningBlock = document.createElement("div");
  meaningBlock.className = "block";
  const mbTitle = document.createElement("h4");
  mbTitle.textContent = "释义自测答案";
  meaningBlock.appendChild(mbTitle);
  poem.qa.forEach((qa, i) => {
    const p = document.createElement("p");
    const ansText = qa.options[qa.answer];
    p.textContent = `问题${i + 1}：${ansText}`;
    meaningBlock.appendChild(p);
  });
  blocks.push(meaningBlock);

  const funcBlock = document.createElement("div");
  funcBlock.className = "block";
  const fbTitle = document.createElement("h4");
  fbTitle.textContent = "虚实词自测答案";
  funcBlock.appendChild(fbTitle);
  const aList = document.createElement("p");
  const candidates = buildFunctionCandidates(poem);
  const correctA = candidates.filter(c => c.isFunction).map(c => c.text);
  aList.textContent = `A. 虚词选项：${correctA.join("、") || "无"}`;
  funcBlock.appendChild(aList);
  const bList = document.createElement("p");
  const pfw = poemFunctionWords(poem);
  bList.textContent = `B. 本诗虚词：${pfw.join("、") || "无"}`;
  funcBlock.appendChild(bList);
  blocks.push(funcBlock);

  const dictBlock = document.createElement("div");
  dictBlock.className = "block";
  const dbTitle = document.createElement("h4");
  dbTitle.textContent = "据义默写答案";
  dictBlock.appendChild(dbTitle);
  const dbText = document.createElement("p");
  if (state.dictationBlanks.length > 0) {
    const answers = state.dictationBlanks.map(b => b.answer).join("、");
    dbText.textContent = `当前空格正确字符：${answers}`;
  } else {
    dbText.textContent = "请先生成本次默写题（进入据义默写模块）";
  }
  dictBlock.appendChild(dbText);
  blocks.push(dictBlock);

  const segBlock = document.createElement("div");
  segBlock.className = "block";
  const sbTitle = document.createElement("h4");
  sbTitle.textContent = "断句自测答案";
  segBlock.appendChild(sbTitle);
  const sbPre = document.createElement("pre");
  sbPre.textContent = poem.lines.join("\n");
  segBlock.appendChild(sbPre);
  blocks.push(segBlock);

  const vocabBlock = document.createElement("div");
  vocabBlock.className = "block";
  const vbTitle = document.createElement("h4");
  vbTitle.textContent = "字词识记答案";
  vocabBlock.appendChild(vbTitle);
  const vbText = document.createElement("p");
  vbText.textContent = `本诗关键词：${(poem.keywords || []).join("、") || "无"}`;
  vocabBlock.appendChild(vbText);
  blocks.push(vocabBlock);

  answersContentEl.innerHTML = "";
  blocks.forEach(b => answersContentEl.appendChild(b));
}

finishPoemBtn.addEventListener("click", () => {
  const poem = currentPoem();
  const modulesPassed = getModulePassed();
  if (modulesPassed.recite && modulesPassed.meaning && modulesPassed.function && modulesPassed.dictation && modulesPassed.segmentation && modulesPassed.vocab) {
    if (!state.progress.passed.includes(poem.id)) {
      state.progress.passed.push(poem.id);
      saveProgress(state.progress);
      renderProgress();
      renderPoemList();
    }
    alert("恭喜过关！下一首已解锁。");
    selectNext(poem.id);
  } else {
    alert("需完成背诵、释义自测、虚实词自测、据义默写、断句自测、字词识记六个模块后才能过关。");
  }
  updateFooter();
});

function selectNext(id) {
  const current = POEMS.find(p => p.id === id);
  const list = POEMS.filter(p => p.grade === current.grade && p.term === current.term);
  const idx = list.findIndex(p => p.id === id);
  if (idx >= 0 && idx < list.length - 1) {
    const nextId = list[idx + 1].id;
    selectPoem(nextId, list);
  } else {
    alert("本册全部完成，切换到其他学期继续学习吧！");
  }
}

function setModulePassed(module, passed) {
  const pid = state.currentPoemId;
  if (!state.progress.modules[pid]) state.progress.modules[pid] = {};
  state.progress.modules[pid][module] = !!passed;
  saveProgress(state.progress);
  updateFooter();
}
function getModulePassed() {
  const pid = state.currentPoemId;
  const m = (state.progress.modules[pid] || {});
  return { recite: !!m.recite, meaning: !!m.meaning, function: !!m.function, dictation: !!m.dictation, segmentation: !!m.segmentation, vocab: !!m.vocab };
}
function updateFooter() {
  const passed = getModulePassed();
  const ok = passed.recite && passed.meaning && passed.function && passed.dictation && passed.segmentation && passed.vocab;
  finishPoemBtn.disabled = !ok;
  document.getElementById("unlockHint").style.display = ok ? "none" : "inline";
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}
function currentPoem() {
  return POEMS.find(p => p.id === state.currentPoemId);
}

renderProgress();
gradeFilterEl.value = "3";
termFilterEl.value = "下";
renderPoemList();
const filteredDefault = POEMS.filter(p => p.grade === 3 && p.term === "下");
if (filteredDefault.length > 0) selectPoem(filteredDefault[0].id, filteredDefault);
state.role = localStorage.getItem("role") || "student";
roleSelectEl.value = state.role;
parentPwdEl.classList.toggle("hidden", state.role !== "parent");
applyRoleUI();

function applyRoleUI() {
  userStatusEl.textContent = `已登录：${state.role === "parent" ? "家长" : "学生"}`;
  toggleAnswersBtn.classList.toggle("hidden", state.role !== "parent");
  if (state.role !== "parent") {
    answersPanelEl.classList.add("hidden");
  }
}
