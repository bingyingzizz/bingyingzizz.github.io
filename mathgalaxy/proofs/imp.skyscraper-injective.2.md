# 天际线层 + 取茎 $\implies$ 系数内射则层内射
`imp.skyscraper-injective` · 推出 · strong 边 · 根 `../`

`def.skyscraper-sheaf` 天际线层 + `prop.skyscraper-stalks` 天际线层的茎 → `prop.skyscraper-injective` 天际线层是内射层

$$\operatorname{Hom}_{\mathbf{Ab}}(\mathcal{H}_{x},\ A) \longrightarrow \operatorname{Hom}_{\mathbf{Ab}}(\mathcal{G}_{x},\ A)$$

满。取茎是滤过余极限、故**正合**，于是 $\mathcal{G}_{x} \rightarrowtail \mathcal{H}_{x}$ 是阿贝尔群的单射；由 $A$ 内射，上式满。∎

**第三步：反之。** 设 $i_{x,*}A$ 内射。

取 $\mathbf{Ab}$ 中的单射 $B \rightarrowtail C$ 与任意 $B \to A$。

$i_{x,*}$ 正合（单点空间上无反例可坏正合性），故 $i_{x,*}B \rightarrowtail i_{x,*}C$；

由 $i_{x,*}A$ 内射，$\operatorname{Hom}(i_{x,*}C, i_{x,*}A) \to \operatorname{Hom}(i_{x,*}B, i_{x,*}A)$ 满。

> 续见 proofs/imp.skyscraper-injective.3.md
