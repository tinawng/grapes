<template>
  <!-- https://www.sonos.com/fr-fr/products/wireless-speakers -->
  <Layout
    :nav_floating="true"
    nav_border_color="#DA5447"
    :content_divide="true"
  >
    <div class="w-full bg-black relative">
      <div class="absolute w-full h-full flex justify-center items-center">
        <span
          class="absolute pl-16 pr-12 zborder text-6xl text-white bb"
          style="bottom: 15%"
          >BRUTE</span
        >
      </div>
      <g-image
        class="w-full cc"
        src="@images/brute.jpg"
        style="object-fit: cover"
      />
    </div>
    <section v-for="(edge, index) in $page.products.edges" :key="index">
      <div class="flex justify-between items-center aa">
        <g-image
          :src="formatThumbnailPath(edge.node)"
          class="md:h-32 lg:h-48 xl:h-56"
        />
        <div
          class="ml-auto w-1/3 flex flex-col content-between md:h-40 lg:h-48 xl:h-56"
        >
          <div
            class="mb-1 md:text-2xl lg:text-3xl xl:text-4xl uppercase"
            v-html="formatProductName(edge.node.name)"
          ></div>
          <div class="md:text-sm lg:text-md xl:text-lg">
            {{ edge.node.baseline }}
          </div>
          <div v-if="edge.node.variants.length" class="ml-auto">
            <button
              :class="[
                index == selected_variant
                  ? 'bg-brand-black text-brand-white'
                  : 'hover:bg-brand-black hover:text-brand-white ',
                'ml-2 w-6 h-6 text-xs lg:w-8 lg:h-8 lg:text-sm border border-brand-black',
              ]"
              v-for="(variant, index) in edge.node.variants"
              :key="index"
              @click="selected_variant = index"
            >
              {{ variant }}
            </button>
          </div>
          <div class="mt-auto md:text-sm lg:text-md xl:text-lg">
            <strong>${{ edge.node.price }}</strong>
          </div>
        </div>
      </div>
    </section>
    <section>
      <ContactCard class="my-32 mx-auto" />
    </section>
  </Layout>
</template>

<script>
import Spacer from "~/components/Spacer.vue";
import ContactCard from "~/components/ContactCard.vue";
export default {
  components: {
    Spacer,
    ContactCard,
  },

  data: () => ({
    range: "brute",
    selected_variant: 0,
  }),

  methods: {
    formatProductName(name) {
      let strs = name.split(this.range);
      return "_" + strs[0] + "<strong>" + this.range + "</strong>" + strs[1];
    },
    formatThumbnailPath(node) {
      if (node.variants.length) {
        let strs = node.thumbnail.split("thumbnail");
        return (
          strs[0] +
          "thumbnail-" +
          node.variants[this.selected_variant] +
          strs[1]
        );
      } else {
        return node.thumbnail;
      }
    },
  },
};
</script>

<page-query>
query {
  products: allProducts(filter: {range: { eq: "brute"}}, sortBy: "order", order: ASC) {
    edges {
      node {
        name
        baseline
        price
        thumbnail
        variants
      }
    }
  }
}
</page-query>

<style scoped>
.aa {
  padding: 4.5vw;
}

.cc {
  height: 45vh;
  animation-name: dd;
  animation-duration: 2.5s;
}
@keyframes dd {
  from {
    height: 16vh;
  }
  to {
    height: 45vh;
  }
}

.bb {
  font-weight: 600;
  letter-spacing: 4vw;
  margin-left: 4vw;
  animation-name: letter-spacing;
  animation-duration: 3s;
}
@keyframes letter-spacing {
  from {
    letter-spacing: 1vw;
    /* Should be 1vw but -1vw to create motion */
    margin-left: -1vw;
  }
  to {
    letter-spacing: 4vw;
    margin-left: 4vw;
  }
}

section {
  width: calc(100vw - 7vw);
}
</style>