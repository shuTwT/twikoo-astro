<template>
  <div class="tk-action">
    <a class="tk-action-link" :class="{ 'tk-liked': liked }" @click="onLike">
      <span class="tk-action-icon" v-html="iconLike"></span>
      <span class="tk-action-icon tk-action-icon-solid" v-html="iconLikeSolid"></span>
      <span class="tk-action-count">{{ likeCountStr }}</span>
    </a>
    <a class="tk-action-link" @click="onReply">
      <span class="tk-action-icon" v-html="iconComment"></span>
      <span class="tk-action-icon tk-action-icon-solid" v-html="iconCommentSolid"></span>
      <span class="tk-action-count">{{ repliesCountStr }}</span>
    </a>
  </div>
</template>
  
<script setup>
import iconComment from '@fortawesome/fontawesome-free/svgs/regular/comment.svg?raw'
import iconCommentSolid from '@fortawesome/fontawesome-free/svgs/solid/comment.svg?raw'
import iconLike from '@fortawesome/fontawesome-free/svgs/regular/thumbs-up.svg?raw'
import iconLikeSolid from '@fortawesome/fontawesome-free/svgs/solid/thumbs-up.svg?raw'
import {computed} from "vue"
const props=defineProps({
  liked: Boolean,
  likeCount: Number,
  repliesCount: Number
})
const emit= defineEmits(['like','reply'])
const likeCountStr = computed(() => { return props.likeCount > 0 ? `${props.likeCount}` : '' })
const repliesCountStr = computed(() => { return props.repliesCount > 0 ? `${props.repliesCount}` : '' })
function onLike() {
  emit('like')
}
function onReply() {
  emit('reply')
}
</script>

<style scoped>
.tk-action {
  display: flex;
  align-items: center;
}

.tk-action-link {
  margin-left: 0.5rem;
  color: var(--twikoo-action-color,#409eff);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.tk-action-link .tk-action-icon-solid {
  display: none;
}

.tk-action-link.tk-liked .tk-action-icon,
.tk-action-link:hover .tk-action-icon {
  display: none;
}

.tk-action-link.tk-liked .tk-action-icon-solid,
.tk-action-link:hover .tk-action-icon-solid {
  display: block;
}

.tk-action-count {
  margin-left: 0.25rem;
  font-size: 0.75rem;
  height: 1.5rem;
  line-height: 1.5rem;
}

.tk-action-icon {
  display: inline-block;
  height: 1em;
  width: 1em;
  line-height: 0;
  color: var(--twikoo-action-color,#409eff);
}</style>