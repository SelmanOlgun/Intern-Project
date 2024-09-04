<template>
  <div class="full-page scrollbar">
    <div class="left-partt">
      <div class="category">
        <div class="category-sidebar">
          <div class="category-title">Category</div>
          <div class="category-content">
            <ul>
              <li
                class="title-text"
                v-for="(item, index) in sidebarData"
                :key="index"
              >
                <div
                  @click="toggle(index)"
                  class="sidebar-item"
                  :class="{ open: isOpen(index) }"
                >
                  <svg
                    class="icon"
                    :style="{ opacity: item.children.length ? 1 : 0 }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M384 192v640l384-320.064z"
                    ></path>
                  </svg>
                  {{ item.title }}
                </div>
                <ul v-if="isOpen(index)">
                  <li
                    v-for="(child, childIndex) in item.children"
                    :key="childIndex"
                  >
                    {{ child }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="price-part">
        <div class="widget">
          <div class="title">Price</div>
          <div class="content">
            <div
              class="el-slider themed"
              role="group"
              aria-label="slider between 0 and 100"
              :style="{ position: 'relative', width: '100%' }"
            >
              <div class="el-slider__runway">
                <div
                  class="el-slider__bar"
                  :style="{
                    width: `${barWidth}%`,
                    left: `${startValue}%`,
                  }"
                ></div>
                <div
                  class="el-slider__button-wrapper"
                  tabindex="0"
                  role="slider"
                  aria-label="pick start value"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :aria-valuenow="startValue"
                  :aria-valuetext="startValue"
                  aria-orientation="horizontal"
                  :style="{ left: `${startValue}%` }"
                  @mousedown="startDragging('start')"
                >
                  <div
                    class="el-slider__button el-tooltip__trigger el-tooltip__trigger"
                  ></div>
                </div>
                <div
                  class="el-slider__button-wrapper"
                  tabindex="0"
                  role="slider"
                  aria-label="pick end value"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :aria-valuenow="endValue"
                  :aria-valuetext="endValue"
                  aria-orientation="horizontal"
                  :style="{ left: `${endValue}%` }"
                  @mousedown="startDragging('end')"
                >
                  <div
                    class="el-slider__button el-tooltip__trigger el-tooltip__trigger"
                  ></div>
                </div>
              </div>
            </div>
            <div class="price-text">
              <span class="dollar-text">$ {{ startValue }}</span>
              <span class="dollar-text">$ {{ endValue }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="color-part">
        <div class="select-color">
          <div class="color-title">Colors</div>
          <div class="color-content">
            <ul>
              <li v-for="(color, index) in colors" :key="index">
                <div class="color-box" :style="{ background: color.hex }"></div>
                {{ color.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="right-partt">
      <div class="product-list">
        <div class="product-list-wrap">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card-wrap"
          >
            <div class="product-card">
              <div class="img-wrap">
                <img
                  :src="product.imgLink"
                  alt="Product Image"
                  class="product-img"
                />
              </div>
              <div class="img-bottom">
                <div class="review-part">
                  <StarIcon
                    v-for="n in 5"
                    :key="n"
                    :filled="n <= product.reviewStars"
                  />
                </div>
                <div class="product-name">{{ product.productName }}</div>
                <div class="product-miniminidescription">
                  {{ product.miniminiDescription }}
                </div>
                <div class="product-price">$ {{ product.discountedPrice }}</div>
                <div class="add-to-cart-button-wrap">
                  <button class="add-to-cart-button">
                    Add to Cart
                    <span class="mdi mdi-cart-outline ml-5"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from "../components/StarIcon.vue";
import "../assets/styles/scrollbar.css";

export default {
  components: {
    StarIcon,
  },
  data() {
    return {
      sidebarData: [],
      openIndexes: [],
      startValue: 25,
      endValue: 75,
      isDragging: null,
      minValue: 0,
      maxValue: 100,
      colors: [
        { name: "Black", hex: "rgb(52, 58, 64)" },
        { name: "Grey", hex: "rgb(120, 141, 180)" },
        { name: "Purple", hex: "rgb(115, 108, 199)" },
        { name: "Pink", hex: "rgb(246, 74, 145)" },
        { name: "Red", hex: "rgb(255, 92, 117)" },
        { name: "Blue", hex: "rgb(57, 154, 242)" },
        { name: "Yellow", hex: "rgb(255, 206, 103)" },
        { name: "Green", hex: "rgb(47, 191, 160)" },
      ],
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  async mounted() {
    await this.fetchSidebarData();
    this.setDefaultOpenIndex();
  },
  computed: {
    barWidth() {
      return this.endValue - this.startValue;
    },
  },
  methods: {
    async fetchSidebarData() {
      try {
        const response = await fetch("http://localhost:3000/sidebar");
        this.sidebarData = await response.json();
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
      }
    },
    async fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        this.products = await response.json();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    setDefaultOpenIndex() {
      const chairsIndex = this.sidebarData.findIndex(
        (item) => item.title === "Chairs"
      );
      if (chairsIndex !== -1) {
        this.openIndexes.push(chairsIndex);
      }
    },
    toggle(index) {
      const idx = this.openIndexes.indexOf(index);
      if (idx === -1) {
        this.openIndexes.push(index);
      } else {
        this.openIndexes.splice(idx, 1);
      }
    },
    isOpen(index) {
      return this.openIndexes.includes(index);
    },
    startDragging(type) {
      this.isDragging = type;
      document.addEventListener("mousemove", this.onDragging);
      document.addEventListener("mouseup", this.stopDragging);
    },
    onDragging(event) {
      const slider = this.$el.querySelector(".el-slider");
      const rect = slider.getBoundingClientRect();
      const totalWidth = rect.width;
      const offsetX = event.clientX - rect.left;
      const percentage = Math.min(
        Math.max((offsetX / totalWidth) * 100, 0),
        100
      );

      if (this.isDragging === "start") {
        this.startValue = Math.min(
          Math.max(Math.round(percentage), this.minValue),
          this.endValue - 1
        );
      } else if (this.isDragging === "end") {
        this.endValue = Math.max(Math.round(percentage), this.startValue + 1);
      }
    },
    stopDragging() {
      this.isDragging = null;
      document.removeEventListener("mousemove", this.onDragging);
      document.removeEventListener("mouseup", this.stopDragging);
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  border-right: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

.sidebar-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.sidebar-item.open .icon {
  transform: rotate(90deg);
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  transition: opacity 0.3s ease;
}

.category-sidebar {
  background-color: white;
  width: 210px;
}

.category-title {
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  width: 170px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
  text-align: left;
}

.title-text {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 19.6px;
  white-space: nowrap;
  color: rgb(96, 98, 102);
  cursor: pointer;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  text-align: left;
}

.category-sidebar ul ul li {
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-left: 60px;
  width: 170px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 19.6px;
  text-align: left;
  color: rgb(96, 98, 102);
  cursor: pointer;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  list-style-type: none;
  unicode-bidi: isolate;
}

.category-sidebar {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 250px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 8px 16px 0px,
    rgba(0, 0, 0, 0.067) 0px 3px 6px 0px;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  unicode-bidi: isolate;
}
.category-content {
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  width: 210px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
}

svg {
  height: 12px;
  width: 12px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: italic;
  line-height: 12px;
  white-space: collapse;
  color: rgb(168, 171, 178);
  cursor: pointer;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  fill: rgb(168, 171, 178);
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 6px;
  display: flex;
  justify-content: center;
}

.widget {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 250px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 8px 16px 0px,
    rgba(0, 0, 0, 0.067) 0px 3px 6px 0px;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  unicode-bidi: isolate;
}

.title {
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  width: 210px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
}

.content {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: rgb(44, 62, 80);
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
}

.el-slider {
  position: relative;
  width: 100%;
}

.el-slider__runway {
  position: relative;
  height: 6px;
  background-color: #ddd;
}

.el-slider__bar {
  position: absolute;
  height: 6px;
  background-color: #409eff;
}

.el-slider__button-wrapper {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #409eff;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
}

.o-060 {
  opacity: 0.6;
}

.el-tooltip__trigger {
  position: absolute;
}

div > .content {
  margin: 15px 20px;
}

.select-color {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 250px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 8px 16px 0px,
    rgba(0, 0, 0, 0.067) 0px 3px 6px 0px;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  unicode-bidi: isolate;
}

.color-title {
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  width: 210px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
  text-align: left;
}

.color-content ul {
  list-style-type: none;
  padding: 15px 20px;
  margin: 0;
}

.color-content li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.color-box {
  display: inline-block;
  height: 12px;
  margin-right: 10px;
  width: 12px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  text-align: left;
  background-attachment: scroll;
  background-clip: border-box;
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  unicode-bidi: isolate;
}

.color-content > li {
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 210px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  text-align: left;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  unicode-bidi: isolate;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: rgba(40, 40, 90, 0.09) 0px 0px 0px;
  cursor: pointer;
}
.product-card-wrap {
  padding: 0 10px 20px 10px;
  flex: 0 0 10%;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: flex;
}

.product-rating {
  margin: 8px 0;
}

.star {
  width: 16px;
  height: 16px;
  fill: #f39c12;
}

.product-name {
  display: block;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 22.4px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(74, 89, 106);
  cursor: pointer;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
}

.product-price {
  display: block;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 30.8px;
  text-align: center;
  color: rgb(95, 143, 223);
  cursor: pointer;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
}

.add-to-cart-button {
  align-items: flex-start;
  box-sizing: border-box;
  display: block;
  flex-basis: 0%;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3px 7px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-size: 13.3333px;
  font-size-adjust: none;
  font-stretch: 100%;
  font-style: normal;
  font-variant-alternates: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variant-position: normal;
  font-variation-settings: normal;
  font-weight: 700;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  text-indent: 0px;
  text-shadow: none;
  text-transform: uppercase;
  word-spacing: 0px;
  color: rgb(74, 89, 106);
  background: rgb(255, 255, 255) scroll repeat;
  background-clip: border-box;
  background-origin: padding-box;
  border: 0;
  border-bottom: 0px solid rgb(74, 89, 106);
  border-left: 0px solid rgb(74, 89, 106);
  border-right: 0px solid rgb(74, 89, 106);
  border-top: 0px solid rgb(74, 89, 106);
  cursor: default;
  outline: 0px solid rgb(74, 89, 106);
  color-scheme: light;
  appearance: auto;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  padding-block: 3px;
  padding-inline: 7px;
  margin-top: 40px;
}

.add-to-cart-button .mdi {
  vertical-align: middle;
}
.full-page {
  display: flex;
}
div .left-part {
  width: 250px;
}
.product-list-wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.product-img {
  height: 120px;
  width: 260px;
}

.img-wrap {
  padding: 20px 20px 10px 20px;
  background-color: white;
}

.product-rating {
  display: flex;
}

.review-part {
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

svg {
  height: 18px;
  width: 18px;
  margin: 0 6px 0 0;
  padding: 0;
}

.product-miniminidescription {
  display: block;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 19.6px;
  text-align: center;
  color: rgb(74, 89, 106);
  cursor: pointer;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  opacity: 0.5;
  unicode-bidi: isolate;
}

.add-to-cart-button-wrap {
  display: flex;
}

.img-bottom {
  padding: 10px 20px 20px 20px;
}

.category {
  width: 250px;
}

.color-part {
  width: 250px;
}

.price-text {
  display: flex;
  justify-content: space-between;
}
.dollar-text {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
}
.right-partt {
  padding: 0 30px 30px 30px;
}


@media (max-width: 768px) {
  .left-partt {
    display: none;
  }
}
</style>
