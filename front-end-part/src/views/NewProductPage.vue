<template>
  <div class="full-page scrollbar">
    <div class="page-header">
      <h1>Ecommerce new product</h1>
      <div class="breadcumb-part">
        <span class="mdi mdi-home-outline"> </span>
        <span class="seperator">/ </span>
        <span>Ecommerce</span>
        <span class="seperator">/ </span>
        <span>New Product</span>
      </div>
    </div>
    <div class="product-part">
      <div class="product">
        <div class="product-wrap">
          <div class="left-part">
            <div class="gallery-box">
              <div class="top-part">
                <img
                  class="top-image"
                  src="https://pragmatic-linko.vercel.app/static/images/shop/2.jpg"
                  alt=""
                />
              </div>
              <div class="bottom-part">
                <div class="bottom-images">
                  <img
                    class="bottom-image-1"
                    src="https://pragmatic-linko.vercel.app/static/images/shop/2.jpg"
                    alt=""
                  />
                  <img
                    class="bottom-image-2"
                    src="https://pragmatic-linko.vercel.app/static/images/shop/2.jpg"
                    alt=""
                  />
                  <div class="bottom-image-3">
                    <div class="mdi-height">
                      <i class="mdi mdi-image-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-part">
            <div class="detail-box">
              <div class="first-row">
                <input
                  v-model="productName"
                  class="Product-name"
                  placeholder="Product name"
                />
              </div>
              <div class="second-row">
                <div class="input-section price-input-area">
                  <label class="price-text">Price ($)</label>
                  <div
                    class="el-input-number is-controls-right themed mr-10 mb-10"
                  >
                    <span
                      role="button"
                      aria-label="decrease number"
                      class="el-input-number__decrease"
                      @click="decrease('price')"
                    >
                    </span>
                    <span
                      role="button"
                      aria-label="increase number"
                      class="el-input-number__increase"
                      @click="increase('price')"
                    >
                    </span>
                    <div class="el-input">
                      <div class="el-input__wrapper" tabindex="-1">
                        <input
                          class="el-input__inner"
                          :step="1"
                          :max="Infinity"
                          :min="1"
                          type="number"
                          autocomplete="off"
                          tabindex="0"
                          role="spinbutton"
                          :value="price"
                          @input="updateValue('price', $event.target.value)"
                          :aria-valuemin="1"
                          :aria-valuenow="price"
                          aria-disabled="false"
                          v-model.number="price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="input-section">
                  <label>Discount (%)</label>
                  <div
                    class="el-input-number is-controls-right themed mr-10 mb-10"
                  >
                    <span
                      role="button"
                      aria-label="decrease number"
                      class="el-input-number__decrease"
                      @click="decrease('discount')"
                    >
                    </span>
                    <span
                      role="button"
                      aria-label="increase number"
                      class="el-input-number__increase"
                      @click="increase('discount')"
                    >
                    </span>
                    <div class="el-input">
                      <div class="el-input__wrapper" tabindex="-1">
                        <input
                          class="el-input__inner"
                          :step="1"
                          :max="100"
                          :min="1"
                          type="number"
                          autocomplete="off"
                          tabindex="0"
                          role="spinbutton"
                          :value="discount"
                          @input="updateValue('discount', $event.target.value)"
                          :aria-valuemin="1"
                          :aria-valuenow="discount"
                          aria-disabled="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="input-section">
                  <label>Stock</label>
                  <div
                    class="el-input-number is-controls-right themed mr-10 mb-10"
                  >
                    <span
                      role="button"
                      aria-label="decrease number"
                      class="el-input-number__decrease"
                      @click="decrease('stock')"
                    >
                    </span>
                    <span
                      role="button"
                      aria-label="increase number"
                      class="el-input-number__increase"
                      @click="increase('stock')"
                    >
                    </span>
                    <div class="el-input">
                      <div class="el-input__wrapper" tabindex="-1">
                        <input
                          class="el-input__inner"
                          :step="1"
                          :max="Infinity"
                          :min="1"
                          type="number"
                          autocomplete="off"
                          tabindex="0"
                          role="spinbutton"
                          :value="stock"
                          @input="updateValue('stock', $event.target.value)"
                          :aria-valuemin="1"
                          :aria-valuenow="stock"
                          aria-disabled="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="third-row">
                <div class="price-discount-text">
                  final price:$
                  <strong class="blue-price-value final-price-text">{{
                    finalPrice.toFixed(2)
                  }}</strong
                  >, discount:
                  <strong class="blue-price-value"
                    >${{ discountAmount.toFixed(2) }}</strong
                  >
                </div>
              </div>
              <div class="fourth-row">
                <div class="description-text-wrap">
                  <textarea
                    class="description-text"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
              <div class="fifth-row">
                <div class="select-container">
                  <div class="select-group">
                    <select id="category-select" v-model="selectedCategory">
                      <option class="option-text" disabled value="">
                        Category
                      </option>
                      <option
                        class="option-text"
                        v-for="category in categories"
                        :key="category"
                        :value="category"
                      >
                        {{ category }}
                      </option>
                    </select>
                  </div>

                  <div class="select-group">
                    <select id="tags-select" v-model="selectedTag">
                      <option class="option-text" disabled value="">
                        Tags
                      </option>
                      <option
                        class="option-text"
                        v-for="tag in tags"
                        :key="tag"
                        :value="tag"
                      >
                        {{ tag }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="sixth-row">
                <div class="buttons-wrap">
                  <div class="buttons">
                    <button class="buttons-attached">In Stock</button>
                    <button class="buttons-attached">Awaiting</button>
                    <button class="buttons-attached">Out of stock</button>
                  </div>
                </div>
              </div>
              <div class="seventh-row">
                <div class="all-boxes">
                  <div class="switch-wrap">
                    <div class="switch">
                      <input
                        type="checkbox"
                        id="switch"
                        v-model="isChecked"
                        @change="emitChange"
                      />
                      <label for="switch"></label>
                    </div>
                    <div class="active-text">
                      <span class="switch-label">Active</span>
                    </div>
                  </div>
                  <div class="buttons">
                    <button @click="addProduct" class="button-with-gap">
                      <i class="mdi mdi-content-save"></i> Save
                    </button>
                    <button class="button-with-gap">
                      <i class="mdi mdi-refresh"></i> Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="meta-data-part">
      <div class="meta-data-part-wrap">
        <h3 class="meta-data-text">Meta data</h3>
        <div class="meta-data-row meta-data-row-margin">
          <div class="meta-data-inputs meta-data-flex-1">
            <input class="meta-data-key" placeholder="Key" />
          </div>
          <div class="meta-data-inputs meta-data-flex-2">
            <input class="meta-data-value" placeholder="Value" />
          </div>

          <div class="meta-data-inputs meta-data-flex-2">
            <input class="meta-data-description" placeholder="Description" />
          </div>
          <div class="meta-data-inputs meta-data-flex-1">
            <button class="meta-buttons">
              <i class="mdi mdi-plus-box">ADD META</i>
            </button>
          </div>
        </div>
        <div class="meta-data-row">
          <div class="meta-data-inputs meta-data-flex-1">
            <input class="meta-data-key" placeholder="Key" value="Brand" />
          </div>
          <div class="meta-data-inputs meta-data-flex-2">
            <input
              class="meta-data-value"
              placeholder="Value"
              value="Stellar"
            />
          </div>

          <div class="meta-data-inputs meta-data-flex-2">
            <input class="meta-data-description" placeholder="Description" />
          </div>
          <div class="meta-data-inputs meta-data-flex-1">
            <button class="meta-buttons">
              <i class="mdi mdi-plus-box">ADD META</i>
            </button>
          </div>
        </div>
        <div class="meta-data-row">
          <div class="meta-data-inputs meta-data-flex-1">
            <input
              class="meta-data-key"
              placeholder="Key"
              value="Seat Lock Included"
            />
          </div>
          <div class="meta-data-inputs meta-data-flex-2">
            <input class="meta-data-value" placeholder="Value" value="Yes" />
          </div>

          <div class="meta-data-inputs meta-data-flex-2">
            <input class="meta-data-description" placeholder="Description" />
          </div>
          <div class="meta-data-inputs meta-data-flex-1">
            <button class="meta-buttons">
              <i class="mdi mdi-plus-box">ADD META</i>
            </button>
          </div>
        </div>
        <div class="meta-data-row">
          <div class="meta-data-inputs meta-data-flex-1">
            <input class="meta-data-key" placeholder="Key" value="Type" />
          </div>
          <div class="meta-data-inputs meta-data-flex-2">
            <input
              class="meta-data-value"
              placeholder="Value"
              value="Office Chair"
            />
          </div>

          <div class="meta-data-inputs meta-data-flex-2">
            <input class="meta-data-description" placeholder="Description" />
          </div>
          <div class="meta-data-inputs meta-data-flex-1">
            <button class="meta-buttons">
              <i class="mdi mdi-plus-box">ADD META</i>
            </button>
          </div>
        </div>
        <div class="meta-data-row">
          <div class="meta-data-inputs meta-data-flex-1">
            <input class="meta-data-key" placeholder="Key" value="Style" />
          </div>
          <div class="meta-data-inputs meta-data-flex-2">
            <input
              class="meta-data-value"
              placeholder="Value"
              value="Contemporary & Modern"
            />
          </div>

          <div class="meta-data-inputs meta-data-flex-2">
            <input class="meta-data-description" placeholder="Description" />
          </div>
          <div class="meta-data-inputs meta-data-flex-1">
            <button class="meta-buttons">
              <i class="mdi mdi-plus-box">ADD META</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import "../assets/styles/scrollbar.css";

export default {
  data() {
    return {
      price: 155,
      discount: 15,
      stock: 100,
      selectedCategory: "",
      selectedTag: "",
      categories: [
        "Dining chairs",
        "Foldable chairs",
        "Bar Stools",
        "Garden chairs",
        "Step stools",
        "Junior chairs",
        "High chairs",
        "Fabric armchairs",
        "Leather armchairs",
        "Rattan armchairs",
        "Swivel chairs",
        "Office chairs",
        "Cat 2",
        "Cat 3",
      ],
      tags: ["Chairs", "Foldable", "Garden"],
      isChecked: false,
      productName: "",
      discountedAmount: 0,
    };
  },
  computed: {
    finalPrice() {
      const discountAmount = this.discountAmount;
      return this.price - discountAmount;
    },
    discountAmount() {
      return (this.price * this.discount) / 100;
    },
  },
  watch: {
    finalPrice(newValue) {
      this.discountedAmount = newValue;
    },
  },
  methods: {
    increase(field) {
      this[field]++;
    },
    decrease(field) {
      if (this[field] > 1) {
        this[field]--;
      }
    },
    updateValue(field, value) {
      this[field] = Number(value);
    },
    emitChange() {
      this.$emit("change", this.isChecked);
    },
    async addProduct() {
      const product = {
        productName: this.productName,
        discountedPrice: this.discountedAmount,
        rawPrice: this.price,
        reviewCount: 0,
        reviewStars: 0,
        miniminiDescription: "Lorem ipsum sit dolor amet",
        miniDescription:
          "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        fullDescription: "<p>Lorem ipsum dolor sit amet...</p>",
        imgLink: "https://pragmatic-linko.vercel.app/static/images/shop/2.jpg",
        additionalInformation:
          "<p>Curabitur auctor lacus eget lorem blandit...</p>",
      };

      try {
        const response = await fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Product added:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
  
  <style scoped>
.page-header {
  margin-bottom: 20px;
  padding: 24px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  background-color: rgb(95, 143, 223);
  border-radius: 5px;
}

h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 44.8px;
  color: rgb(255, 255, 255);
}

.breadcumb-part > span {
  font-size: 14px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.breadcumb-part {
  margin-top: 10px;
}

.seperator {
  margin: 0 9px;
}

.product-wrap {
  display: flex;
  color: rgb(74, 89, 106);
  background-color: rgb(255, 255, 255);
  background-attachment: scroll;
  background-clip: border-box;
  background-image: none;
  background-origin: padding-box;
  background-position: 0% 0%;
  background-repeat: repeat;
  background-size: auto;
  box-shadow: rgba(40, 40, 90, 0.09) 0px 3px 6px 0px,
    rgba(0, 0, 0, 0.067) 0px 1px 1px 0px;
  -webkit-font-smoothing: antialiased;
  border-radius: 4px;
  unicode-bidi: isolate;
}

.left-part {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.right-part {
  flex: 2;
}
.bottom-images {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 15px 15px;
}
.bottom-image-plus {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom-part {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottom-image-1,
.bottom-image-2,
.bottom-image-3 {
  max-width: 132px;
  max-height: 132px;
  padding: 0 10px;
  width: 33%;
}
.mdi-image-plus {
  font-size: 30px;
  font-weight: 400px;
  line-height: 42px;
  text-align: center;
  color: rgb(74, 89, 106);
  -webkit-font-smoothing: antialiased;
}

.top-image {
  max-width: 456px;
  max-height: 456px;
}

.bottom-part {
  display: flex;
}
.detail-box {
  padding: 30px 30px 30px 0;
}

.el-input-number {
  display: flex;
  align-items: center;
}

.el-input__inner {
  box-sizing: border-box;
  display: block;
  flex-grow: 1;
  height: 30px;
  margin: 0;
  padding: 0;

  width: 50px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  color: rgb(95, 143, 223);
  border: 0;
  cursor: text;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
}

.select-container {
  display: flex;
  box-sizing: border-box;
  flex-grow: 1;
  margin: 0;
  overflow: clip;
  padding: 0;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  color: rgb(95, 143, 223);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  gap: 20px;
}

.select-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

select {
  margin-top: 5px;
  padding: 8px;
  font-size: 14px;
}

.Product-name {
  display: inline-block;
  margin: 0;
  margin-bottom: 20px;
  overflow-x: clip;
  overflow-y: clip;
  padding: 1px 2px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-size: 30px;
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
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  word-spacing: 0;
  color: rgb(74, 89, 106);
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  border-bottom: 2px solid rgba(74, 89, 106, 0.2);
  border-left: none;
  border-right: none;
  border-top: none;
  cursor: text;
  outline: none;
  color-scheme: light;
  appearance: auto;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  padding-block-end: 1px;
  padding-block-start: 1px;
  padding-inline-end: 2px;
  padding-inline-start: 2px;
  -webkit-rtl-ordering: logical;
  width: 100%;
}

.first-row {
  display: flex;
}

.input-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  flex: 1;
}
label {
  margin-bottom: 10px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 19.6px;
  color: rgb(74, 89, 106);
  cursor: default;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  opacity: 0.5;
  text-align: left;
}

.second-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.price-discount-text {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgba(74, 89, 106, 0.7);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
}

.blue-price-value {
  font-weight: 700px;
  color: rgb(95, 143, 223);
}

.third-row {
  display: flex;
}

.description-text {
  box-sizing: border-box;
  display: inline-block;
  height: 100px;
  margin: 0;
  overflow: hidden;
  padding: 10px;
  resize: none;
  width: 1002.66px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgb(74, 89, 106);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(95, 143, 223, 0.3);
  border-radius: 4px;
  outline: none;
  overflow-wrap: break-word;
}

.description-text-wrap {
  display: flex;
  margin: 20px 0 10px 0;
}

.option-text {
  box-sizing: border-box;
  display: block;
  flex-grow: 1;
  margin: 0;
  overflow: clip;
  padding: 0;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  color: rgb(95, 143, 223);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
}

.sixth-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}

.buttons-wrap {
  display: flex;
}

.buttons {
  display: flex;
}

.buttons button {
  padding: 8px 15px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  white-space: nowrap;
  color: rgb(95, 143, 223);
  background-color: rgba(95, 143, 223, 0.1);
  border: 1px solid rgba(95, 143, 223, 0.3);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-font-smoothing: antialiased;
  user-select: none;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch label {
  background-color: #ccc;
  border-radius: 20px; /* Yarıçapı, switch'in yüksekliği ile aynı olmalı */
  cursor: pointer;
  display: block;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s;
  width: 40px;
}

.switch input:checked + label {
  background-color: #2196f3;
}

.switch label:before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: white;
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  transition: 0.4s;
}

.switch input:checked + label:before {
  transform: translateX(20px);
}

.seventh-row {
  display: flex;
  justify-content: end;
  margin-top: 20px;
}
.all-boxes {
  display: flex;
  align-items: center;
}

.switch-wrap {
  display: flex;
  margin-right: 20px;
}

.switch input:checked + label {
  background-color: #2196f3;
}

.switch input:checked {
  color: #2196f3;
}

.button-with-gap {
  margin: 0 10px 10px 0;
}

.buttons-attached {
  margin: 0;
}

.switch-label {
  margin-left: 10px;
}
.meta-data-text {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 18.72px;
  font-weight: 700;
  line-height: 26.208px;
  color: rgb(74, 89, 106);
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
  text-align: left;
}

.meta-data-row {
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: 10px;
}
.meta-data-row-margin {
  margin-top: 30px;
}

.meta-data-part-wrap {
  padding: 30px;
  margin-top: 20px;
  color: rgb(74, 89, 106);
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
  background-image: none;
  background-origin: padding-box;
  background-position: 0% 0%;
  background-repeat: repeat;
  background-size: auto;
  box-shadow: rgba(40, 40, 90, 0.09) 0px 3px 6px 0px,
    rgba(0, 0, 0, 0.067) 0px 1px 1px 0px;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  unicode-bidi: isolate;
}

.meta-data-inputs {
  display: flex;
  align-items: center;
}

.meta-data-flex-1 {
  flex: 1;
}

.meta-data-flex-2 {
  flex: 2;
}

.meta-data-key,
.meta-data-value,
.meta-data-description {
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  margin-bottom: 7px;
  overflow: clip;
  padding: 8px 13px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgb(74, 89, 106);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(95, 143, 223, 0.3);
  border-radius: 4px;
  text-align: start;
  -webkit-font-smoothing: antialiased;
  cursor: text;
  color-scheme: light;
}

.meta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 7px;
  padding: 16px 2px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 0;
  text-align: center;
  text-transform: uppercase;
  color: rgb(95, 143, 223);

  background: rgb(255, 255, 255) no-repeat scroll;
  border: 1px solid rgba(95, 143, 223, 0.3);
  border-color: rgb(95, 143, 223);
  border-radius: 4px;

  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  color-scheme: light;
  appearance: auto;
  text-rendering: auto;
}

.meta-buttons i {
  margin: 0;
}
.full-page {
  padding: 0 0 0 50px;
}

.meta-data-value::placeholder,
.meta-data-key::placeholder,
.meta-data-description::placeholder {
  color: rgba(95, 143, 223, 0.3);
}
</style>
  