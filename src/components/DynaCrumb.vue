<template>
  <div>
    <ol class="breadcrumb">
			<li class="breadcrumb-item" v-for="dynacrumb in dynacrumbContent" :key="dynacrumb.path">
        <router-link :to="dynacrumb.path">
          {{dynacrumb.meta.breadcrumb}}
        </router-link>
      </li>
		</ol>
  </div>
</template>

<script>
export default {
  name: "DynaCrumb",
  mounted() {
    this.insertPage();
  },
  data() {
    return {
      dynacrumbContent: []
    };
  },
  watch: {
    $route: function() {
      let index;
      let found = false;
      for (var i = 0; i < this.dynacrumbContent.length; i++) {
        if (this.dynacrumbContent[i].path == this.$route.path) {
          found = true;
          index = i;
          break;
        }
      }
      console.log("found", found);
      console.log("index", index);
      if (found) {
        this.dynacrumbContent.splice(
          index,
          this.dynacrumbContent.length - index
        );
      }
      this.insertPage();
    }
  },
  methods: {
    insertPage() {
      this.dynacrumbContent.push(this.$route);
    }
  }
};
</script>
