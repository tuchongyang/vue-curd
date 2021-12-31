<template><h2 id="普通用法" tabindex="-1"><a class="header-anchor" href="#普通用法" aria-hidden="true">#</a> 普通用法</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>通过配置<code>eventObject</code>的自定义事件的<code>change</code>可实现级联控制，注意初始值以及判空问题。</p>
</div>
<CurdForm ref="dynamicForm" v-model="formModel" :form-schema="formSchema"></CurdForm>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicForm<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formModel<span class="token punctuation">"</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formSchema<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
<span class="token keyword">const</span> formModel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> replicationModeOptions <span class="token operator">=</span>  <span class="token punctuation">{</span>
  MySQL<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"异步"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"async"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"同步"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"semisync"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  PostgreSQL<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"异步"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"async"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"同步"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"sync"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  SQLServer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"同步"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"sync"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> engineVersionOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  MySQL<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"5.6"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"5.6"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"5.7"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"5.7"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"8.0"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"8.0"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  SQLServer<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2017_EE"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2017_EE"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2017_WEB"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2017_WEB"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2014_EE"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2014_EE"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2014_WEB"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2014_WEB"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2016_EE"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2016_EE"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2016_WEB"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2016_WEB"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2012_EE"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2012_EE"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2012_WEB"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2012_WEB"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2008_EE"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2008_EE"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"2008_WEB"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"2008_WEB"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  PostgreSQL<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"9.5"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"9.5"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"9.6"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"9.6"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"10"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"11"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"11"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">"radio"</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">"数据库引擎"</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">"engine"</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">"MySQL"</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">"MySQL"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">"PostgreSQL"</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">"PostgreSQL"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">"SQLServer"</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">"SQLServer"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">"MySQL"</span><span class="token punctuation">,</span>
      eventObject<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">const</span> cur <span class="token operator">=</span> formSchema<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formItem<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token operator">=></span>a<span class="token punctuation">.</span>prop<span class="token operator">==</span><span class="token string">'engineVersion'</span><span class="token punctuation">)</span>
          cur<span class="token punctuation">.</span>options <span class="token operator">=</span> engineVersionOptions<span class="token punctuation">[</span>data<span class="token punctuation">]</span>
          formModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token string">"engineVersion"</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

          <span class="token keyword">const</span> cur1 <span class="token operator">=</span> formSchema<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formItem<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token operator">=></span>a<span class="token punctuation">.</span>prop<span class="token operator">==</span><span class="token string">'replicationMode'</span><span class="token punctuation">)</span>
          cur1<span class="token punctuation">.</span>options <span class="token operator">=</span> engineVersionOptions<span class="token punctuation">[</span>data<span class="token punctuation">]</span>
          formModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token string">"replicationMode"</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur1<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">"radio"</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">"数据库版本"</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">"engineVersion"</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> engineVersionOptions<span class="token punctuation">[</span><span class="token string">"MySQL"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">"5.6"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">"radio"</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">"同步参数"</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">"replicationMode"</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span>replicationModeOptions<span class="token punctuation">[</span><span class="token string">"MySQL"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">"async"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div></template>

<script setup>
import { ref } from "vue"
const formModel = ref({})
const replicationModeOptions =  {
  MySQL: [
      { label: "异步", value: "async" },
      { label: "同步", value: "semisync" },
  ],
  PostgreSQL: [
      { label: "异步", value: "async" },
      { label: "同步", value: "sync" },
  ],
  SQLServer: [{ label: "同步", value: "sync" }],
};
const engineVersionOptions = {
  MySQL: [
    { label: "5.6", value: "5.6" },
    { label: "5.7", value: "5.7" },
    { label: "8.0", value: "8.0" },
  ],
  SQLServer: [
    { label: "2017_EE", value: "2017_EE" },
    { label: "2017_WEB", value: "2017_WEB" },
    { label: "2014_EE", value: "2014_EE" },
    { label: "2014_WEB", value: "2014_WEB" },
    { label: "2016_EE", value: "2016_EE" },
    { label: "2016_WEB", value: "2016_WEB" },
    { label: "2012_EE", value: "2012_EE" },
    { label: "2012_WEB", value: "2012_WEB" },
    { label: "2008_EE", value: "2008_EE" },
    { label: "2008_WEB", value: "2008_WEB" },
  ],
  PostgreSQL: [
    { label: "9.5", value: "9.5" },
    { label: "9.6", value: "9.6" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
  ],
};
const formSchema = ref({
  formItem: [
    { 
      type: "radio", 
      label: "数据库引擎",
      prop: "engine", 
      span: 24,
      options:[
          {value: "MySQL",label: "MySQL"},
          {value: "PostgreSQL",label: "PostgreSQL"},
          {value: "SQLServer",label: "SQLServer"},
      ],
      value: "MySQL",
      eventObject:{
        change(data){
          const cur = formSchema.value.formItem.find(a=>a.prop=='engineVersion')
          cur.options = engineVersionOptions[data]
          formModel.value["engineVersion"] = cur.options[0].value

          const cur1 = formSchema.value.formItem.find(a=>a.prop=='replicationMode')
          cur1.options = engineVersionOptions[data]
          formModel.value["replicationMode"] = cur1.options[0].value

        }
      }
    },
    { 
      type: "radio", 
      label: "数据库版本",
      prop: "engineVersion", 
      span: 24,
      options: engineVersionOptions["MySQL"],
      value: "5.6"
    },
    { 
      type: "radio", 
      label: "同步参数",
      prop: "replicationMode", 
      span: 24,
      options:replicationModeOptions["MySQL"],
      value: "async"
    },
  ]
})
</script>
