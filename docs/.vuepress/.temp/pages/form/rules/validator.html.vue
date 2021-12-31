<template><h2 id="自定义验证" tabindex="-1"><a class="header-anchor" href="#自定义验证" aria-hidden="true">#</a> 自定义验证</h2>
<CurdForm class="center-form" ref="dynamicForm1" :fields="fields1" :form-schema="formSchema1" :label-width="formSchema1.labelWidth || '110px'">
    <template v-slot:operate-button>
        <div style="text-align: center">
        <el-button type="primary" @click="submit1">提 交</el-button>
        <el-button type="default" @click="clear1">清 空</el-button>
        </div>
    </template>
</CurdForm>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center-form<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicForm1<span class="token punctuation">"</span></span> <span class="token attr-name">:fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fields1<span class="token punctuation">"</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formSchema1<span class="token punctuation">"</span></span> <span class="token attr-name">:label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formSchema1.labelWidth || <span class="token punctuation">'</span>110px<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>operate-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>提 交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>清 空<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
<span class="token keyword">var</span> <span class="token function-variable function">validatePass</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'请输入密码'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">validatePass2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token operator">=></span>  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'请再次输入密码'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">.</span>password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'两次输入密码不一致!'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
            
<span class="token keyword">const</span> formSchema1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"用户名"</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"input-password"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"密码"</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"input-password"</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"确认密码"</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">"repassword"</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    rules<span class="token operator">:</span><span class="token punctuation">{</span>
        username<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>message<span class="token operator">:</span><span class="token string">"用户名不能为空"</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">"trigger"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> validator<span class="token operator">:</span> validatePass<span class="token punctuation">,</span> trigger<span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        repassword<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> validator<span class="token operator">:</span> validatePass2<span class="token punctuation">,</span> trigger<span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fields1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dynamicForm1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> instance1 <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">submit1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    dynamicForm1<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance1<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">"提交成功"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">clear1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    dynamicForm1<span class="token punctuation">.</span>value<span class="token punctuation">.</span>schemaFormRef<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div></template>

<script setup>
import { ref, getCurrentInstance } from "vue"

const formModel = ref({})
var validatePass = (rule, value, callback)=>{
    if (value !== 0 && !value) {
        callback(new Error('请输入密码'));
    } else {
        callback();
    }
};
var validatePass2 = (rule, value, callback)=>  {
    if (value !== 0 && !value) {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.obj.password) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};
            
const formSchema1 = {
    formItem: [
        { type: "input", label: "用户名", prop: "username", span: 12 },
        { type: "input", label: "姓名", prop: "name", span: 12 },
        { type: "input-password", label: "密码", prop: "password", span: 12 },
        { type: "input-password", label: "确认密码", prop: "repassword", span: 12 },
    ],
    rules:{
        username:[{required: true,message:"用户名不能为空",trigger: "trigger"}],
        password: [{ validator: validatePass, trigger: 'blur' }],
        repassword: [{ validator: validatePass2, trigger: 'blur' }]
    }
}
const fields1 = {}
const dynamicForm1 = ref()
const instance1 = getCurrentInstance()
const submit1 = () => {
    dynamicForm1.value.validate((valid) => {
        if (valid) {
        instance1.appContext.config.globalProperties.$message({
            type: "success",
            message: "提交成功",
        })
        }
    })
}
const clear1 = () => {
    dynamicForm1.value.schemaFormRef.resetFields()
}

</script>
