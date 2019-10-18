### 文字/图像粒子
<hr />
<ClientOnly>
    <LockPage :token="token" :articleText="article_text" :articleUrl="article_url">
        <ImageParticle />
    </LockPage>
</ClientOnly>

<script>
    import '@scss/global.scss'
    export default {
        name: 'ImageParticleMD',
        data () {
            return {
                token: '1571019819272',
                article_text: '',
                article_url: ''
            }
        }
    }
</script>