<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="`${item.link}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, title: '2022 삼성전자 신상 컬렉션' , link : '/collection/Collection220228' },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 10px 0;
  font-size: 18px;
}
</style>