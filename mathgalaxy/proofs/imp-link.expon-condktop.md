# 紧生成空间的指数律 $\implies$ 底空间保有限积
`imp-link.expon-condktop` · 推出 · strong 边 · 根 `../`

`prop.cg-cartesian-closed` 紧生成空间是笛卡尔闭的 + `prop.cond-internal-hom` 内部 Hom 的函数空间刻画 → `cor.cond-ktop-finite-products` 底空间保有限积

设 $X, Y \in \mathrm{Cond}$，$Z$ 是任意**紧生成**空间。逐步用三条同构：
1. $\mathbf{Top}$ 里的指数律（紧生成空间是笛卡尔闭的）：
$$C\bigl(k(X(\cdot) \times Y(\cdot)),\ Z\bigr) \;\cong\; C\bigl(X(\cdot),\ kC(Y(\cdot), Z)\bigr) ✓$$
2. 内部 Hom 的函数空间刻画（$Z$ 紧生成时 $\operatorname{Hom}(X, \underline{Z}) \cong C(X(\cdot), Z)$），两次：
$$\cong \operatorname{Hom}\bigl(X,\ \operatorname{Hom}(Y, \underline{Z})\bigr) \;\cong\; \operatorname{Hom}\bigl(X \times Y,\ \underline{Z}\bigr) ✓$$
3. 再用一次内部 Hom 刻画，并用 $\operatorname{Hom}(X \times Y, \underline{Z}) = (X \times Y)(\cdot)$ 的取值定义：
$$\cong C\bigl((X \times Y)(\cdot),\ Z\bigr) ✓$

> 续见 proofs/imp-link.expon-condktop.2.md
