# 6-函子 + $f^!R=\omega[d]$ $\implies$ Serre 对偶
`imp.poincare-solid` · 推出 · strong 边 · 根 `../`

`thm.smooth-duality` 光滑映射的对偶复形 + `def.six-functors` 6-函子形式 → `thm.poincare-solid` 固态 Serre 对偶

**④ $f_!$ 保紧对象。** 归约到 $X = \mathbb{A}^1_R$：$f$ 局部是 $\mathbb{A}^1$ 的复合，$f_!$ 对复合也是乘性的，故只需 $\mathbb{A}^1$ 情形。在 $\mathbb{A}^1$ 上，$f_!$ 由 `def.f-shriek` 的 $j_!$ 显式给出（$\mathbb{A}^1$ 的紧化 + 补集的 $A_\infty/A$ 形式），逐项代入即可看出它把有限生成投射复形送到有限生成投射复形。一般 $R$ 上再用 Noether 归一化把 $R$ 写成 $\mathbb{Z}[X_1,\ldots,X_n]$ 的有限模，逐因子做。$\blacksquare$

**⑤ 由 ①–④ 得定理。** ① 给 $\omega$ 可逆、② 给迹映射、③ 给对偶同构、④ 给 $f_!$ 保紧；四者合起来就是 `thm.smooth-duality` 中陈述的「光滑情形的 Poincaré 对偶」。$\blacksquare$

> 续见 proofs/imp.poincare-solid.5.md
