<template><h2 id="组件事件" tabindex="-1"><a class="header-anchor" href="#组件事件" aria-hidden="true">#</a> 组件事件</h2>
<CurdForm ref="dynamicForm" :form-schema="formSchema"></CurdForm>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>## 组件事件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicForm<span class="token punctuation">"</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formSchema<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      eventObject<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function-variable function">change</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">"change事件触发了"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">blur</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">"blur事件触发了"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">focus</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">"focus事件触发了"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">click</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">"click事件触发了"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div></template>

<script setup>
import { ref, getCurrentInstance } from "vue"
const instance = getCurrentInstance()
const formSchema = {
  formItem: [
    { 
      type: "input", 
      label: "姓名",
      prop: "name", 
      span: 24,
      eventObject:{
        change:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "change事件触发了",
          })
        },
        blur:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "blur事件触发了",
          })
        },
        focus:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "focus事件触发了",
          })
        },
        click:(data)=>{
          instance.appContext.config.globalProperties.$message({
              type: "success",
              message: "click事件触发了",
          })
        }
      } 
    },
  ]
}
</script>
