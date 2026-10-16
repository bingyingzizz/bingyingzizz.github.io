# Bolzano–Weierstrass + 紧的三个等价刻画 $\implies$ Heine–Borel
`imp.bw-heineborel` · 推出 · strong 边 · 根 `../`

`thm.bolzano-weierstrass` Bolzano–Weierstrass + `thm.metric-compact-equiv` 紧的三个等价刻画 → `cor.heine-borel` 有界闭 ⟺ 紧（ℝⁿ）

按「序列紧」来用「紧的三个等价刻画」：在度量空间里 $K$ 紧 $\iff K$ 列紧。

**($\Longleftarrow$)** 设 $K \subseteq \mathbb{R}^{n}$ 有界且闭。取 $K$ 中任一数列 $\{x_k\}$。它作为 $\mathbb{R}^{n}$ 中的数列有界，由 Bolzano–Weierstrass 的 $\mathbb{R}^{n}$ 版本有子列收敛到某点 $x$。$K$ 闭，故 $x \in K$。于是 $K$ 列紧，从而紧。

> 续见 proofs/imp.bw-heineborel.2.md
