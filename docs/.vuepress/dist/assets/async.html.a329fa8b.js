import{e as n}from"./app.51248bfd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u5F02\u6B65\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u6570\u636E" aria-hidden="true">#</a> \u5F02\u6B65\u6570\u636E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u914D\u7F6E<code>asyncOptions</code>\u53EF\u5B9E\u73B0\u5F02\u6B65\u83B7\u53D6\u6570\u636E\uFF0C\u6CE8\u610F\u8FD4\u56DE\u503C\u7C7B\u578B\u662Flabel\u3001value\u683C\u5F0F</p></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">asyncOptions</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u670D\u88C5&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u6570\u7801&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u6BCD\u5A74&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u5206\u7C7B&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      asyncOptions<span class="token operator">:</span> asyncOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u5206\u7C7B&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      asyncOptions<span class="token operator">:</span> asyncOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;checkbox&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6807\u7B7E&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;tags&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      asyncOptions<span class="token operator">:</span> asyncOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,3);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
