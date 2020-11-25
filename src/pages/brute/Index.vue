<template>
  <!-- https://www.sonos.com/fr-fr/products/wireless-speakers -->
  <Layout range_color="#DA5447">
    <!-- <div class="w-full relative">
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
    </div> -->
    <section v-for="(edge, index) in $page.products.edges" :key="index">
      <g-link :to="'/brute/' + edge.node.name" class="flex justify-between items-center aa">
        <g-image :src="formatThumbnailPath(edge.node)" />
        <div
          class="ml-auto w-1/3 flex flex-col content-between md:h-40 lg:h-48 xl:h-56"
        >
          <h2 class="mb-1" v-html="formatProductName(edge.node.name)"></h2>
          <h6>
            {{ edge.node.baseline }}
          </h6>
          <div v-if="edge.node.variants.length" class="ml-auto">
            <!-- override some default classe ? -->
            <button
              :class="[
                index == selected_variant
                  ? 'bg-brand-black text-brand-white'
                  : '',
                'ml-2 icon-button-sm',
              ]"
              v-for="(variant, index) in edge.node.variants"
              :key="index"
              @click="selected_variant = index"
            >
              {{ variant }}
            </button>
          </div>
          <h6 class="mt-auto">
            <strong>${{ edge.node.price }}</strong>
          </h6>
        </div>
      </g-link>
    </section>
    <section>
      <ContactCard class="my-32 mx-auto" />
    </section>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Range.vue";
import Spacer from "~/components/Spacer.vue";
import ContactCard from "~/components/ContactCard.vue";
export default {
  components: {
    Layout,
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
      return strs[0] + "<strong>" + this.range + "</strong>" + strs[1];
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

<style lang="postcss" scoped>
.aa {
  padding: 4.5vw;
}

.cc {
  height: 3rem;

  @screen lg {
    height: calc(6vw + 1rem);
  }
  @screen xl {
    height: calc(6vw + 4.5rem);
  }

  animation-name: dd;
  animation-duration: 2.5s;
}
@keyframes dd {
  from {
    height: 0;
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

.g-image {
  @apply h-32;

  @screen lg {
    @apply h-56;
  }
  @screen xl {
    @apply h-72;
  }
}

section {
  width: calc(100vw - 7vw);
}
</style>