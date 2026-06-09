const heroes = [
  {
    id: "li-bai",
    name: "李白",
    title: "青莲剑仙",
    img: "./assets/optimized/li-bai-user-4.webp",
    caption: "天光与白羽环绕，剑仙气质被推到最华丽的神话瞬间。",
    gallery: [
      {
        img: "./assets/optimized/li-bai-user-1.webp",
        caption: "云上仙城中的俯视长镜，适合做首屏主视觉。"
      },
      {
        img: "./assets/optimized/li-bai-user-2.webp",
        caption: "月下回身的冷色构图，更像人物故事章节图。"
      },
      {
        img: "./assets/optimized/li-bai-user-3.webp",
        caption: "红枫与月光交织，诗意和战意同时出现。"
      },
      {
        img: "./assets/optimized/li-bai-user-4.webp",
        caption: "天光白羽的正面英雄像，最适合作为人物档案封面。"
      }
    ],
    quote: "若世间只剩一杯月色，我也要把它斩成诗。",
    tags: ["剑客", "自由", "诗酒", "月光"],
    tone: "潇洒、锋利、不可驯服",
    conflict: "他追求绝对自由，却总被时代与名声拉回战场。",
    visual: "白袍、长剑、青玉色月光、金色酒意",
    storyA:
      "李白像一阵不肯停留的风。他把酒壶挂在腰间，把长剑交给月色，行过长安与荒野，也行过众人不敢踏入的命运裂缝。",
    storyB:
      "在人物站里，他不是单纯的潇洒剑客，而是一个把自由看得比胜负更重的人。每一次出剑，都像是在替自己证明：真正的诗，不必向任何王座低头。"
  },
  {
    id: "mulan",
    name: "花木兰",
    title: "长城守卫者",
    img: "./assets/optimized/mulan-user-2.webp",
    caption: "圣殿风暴中执剑而立，守护感被放大成史诗镜头。",
    gallery: [
      {
        img: "./assets/optimized/mulan-user-1.webp",
        caption: "背光废墟中的回身长镜，冷冽又坚决。"
      },
      {
        img: "./assets/optimized/mulan-user-2.webp",
        caption: "金色风暴下的正面英雄像，适合作为人物主视觉。"
      },
      {
        img: "./assets/optimized/mulan-user-3.webp",
        caption: "月光幻境里的银紫战甲，带有更强的奇幻气质。"
      },
      {
        img: "./assets/optimized/mulan-user-4.webp",
        caption: "暗紫宫殿中的全身构图，适合做高级封面图。"
      }
    ],
    quote: "战鼓响起时，我只问身后的人是否平安。",
    tags: ["长城", "将领", "责任", "烈焰"],
    tone: "沉稳、强悍、带着克制的温柔",
    conflict: "她必须在个人命运与守护职责之间不断做选择。",
    visual: "赤甲、长剑、烽火、沙场金光",
    storyA:
      "花木兰的故事不止是替父从军，也不止是战场传奇。她真正背负的，是每一次黎明前都必须站在城墙上的孤独。",
    storyB:
      "她的锋芒来自选择，不来自愤怒。人物视觉里，红色不是装饰，而是烽火、血脉和不肯退后的决心。"
  },
  {
    id: "luna",
    name: "露娜",
    title: "月光之女",
    img: "./assets/optimized/luna-user-2.webp",
    caption: "星月之下执刃而立，银白长发与月光形成完整人物主视觉。",
    gallery: [
      {
        img: "./assets/optimized/luna-user-1.webp",
        caption: "血月玫瑰下的回眸，冷艳与危险并存。"
      },
      {
        img: "./assets/optimized/luna-user-2.webp",
        caption: "蓝白星夜主视觉，最适合作为露娜人物档案封面。"
      },
      {
        img: "./assets/optimized/luna-user-3.webp",
        caption: "红月花园中的玫瑰战衣，情绪更浓烈。"
      },
      {
        img: "./assets/optimized/luna-user-4.webp",
        caption: "蓝光法阵中的近景出招，月刃压迫感很强。"
      },
      {
        img: "./assets/optimized/luna-user-5.webp",
        caption: "红黑月夜里的背身回望，适合故事转折章节。"
      },
      {
        img: "./assets/optimized/luna-user-6.webp",
        caption: "紫银弯月构图，突出宿命与孤独感。"
      },
      {
        img: "./assets/optimized/luna-user-7.webp",
        caption: "星盘前的侧身静帧，更像人物设定集内页。"
      },
      {
        img: "./assets/optimized/luna-user-8.webp",
        caption: "月轮与紫晶武器同框，适合技能视觉展示。"
      },
      {
        img: "./assets/optimized/luna-user-9.webp",
        caption: "冷蓝圣殿中的银发战姿，适合做章节封面。"
      }
    ],
    quote: "月亮从不审判我，它只照见我真正想守住的人。",
    tags: ["月光", "宿命", "孤独", "银蓝"],
    tone: "清冷、执着、带有悲剧感",
    conflict: "她被血缘和宿命牵引，却仍试图为自己选择答案。",
    visual: "银蓝战衣、弯月、冷雾、轻盈刃光",
    storyA:
      "露娜的美感来自距离。她像一束从夜色里落下的月光，明亮，却永远带着不可触碰的寒意。",
    storyB:
      "她的故事适合用慢镜头讲述：抬眼、转身、刃光掠过。真正的冲突不在敌人身上，而在她是否能挣脱已经写好的命运。"
  },
  {
    id: "kai",
    name: "铠",
    title: "破灭刃锋",
    img: "./assets/optimized/kai-user-1.webp",
    caption: "蓝银圣殿中持刃而立，冷峻压迫感更像电影主角。",
    gallery: [
      {
        img: "./assets/optimized/kai-user-1.webp",
        caption: "蓝银战甲主视觉，人物气场最完整。"
      },
      {
        img: "./assets/optimized/kai-user-2.webp",
        caption: "龙影环绕的冰蓝长镜，带出更强神性。"
      },
      {
        img: "./assets/optimized/kai-user-3.webp",
        caption: "白金龙刃近景，适合作为技能觉醒设定图。"
      },
      {
        img: "./assets/optimized/kai-user-4.webp",
        caption: "月下正面构图，冷光与黑甲形成强烈对比。"
      },
      {
        img: "./assets/optimized/kai-user-5.webp",
        caption: "银白近景压迫感强，适合作为人物详情封面。"
      }
    ],
    quote: "我记得每一道伤，也记得为什么不能倒下。",
    tags: ["重甲", "孤勇", "刀锋", "守护"],
    tone: "冷峻、压迫、深藏温度",
    conflict: "他越想隔绝过去，过去越会以更锋利的方式追上来。",
    visual: "重甲、巨刃、冷铁、暗金逆光",
    storyA:
      "铠像一座走动的城墙。他不擅长解释，也不愿把伤口展示给任何人，于是所有情绪都沉进了甲胄深处。",
    storyB:
      "人物站将他处理成电影里的孤胆主角：背光、低角度、巨刃占据画面。沉默不是空白，而是一种更重的叙事。"
  },
  {
    id: "diaochan",
    name: "貂蝉",
    title: "绝世舞姬",
    img: "./assets/optimized/diaochan-user-2.webp",
    caption: "紫晶幻境中起舞，锋芒藏在每一次回眸里。",
    gallery: [
      {
        img: "./assets/optimized/diaochan-user-1.webp",
        caption: "银发回眸，暗紫宫殿里的危险优雅。"
      },
      {
        img: "./assets/optimized/diaochan-user-2.webp",
        caption: "双臂展开，像把整座幻境都纳入舞步。"
      },
      {
        img: "./assets/optimized/diaochan-user-3.webp",
        caption: "哥特圣殿中的远景长镜，命运感更强。"
      },
      {
        img: "./assets/optimized/diaochan-user-4.webp",
        caption: "粉紫月光下的盛装全身像，适合封面视觉。"
      }
    ],
    quote: "美若没有锋芒，就只是一面被人摆放的镜子。",
    tags: ["舞姬", "谋局", "玫瑰", "幻光"],
    tone: "优雅、危险、善于掌控节奏",
    conflict: "她被凝视，也反过来利用所有凝视改变局面。",
    visual: "粉金丝绸、舞袖、暗场灯光、花瓣轨迹",
    storyA:
      "貂蝉的魅力不在柔弱，而在她清楚知道每一次微笑会让棋局走向哪里。她把舞台变成战场，把目光变成武器。",
    storyB:
      "这版视觉让她站在暗场中央，丝绸和灯光像计谋一样展开。她不是等待命运的人，她是让命运偏移的人。"
  },
  {
    id: "sun-wukong",
    name: "孙悟空",
    title: "齐天大圣",
    img: "./assets/optimized/sun-wukong-user-1.webp",
    caption: "金光从掌心炸开，齐天战意压住整片天地。",
    gallery: [
      {
        img: "./assets/optimized/sun-wukong-user-1.webp",
        caption: "正面压迫感极强的出场镜头，金箍棒横贯画面。"
      },
      {
        img: "./assets/optimized/sun-wukong-user-2.webp",
        caption: "水墨战场里的低身突进，速度与杀气更强。"
      },
      {
        img: "./assets/optimized/sun-wukong-user-3.webp",
        caption: "逆光长棍低角度，最接近电影海报的英雄瞬间。"
      },
      {
        img: "./assets/optimized/sun-wukong-user-4.webp",
        caption: "金白重甲静坐，适合作为神性觉醒设定图。"
      },
      {
        img: "./assets/optimized/sun-wukong-user-5.webp",
        caption: "近景冲锋构图，棍身透视带来强烈临场感。"
      }
    ],
    quote: "天若压我，我便把天打出一道裂缝。",
    tags: ["神话", "反叛", "金光", "战意"],
    tone: "狂放、炽烈、带着少年般的骄傲",
    conflict: "他渴望不被定义，却总要面对力量带来的责任。",
    visual: "金箍棒、赤金战衣、火光、风暴感构图",
    storyA:
      "孙悟空的故事天然适合电影化：云层翻滚、金光炸开、长棍从画面斜切而过，所有规则都在他登场时开始松动。",
    storyB:
      "他不是单纯的强者，而是那个永远不愿被一句天命概括的人。越是被压制，他越要让世界听见自己的名字。"
  }
];

const $ = (selector) => document.querySelector(selector);

const heroTabs = $("#heroTabs");
const galleryGrid = $("#galleryGrid");
const heroBackdrops = [$("#heroBackdropA"), $("#heroBackdropB")];
const portraitImages = [$("#mainPortraitA"), $("#mainPortraitB")];
const audio = $("#bgAudio");
const musicToggle = $("#musicToggle");
const musicIcon = $("#musicIcon");
const trackTitle = $("#trackTitle");
const volumeSlider = $("#volumeSlider");
const prevTrackButton = $("#prevTrack");
const nextTrackButton = $("#nextTrack");

let activeIndex = 0;
let autoTimer;
let activeBackdropLayer = 0;
let activePortraitLayer = 0;
let activeTrackIndex = 0;
let musicStarted = false;

const playlist = [
  {
    title: "AM - T-Chenxi",
    src: "./assets/audio/am-t-chenxi.mp3"
  },
  {
    title: "Forever - T-Chenxi",
    src: "./assets/audio/forever-t-chenxi-compressed.mp3"
  },
  {
    title: "是好",
    src: "./assets/audio/shi-hao.mp3"
  },
  {
    title: "心做し - cici_",
    src: "./assets/audio/kokoronashi-cici.mp3"
  }
];

function renderTabs() {
  heroTabs.innerHTML = heroes
    .map(
      (hero, index) => `
      <button class="hero-tab" type="button" data-index="${index}" aria-pressed="${index === activeIndex}">
        <span>
          <strong>${hero.name}</strong>
          <small>${hero.title}</small>
        </span>
      </button>`
    )
    .join("");

  heroTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    setActiveHero(Number(button.dataset.index), true);
  });
}

function renderGallery() {
  const galleryItems = heroes.flatMap((hero) => [
    {
      name: hero.name,
      title: hero.title,
      img: hero.img,
      caption: hero.caption,
      featured: false
    },
    ...(hero.gallery || []).map((item) => ({
      name: hero.name,
      title: hero.title,
      img: item.img,
      caption: item.caption,
      featured: true
    }))
  ]);

  galleryGrid.innerHTML = galleryItems
    .map(
      (item, index) => `
      <article class="hero-card ${item.featured ? "is-featured" : ""}" style="--card-accent: ${
        index % 2 ? "var(--ember)" : "var(--jade)"
      }">
        <img src="${item.img}" alt="${item.name}人物图" loading="lazy" decoding="async" />
        <div class="hero-card-copy">
          <span>${item.title}</span>
          <h3>${item.name}</h3>
          <p>${item.caption}</p>
        </div>
      </article>`
    )
    .join("");
}

function setActiveHero(index, userInitiated = false) {
  activeIndex = index;
  const hero = heroes[index];

  activeBackdropLayer = crossDissolve(heroBackdrops, activeBackdropLayer, hero.img);
  activePortraitLayer = crossDissolve(portraitImages, activePortraitLayer, hero.img, `${hero.name}原创人物图`);

  $("#portraitCaption").textContent = hero.caption;
  $("#profileTitle").textContent = hero.title;
  $("#profileName").textContent = hero.name;
  $("#profileQuote").textContent = `“${hero.quote.replace(/[“”]/g, "")}”`;
  $("#profileStoryA").textContent = hero.storyA;
  $("#profileStoryB").textContent = hero.storyB;
  $("#profileTone").textContent = hero.tone;
  $("#profileConflict").textContent = hero.conflict;
  $("#profileVisual").textContent = hero.visual;
  $("#profileTags").innerHTML = hero.tags.map((tag) => `<span>${tag}</span>`).join("");

  document.querySelectorAll(".hero-tab").forEach((button, buttonIndex) => {
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });

  if (userInitiated) {
    restartAutoPlay();
  }
}

function crossDissolve(layers, activeLayer, src, alt = "") {
  const nextLayer = activeLayer === 0 ? 1 : 0;
  const activeImage = layers[activeLayer];
  const nextImage = layers[nextLayer];

  if (activeImage.src.endsWith(src.replace("./", ""))) {
    activeImage.alt = alt;
    return activeLayer;
  }

  nextImage.classList.remove("is-active");
  nextImage.alt = alt;
  nextImage.onload = () => {
    activeImage.classList.remove("is-active");
    nextImage.classList.add("is-active");
    nextImage.onload = null;
  };
  nextImage.src = src;

  if (nextImage.complete) {
    nextImage.onload();
  }

  return nextLayer;
}

function restartAutoPlay() {
  window.clearInterval(autoTimer);
  autoTimer = window.setInterval(() => {
    setActiveHero((activeIndex + 1) % heroes.length);
  }, 6200);
}

function loadTrack(index, autoplay = false) {
  activeTrackIndex = (index + playlist.length) % playlist.length;
  const track = playlist[activeTrackIndex];
  audio.src = track.src;
  audio.volume = Number(volumeSlider.value);
  trackTitle.textContent = track.title;

  if (autoplay) {
    playMusic();
  }
}

async function playMusic() {
  try {
    await audio.play();
    musicStarted = true;
    musicIcon.textContent = "Ⅱ";
    musicToggle.classList.add("is-playing");
  } catch {
    musicIcon.textContent = "▶";
    musicToggle.classList.remove("is-playing");
    trackTitle.textContent = "点击播放";
  }
}

function pauseMusic() {
  audio.pause();
  musicIcon.textContent = "▶";
  musicToggle.classList.remove("is-playing");
}

function playNextTrack() {
  loadTrack(activeTrackIndex + 1, musicStarted && !audio.paused);
}

function playPrevTrack() {
  loadTrack(activeTrackIndex - 1, musicStarted && !audio.paused);
}

musicToggle.addEventListener("click", () => {
  if (!audio.src) {
    loadTrack(activeTrackIndex);
  }

  if (audio.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

nextTrackButton.addEventListener("click", () => {
  loadTrack(activeTrackIndex + 1, true);
});

prevTrackButton.addEventListener("click", () => {
  loadTrack(activeTrackIndex - 1, true);
});

volumeSlider.addEventListener("input", () => {
  audio.volume = Number(volumeSlider.value);
});

audio.addEventListener("ended", playNextTrack);

renderTabs();
renderGallery();
setActiveHero(0);
loadTrack(0);
restartAutoPlay();
