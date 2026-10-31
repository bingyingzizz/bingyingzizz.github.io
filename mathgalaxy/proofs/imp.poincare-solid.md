# 6-函子 + $f^!R=\omega[d]$ $\implies$ Serre 对偶
`imp.poincare-solid` · 推出 · strong 边 · 根 `../`

`thm.smooth-duality` 光滑映射的对偶复形 + `def.six-functors` 6-函子形式 → `thm.poincare-solid` 固态 Serre 对偶

设 $f : X \to \operatorname{Spec} R$ 是相对维数 $d$ 的光滑映射，$\omega := f^! R$。

**① $f^! R$ 是可逆复形。** 先设 $X = \mathbb{A}^1_R$。此时 $\Omega^1_{X/R} \cong \mathcal{O}_X$，由 `thm.smooth-duality` 的 Koszul 计算，$f^! R \cong \mathcal{O}_X[d]$，即在局部化后同构于 $\mathcal{O}_X$ 平移 $d$；一般光滑 $f$ 局部上分解为 $d$ 个 $\mathbb{A}^1$ 的复合，$f^!$ 对复合是乘性的，故
$$\omega = f^! R \cong \det\big(\Omega^1_{X/R}\big)^{\vee}[-d]$$
（可逆层，集中在一个度上）。这正是 Thm 11.6 的内容。

> 续见 proofs/imp.poincare-solid.2.md
