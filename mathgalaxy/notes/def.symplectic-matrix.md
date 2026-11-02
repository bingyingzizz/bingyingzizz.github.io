# 辛矩阵与辛群　`def.symplectic-matrix`　·　说明
根 `../`

**为什么行列式必为 $1$**：取行列式得 $(\det A)^{2}\det J_{0} = \det J_{0}$，所以 $\det A = \pm 1$。要排除 $-1$：用 Pfaffian（$\operatorname{Pf}$）或「$\mathrm{Sp}(2n)$ 连通」—— 本图只记结论，证明属 Lie 群论。

⭐ **三类经典群的分工**：$O(n)$ 保持对称正定型（内积）、$U(n)$ 保持 Hermite 型、$\mathrm{Sp}(2n)$ 保持非退化交错型（辛形式）。它们是**同一个判据**（保持某个型不变）在三个不同型上的结果 —— 这条对照本身就是 `def.orthogonally-similar` 那个「填上那一格」的辛版本。

⚠️ **$\mathrm{Sp}(2n)$ 与紧群不同**：$O(n)$、$U(n)$ 都是紧群，而 $\mathrm{Sp}(2n,\mathbb{R})$ 非紧（它含有 $\begin{pmatrix} P & 0 \\ 0 & (P^{T})^{-1}\end{pmatrix}$ 这样任意拉伸的元）—— 这与「辛几何没有局部不变量（`thm.symplectic-normal-form`）」是同一件事的两面。

⚠️ 命名撞车：物理文献里「辛矩阵」有时指 $\mathrm{Sp}(2)$（单模矩阵），那是**模形式**的对象，不是这里的 $2n$ 维辛群。
