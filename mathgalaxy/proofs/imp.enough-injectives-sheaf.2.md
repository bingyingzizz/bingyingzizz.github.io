# 内射的天际线层 $\implies$ 层范畴有足够多内射
`imp.enough-injectives-sheaf` · 推出 · strong 边 · 根 `../`

`prop.skyscraper-injective` 天际线层是内射层 + `prop.skyscraper-stalks` 天际线层的茎 → `thm.pushforward-enough-injectives` 足够多内射层

**第二步：$\mathcal{F} \to \mathcal{I}$ 是单。** 层的映射是单 $\iff$ 在每个开集上取截面后是单。取 $U$ 开、$s \in \mathcal{F}(U)$、$s \ne 0$。层由其全部茎决定，故存在 $x_{0} \in U$ 使 $s_{x_{0}} \ne 0$。$s$ 在第 $x_{0}$ 个分量上的像是 $\mathcal{F}(U) \to \mathcal{F}_{x_{0}} \rightarrowtail I_{x_{0}}$ 下的 $s_{x_{0}}$（$x_{0} \in U$，故这个分量落在 $I_{x_{0}}$ 而不是 $0$），非零。于是整个像非零 —— 逐 $U$ 单，故是层的单射。

> 续见 proofs/imp.enough-injectives-sheaf.3.md
