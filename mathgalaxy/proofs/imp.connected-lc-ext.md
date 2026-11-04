# 高次 Ext 只剩 $0,1$ 次 $\implies$ 连通时只剩 $1$ 次
`imp.connected-lc-ext` · 推出 · strong 边 · 根 `../`

`thm.lc-ext-vanishing` 局部紧阿贝尔群高次 Ext 消失 → `ex.connected-lc-ext` 连通局部紧到离散只剩 Ext一次

局部紧阿贝尔群的高次 Ext 消失给出：$n \ne 0,1$ 时 $\operatorname{Ext}^{n}(M,N) = 0$。

$0$ 次那项用**连通性**再杀一次：$M$ 连通、$N$ 离散时，$\operatorname{Hom}_{\mathbb{Z}}(M, N)$ 里的像必然落在 $N$ 的连通分支里，而 $N$ 离散 $\implies$ 分支是单点 $\implies$ 同态只能是零。

所以只剩 $\operatorname{Ext}^{1}$ 可能非零。
