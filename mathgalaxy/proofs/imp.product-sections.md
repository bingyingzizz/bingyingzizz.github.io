# 单调类定理 $\implies$ 乘积测度由截口积分给出
`imp.product-sections` · 推出 · strong 边 · 根 `../`

`thm.monotone-class` 单调类定理 + `prop.section-measurable` 截口可测 → `thm.product-measure-sections` 乘积测度由截口给出

**① 先设 $\mu$、$\nu$ 有限。** 令 $\mathcal{C} = \{E \in \mathcal{M} \otimes  \mathcal{N} : x \mapsto \nu(E_x)\text{ 可测}, y \mapsto \mu(E^y)\text{ 可测},\text{ 且} \mu\times\nu(E) = \int\nu(E_x)d\mu = \int\mu(E^y)d\nu\}$。

**② 矩形在 $\mathcal{C}$ 里。** 若 $E = A \times B$，则 $\nu(E_x) = \chi_A(x)\cdot\nu(B)$，它是可测的（指示函数 $\times$ 常数），且

$$\int \nu(E_x) d\mu(x) = \nu(B)\cdot\mu(A) = \mu \times \nu(A \times B)$$

> 续见 proofs/imp.product-sections.2.md
