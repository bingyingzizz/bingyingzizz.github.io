# 有限维：任意两个范数等价
`imp.norm-equiv-finite-dim-proof` · 推出 · strong 边 · 根 `../`

`def.norm` 范数 + `def.norm-equivalence` 等价范数 + `def.compact` 紧 + `cor.heine-borel` 有界闭 ⟺ 紧（ℝⁿ） → `thm.norm-equiv-finite-dim` 有限维范数等价

下界：单位球面 $S=\{x:\lVert x\rVert_\infty=1\}$ 是 $K^{n}$ 中的有界闭集；把 $K^{n}$ 看成 $\mathbb{R}^{n}$（$K=\mathbb{R}$）或 $\mathbb{R}^{2n}$（$K=\mathbb{C}$），由 Heine–Borel 它紧。范数 $\lVert\cdot\rVert$ 连续（由上面的上界，$|\lVert x\rVert-\lVert y\rVert|\le\beta\lVert x-y\rVert_\infty$），且在 $S$ 上处处 $>0$，故 $\alpha:=\min_{S}\lVert x\rVert>0$。对 $x\ne0$，$x/\lVert x\rVert_\infty\in S$，于是
$$\lVert x\rVert=\lVert x\rVert_\infty\Bigl\lVert\frac{x}{\lVert x\rVert_\infty}\Bigr\rVert\ge\alpha\lVert x\rVert_\infty ;$$
$x=0$ 时平凡。

> 续见 proofs/imp.norm-equiv-finite-dim-proof.3.md
