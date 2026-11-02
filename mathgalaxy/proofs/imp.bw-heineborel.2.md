# Bolzano–Weierstrass + 紧的三个等价刻画 $\implies$ Heine–Borel
`imp.bw-heineborel` · 推出 · strong 边 · 根 `../`

`thm.bolzano-weierstrass` Bolzano–Weierstrass 定理 + `thm.metric-compact-equiv` 紧的三个等价刻画 → `cor.heine-borel` 有界闭 ⟺ 紧（ℝⁿ）

**($\implies$)** 设 $K$ 紧。紧集在度量空间里总是闭的（见「紧子集是闭的」）。若有界性不成立，则对每个 $k$ 可取 $x_k \in K \setminus B(0, k)$，这样的数列没有任何收敛子列（$|x_k| \to \infty$），与列紧矛盾。故 $K$ 有界。∎

> 两条前提缺一不可：$\mathbb{R}^{n}$ 的**完备性**（Bolzano–Weierstrass）给出「有界 $\implies$ 有子列收敛」，度量空间的**一般事实**给出「紧 $\iff$ 列紧」与「紧 $\implies$ 闭」。
