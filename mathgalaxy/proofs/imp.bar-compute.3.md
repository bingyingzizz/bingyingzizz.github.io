# 标准消解 $\implies$ 显式上链复形算出群上同调
`imp.bar-compute` · 推出 · strong 边 · 根 `../`

`def.bar-resolution` 标准消解 + `def.group-cohomology` 群上同调 → `prop.group-cohom-compute` 用标准消解计算群上同调

**第三步：把 Hom 翻译成函数。** $\operatorname{Hom}_{R[G]}(B_{n}, M)$ 里的元素由 $c(g_{1}, \cdots, g_{n}) := f\bigl([1|g_{1}|\cdots|g_{n}]\bigr)$ 唯一确定：给定任意 $c$，令 $f\bigl(g_{0}[1|g_{1}|\cdots|g_{n}]\bigr) := g_{0}\, c(g_{1}, \cdots, g_{n})$ 即得 $R[G]$-线性映射（良定义因为 $\{[1|g_{1}|\cdots|g_{n}]\}$ 是 $R[G]$-基）。于是 $C^{n}(G, M) \cong \{c : G^{n} \to M\}$。

> 续见 proofs/imp.bar-compute.4.md
