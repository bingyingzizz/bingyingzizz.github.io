# 标准单纯形　`def.standard-simplex`　·　续页（第 2 页）
[在星图里打开](../#n=def.standard-simplex)　·　第 1 页 [nodes/def.standard-simplex.md](./def.standard-simplex.md)

## 陈述（续）
它的 $p + 1$ 个**顶点**是 $v_{i} := (0, \ldots, 1, \ldots, 0)$（第 $i$ 位为 $1$）。$\Delta^{p}$ 是这些顶点的凸包，是 $\mathbb{R}^{p+1}$ 里的紧凸集。
对 $i = 0, 1, \ldots, p$，**面映射** $d_{i} : \Delta^{p-1} \to \Delta^{p}$ 在第 $i$ 位插一个 $0$：
$$d_{i}(t_{0}, \ldots, t_{p-1}) := (t_{0}, \ldots, t_{i-1}, 0, t_{i}, \ldots, t_{p-1}).$$
它的像是「跳过第 $i$ 个顶点」的那个 $(p-1)$-面；这些像的并就是**边界** $\partial\Delta^{p}$。
（$p = 0$ 时 $\Delta^{0}$ 是单点，$d_{0}$ 把它放进 $\Delta^{1}$ 的一个端点。）

> 续见 [nodes/def.standard-simplex.3.md](./def.standard-simplex.3.md)
