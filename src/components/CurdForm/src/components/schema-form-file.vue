<template>
  <el-upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader" :show-upload-list="false" :action="uploadUrl" :before-upload="beforeUpload" :headers="headers" :on-success="handleAvatarSuccess" @change="handleChange">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>
<script>
import { defineComponent, computed, ref } from "vue"
import { Plus } from "@element-plus/icons-vue"

export default defineComponent({
  name: "SchemaFormFile",
  components: { Plus },
  props: {
    formItem: {
      // 表单项
      type: Object,
      default: () => ({}),
    },
    modelValue: undefined, // 表单项值
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    })

    const fileList = ref([])
    const loading = ref(false)
    const imageUrl = ref("")
    const uploadUrl = props.formItem.action || "#"
    const headers = { authorization: localStorage.getItem("token") }
    const handleChange = (info) => {
      props.formItem.change && props.formItem.change(info.raw)
    }
    const handleAvatarSuccess = (res, file) => {
      props.formItem.success && props.formItem.success(res, file)
    }

    const beforeUpload = (file) => {
      const isJpgOrPng = !props.formItem.fileType || file.type.indexOf(props.formItem.fileType) > -1
      // if (!isJpgOrPng) {
      //   ElMessage.error("You can only upload " + props.formItem.fileType + " file!")
      // }
      const isLt2M = file.size - props.formItem.maxsize
      // if (props.formItem.maxsize && !isLt2M) {
      //   ElMessage.error("Image must smaller than " + props.formItem.maxsize + " B!")
      // }
      isJpgOrPng && isLt2M && props.formItem.beforeUpload && props.formItem.beforeUpload(isJpgOrPng, isLt2M)
      return isJpgOrPng && isLt2M
    }

    return {
      model,
      fileList,
      loading,
      imageUrl,
      uploadUrl,
      handleChange,
      beforeUpload,
      handleAvatarSuccess,
      headers,
    }
  },
})
</script>
<style scoped>
.avatar-uploader img {
  max-width: 100%;
}
</style>
