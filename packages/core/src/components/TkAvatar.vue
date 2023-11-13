<template>
  <div
    class="tk-avatar"
    :class="{ 'tk-clickable': !!link, 'tk-has-avatar': !!avatarInner }"
    @click="onClick"
  >
    <div class="tk-avatar-img" v-if="!avatarInner" v-html="iconUser"></div>
    <img class="tk-avatar-img" v-if="avatarInner" :src="avatarInner" alt="" />
  </div>
</template>

<script setup>
import md5 from "blueimp-md5";
import { convertLink, normalizeMail, isQQ, getQQAvatar } from "../utils";
import iconUser from "@fortawesome/fontawesome-free/svgs/solid/user-circle.svg?raw";
import { computed } from "vue";
const props = defineProps({
  config: Object,
  avatar: String,
  mail: String,
  mailMd5: String,
  link: String,
});

const emit = defineEmits(["click"]);

const gravatarCdn = computed(() => {
  if (props.config && props.config.GRAVATAR_CDN) {
    return props.config.GRAVATAR_CDN;
  } else {
    return "cravatar.cn";
  }
});
const defaultGravatar = computed(() => {
  if (props.config && props.config.DEFAULT_GRAVATAR) {
    return props.config.DEFAULT_GRAVATAR;
  } else {
    return "identicon";
  }
});

const avatarInner = computed(() => {
  if (props.avatar) {
    return props.avatar;
  } else if (props.mailMd5) {
    return `https://${gravatarCdn}/avatar/${props.mailMd5}?d=${defaultGravatar}`;
  } else if (props.mail && isQQ(props.mail)) {
    return getQQAvatar(props.mail);
  } else if (props.mail) {
    return `https://${gravatarCdn}/avatar/${md5(
      normalizeMail(props.mail)
    )}?d=${defaultGravatar}`;
  } else {
    return "";
  }
});

function onClick() {
  emit("click");
  if (props.link) {
    window.open(convertLink(props.link), "_blank").opener = null;
  }
}
</script>

<style>
.tk-avatar {
    flex-shrink: 0;
  height: 2.5rem;
  width: 2.5rem;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
}

.tk-comment .tk-submit .tk-avatar,
.tk-replies .tk-avatar {
  height: 1.6rem;
  width: 1.6rem;
}

.tk-avatar.tk-has-avatar {
  background-color: rgba(144, 147, 153, 0.13);
}

.tk-avatar.tk-clickable {
  cursor: pointer;
}

.tk-avatar .tk-avatar-img {
  height: 2.5rem;
  color: #c0c4cc;
}

.tk-comment .tk-submit .tk-avatar .tk-avatar-img,
.tk-replies .tk-avatar .tk-avatar-img {
  height: 1.6rem;
}
</style>
