# 边界算子平方为零　`prop.boundary-squared-zero`　·　说明
根 `../`

**几何上的意思**：一条曲线段的两个端点，各自没有端点；一个方块的四条边，边角的顶点在两条边里各出现一次、符号相反，正好抵消。高维是同一件事的组合版本：每个 $(k-2)$ 维的「棱」被两个不同的面共用，两处的符号相反。
**证明（对单个方块）。** 记 $\varepsilon_{i,\alpha}$ 为「把第 $i$ 个坐标钉在 $\alpha$ 上并删去」。则 $\partial = \sum_{i,\alpha}(-1)^{i+\alpha}\varepsilon_{i,\alpha}$，其中 $i$ 是**当前元组**里的位置下标。展开两次：
$$\partial\partial c = \sum_{i,\alpha}\sum_{j,\beta}(-1)^{i+\alpha}(-1)^{j+\beta}\,\varepsilon_{j,\beta}\varepsilon_{i,\alpha}c .$$
固定的两个坐标 $(i,\alpha)$、$(\ell,\beta)$（$i \ne \ell$）在总和里出现两次：先 $i$ 后 $\ell$，以及先 $\ell$ 后 $i$。两种次序的符号指数分别是 $i+\alpha+\ell'+\beta$ 与 $\ell+\beta+i'+\alpha$，其中 $\ell' = \ell - [\ell > i]$、$i' = i - [i > \ell]$（记号 $[\ell > i]$ 在条件成立时取 $1$、否则取 $0$）。若 $\ell < i$，第二式比第

> 续见 notes/prop.boundary-squared-zero.2.md
