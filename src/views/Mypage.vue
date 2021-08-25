<template>
  <div class="container">
      <h4>My Page</h4>
        <h4> {{userInfo.name}} 로그인 되었습니다.</h4>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {

computed : {
    ...mapState(['userInfo'])
}
}
</script>

<style>

</style>