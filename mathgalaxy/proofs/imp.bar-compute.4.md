# 标准消解 $\implies$ 显式上链复形算出群上同调
`imp.bar-compute` · 推出 · strong 边 · 根 `../`

`def.bar-resolution` 标准消解 + `def.group-cohomology` 群上同调 → `prop.group-cohom-compute` 用标准消解计算群上同调

**第四步：微分对上号。** 由 $d_{n}[1|g_{1}|\cdots|g_{n}] = [g_{1}|\cdots|g_{n}] + \sum_{i=1}^{n} (-1)^{i}[1|\cdots|g_{i}g_{i+1}|\cdots|g_{n}] + (-1)^{n+1}[1|\cdots|g_{n}]$（把 $i = 0$ 那一项用 $R[G]$-线性搬到最左边：$[g_{1}|\cdots|g_{n}] = g_{1}\cdot[1|g_{2}|\cdots|g_{n}]$），对 $f$ 取值并记 $c$ 为对应的函数，逐项读出的就是

$$(\delta c)(g_{1}, \cdots, g_{n+1}) = g_{1}c(g_{2}, \cdots, g_{n+1}) + \sum_{i=1}^{n}(-1)^{i} c(\cdots, g_{i}g_{i+1}, \cdots) + (-1)^{n+1} c(g_{1}, \cdots, g_{n}).$$

三步合起来即得 $H^{n}(G, M) \cong H^{n}(C^{\bullet}(G, M))$，且同构是自然的。∎

> 这是「群上同调可算」的全部内容：把内射消解换成 bar 消解，再把 Hom 翻译成 $G^{n}$ 上的函数。
