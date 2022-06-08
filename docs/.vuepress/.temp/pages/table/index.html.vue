<template><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdTable</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span> <span class="token attr-name">:page-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageOptions<span class="token punctuation">"</span></span> <span class="token attr-name">index</span> <span class="token attr-name">selection</span> <span class="token attr-name">click-row-to-view</span> <span class="token attr-name">:fetch-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fetchData<span class="token punctuation">"</span></span> <span class="token attr-name">:fetch-create</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fetchCreate<span class="token punctuation">"</span></span> <span class="token attr-name">:fetch-edit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fetchEdit<span class="token punctuation">"</span></span> <span class="token attr-name">:fetch-remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fetchRemove<span class="token punctuation">"</span></span> <span class="token attr-name">@selectionChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectionChange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"用户"</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span>
        prop<span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span>
        filter<span class="token operator">:</span> <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        form<span class="token operator">:</span> <span class="token punctuation">{</span>
          rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">"请输入用户姓名"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">"登录账号"</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">"account"</span><span class="token punctuation">,</span>
      width<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      filter<span class="token operator">:</span> <span class="token punctuation">{</span>
        component<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      form<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">"请输入登录账号"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"手机号"</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">"phone"</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
    filter<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    sortable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    form<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">"请输入手机号"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
        len<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">"请输入正确的手机号码"</span><span class="token punctuation">,</span>
        trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"邮箱"</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">"email"</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    form<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">"请输入邮箱"</span><span class="token punctuation">,</span>
        trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">"email"</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">"请填写正确的邮箱"</span><span class="token punctuation">,</span>
        trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"角色"</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">"role"</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"超级管理员"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"普通管理员"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    form<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"select"</span><span class="token punctuation">,</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        trigger<span class="token operator">:</span> <span class="token string">"change"</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">"请选择用户角色"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"性别"</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">"gender"</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    form<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"radio"</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"状态"</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">"status"</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"启用"</span><span class="token punctuation">,</span> className<span class="token operator">:</span> <span class="token string">"color-green"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"circle-check"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"禁用"</span><span class="token punctuation">,</span> className<span class="token operator">:</span> <span class="token string">"color-red"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"remove"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    filter<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"select"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    form<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"radio"</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"创建时间"</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">"createTime"</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">170</span><span class="token punctuation">,</span>
    form<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"date-picker"</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
        format<span class="token operator">:</span> <span class="token string">"YYYY/MM/DD"</span><span class="token punctuation">,</span>
        valueFormat<span class="token operator">:</span> <span class="token string">"YYYY/MM/DD"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">hidden</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">form</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>form<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"ID"</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    form<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">hidden</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">form</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>form<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">"个人介绍"</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">"desc"</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span>
    showOverflowTooltip<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    form<span class="token operator">:</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">"textarea"</span><span class="token punctuation">,</span>
        rows<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      pageOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        total<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        pageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      columns<span class="token operator">:</span> columns<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> pageIndex<span class="token punctuation">,</span> pageSize<span class="token punctuation">,</span> sortColumn<span class="token punctuation">,</span> sortType<span class="token punctuation">,</span> search <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
          pageIndex<span class="token punctuation">,</span>
          pageSize<span class="token punctuation">,</span>
          <span class="token operator">...</span>search<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>sortColumn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          params<span class="token punctuation">.</span>sortColumn <span class="token operator">=</span> sortColumn
          params<span class="token punctuation">.</span>sortType <span class="token operator">=</span> sortType
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"params"</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
        Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
            account<span class="token operator">:</span> <span class="token string">"ttt"</span><span class="token punctuation">,</span>
            phone<span class="token operator">:</span> <span class="token string">"13555555555"</span><span class="token punctuation">,</span>
            email<span class="token operator">:</span> <span class="token string">"admin@admin.com"</span><span class="token punctuation">,</span>
            role<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            status<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            desc<span class="token operator">:</span> <span class="token string">"无父无母的两个孩子，就这样顽强生活在长城之畔的镇子上。少年带着弟弟，以作零工为生。关市开启是人们最快活的日子，四面八方的商人和货物汇集着。少年穿梭其中，眼明手快，笑脸迎人，商人们也乐意关照"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">"张三1"</span><span class="token punctuation">,</span>
            role<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            status<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token comment">// 数据赋值</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>pageOptions<span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 设置总页数</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">fetchCreate</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"params"</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">fetchEdit</span><span class="token punctuation">(</span><span class="token parameter">editedParams<span class="token punctuation">,</span> fullParams</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"editedParams"</span><span class="token punctuation">,</span> editedParams<span class="token punctuation">)</span>
      editedParams<span class="token punctuation">.</span>id <span class="token operator">=</span> fullParams<span class="token punctuation">.</span>id
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">fetchRemove</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//   const data = {</span>
      <span class="token comment">//     id: row.id,</span>
      <span class="token comment">//   }</span>

      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">selectionChange</span><span class="token punctuation">(</span><span class="token parameter">rows</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"row"</span><span class="token punctuation">,</span> rows<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br></div></div></template>
