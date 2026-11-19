# imp.cohomology-as-ext
`imp.cohomology-as-ext` · 推出 · strong 边 · 根 `../`

`def.sheaf-cohomology` 层上同调 + `def.internal-hom` 内 Hom → `prop.cohomology-as-ext` 上同调就是 Ext

**证明。** 关键在于这两个函子**本来是同一个函子**。由 $\mathbb{Z}\cdot X$ 的泛性质（它是自由对象：$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot X, M) = \operatorname{Hom}(X, M)$）✓，
$$\operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot X,\ M\bigr) \;=\; \operatorname{Hom}_{\mathcal{T}}\bigl(X,\ M\bigr) \;=\; \Gamma(X, M) = M(X) ✓$$
即「取截面」函子与「$\operatorname{Hom}(\mathbb{Z}\cdot X, -)$」逐字相同 ✓。

右导出函子只依赖函子本身，故两者的右导出函子在导出范畴里同构：$\operatorname{R}\Gamma(X, -) \cong \operatorname{RHom}(\mathbb{Z}\cdot X, -)$ ✓；

逐类取上同调就得到第二个同构 ✓。

∎
