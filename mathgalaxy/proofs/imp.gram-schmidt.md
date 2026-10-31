# 正交性的定义 $\implies$ Gram–Schmidt
`imp.gram-schmidt` · 推出 · strong 边 · 根 `../`

`def.orthogonality` 正交 + `def.orthogonal-projection` 正交投影 → `thm.gram-schmidt` Gram–Schmidt 正交化

对 $j$ 归纳。$j = 1$ 时取 $e_1 := v_1 / \|v_1\|$（$v_1 \ne 0$，因为线性无关）。

归纳步：设已作出标准正交组 $e_1, \ldots, e_{j-1}$，且它们张成 $\operatorname{span}(v_1, \ldots, v_{j-1})$。令

$$w_j := v_j - \sum_{i=1}^{j-1} \langle e_i, v_j \rangle\, e_i, \qquad e_j := \frac{w_j}{\|w_j\|}$$

> 续见 proofs/imp.gram-schmidt.2.md
