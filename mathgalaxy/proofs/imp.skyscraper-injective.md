# 天际线层 + 取茎 $\implies$ 系数内射则层内射
`imp.skyscraper-injective` · 推出 · strong 边 · 根 `../`

`def.skyscraper-sheaf` 天际线层 + `prop.skyscraper-stalks` 天际线层的茎 → `prop.skyscraper-injective` 天际线层是内射层

**第一步：把 Hom 搬到茎上。** 由伴随 $i_{x}^{-1} \dashv i_{x,*}$（$i_{x}^{-1}$ 在单点情形等于取茎，这正是上一条算清楚的东西），对任意层 $\mathcal{F}$ 有自然同构

$$\operatorname{Hom}_{\mathbf{Ab}(X)}\bigl(\mathcal{F},\ i_{x,*}A\bigr) \;\cong\; \operatorname{Hom}_{\mathbf{Ab}}\bigl(\mathcal{F}_{x},\ A\bigr), \qquad \varphi \longmapsto \varphi_{x} .$$

**第二步：把内射性搬到茎上。** $i_{x,*}A$ 内射 $\iff$ $\operatorname{Hom}(-, i_{x,*}A)$ 正合 $\iff$ 对每个层的单射 $\mathcal{G} \rightarrowtail \mathcal{H}$，映射 $\operatorname{Hom}(\mathcal{H}, i_{x,*}A) \to \operatorname{Hom}(\mathcal{G}, i_{x,*}A)$ 满。用第一步的同构，这等价于

> 续见 proofs/imp.skyscraper-injective.2.md
