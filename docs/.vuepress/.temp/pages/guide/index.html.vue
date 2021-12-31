<template><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>在现有项目中使用 Evue 时，可以通过 npm 或 yarn 进行安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> i @vue-curd/vue-curd -S

<span class="token comment"># 引入</span>
<span class="token function">import</span> VueCurd from <span class="token string">"@vue-curd/vue-curd"</span>
app.use<span class="token punctuation">(</span>VueCurd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3>
<p>详细文档请<router-link to="/table/">前往查看</router-link></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdTable</span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdTable</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>prop<span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>prop<span class="token operator">:</span> <span class="token string">"age"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"年龄"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"李四"</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h3>
<p>详细文档请<router-link to="/form/">前往查看</router-link></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formSchema<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"用户名"</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
      username<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span><span class="token string">"请输入用户名"</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="弹窗表单" tabindex="-1"><a class="header-anchor" href="#弹窗表单" aria-hidden="true">#</a> 弹窗表单</h3>
<el-button @click="open">弹 出</el-button>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>弹 出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"用户名"</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
      username<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span><span class="token string">"请输入用户名"</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$formDialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        formSchema<span class="token operator">:</span> formSchema
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></template>

<script setup>
import { ref,getCurrentInstance } from "vue"
const instance = getCurrentInstance()
const formSchema = ref({
  formItem: [
    { type: "input", label: "用户名", prop: "username", span: 24 },
    { type: "input", label: "姓名", prop: "name", span: 24 },
  ],
  rules: {
      username: [{required: true, message:"请输入用户名",trigger: "blur"}]
  }
})
const open = ()=>{
    instance.appContext.config.globalProperties.$formDialog.show({
        formSchema: formSchema
    })
}
</script>
