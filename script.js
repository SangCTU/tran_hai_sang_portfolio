// Dữ liệu chi tiết 6 dự án công nghệ
const PROJECTS_DATA = [
  //BIG BOOK
  {
    id: "word-addin-29",
    title: "BIG BOOK",
    category: "web",
    categoryLabel: "OKMindmap",
    icon: "📝",
    badgeStyle: "bg-crimsonSoft text-crimson",
    shortDesc:
      'Big Book là một hoạt động khám phá số có định hướng, sử dụng mô hình "cuốn sách lớn" để dẫn dắt người học tiếp cận, hệ thống hóa và kể lại kiến thức theo từng chương hoặc chủ đề trực quan, người học sẽ lật mở từng chặng nội dung, khai thác nguồn học liệu chọn lọc và cùng nhau ghép nối thành một bức tranh tổng thể sinh động, giúp biến những thông tin nhiều lớp lang thành một lộ trình rõ ràng, dễ theo dõi và giàu tính kể chuyện.',
    tech: ["Giới thiệu", "Sở thích", "Học phần", "Sản phẩm", "Mục tiêu"],
    highlights: [
      'Tổ chức nội dung theo cấu trúc "cuốn sách lớn" với các chặng/trang khám phá có mạch nối rõ ràng.',
      "Kết hợp nguồn tài nguyên số chọn lọc, hình ảnh minh họa và nhiệm vụ tổng hợp theo từng phần.",
      "Khuyến khích người học xâu chuỗi, diễn giải lại và hệ thống hóa kiến thức thành sản phẩm hoàn chỉnh.",
    ],
    value:
      "Giúp người học nhìn thấy bức tranh tổng thể mạch lạc, biết tự xâu chuỗi thông tin số và trình bày kiến thức một cách trực quan, cuốn hút.",
    docLink:
      "https://okmindmap.ctu.edu.vn/map/MjAxNmU0NzItNzFlZi00M2I0LTk1MGMtYjZhNTcxNjY2MTlj#",
  },
  // WebQuest: Lập trình bài hát yêu thích
  {
    id: "contacts-flask",
    title: "WebQuest: Lập trình bài hát yêu thích",
    category: "web",
    categoryLabel: "WebQuest",
    icon: "📇",
    badgeStyle: "bg-blue-50 text-royal",
    shortDesc:
      "Âm nhạc ngày nay đã và đang là một phần không thể thiếu trong đời sống tinh thần của mỗi chúng ta. Hiểu được điều đó nên tôi quyết định làm một bài WebQuest để giới thiệu về một bài hát mình yêu thích. Mình hi vọng các bạn sẽ xem làm theo và giới thiệu đến mình những bài hát mà các bạn yêu thích.",
    tech: [
      "Giới thiệu",
      "Nhiệm vụ",
      "Tiến trình",
      "Đánh giá",
      "Kết luận",
      "Sản phẩm",
    ],
    highlights: [
      "Âm nhạc có rất nhiều ý nghĩa vì bản thân nó đã mang nhiều tâm tư, tình cảm và thông điệp của người nhạc sĩ viết nên nó.",
      "Nỗi lo lập trình của bạn sẽ giảm đi khi bạn hoàn toàn có thể dùng lập trình Scratch để tạo các các sản phẩm tuyệt vời.",
      "Tiết kiệm thời gian tìm kiếm.",
    ],
    value:
      "Bài làm chỉ đơn giản giới thiệu về bài hát Tự hào Trường Sư phạm và hướng dẫn cách để làm một bài Scratch giới thiệu một bài hát yêu thích.",
    docLink:
      "https://okmindmap.ctu.edu.vn/map/MTVjMWMzMDItNzhlNS00M2FmLTkyZTAtYmM0MzVmOWFmNzI3#",
  },
  //WebQuest: Vi tích phân A1
  {
    id: "noodle-pos",
    title: "WebQuest: Vi tích phân A1",
    category: "web",
    categoryLabel: "WebQuest",
    icon: "🍜",
    badgeStyle: "bg-blue-50 text-royal",
    shortDesc:
      "WebQuest Toán Vi tích phân A1 là một hành trình khám phá có định hướng trên môi trường số, giúp người học tiếp cận các khái niệm giới hạn, đạo hàm, vi phân và tích phân thông qua các nhiệm vụ rõ ràng. Thay vì chỉ luyện giải bài tập tính toán thuần túy, người học sẽ khai thác tài nguyên trực tuyến chọn lọc để gắn công thức giải tích với ý nghĩa hình học, vật lý và bài toán thực tiễn.",
    tech: [
      "Giới thiệu",
      "Nhiệm vụ",
      "Tiến trình",
      "Đánh giá",
      "Kết luận",
      "Sản phẩm",
    ],
    highlights: [
      "Trực quan hóa khái niệm trừu tượng (giới hạn, đạo hàm, tích phân).",
      "Định hướng nhiệm vụ gắn với các bài toán tối ưu, tốc độ biến thiên hoặc ứng dụng thực tế.",
      "Cung cấp sẵn nguồn tham khảo tin cậy giúp người học rèn thói quen đối chiếu định lý và kiểm chứng kết quả.",
    ],
    value:
      "Giúp người học hiểu sâu bản chất toán giải tích, rèn kỹ năng tự học số và biết vận dụng công cụ tính toán vào giải quyết vấn đề thực tế.",
    docLink:
      "https://okmindmap.ctu.edu.vn/map/ZDY4N2ZkYzctNjE4ZC00MzA5LThmODEtOTc2ODc2OWMwYjNh",
  },
  //WebQuest: Phương pháp dạy học lập trình
  {
    id: "noodle-pos",
    title: "WebQuest: Phương pháp dạy học lập trình",
    category: "game",
    categoryLabel: "WebQuest",
    icon: "🐍",
    badgeStyle: "bg-amberSoft text-amber-800",
    shortDesc:
      "WebQuest về phương pháp dạy học lập trình là một chuỗi hoạt động khám phá số có định hướng, giúp người học (hoặc giáo sinh, giáo viên Tin học) tìm hiểu và so sánh các cách tiếp cận giảng dạy lập trình hiện đại. Thay vì chỉ đọc lý thuyết rời rạc về phương pháp, người học sẽ đi qua các tình huống sư phạm cụ thể, phân tích tài liệu mẫu và thiết kế kế hoạch dạy học thực tế.",
    tech: [
      "Giới thiệu",
      "Nhiệm vụ",
      "Tiến trình",
      "Đánh giá",
      "Kết luận",
      "Sản phẩm",
    ],
    highlights: [
      "Gắn lý thuyết phương pháp dạy học với các tình huống lên lớp và sản phẩm thực hành cụ thể.",
      "Tích hợp tài nguyên số, mô phỏng trực quan và ví dụ minh họa về cấu trúc điều khiển, thuật toán hay dự án nhỏ.",
      "Định hướng người học tự đối chiếu, phân tích ưu nhược điểm từng phương pháp thay vì tiếp thu thụ động.",
    ],
    value:
      "Giúp người học làm chủ phương pháp tiếp cận lập trình sáng tạo, biết thiết kế hoạt động học tập trực quan và khơi gợi hứng thú khám phá mã lệnh cho học sinh.",
    docLink:
      "https://okmindmap.ctu.edu.vn/map/OWQ1NmY5NTctYzYzMC00NGI2LWI4NTMtNDM1NWU0YmVhMmY0",
  },
  //WebQuest: Kiến tập sư phạm
  {
    id: "graph-colab",
    title: "WebQuest: Kiến tập sư phạm",
    category: "web",
    categoryLabel: "WebQuest",
    icon: "🕸️",
    badgeStyle: "bg-amberSoft text-amber-800",
    shortDesc:
      "WebQuest về kiến tập sư phạm hệ thống nguồn tham khảo chọn lọc hỗ trợ sinh viên ghi chép, phản tư và hệ thống hóa trải nghiệm thực địa một cách có phương pháp. Nhờ đó, những bỡ ngỡ ban đầu khi bước vào nghề giáo được chuyển hóa thành sự chuẩn bị chủ động và vững vàng hơn.",
    tech: [
      "Giới thiệu",
      "Nhiệm vụ",
      "Tiến trình",
      "Đánh giá",
      "Biểu mẫu",
      "Kết luận",
    ],
    highlights: [
      "Định hướng quan sát có mục tiêu về phương pháp giảng dạy, hoạt động học tập và nề nếp lớp học.",
      "Gắn trải nghiệm thực tế tại trường phổ thông với việc phân tích giáo án, học liệu và tình huống sư phạm.",
      "Khuyến khích ghi nhận, phản tư và tổng hợp minh chứng phục vụ báo cáo kiến tập rõ ràng, mạch lạc.",
    ],
    value:
      "Giúp sinh viên sư phạm chủ động thích nghi môi trường giáo dục thực tế, rèn tư duy phản tư nghề nghiệp và bồi đắp sự tự tin trước khi đứng lớp.",
    docLink:
      "https://okmindmap.ctu.edu.vn/map/Yjk4OGU5ZmUtYzlmYS00ZmUwLThhOWUtNmIwMzZlYWNiMTlj",
  },
];

let currentTab = "home";
let currentProjectFilter = "all";

// Chuyển đổi tab / khu vực hiển thị mượt mà
function setActiveTab(tabId, shouldScroll = true) {
  currentTab = tabId;

  const sections = document.querySelectorAll(".page-section");
  sections.forEach((sec) => {
    if (sec.id === tabId) {
      sec.classList.remove("hidden");
    } else {
      sec.classList.add("hidden");
    }
  });

  // Cập nhật trạng thái active trên menu desktop
  document.querySelectorAll(".nav-link").forEach((btn) => {
    const isActive = btn.getAttribute("data-nav") === tabId;
    btn.classList.toggle("text-royal", isActive);
    btn.classList.toggle("bg-blue-50", isActive);
    btn.classList.toggle("text-slate-600", !isActive);
  });

  // Cập nhật trạng thái active trên menu mobile
  document.querySelectorAll(".mobile-nav-link").forEach((btn) => {
    const isActive = btn.getAttribute("data-nav") === tabId;
    btn.classList.toggle("text-royal", isActive);
    btn.classList.toggle("bg-blue-50", isActive);
    btn.classList.toggle("text-slate-700", !isActive);
  });

  // Đóng menu mobile nếu đang mở
  closeMobileMenu();

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Bật/tắt menu trên thiết bị di động
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("mobile-menu-btn");
  const iconHam = document.getElementById("icon-hamburger");
  const iconClose = document.getElementById("icon-close");

  const isHidden = menu.classList.contains("hidden");
  if (isHidden) {
    menu.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
    iconHam.classList.add("hidden");
    iconClose.classList.remove("hidden");
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("mobile-menu-btn");
  const iconHam = document.getElementById("icon-hamburger");
  const iconClose = document.getElementById("icon-close");

  if (menu && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
  if (btn) btn.setAttribute("aria-expanded", "false");
  if (iconHam) iconHam.classList.remove("hidden");
  if (iconClose) iconClose.classList.add("hidden");
}

// Lọc nhóm kỹ năng trong mục Hồ sơ & Kỹ năng
function filterSkills(group) {
  document.querySelectorAll(".skill-filter-btn").forEach((btn) => {
    const active = btn.getAttribute("data-skill-filter") === group;
    if (active) {
      btn.className =
        "skill-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold bg-navy text-white shadow-sm transition-all";
    } else {
      btn.className =
        "skill-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold bg-white text-slate-700 hover:bg-blue-50 border border-slate-200 transition-all";
    }
  });

  document.querySelectorAll(".skill-card").forEach((card) => {
    const cardGroup = card.getAttribute("data-skill-group");
    if (group === "all" || cardGroup === group) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Render và lọc danh sách dự án công nghệ
function filterProjects(category) {
  currentProjectFilter = category;

  document.querySelectorAll(".project-filter-btn").forEach((btn) => {
    const active = btn.getAttribute("data-project-filter") === category;
    if (active) {
      btn.className =
        "project-filter-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold bg-navy text-white shadow-sm transition-all";
    } else {
      btn.className =
        "project-filter-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-royal transition-all";
    }
  });

  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered =
    currentProjectFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === currentProjectFilter);

  grid.innerHTML = filtered
    .map((project) => {
      const techTags = project.tech
        .map(
          (t) =>
            `<span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">${escapeHtml(t)}</span>`,
        )
        .join("");

      return `
          <article class="bg-white rounded-3xl p-6 shadow-card hover:shadow-cardHover border border-slate-200/70 transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <span class="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-center text-2xl">
                  ${project.icon}
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-heading font-bold ${project.badgeStyle}">
                  ${escapeHtml(project.categoryLabel)}
                </span>
              </div>

              <h3 class="font-heading font-extrabold text-lg sm:text-xl text-navy mb-2 leading-snug">
                ${escapeHtml(project.title)}
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed mb-4">
                ${escapeHtml(project.shortDesc)}
              </p>

              <div class="flex flex-wrap gap-1.5 mb-5">
                ${techTags}
              </div>
            </div>

            <button
              type="button"
              onclick="openProjectModal('${project.id}')"
              class="w-full py-3 px-4 rounded-2xl bg-blue-50 hover:bg-royal text-royal hover:text-white font-heading font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Xem chi tiết dự án</span>
              <span>→</span>
            </button>
          </article>
        `;
    })
    .join("");
}

// Mở cửa sổ modal chi tiết dự án
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("modal-category").textContent = project.categoryLabel;
  document.getElementById("modal-category").className =
    `inline-block px-3 py-1 rounded-full text-xs font-heading font-bold ${project.badgeStyle} mb-2`;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-summary").innerHTML = project.shortDesc;
  document.getElementById("modal-value").textContent = project.value;

  const highlightsEl = document.getElementById("modal-highlights");
  highlightsEl.innerHTML = project.highlights
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  const techEl = document.getElementById("modal-tech");
  techEl.innerHTML = project.tech
    .map(
      (t) =>
        `<span class="px-3 py-1 rounded-xl bg-navy text-white text-xs font-heading font-bold">${escapeHtml(t)}</span>`,
    )
    .join("");

  // Gắn link tài liệu cho nút trong Modal
  const docLinkEl = document.getElementById("modal-doc-link");
  if (docLinkEl) {
    if (project.docLink) {
      docLinkEl.href = project.docLink;
      docLinkEl.classList.remove("hidden"); // Có link thì hiện nút
    } else {
      docLinkEl.classList.add("hidden"); // Không có link thì ẩn nút
    }
  }

  const modal = document.getElementById("project-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// Đóng modal dự án
function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  document.body.style.overflow = "";
}

// Đóng modal khi click ra vùng nền tối hoặc nhấn phím Escape
document
  .getElementById("project-modal")
  ?.addEventListener("click", function (e) {
    if (e.target === this) {
      closeProjectModal();
    }
  });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// Xử lý gửi form liên hệ
function handleContactSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("sender-name");
  const emailInput = document.getElementById("sender-email");
  const topicInput = document.getElementById("message-topic");
  const messageInput = document.getElementById("sender-message");
  const confirmBox = document.getElementById("contact-confirmation");
  const confirmDetail = document.getElementById("confirmation-detail");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const topic = topicInput.value;

  if (!name || !email || !messageInput.value.trim()) return;

  confirmDetail.textContent = `Cảm ơn ${name} (${email}) đã gửi lời nhắn về chủ đề "${topic}". Trần Hải Sang đã nhận được thông tin trên trang và sẽ phản hồi sớm nhất có thể!`;
  confirmBox.classList.remove("hidden");

  event.target.reset();
}

// Hàm chống XSS khi chèn chuỗi văn bản động
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Khởi tạo trang khi tải xong
window.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setActiveTab("home", false);
});
