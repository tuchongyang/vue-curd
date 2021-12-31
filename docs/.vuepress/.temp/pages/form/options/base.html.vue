<template><h2 id="普通用法" tabindex="-1"><a class="header-anchor" href="#普通用法" aria-hidden="true">#</a> 普通用法</h2>
<CurdForm ref="dynamicForm" :form-schema="formSchema"></CurdForm>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicForm<span class="token punctuation">"</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formSchema<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">"radio"</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">"性别"</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">"sex"</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">"select"</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">"身份"</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">"role"</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"超级管理员"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"普通管理员"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></template>

<script setup>
const formSchema = {
  formItem: [
    { 
      type: "radio", 
      label: "性别",
      prop: "sex", 
      span: 24,
      options: [
        { label: "男", value: 1},
        { label: "女", value: 2},
      ],
      value: 1
    },
    { 
      type: "select", 
      label: "身份",
      prop: "role", 
      span: 24,
      options: [
        { label: "超级管理员", value: 1},
        { label: "普通管理员", value: 2},
      ],
      value: 1
    },
  ]
}
</script>
