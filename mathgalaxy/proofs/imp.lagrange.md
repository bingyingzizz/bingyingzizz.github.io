# 陪集构成划分 + 平移是双射 $\implies$ Lagrange
`imp.lagrange` · 推出 · strong 边 · 根 `../`

`def.subgroup` 子群 → `thm.lagrange` Lagrange 定理

**第一步：左陪集是等价类。** 在 $G$ 上定义关系 $g_1 \sim g_2 :\iff g_1^{-1} g_2 \in H$。它自反（$g^{-1}g = e \in H$）、对称（$g_1^{-1}g_2 \in H \implies (g_1^{-1}g_2)^{-1} = g_2^{-1}g_1 \in H$）、传递（相乘仍属 $H$），故是等价关系。而

$$g_1 \sim g_2 \iff g_1^{-1} g_2 \in H \iff g_2 \in g_1 H,$$

所以等价类正是左陪集。等价类构成划分，故**左陪集两两不交且覆盖 $G$**。

**第二步：每个左陪集与 $H$ 等势。** 映射 $\varphi : H \to gH$，$h \mapsto gh$，有逆 $gh \mapsto h$（良定义：$gh_1 = gh_2 \implies h_1 = h_2$）。故 $|gH| = |H|$。

> 续见 proofs/imp.lagrange.2.md
