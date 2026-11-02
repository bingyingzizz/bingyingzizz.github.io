# 满态射在自由空间上逐点检验
`imp.cond-epi` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `prop.cond-projectives` Cond 有足够多投射对象 + `def.free-presentation` 自由表示 → `prop.cond-epi` 凝聚态集满态射的判据

它是 $Y$ 的一个子层。由定义，$p$ 的每个值都落在 $\operatorname{Im}(p)$ 里，即 $\operatorname{Im}(p) \hookrightarrow Y$ 是满态射；而它同时是单态射，故（层里单满即同构）$\operatorname{Im}(p) = Y$。也就是说：**$p$ 局部满**。

现在取 $F \in \mathbf{FCHaus}$ 与 $y \in Y(F)$。

由局部满，存在 $F$ 的覆盖，在其每一块 $F_{i}$ 上有 $x_{i} \in X(F_{i})$ 使 $p(x_{i}) = y|_{F_{i}}$。

> 续见 proofs/imp.cond-epi.3.md
