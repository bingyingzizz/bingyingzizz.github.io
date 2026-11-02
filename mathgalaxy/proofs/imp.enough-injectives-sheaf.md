# 内射的天际线层 $\implies$ 层范畴有足够多内射
`imp.enough-injectives-sheaf` · 推出 · strong 边 · 根 `../`

`prop.skyscraper-injective` 天际线层是内射层 + `prop.skyscraper-stalks` 天际线层的茎 → `thm.pushforward-enough-injectives` 足够多内射层

**目标**：每个 $\mathcal{F} \in \mathbf{Ab}(X)$ 嵌进一个内射层。

**第一步：构造。** 对每点 $x$，把茎 $\mathcal{F}_{x}$ 嵌进 $\mathbf{Ab}$ 里的内射包 $\mathcal{F}_{x} \rightarrowtail I_{x}$（$\mathbf{Ab}$ 有足够多内射：$\mathbb{Q}/\mathbb{Z}$ 的适当直积给出内射余生成元）。

令

$$\mathcal{I} := \prod_{x \in X} i_{x,*}\, I_{x} .$$

**第二步：$\mathcal{F} \to \mathcal{I}$ 是单。** 层的映射是单 $\iff$ 在每个开集上取截面后是单。

取 $U$ 开、$s \in \mathcal{F}(U)$、$s \ne 0$。

层由其全部茎决定，故存在 $x_{0} \in U$ 使 $s_{x_{0}} \ne 0$。

> 续见 proofs/imp.enough-injectives-sheaf.2.md
