<template>
  <div class="category-page">
    <h1>{{ categoryName }}</h1>
  </div>
  <div>
    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList,
  },
data() {
    return {
      searchQuery: "",
      products: [
        {
          name: "постільна білизна в кольорі 'чорний'",
          price: 850,
          image: "https://i.pinimg.com/1200x/8f/2f/62/8f2f626b4090bcfefc791d1bd4534276.jpg"
        },
        {
          name: "постільна білизна в кольорі 'винний'",
           price: 850,
          image: "https://i.pinimg.com/736x/0d/17/18/0d1718f3ba59085812ca45d8ef07bc86.jpg"
        },
        {
          name: "постільна білизна в кольорі 'темньо синій'",
          price: 850,
          image: "https://i.pinimg.com/1200x/c2/3b/78/c23b789e2ecafdc5a9644f9df8b76a99.jpg"
        },
        {
          name: "постільна білизна в кольорі 'бежевий'",
          price: 850,
          image: "https://i.pinimg.com/736x/65/1f/c5/651fc5c30f5eef69b3635925e5285040.jpg"
        },
        {
          name: "постільна білизна в кольорі 'чорно/сірий'",
        price: 1000,
          image: "https://i.pinimg.com/736x/c5/e9/b2/c5e9b20a16f08f235ef29e192a7f4457.jpg"
        },
        {
          name:"постільна білизна в кольорі 'голубо/рожевий'",
      price: 1000,
          image: "https://i.pinimg.com/736x/c8/f3/d1/c8f3d11dbfe3e97b2d69d27cb7fcea51.jpg"
        },
                {
          name: "постільна білизна в кольорі 'біло/чорний'",
           price: 1000,
          image: "https://i.pinimg.com/736x/93/ee/8a/93ee8a059eb986c022a2770be88ed702.jpg"
        },
        {
          name: "постільна білизна в кольорі 'оливково/зелений'",
          price: 1000,
          image: "https://i.pinimg.com/736x/f6/7a/ad/f67aad3904f3598d123d3680750252ba.jpg"
        },
        {
          name: "постільна білизна в кольорі 'лавандово/фіолетовий'",
         price: 1000,
          image: "https://i.pinimg.com/736x/f8/38/16/f83816a3f139b93bda3d2f6c600703c1.jpg"
        },
        {
          name: "постільна білизна в кольорі 'коричнево/бежевий'",
            price: 1000,
          image: "https://i.pinimg.com/736x/4e/8b/85/4e8b8569d78ed20d50faeb06683dc2e2.jpg"
        },
        {
          name: "постільна білизна в кольорі 'сіро/чорний'",
            price: 1000,
          image: "https://i.pinimg.com/736x/a4/d5/03/a4d503cd1c03e44eb156d7d484286c31.jpg"
        },
        {
          name: "постільна білизна в кольорі 'лавандово/чорний'",
        price: 1000,
          image: "https://i.pinimg.com/736x/c2/c1/7f/c2c17f25cfd19234c9795a2453053891.jpg"
        },
        {
          name: "постільна білизна в кольорі 'чорно/сірий'",
           price: 1000,
          image: "https://i.pinimg.com/736x/c5/e9/b2/c5e9b20a16f08f235ef29e192a7f4457.jpg"
        },
        {
          name:"шовкова постільна білизна в кольорі 'фіолетовий'",
          price: 1800,
          image: "https://i.ibb.co/w2MQHHX/Screenshot-20250714-222245-1.png"
        },
                {
           name:"шовкова постільна білизна в кольорі 'голубий'",
          price: 1800,
          image: "https://i.ibb.co/VWj2hN2m/Screenshot-20250714-222245-4.png"
        },
        {
           name:"шовкова постільна білизна в кольорі 'золотий'",
        price: 1800,
          image: "https://i.ibb.co/jP81X0md/Screenshot-20250714-222245-2.png"
        },
        {
           name:"шовкова постільна білизна в кольорі 'бежевий'",
          price: 1800,
          image: "https://i.ibb.co/PsM0kJJd/Screenshot-20250714-222245-3.png"
        },
        {
       name:"шовкова постільна білизна в кольорі 'темно голубий'",
         price: 1800,
          image: "https://i.ibb.co/svjvW11L/Screenshot-20250714-222245-5.png"
        },
              {
          name:"шовкова постільнабілизна в кольорі 'білий'",
          price: 1800,
          image: "https://i.ibb.co/DfS8CCc8/Screenshot-20250714-222245-6.png"
        },
                {
       name:"шовкова постільна білизна в кольорі 'чорний'",
          price: 1800,
          image: "https://i.ibb.co/dwC5swhJ/Screenshot-20250714-222245-7.png"
        },
        {
          name: " шовкова постільна білизна в кольорі 'розовий'",
       price: 1800,
          image: "https://i.pinimg.com/1200x/84/69/73/846973741285c2262bc541de401b749c.jpg"
        },
        {
          name: "постільна білизна в кольорі 'розовий'",
          price: 650,
          image: "https://i.pinimg.com/736x/1f/5e/1a/1f5e1a758d400faa8b7658d303422f97.jpg"
        },
        {
          name: "постільна білизна в кольорі 'зелений'",
          price: 650,
          image: "https://i.pinimg.com/736x/e1/96/66/e19666458e4a1851a0dadf4ba8093e65.jpg"
        },
                {
          name: "постільна білизна в кольорі 'фіолетовий'",
          price: 650,
          image: "https://i.pinimg.com/736x/13/6a/a4/136aa43f8b82059d8b40370c35ff76fd.jpg"
        },


        
         {
          name: "постільна білизна в кольорі 'голубий'",
        price: 650,
          image: "https://i.pinimg.com/1200x/3f/90/f1/3f90f1a9caefa2c77fc6501410f97fab.jpg"
        },
        {
          name: "постільна білизна в кольорі 'оливковий'",
         price: 650,
          image: "https://i.pinimg.com/1200x/2d/d5/96/2dd5968e99c088d09716846805d2eb1b.jpg"
        },
        {
          name: "постільна білизна в кольорі 'сіро/синій'",
         price: 650,
          image: "https://i.pinimg.com/1200x/2b/28/cb/2b28cb22d6d40e0eb03416c15b62b5ee.jpg"
        },
        {
          name: "постільна білизна в кольорі 'лимонний'",
          price: 650,
          image: "https://i.pinimg.com/736x/83/ff/7b/83ff7b790544ec8ebeb354646e3c655a.jpg"
        },
        {
          name: "постільна білизна в кольорі 'сірий'",
          price: 650,
          image: "https://i.pinimg.com/736x/f9/91/8d/f9918d1aa3008636aa0849705f0773dc.jpg"
        },
        {
          name: "постільна білизна в кольорі 'червоний'",
          price: 650,
          image: "https://i.pinimg.com/1200x/33/6b/a5/336ba553305b2cb7ac0f4ac33a4c0167.jpg"
        },
        {
          name:"постільна білизна в кольорі 'білий'",
         price: 650,
          image: "https://i.pinimg.com/736x/34/e4/f2/34e4f2f77b28f7eedfd6c8c7db85da66.jpg"
        },
                {
          name: "постільна білизна в кольорі 'коричнево/рожевий'",
        price: 650,
          image: "https://i.pinimg.com/1200x/1a/f0/67/1af0676ab6b63926723aaf951311a331.jpg"
        },
        {
          name: "постільна білизна в кольорі 'оливково/фіолетовий'",
         price: 650,
          image: "https://i.pinimg.com/736x/3d/79/67/3d7967d4072725f7d2cef50976460a08.jpg"
        },
        {
          name: "постільна білизна в кольорі 'червоно/білий'",
        price: 650,
          image: "https://i.pinimg.com/736x/a4/10/b6/a410b6275b576b0dc88bb437179be203.jpg"
        },
        {
          name: "постільна білизна в кольорі 'чорно/рожевий'",
          price: 650,
          image: "https://i.pinimg.com/736x/40/f4/92/40f492748b50c32bf23b10a54c3254a9.jpg"
        },
        {
          name: "постільна білизна в кольорі 'оливково/рожевий'",
         price: 650,
          image: "https://i.pinimg.com/1200x/b2/eb/0d/b2eb0da89858a0f26349c4a2395c956a.jpg"
        },
        {
          name: "постільна білизна в кольорі 'рожево/чорний'",
         price: 650,
          image: "https://i.pinimg.com/1200x/1c/74/3c/1c743c21b54f10b228e82196f1c565da.jpg"
        },
        {
          name: "постільна білизна в кольорі 'жовто/білий'",
          price: 1000,
          image: "https://i.pinimg.com/736x/d8/6c/b5/d86cb5ba139beb2f9c663f1629786e2d.jpg"
        },
        {
          name:"постільна білизна в кольорі 'білий'",
            price: 850,
          image: "https://i.pinimg.com/736x/f3/32/f9/f332f98c25def6b7ed82da4e7b211965.jpg"
        },
                {
          name: "постільна білизна в кольорі 'розово/білий'",
           price: 850,
          image: "https://i.pinimg.com/1200x/85/57/7f/85577ffcc345baefccb3690ff7b5c04b.jpg"
        },
        {
          name: "постільна білизна в кольорі 'розовий'",
       price: 850,
          image: "https://i.pinimg.com/736x/76/19/2d/76192dd4c25a69bd384f0910133403c4.jpg"
        },
        {
          name: "постільна білизна в кольорі 'розовий'",
           price: 850,
          image: "https://i.pinimg.com/736x/1d/04/71/1d04710ea4fc085c8d60f5677357592a.jpg"
        },
        {
          name: "постільна білизна в кольорі 'чорний/голубий'",
          price: 1000,
          image: "https://i.ibb.co/WNzb3syh/9d1a31dd8957ca88d9bccc484b9d210f.png"
        },
              {
          name:"постільна білизна в кольорі 'сірий'",
          price: 1000,
          image: "https://i.ibb.co/3ygnncXf/9d1a31dd8957ca88d9bccc484b9d210f-1.png"
        },
                {
          name: "постільна білизна в кольорі 'розово/сірий'",
         price: 1000,
          image: "https://i.ibb.co/KxSVGk8n/9d1a31dd8957ca88d9bccc484b9d210f-2.png"
        },
        {
          name: "постільна білизна в кольорі 'чорний'",
          price: 850,
          image: "https://i.ibb.co/5W6TTg2X/9d1a31dd8957ca88d9bccc484b9d210f-4.png"
        },
        {
          name: "постільна білизна в кольорі 'червоний'",
           price: 850,
          image: "https://i.ibb.co/C3G4zLpG/9d1a31dd8957ca88d9bccc484b9d210f-5.png"
        },
        {
          name: "постільна білизна в кольорі 'сірий'",
         price: 1000,
          image: "https://i.ibb.co/C5q3SPbs/9d1a31dd8957ca88d9bccc484b9d210f-6.png"
        },

        
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
}
</script>