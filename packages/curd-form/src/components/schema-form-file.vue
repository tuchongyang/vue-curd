<template>
  <div class="file-uploader-single">
    <div tabindex="0" class="el-upload--picture-card">
      <!--添加-->
      <template v-if="!model">
        <el-icon class="file-uploader-icon"><Plus /></el-icon>
      </template>

      <!--下载、删除-->
      <span v-if="model" class="el-upload-list__item-actions">
        <!-- <el-button type="text" @click.stop="handleDownload()"
          ><el-icon><Download /></el-icon
        ></el-button> -->
        <el-button type="text" @click.stop="handleRemove()"
          ><el-icon><Delete /></el-icon
        ></el-button>
      </span>
      <!--图片文件-->
      <img v-if="model && accept == 'image'" class="single-img" :src="src" :alt="model" />

      <video v-if="model && accept == 'video'" class="single-img" :src="src" :alt="model"></video>

      <!--非图片文件-->
      <div v-if="model && accept == 'file'" class="file-main">
        <span :class="getFileIcon"></span>
        <div class="title" :title="fileName">
          {{ fileName }}
        </div>
      </div>
      <input ref="fileInputRef" :title="fileName" type="file" :multiple="false" name="file" class="el-upload_input" :accept="acceptType" @change="handleUploadChange($event)" />
      <el-progress v-if="saveMap.loading" type="circle" :percentage="saveMap.percent"></el-progress>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, reactive, PropType } from "vue"
import { Plus, Delete } from "@element-plus/icons-vue"
import { ElButton, ElIcon, ElMessage, ElProgress } from "element-plus"
import { FormItem, Fields } from "../types"
export default defineComponent({
  name: "SchemaFormFile",
  components: { Plus, Delete, ElButton, ElIcon, ElProgress },
  props: {
    formItem: {
      // 表单项
      type: Object as PropType<FormItem>,
      default: () => ({}),
    },
    formModel: {
      // 表单项
      type: Object,
      default: null,
    },
    props: {
      type: Object as PropType<Fields>,
      default: () => ({}),
    },
    eventObject: {
      type: Object as PropType<Fields>,
      default: () => ({}),
    },
    modelValue: {
      type: [String, File],
      default: undefined,
    }, // 表单项值
  },
  emits: ["update:modelValue", "success"],

  setup(props, { emit }) {
    const model = computed<any>({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    })

    const fileInputRef = ref()

    const saveMap = reactive({
      loading: false,
      percent: 0,
    })
    let fileName = ref("")
    const src = computed(() => model.value)
    const accept = computed(() => props.props?.accept)
    const acceptType = computed(() => {
      const map: any = {
        image: "image/png,image/gif,image/jpg,image/jpeg",
        video: "video/mp4,video/ogg,video/flv,video/avi,video/wmv,video/rmvb,video/mov",
      }
      return (accept.value && map[accept.value]) || accept.value
    })

    function chooseFile() {}
    function handleDownload() {
      const url = fileName.value
      const link = document.createElement("a")
      link.style.display = "none"
      link.href = url
      link.target = "_blank"
      const title = url //.split("?").shift().split("/").pop()
      link.setAttribute("download", title)
      document.body.appendChild(link)
      link.click()
      setTimeout(() => {
        document.body.removeChild(link)
      })
    }
    function handleRemove() {
      model.value = ""
      fileName.value = ""
      fileInputRef.value && (fileInputRef.value.value = "")
    }
    function getFileTypeByName(name: string) {
      if (!name) return "file"
      const map: any = {
        image: "png|gif|jpg|bmp|jpeg",
        video: "mp4|ogg|flv|avi|wmv|rmvb|mov",
      }
      for (const i in map) {
        const reg = eval("/\.(" + map[i] + ")$/i")
        if (reg.test(name.split("?")[0])) {
          return i
        }
      }

      return "file"
    }
    //单个上传操作 原生
    function handleUploadChange(e: Event) {
      const target = e.target as HTMLInputElement
      const file: File = (target.files as FileList)[0]
      if (!file) return
      if (props.props.maxSize && file.size > props.props.maxSize) {
        return ElMessage.error("上传文件大小不能超过" + props.props?.maxSize + "!")
      }
      fileName.value = file.name
      if (!props.props?.autoUpload) {
        model.value = file
      } else {
        const formData = new FormData()

        formData.append("file", file) //file
        upLoadFile(formData)
      }
      if (props.eventObject && props.eventObject.change) {
        props.eventObject.change()
      }
    }
    //上传接口
    function upLoadFile(formData: any) {
      saveMap["loading"] = true
      saveMap["percent"] = 0

      const progressCallback = (currFilePercent: any) => {
        currFilePercent = currFilePercent > 99 ? 99 : currFilePercent //最大值99
      }

      // axios({
      //   method: "post",
      //   url: "/file/upload?random=" + Math.random(),
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   data: formData,
      //   onUploadProgress: (progressEvent) => {
      //     if (saveMap) {
      //       saveMap["percent"] = ((progressEvent.loaded / progressEvent.total) * 100) | 0
      //       if (progressCallback && typeof progressCallback == "function") {
      //         progressCallback(saveMap["percent"])
      //       }
      //     }
      //   },
      // })
      //   .then((res) => {
      //     //成功进度条100%
      //     saveMap["loading"] = false
      //     saveMap["percent"] = 100
      //     progressCallback(100)
      //     model.value = res.result
      //     emit("success", res.result)
      //   })
      //   .catch(() => {})
    }
    const getFileIcon = computed(() => {
      const avilable = ["pdf", "csv", "xls", "xlsx", "doc", "docx", "txt", "zip", "rar", "image"]
      const suffix = fileName.value.split(".").pop()
      return suffix && avilable.includes(suffix) ? "icon-document-" + suffix : "icon-document-txt"
    })

    return {
      model,
      fileInputRef,
      fileName,
      src,
      accept,
      acceptType,
      saveMap,
      getFileIcon,
      handleDownload,
      handleRemove,
      getFileTypeByName,
      handleUploadChange,
      upLoadFile,
    }
  },
})
</script>
<style lang="scss" scoped>
/*文件上传*/
.file-uploader-single {
  .single-img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .single-video {
  }
  .el-upload--picture-card {
    position: relative;
    text-align: center;
    overflow: hidden;
    .el-upload_input {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
      opacity: 0;
    }

    .file-main {
      text-align: center;
      > i {
        margin: 42px 0 10px;
      }
      line-height: 1;
      .title {
        width: 110px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin: 0 auto;
        text-align: center;
        padding: 10px 0;
      }
    }

    .el-upload-list__item-actions {
      opacity: 0;
      position: absolute;
      line-height: normal;
      top: 4px;
      right: 6px;
      background-color: transparent;
      z-index: 1;
      .el-button {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #ff6500;
        height: 26px;
        width: 26px;
        text-align: center;
        .el-icon {
          font-size: 14px;
        }
        &:hover {
          background: #eee;
        }
      }
      .el-icon-download {
        margin-right: 10px;
      }
    }
    .el-progress {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transform: none;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
      z-index: 100;
      .el-progress-circle {
        margin: 0 auto;
        padding-top: 10px;
      }
      .el-progress__text {
        color: #ffffff;
      }
    }
  }
  &:hover {
    .el-upload--picture-card {
      .el-upload-list__item-actions {
        opacity: 1;
      }
    }
  }
}
</style>
