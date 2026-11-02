# 内射的天际线层 $\implies$ 层范畴有足够多内射
`imp.enough-injectives-sheaf` · 推出 · strong 边 · 根 `../`

`prop.skyscraper-injective` 天际线层是内射层 + `prop.skyscraper-stalks` 天际线层的茎 → `thm.pushforward-enough-injectives` 足够多内射层

$s$ 在第 $x_{0}$ 个分量上的像是 $\mathcal{F}(U) \to \mathcal{F}_{x_{0}} \rightarrowtail I_{x_{0}}$ 下的 $s_{x_{0}}$（$x_{0} \in U$，故这个分量落在 $I_{x_{0}}$ 而不是 $0$），非零。

于是整个像非零 —— 逐 $U$ 单，故是层的单射。

**第三步：$\mathcal{I}$ 内射。** 由上一条，每个 $i_{x,*}I_{x}$ 内射。

要证它们的**直积**内射：对层的单射 $\mathcal{G} \rightarrowtail \mathcal{H}$ 与任意 $\mathcal{G} \to \mathcal{I}$，竖着拆成每个 $x$ 的分量 $\mathcal{G} \to i_{x,*}I_{x}$；

> 续见 proofs/imp.enough-injectives-sheaf.3.md
