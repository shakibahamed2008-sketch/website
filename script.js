const categories = [
  "Blue Sapphire",
  "Pink Sapphire",
  "Yellow Sapphire",
  "White Sapphire",
  "Ruby",
  "Spinel",
  "Chrysoberyl",
  "Alexandrite",
  "Cat's Eye"
];

const products = [
  {
    id: "royal-ceylon-blue",
    name: "Royal Ceylon Blue Sapphire",
    type: "Blue Sapphire",
    carat: 3.42,
    shape: "Oval",
    certification: "Natural / Unheated / GIA",
    price: 12800,
    color: "Royal Blue",
    clarity: "Eye Clean",
    origin: "Ratnapura, Sri Lanka",
    treatment: "Unheated",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A richly saturated Ceylon blue sapphire with elegant brilliance, selected for fine jewellery or investment collecting."
  },
  {
    id: "lotus-pink",
    name: "Lotus Pink Sapphire",
    type: "Pink Sapphire",
    carat: 2.16,
    shape: "Cushion",
    certification: "Natural / GIA",
    price: 6900,
    color: "Lotus Pink",
    clarity: "VS",
    origin: "Elahera, Sri Lanka",
    treatment: "Heated",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A delicate pink sapphire with soft floral tone and balanced cushion proportions."
  },
  {
    id: "sunlit-yellow",
    name: "Sunlit Yellow Sapphire",
    type: "Yellow Sapphire",
    carat: 4.08,
    shape: "Emerald",
    certification: "Natural / Unheated",
    price: 9200,
    color: "Golden Yellow",
    clarity: "VVS",
    origin: "Balangoda, Sri Lanka",
    treatment: "Unheated",
    image: "https://images.unsplash.com/photo-1620656798579-1984d9e87df3?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1620656798579-1984d9e87df3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A bright yellow sapphire with crisp emerald-cut geometry and strong natural presence."
  },
  {
    id: "white-lustre",
    name: "White Ceylon Sapphire",
    type: "White Sapphire",
    carat: 1.74,
    shape: "Round",
    certification: "Natural / GIA",
    price: 3100,
    color: "Colorless",
    clarity: "VS1",
    origin: "Sri Lanka",
    treatment: "Heated",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A refined white sapphire option for classic engagement jewellery and clean modern settings."
  },
  {
    id: "pigeon-ruby",
    name: "Ceylon Ruby",
    type: "Ruby",
    carat: 2.62,
    shape: "Pear",
    certification: "Natural / GIA",
    price: 11200,
    color: "Vivid Red",
    clarity: "SI1",
    origin: "Sri Lanka",
    treatment: "Heated",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A vibrant ruby with dramatic pear shape, suited for a statement ring or pendant."
  },
  {
    id: "rose-spinel",
    name: "Rose Spinel",
    type: "Spinel",
    carat: 3.05,
    shape: "Oval",
    certification: "Natural / Unheated",
    price: 5400,
    color: "Rose Red",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    treatment: "Unheated",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A lively natural spinel with romantic color and excellent wearability."
  },
  {
    id: "honey-chrysoberyl",
    name: "Honey Chrysoberyl",
    type: "Chrysoberyl",
    carat: 4.55,
    shape: "Cushion",
    certification: "Natural / Unheated",
    price: 7600,
    color: "Honey Gold",
    clarity: "VS",
    origin: "Sri Lanka",
    treatment: "Unheated",
    image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1620656798579-1984d9e87df3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=85"
    ],
    description: "An elegant chrysoberyl with warm honey tone and strong brilliance."
  },
  {
    id: "imperial-alexandrite",
    name: "Imperial Alexandrite",
    type: "Alexandrite",
    carat: 1.38,
    shape: "Oval",
    certification: "Natural / GIA",
    price: 18400,
    color: "Green to Purplish Red",
    clarity: "VS",
    origin: "Sri Lanka",
    treatment: "Unheated",
    image: "https://images.unsplash.com/photo-1603561596112-db1d29ba6f8f?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1603561596112-db1d29ba6f8f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A rare alexandrite with visible color shift and collector-grade Sri Lankan origin."
  },
  {
    id: "golden-cats-eye",
    name: "Golden Cat's Eye",
    type: "Cat's Eye",
    carat: 5.24,
    shape: "Cabochon",
    certification: "Natural / Unheated",
    price: 9800,
    color: "Golden Green",
    clarity: "Sharp Chatoyancy",
    origin: "Sri Lanka",
    treatment: "Unheated",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1620656798579-1984d9e87df3?auto=format&fit=crop&w=900&q=85"
    ],
    description: "A Sri Lankan cat's eye chrysoberyl with a sharp central line and polished cabochon form."
  }
];

let activeType = "all";
let activeProduct = products[0];
const wishlist = new Set();
let cartCount = 0;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const categoryGrid = document.querySelector("#categoryGrid");
const productGrid = document.querySelector("#productGrid");
const relatedGrid = document.querySelector("#relatedGrid");
const typeFilter = document.querySelector("#typeFilter");
const priceFilter = document.querySelector("#priceFilter");
const caratFilter = document.querySelector("#caratFilter");
const searchInput = document.querySelector("#searchInput");
const toast = document.querySelector("#toast");
const wishlistCount = document.querySelector("#wishlistCount");
const cartCounter = document.querySelector("#cartCount");

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category, index) => `
    <button class="category-card ${activeType === category ? "active" : ""}" data-category="${category}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${category}</strong>
    </button>
  `).join("");

  typeFilter.innerHTML = `<option value="all">All Types</option>` + categories.map((category) => (
    `<option value="${category}">${category}</option>`
  )).join("");
  typeFilter.value = activeType;
}

function matchesPrice(product) {
  if (priceFilter.value === "under-5000") return product.price < 5000;
  if (priceFilter.value === "5000-10000") return product.price >= 5000 && product.price <= 10000;
  if (priceFilter.value === "over-10000") return product.price > 10000;
  return true;
}

function matchesCarat(product) {
  if (caratFilter.value === "under-2") return product.carat < 2;
  if (caratFilter.value === "2-4") return product.carat >= 2 && product.carat <= 4;
  if (caratFilter.value === "over-4") return product.carat > 4;
  return true;
}

function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  return products.filter((product) => {
    const text = `${product.name} ${product.type} ${product.shape} ${product.certification} ${product.origin}`.toLowerCase();
    return (activeType === "all" || product.type === activeType)
      && matchesPrice(product)
      && matchesCarat(product)
      && text.includes(query);
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productGrid.innerHTML = filtered.length ? filtered.map((product) => `
    <article class="product-card reveal">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <button class="wishlist-toggle ${wishlist.has(product.id) ? "active" : ""}" data-wishlist="${product.id}" aria-label="Add ${product.name} to wishlist">♡</button>
      </div>
      <div class="product-content">
        <span class="cert-badge">${product.certification}</span>
        <h3>${product.name}</h3>
        <div class="meta-grid">
          <span>${product.carat.toFixed(2)} Ct</span>
          <span>${product.shape}</span>
          <span>${product.color}</span>
          <span>${product.origin}</span>
        </div>
        <div class="price-row">
          <span class="price">${money.format(product.price)}</span>
          <button class="view-button" data-view="${product.id}">View</button>
        </div>
        <button class="add-button" data-cart="${product.id}">Add to Cart</button>
      </div>
    </article>
  `).join("") : `<p>No gemstones match your filters. Try a different type, carat, or price range.</p>`;

  revealVisible();
}

function renderDetail(product) {
  activeProduct = product;
  document.querySelector("#detailImage").src = product.image;
  document.querySelector("#detailImage").alt = product.name;
  document.querySelector("#detailTitle").textContent = product.name;
  document.querySelector("#detailDescription").textContent = product.description;
  document.querySelector("#detailCert").textContent = product.certification;
  document.querySelector("#detailList").innerHTML = [
    ["Carat", `${product.carat.toFixed(2)} Ct`],
    ["Shape", product.shape],
    ["Color", product.color],
    ["Clarity", product.clarity],
    ["Origin", product.origin],
    ["Treatment", product.treatment],
    ["Certification", product.certification],
    ["Price", money.format(product.price)]
  ].map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");

  document.querySelector("#thumbRow").innerHTML = product.gallery.map((src) => `
    <button data-thumb="${src}" aria-label="View ${product.name} image">
      <img src="${src}" alt="${product.name} gallery image">
    </button>
  `).join("");

  const message = encodeURIComponent(`Hello Ceylon Gem House, I would like to inquire about ${product.name} (${product.carat.toFixed(2)} Ct).`);
  document.querySelector("#whatsappButton").href = `https://wa.me/94771234567?text=${message}`;
}

function renderRelated() {
  const related = products.filter((product) => product.id !== activeProduct.id).slice(0, 3);
  relatedGrid.innerHTML = related.map((product) => `
    <button class="mini-card" data-view="${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <span>
        <strong>${product.name}</strong>
        <span>${product.carat.toFixed(2)} Ct · ${money.format(product.price)}</span>
      </span>
    </button>
  `).join("");
}

function setActiveProduct(id, shouldScroll = true) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  renderDetail(product);
  renderRelated();
  if (shouldScroll) {
    document.querySelector("#product-detail").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  cartCount += 1;
  cartCounter.textContent = cartCount;
  showToast(`${product.name} added to cart. Stripe checkout can be connected next.`);
}

function toggleWishlist(id) {
  const product = products.find((item) => item.id === id);
  if (wishlist.has(id)) {
    wishlist.delete(id);
    showToast(`${product.name} removed from wishlist.`);
  } else {
    wishlist.add(id);
    showToast(`${product.name} saved to wishlist.`);
  }
  wishlistCount.textContent = wishlist.size;
  renderProducts();
}

function revealVisible() {
  document.querySelectorAll(".reveal").forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 70) {
      element.classList.add("visible");
    }
  });
}

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeType = categoryButton.dataset.category;
    renderCategories();
    renderProducts();
    return;
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setActiveProduct(viewButton.dataset.view);
    return;
  }

  const cartButton = event.target.closest("[data-cart]");
  if (cartButton) {
    addToCart(cartButton.dataset.cart);
    return;
  }

  const wishlistButton = event.target.closest("[data-wishlist]");
  if (wishlistButton) {
    toggleWishlist(wishlistButton.dataset.wishlist);
    return;
  }

  const thumbButton = event.target.closest("[data-thumb]");
  if (thumbButton) {
    document.querySelector("#detailImage").src = thumbButton.dataset.thumb;
  }
});

typeFilter.addEventListener("change", () => {
  activeType = typeFilter.value;
  renderCategories();
  renderProducts();
});

[priceFilter, caratFilter, searchInput].forEach((control) => {
  control.addEventListener("input", renderProducts);
});

document.querySelector("#detailCart").addEventListener("click", () => addToCart(activeProduct.id));
document.querySelector("#cartButton").addEventListener("click", () => showToast(`${cartCount} item${cartCount === 1 ? "" : "s"} in cart. Payment gateway ready for Stripe integration.`));
document.querySelector("#wishlistButton").addEventListener("click", () => showToast(`${wishlist.size} wishlist item${wishlist.size === 1 ? "" : "s"} saved.`));

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const links = document.querySelector("#navLinks");
  const isOpen = links.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#navLinks").classList.remove("open");
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

document.querySelector(".custom-form").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Your custom gemstone request is ready to send.");
});

window.addEventListener("scroll", revealVisible, { passive: true });
window.addEventListener("load", revealVisible);

renderCategories();
renderProducts();
renderDetail(activeProduct);
renderRelated();
revealVisible();
