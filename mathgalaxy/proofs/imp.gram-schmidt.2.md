# 正交性的定义 $\implies$ Gram–Schmidt
`imp.gram-schmidt` · 推出 · strong 边 · 根 `../`

`def.orthogonality` 正交 + `def.orthogonal-projection` 正交投影 → `thm.gram-schmidt` Gram–Schmidt 正交化

1. **$\langle e_k, w_j\rangle = 0$（$k < j$）**：由 $\langle e_k, e_i\rangle = \delta_{ki}$ 逐个消掉。
2. **$w_j \ne 0$**：否则 $v_j \in \operatorname{span}(e_1, \ldots, e_{j-1}) = \operatorname{span}(v_1, \ldots, v_{j-1})$，与线性无关矛盾。
3. 于是 $e_j$ 与前面的都正交，且 $\|e_j\| = 1$。
4. **张成不变**：$v_j \in \operatorname{span}(e_1, \ldots, e_j)$ 与 $e_j \in \operatorname{span}(v_1, \ldots, v_j)$ 互相给出，故两个张成相等。∎

有限维时对整组基做一遍，就得到标准正交基。

> 第 1 步「逐个消掉」正是把 $v_j$ 减去它在每个已有方向上的分量 —— 这就是「正交化」这个词的字面意思。第 2 步用线性无关保证不会归零。
