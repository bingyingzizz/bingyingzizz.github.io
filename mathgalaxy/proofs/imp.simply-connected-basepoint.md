# 换基点的同构 $\implies$ 单连通与基点选取无关
`imp.simply-connected-basepoint` · 推出 · strong 边 · 根 `../`

`prop.pi1-basepoint` 基点变换 + `def.group` 群 → `prop.simply-connected-basepoint` 单连通与基点无关

设 $X$ 道路连通。(ii) $\implies$ (i)：取任一点即可。

(i) $\implies$ (ii)：给定 $x_{0}$ 与任意 $x$，道路连通给出从 $x_{0}$ 到 $x$ 的道路 $\lambda$。由 `prop.pi1-basepoint`，$[\alpha] \mapsto [\overline{\lambda} \ast \alpha \ast \lambda]$ 给出同构 $\pi_{1}(X, x_{0}) \to \pi_{1}(X, x)$。同构是双射且保单位元，把 $1$ 送到 $1$，故 $\pi_{1}(X, x) = 1$。∎

> 这里用了两次「平凡性在同构下不变」：同构是双射，平凡群只有一个元素，像也只能有一个。没有道路连通就没有 $\lambda$，同构无从谈起 —— 这就是条件里「道路连通」不可省的确切原因。
