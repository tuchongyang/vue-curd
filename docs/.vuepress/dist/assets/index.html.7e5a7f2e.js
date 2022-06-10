import{e as n}from"./app.51248bfd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5728\u73B0\u6709\u9879\u76EE\u4E2D\u4F7F\u7528 Evue \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 npm \u6216 yarn \u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">npm</span> i @vue-curd/vue-curd -S

<span class="token comment"># \u5F15\u5165</span>
<span class="token function">import</span> VueCurd from <span class="token string">&quot;@vue-curd/vue-curd&quot;</span>
app.use<span class="token punctuation">(</span>VueCurd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a> \u8868\u683C</h3><p>\u8BE6\u7EC6\u6587\u6863\u8BF7<a href="/vue-curd/table/">\u524D\u5F80\u67E5\u770B</a></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdTable</span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdTable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>prop<span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a> \u8868\u5355</h3><p>\u8BE6\u7EC6\u6587\u6863\u8BF7<a href="/vue-curd/form/">\u524D\u5F80\u67E5\u770B</a></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
      username<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">&quot;blur&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u5F39\u7A97\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u5F39\u7A97\u8868\u5355" aria-hidden="true">#</a> \u5F39\u7A97\u8868\u5355</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5F39 \u51FA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
      username<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">&quot;blur&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$formDialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        formSchema<span class="token operator">:</span> formSchema
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,12);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};