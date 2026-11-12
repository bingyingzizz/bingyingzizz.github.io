# 有限维：任意两个范数等价
`imp.norm-equiv-finite-dim-proof` · 推出 · strong 边 · 根 `../`

`def.norm` 范数 + `def.norm-equivalence` 等价范数 + `def.compact` 紧 + `cor.heine-borel` 有界闭 ⟺ 紧（ℝⁿ） → `thm.norm-equiv-finite-dim` 有限维范数等价

固定一组基 $e_1,\ldots,e_n$，写 $x=\sum x_k e_k$，令 $\lVert x\rVert_\infty=\max_k|x_k|$。

上界：
$$\lVert x\rVert\le\sum_k|x_k|\,\lVert e_k\rVert\le\Bigl(\sum_k\lVert e_k\rVert\Bigr)\lVert x\rVert_\infty=:\beta\lVert x\rVert_\infty .$$

> 续见 proofs/imp.norm-equiv-finite-dim-proof.2.md
