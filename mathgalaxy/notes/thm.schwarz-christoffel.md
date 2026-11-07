# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

⚠️ **本节点仍标 skeleton**：下面只完整证明了「**形式**」这一半（若共形映射存在，则它必有这个形状）；「**存在性**」那一半（这个积分确实单叶地映满多边形）本图不写，缺的三步在末尾点明。

**记号**：外角和给出 $\sum_{k=1}^{n}(1 - \alpha_{k}) = 2$，等价于

$$\sum_{k=1}^{n} (\alpha_{k} - 1) = -2.$$

这个 $-2$ 正是 $g(\zeta) = O(\zeta^{-2})$ 的来源，也是积分在无穷远收敛的原因。

**第一部分：形式唯一性（完整证明）**

命题：设 $f : \mathbb{H} \to P$ 是把上半平面共形映成多边形内部的映射，$f$ 连续到边界、把 $x_{k}$ 送到第 $k$ 个顶点，则存在 $A \ne 0$、$B$，使 $f'(z) = A\,g(z)$。

证明分五小步。

（1）**规范化**：把 $\infty \in \partial\mathbb{H}$ 选在不是任何顶点原像的位置（圆 $\partial\mathbb{H}$ 上除去有限个顶点原像后仍有点，用 $\operatorname{Aut}(\mathbb{H})$ 把它送到 $\infty$）。于是 $\infty$ 对应的是多边形某条边的内部，而不是顶点。

> 续见 notes/thm.schwarz-christoffel.2.md
