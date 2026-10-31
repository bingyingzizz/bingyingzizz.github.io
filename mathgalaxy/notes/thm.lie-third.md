# Lie 第三定理　`thm.lie-third`　·　说明
根 `../`

**为什么这里不证**：标准证明要经过三步深结果 —— Ado 定理（每个有限维 Lie 代数有忠实的有限维表示，于是可嵌入 $\mathfrak{gl}(n,\mathbb{R})$）、Baker–Campbell–Hausdorff 公式的收敛性（在 $\mathfrak{g}$ 的某个邻域上把括号积成群的乘法）、以及把局部群「长成」单连通整体群（单连通时局部同构可以整体化）。三步各自是一章的篇幅，本图不承担 —— 这与 `thm.solid-abelian` 等深定理的处理口径一致：**只陈述，如实声明**。

**三个 Lie 定理的分工**（常被混说，这里分开）：第一定理说 $\mathfrak{g} = T_{e}G$ 且左不变向量场与 $\mathfrak{g}$ 同构（`prop.left-invariant-fields`）；第二定理说 $G$ 连通单连通时 $\operatorname{Hom}(G,H) \cong \operatorname{Hom}(\mathfrak{g},\mathfrak{h})$（群同态与 Lie 代数同态一一对应）；第三定理就是本条，管**存在性**。

> 续见 notes/thm.lie-third.2.md
