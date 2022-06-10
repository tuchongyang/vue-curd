import{e as n}from"./app.51248bfd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u666E\u901A\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7528\u6CD5" aria-hidden="true">#</a> \u666E\u901A\u7528\u6CD5</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u901A\u8FC7\u914D\u7F6E<code>eventObject</code>\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684<code>change</code>\u53EF\u5B9E\u73B0\u7EA7\u8054\u63A7\u5236\uFF0C\u6CE8\u610F\u521D\u59CB\u503C\u4EE5\u53CA\u5224\u7A7A\u95EE\u9898\u3002</p></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">const</span> formModel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> replicationModeOptions <span class="token operator">=</span>  <span class="token punctuation">{</span>
  MySQL<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5F02\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;semisync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  PostgreSQL<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5F02\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;sync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  SQLServer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;sync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> engineVersionOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  MySQL<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;5.7&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;5.7&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;8.0&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;8.0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  SQLServer<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2017_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2017_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2017_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2017_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2014_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2014_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2014_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2014_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2016_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2016_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2016_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2016_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2012_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2012_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2012_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2012_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2008_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2008_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2008_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2008_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  PostgreSQL<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;9.5&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;9.5&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;9.6&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;9.6&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;10&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;11&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u5E93\u5F15\u64CE&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;engine&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;PostgreSQL&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;PostgreSQL&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;SQLServer&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;SQLServer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">,</span>
      eventObject<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">const</span> cur <span class="token operator">=</span> formSchema<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formItem<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token operator">=&gt;</span>a<span class="token punctuation">.</span>prop<span class="token operator">==</span><span class="token string">&#39;engineVersion&#39;</span><span class="token punctuation">)</span>
          cur<span class="token punctuation">.</span>options <span class="token operator">=</span> engineVersionOptions<span class="token punctuation">[</span>data<span class="token punctuation">]</span>
          formModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token string">&quot;engineVersion&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

          <span class="token keyword">const</span> cur1 <span class="token operator">=</span> formSchema<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formItem<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token operator">=&gt;</span>a<span class="token punctuation">.</span>prop<span class="token operator">==</span><span class="token string">&#39;replicationMode&#39;</span><span class="token punctuation">)</span>
          cur1<span class="token punctuation">.</span>options <span class="token operator">=</span> engineVersionOptions<span class="token punctuation">[</span>data<span class="token punctuation">]</span>
          formModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token string">&quot;replicationMode&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur1<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u5E93\u7248\u672C&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;engineVersion&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> engineVersionOptions<span class="token punctuation">[</span><span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65\u53C2\u6570&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;replicationMode&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span>replicationModeOptions<span class="token punctuation">[</span><span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div>`,3);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};