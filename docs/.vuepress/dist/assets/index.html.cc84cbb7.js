import{g as m,r as l,o as g,c as q,b as s,w as a,F as d,a as p,f as t,e as f,h as v}from"./app.0f7ed605.js";const y=p("h2",{id:"\u57FA\u7840\u8868\u5355",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#\u57FA\u7840\u8868\u5355","aria-hidden":"true"},"#"),t(" \u57FA\u7840\u8868\u5355")],-1),h={style:{"text-align":"center"}},_=t("\u63D0 \u4EA4"),w=t("\u6E05 \u7A7A"),x=f(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>curd-form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fields<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema.labelWidth || <span class="token punctuation">&#39;</span>110px<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>operate-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0 \u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6E05 \u7A7A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>curd-form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> PageHeader <span class="token keyword">from</span> <span class="token string">&quot;@/components/Layout/PageHeader&quot;</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input-password&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5BC6\u7801&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&quot;\u89D2\u8272&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;role&quot;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u8D85\u7EA7\u7BA1\u7406\u5458&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u666E\u901A\u7BA1\u7406\u5458&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&quot;\u6027\u522B&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5973&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;input-number&quot;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        controlsPosition<span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fields <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dynamicForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  dynamicForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4\u6210\u529F&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">clear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  dynamicForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>schemaFormRef<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div>`,1),I={setup(F){const e={formItem:[{type:"input",label:"\u7528\u6237\u540D",prop:"username",span:24},{type:"input",label:"\u59D3\u540D",prop:"name",span:24},{type:"input-password",label:"\u5BC6\u7801",prop:"password",span:24},{type:"select",label:"\u89D2\u8272",prop:"role",options:[{label:"\u8D85\u7EA7\u7BA1\u7406\u5458",value:1},{label:"\u666E\u901A\u7BA1\u7406\u5458",value:2}],span:24},{type:"radio",label:"\u6027\u522B",prop:"sex",options:[{label:"\u7537",value:1},{label:"\u5973",value:2}],span:24,value:1},{type:"input-number",label:"\u5E74\u9F84",prop:"age",value:1,props:{controlsPosition:"right"},span:12}],rules:{username:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"trigger"}]}},u={},n=m(),r=v(),i=()=>{n.value.validate(o=>{o&&r.appContext.config.globalProperties.$message({type:"success",message:"\u63D0\u4EA4\u6210\u529F"})})},k=()=>{n.value.schemaFormRef.resetFields()};return(o,C)=>{const c=l("el-button"),b=l("CurdForm");return g(),q(d,null,[y,s(b,{class:"center-form",ref_key:"dynamicForm",ref:n,fields:u,"form-schema":e,"label-width":e.labelWidth||"110px"},{"operate-button":a(()=>[p("div",h,[s(c,{type:"primary",onClick:i},{default:a(()=>[_]),_:1}),s(c,{type:"default",onClick:k},{default:a(()=>[w]),_:1})])]),_:1},8,["label-width"]),x],64)}}};export{I as default};
