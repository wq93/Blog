### MediaRecorder Demo
<hr />
<ClientOnly>
    <LockPage :token="token" :articleText="article_text" :articleUrl="article_url">
        <MediaRecorder/>
    </LockPage>
</ClientOnly>

<script>
    import '@scss/global.scss'
    export default {
        name: 'MediaRecoderMD',
        data () {
            return {
                token: '1563266971025',
                article_text: '给Canvas录制一个视频',
                article_url: 'https://juejin.im/post/5d81f689f265da039b24cf56'
            }
        }
    }
</script>