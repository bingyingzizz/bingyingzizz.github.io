# Lagrange 恒等式　`thm.lagrange-identity`　·　说明
根 `../`

**Cauchy–Schwarz 是它的推论**：右边是平方和，非负 $\implies$ 左边 $\ge 0$ $\implies$ $\lvert\langle u,w\rangle\rvert \le \lVert u\rVert\lVert w\rVert$。而且等号成立 $\iff$ 右边每项为零 $\iff$ $u, w$ 成比例。所以这条恒等式比 Cauchy–Schwarz **强**：它给出了差多少。

⭐ **一般 $k$ 个向量**：Gram 行列式 $\det G$ 等于这 $k$ 个向量张成的平行体体积的平方（`def.gram-matrix` 的注）。$k=2$ 就是本条；$\det G \ge 0$ 就是「体积是实数」。

⚠️ 它不是辛的：这里的 $\langle\cdot,\cdot\rangle$ 是**内积**（对称正定），不是辛形式。名字里的「Lagrange」与 `def.lagrangian-subspace` 是同一个人的不同贡献 —— 前者是内积几何，后者是辛几何，**别把两条接成因果关系**。

⚠️ 复情形要小心：用 Hermite 内积时右边要改成模方 $\lvert u_{i}\bar{w}_{j} - u_{j}\bar{w}_{i}\rvert^{2}$，左边仍非负，结论不变。
