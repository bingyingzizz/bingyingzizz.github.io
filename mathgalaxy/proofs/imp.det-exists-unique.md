# 多重线性 + 交错 $\implies$ 行列式的存在唯一性
`imp.det-exists-unique` · 推出 · strong 边 · 根 `../`

`def.multilinear-form` 多重线性型 + `def.alternating-form` 交错型 → `thm.det-exists-unique` 行列式的存在唯一性

记 $D(e_1, \ldots, e_n) = 1$ 决定了规范的零点。

**唯一性。** 设 $D$ 满足三条。把每个 $v_j = \sum_i a_{ij} e_i$ 代入，由多重线性展开成 $n^{n}$ 项之和，每一项是 $a_{i_1 1} \cdots a_{i_n n} D(e_{i_1}, \ldots, e_{i_n})$。由交错性，只有 $i_1, \ldots, i_n$ **互不相同**的那些项非零 —— 也就是说，只有置换 $\sigma \in S_n$ 对应的项（取 $i_j = \sigma(j)$）存活。再由交错性 $D(e_{\sigma(1)}, \ldots, e_{\sigma(n)}) = \operatorname{sgn}(\sigma)\, D(e_1, \ldots, e_n) = \operatorname{sgn}(\sigma)$。于是

> 续见 proofs/imp.det-exists-unique.2.md
