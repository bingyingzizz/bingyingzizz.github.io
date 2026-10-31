# imp.egregium-frame
`imp.egregium-frame` · 推出 · strong 边 · 根 `../`

`def.gauss-curvature` Gauss 曲率 + `def.curvature-tensor` Riemann 曲率张量 + `prop.christoffel-frame` 标架下的联络系数 → `thm.theorema-egregium` 绝妙定理

**思路：$K$ 的两条表达式，一条只含 $I$，一条是 $\det(h_{ij})$，两边必相等。**
**① 联络形式由 $I$ 唯一确定。** 取局部单位正交余标架 $\omega^{1},\omega^{2}$（由 $I$ 定出，$g = (\omega^{1})^{2}+(\omega^{2})^{2}$）。第一结构方程要求 $\mathrm{d}\omega^{1} = \omega^{2}\wedge\omega^{1}_{2}$、$\mathrm{d}\omega^{2} = \omega^{1}\wedge\omega^{2}_{1}$，加上 $\omega^{1}_{2} = -\omega^{2}_{1}$。写 $\omega^{1}_{2} = a\,\omega^{1}+b\,\omega^{2}$：第一式定出 $a$，第二式定出 $b$（两式分别给出 $a$ 与 $b$ 的一个方程）。所以 $\omega^{1}_{2}$ 完全由 $\mathrm{d}\omega^{1},\mathrm{d}\omega^{2}$ 决定，也就是完全由 $I$ 决定 —— 这正是 Levi-Civita 联络的唯一性。
**② $\mathrm{d}\omega^{1}_{2}$ 是内蕴可算的。** 由上一步，$\mat

> 续见 proofs/imp.egregium-frame.2.md
