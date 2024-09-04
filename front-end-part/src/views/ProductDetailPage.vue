<template>
  <div class="page-content scrollbar">
    <div class="inner-content">
      <div class="breadcumb-part">
        <span class="thick">Shop </span>
        <span>/ </span>
        <span class="thick">Office </span>
        <span>/ </span>
        <span class="thick">Chairs </span>
        <span>/ </span>
        <span>Beautiful Seat </span>
      </div>
      <div class="item-box">
        <div class="item-box-wrap">
          <div class="left-part">
            <div class="main-photo">
              <img
                :src="product.imgLink"
                alt="Product Image"
                class="product-image"
              />
            </div>
          </div>
          <div class="right-part">
            <h1>{{ product.productName }}</h1>
            <div class="review-part">
              <StarIcon
                v-for="n in 5"
                :key="n"
                :filled="n <= product.reviewStars"
              />
              <span class="review-count-text"
                >{{ product.reviewCount }} customer review{{
                  product.reviewCount > 1 ? "s" : ""
                }}</span
              >
            </div>
            <div class="price-part">
              <div class="discounted-price">
                $ {{ product.discountedPrice.toFixed(2) }}
              </div>
              <div class="raw-price">
                <span class="strikethrough"
                  >$ {{ product.rawPrice.toFixed(2) }}</span
                >
              </div>
              <div class="discount-percentage">
                {{ discountPercentage }}% Off
              </div>
            </div>
            <div class="mini-description">
              {{ product.miniDescription }}
            </div>
            <div class="actions-box">
              <button type="button">
                <span class="button-text"
                  ><i class="mdi mdi-cart-outline"></i> Add to Cart</span
                >
              </button>
              <button type="button">
                <span class="button-text"
                  ><i class="mdi mdi-heart-outline"></i> Add to Wishlist</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="description-part">
        <div class="tabs">
          <span
            :class="{ active: currentTab === 'description' }"
            @click="currentTab = 'description'"
          >
            Description
          </span>
          <span
            :class="{ active: currentTab === 'additional' }"
            @click="currentTab = 'additional'"
          >
            Additional Information
          </span>
          <span
            :class="{ active: currentTab === 'reviews' }"
            @click="currentTab = 'reviews'"
          >
            Reviews ({{ product.reviewCount }})
          </span>
        </div>
        <div class="tab-content">
          <div
            v-if="currentTab === 'description'"
            v-html="product.fullDescription"
          ></div>
          <div
            v-if="currentTab === 'additional'"
            v-html="product.additionalInformation"
          ></div>
          <div v-if="currentTab === 'reviews'">
            <div class="leave-review-text">Leave a review</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import StarIcon from "../components/StarIcon.vue";
import "../assets/styles/scrollbar.css";

export default defineComponent({
  name: "ProductDetailPage",
  components: {
    StarIcon,
  },
  data() {
    return {
      currentTab: "description",

      product: {
        productName: "Beautifull Seat",
        discountedPrice: 637.24,
        rawPrice: 937.78,
        reviewCount: 5,
        reviewStars: 4,
        miniDescription:
          "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. but the majority have suffered alteration in some form, by injected humour.",
        fullDescription:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, nibh vel imperdiet pretium, augue ex rutrum sapien, sit amet rutrum purus libero pretium justo. Curabitur id nisi vitae metus ultricies condimentum. Fusce semper justo ipsum, rutrum rhoncus nulla scelerisque id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor nisl ornare ipsum ultricies, nec fermentum sem tincidunt. Donec arcu purus, tincidunt sed urna a, tristique gravida arcu. Nam ac tincidunt felis. Nam pulvinar ante ut efficitur pellentesque. Cras vel sodales turpis. Nunc fermentum sed sem quis egestas. Nullam ultrices eu diam quis viverra. Proin nec convallis risus. Maecenas efficitur dolor quis lacus scelerisque, vel rutrum nibh vestibulum. Nullam ante lorem, faucibus at convallis ut, ullamcorper sed lacus. In finibus orci eu nibh venenatis, imperdiet rhoncus felis accumsan. Cras a augue bibendum, consectetur enim mattis, vulputate leo.</p><p>Curabitur auctor lacus eget lorem blandit, ac tempus ante euismod. Morbi nec odio in sem elementum hendrerit id vel ipsum. In nec nibh vel orci porta pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nec tristique diam, ac vulputate massa. Aliquam massa magna, tincidunt et ultrices tempor, scelerisque nec sem. Sed auctor faucibus facilisis. Nulla vel ligula non mauris lobortis pretium. Donec sit amet volutpat nisl, sed ultrices turpis. Curabitur posuere erat nunc, eget volutpat turpis aliquet quis.</p><p>Mauris vel facilisis tellus, sit amet cursus turpis. Duis ut consectetur nunc. Nulla viverra nulla vel mi pellentesque efficitur. Cras sit amet efficitur magna. Vestibulum ac ante ac magna feugiat scelerisque. Nullam condimentum gravida euismod. Donec rutrum egestas massa. Morbi venenatis dolor ac felis efficitur finibus. Vestibulum sed pellentesque sapien. Donec a rutrum leo, at ornare ligula. Nullam vel feugiat turpis, ac porta felis. Mauris hendrerit tincidunt ante sit amet vestibulum. Cras efficitur porta vulputate.</p>",
        imgLink: "https://pragmatic-linko.vercel.app/static/images/shop/2.jpg",
        additionalInformation:
          "<p>Curabitur auctor lacus eget lorem blandit, ac tempus ante euismod. Morbi nec odio in sem elementum hendrerit id vel ipsum. In nec nibh vel orci porta pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nec tristique diam, ac vulputate massa. Aliquam massa magna, tincidunt et ultrices tempor, scelerisque nec sem. Sed auctor faucibus facilisis. Nulla vel ligula non mauris lobortis pretium. Donec sit amet volutpat nisl, sed ultrices turpis. Curabitur posuere erat nunc, eget volutpat turpis aliquet quis.</p><p>Ut posuere felis et ante pharetra ullamcorper. Maecenas sagittis nisl ac est porta volutpat. Praesent et mollis lorem, vel egestas augue. Aenean euismod auctor dapibus. Nullam sit amet urna erat. Duis euismod diam et nisl molestie dapibus. Sed non ligula vitae risus lacinia viverra id tempor neque. Sed tincidunt ultricies lacinia. Sed sed elit commodo, mattis mauris sed, imperdiet urna. Donec eu interdum ligula. In leo risus, vulputate sed diam nec, porta facilisis elit. Praesent sed sapien ultrices, vulputate nisl a, placerat nulla. Fusce mollis lectus orci. Pellentesque ut enim eleifend lacus dapibus vehicula. Sed mi neque, ullamcorper euismod diam quis, aliquet ultricies eros.</p><p>Pellentesque nunc purus, ultrices vitae nisi id, placerat mollis leo. Aenean egestas orci vel ipsum eleifend dapibus. Suspendisse a pellentesque dui, eu sodales massa. Donec condimentum arcu vitae augue consequat, in sodales enim scelerisque. Sed sodales eros sed porta cursus. Ut pellentesque bibendum tincidunt. Donec a molestie risus, eget consectetur nulla. Sed sed diam erat. Vestibulum velit ligula, eleifend eget sem ut, tristique sagittis neque. Phasellus eget velit nisi. Ut finibus ligula eget lectus aliquet, a ullamcorper velit facilisis.</p>",
      },
    };
  },
  computed: {
    discountPercentage() {
      return Math.round(
        ((this.product.rawPrice - this.product.discountedPrice) /
          this.product.rawPrice) *
          100
      );
    },
  },
});
</script>

<style>
span {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: rgb(96, 98, 102);
  cursor: text;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
}

.thick {
  font-weight: 700;
  color: rgb(48, 49, 51);
}

.breadcumb-part {
  text-align: left;
}

.item-box-wrap {
  display: flex;
  margin-top: 30px;
  color: rgb(74, 89, 106);
  box-shadow: rgba(40, 40, 90, 0.09) 0px 8px 16px 0px,
    rgba(0, 0, 0, 0.067) 0px 3px 6px 0px;
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
}

.review-part {
  display: flex;
  align-items: center;
}

.star-icon {
  width: 24px;
  height: 24px;
  margin-right: 4px;
}

.price-part {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 20px 0 30px 0;
}

.discounted-price {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 35px;
  color: rgb(95, 143, 223);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  margin-right: 20px;
}

.raw-price {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  text-decoration-color: rgb(95, 143, 223);
  text-decoration-line: line-through;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  opacity: 0.5;
  margin-right: 10px;
}

.strikethrough {
  text-decoration: line-through;
}

.discount-percentage {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(95, 143, 223);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
}
.tabs {
  display: flex;
  gap: 20px;
  cursor: pointer;
  margin-bottom: 35px;
}
.tabs span.active {
  color: rgb(64, 158, 255);
  border-bottom: 2px solid rgb(64, 158, 255);
}

.tabs span {
  padding: 10px;
}

.active {
  font-weight: bold;
  border-bottom: 2px solid #000;
}

.main-photo {
  padding: 30px;
  background-color: white;
  display: inline-block;
  overflow: hidden;
}

h1 {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 44.8px;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
  margin: 0;
  text-align: left;
}

.right-part {
  padding: 30px;
  flex: 2;
}
.review-count-text {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 16.8px;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  opacity: 0.5;
  margin: 0;
  padding: 0;
}

.review-part {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.mini-description {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
  text-align: left;
}

.left-part {
  flex: 1;
}

.main-photo img {
  width: 100%;
  height: auto;
}

.actions-box {
  margin-top: 30px;
  text-align: left;
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  color: rgb(64, 158, 255);
  background-color: rgb(236, 245, 255);
  border: 1px solid rgb(160, 207, 255);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease;
  -webkit-font-smoothing: antialiased;
  margin: 0 10px 10px 0;
}

.button-text {
  display: flex;
  align-items: center;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  color: rgb(64, 158, 255);
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  user-select: none;
}

.mdi {
  font-weight: 500;
}

.description-part {
  padding: 30px;
}
.inner-content {
  padding: 0 20px;
}
p {
  text-align: left;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  margin-block-end: 16px;
  margin-block-start: 16px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  unicode-bidi: isolate;
}

.leave-review-text {
  text-align: left;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  line-height: 22.4px;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
}

.page-content {
  padding: 0px 20px;
}
.product-image {
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.5);
}

@media (max-width: 1200px) {
  .left-part {
    flex: 1;
  }
  .right-part {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .item-box-wrap {
    display: block;
  }
}
</style>
