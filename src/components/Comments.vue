<template>
    <div>
        <div class="signature">
            Written by Dokyoon Kim.
        </div>
        <hr class="seperator">
        <div id="disqus_thread">
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            // https://limdongjin.github.io/vuejs/vuepress/layout-extend.html#disqus-%EB%8C%93%EA%B8%80-%EA%B8%B0%EB%8A%A5%EC%9D%84-component%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90
            // https://www.npmjs.com/package/vue-disqus
            /**
             *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
             *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
            /*
            var disqus_config = function () {
            this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            */
            (function() { // DON'T EDIT BELOW THIS LINE
                var d = document,
                    s = d.createElement('script');
                s.src = 'https://dokysp.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        }
    }
</script>

<style scoped>
.signature{
    margin: 70px 0 50px;
    text-align: right;
}
.seperator {
    height: 3px;
    background-color: gray;
    margin: 0 0 50px;
    
}
</style>
