# 逆映射定理 + 隐函数定理 $\implies$ 常秩定理
`imp.rank-theorem` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `thm.implicit-function` 隐函数定理 → `cor.rank-theorem` 常秩定理

固定 $a \in U$，记 $r := \operatorname{rank} Df(a)$。

**第一步：选主元并在定义域上换坐标。** $Df(a)$ 有某个 $r \times r$ 子式非零。不妨设前 $r$ 个坐标上的主子式非零（否则先重排坐标 —— 那是线性同构，不影响结论）。把 $x$ 拆成 $(x', x'') \in \mathbb{R}^{r} \times \mathbb{R}^{n-r}$，$f$ 拆成 $(f', f'') \in \mathbb{R}^{r} \times \mathbb{R}^{m-r}$。则 $D_{x'} f'(a)$ 可逆。

> 续见 proofs/imp.rank-theorem.2.md
