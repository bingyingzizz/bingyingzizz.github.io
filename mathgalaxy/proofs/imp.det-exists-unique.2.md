# 多重线性 + 交错 $\implies$ 行列式的存在唯一性
`imp.det-exists-unique` · 推出 · strong 边 · 根 `../`

`def.multilinear-form` 多重线性型 + `def.alternating-form` 交错型 → `thm.det-exists-unique` 行列式的存在唯一性

再由交错性 $D(e_{\sigma(1)}, \ldots, e_{\sigma(n)}) = \operatorname{sgn}(\sigma)\, D(e_1, \ldots, e_n) = \operatorname{sgn}(\sigma)$。

于是

$$D(v_1, \ldots, v_n) = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma)\ a_{\sigma(1), 1} \cdots a_{\sigma(n), n}$$

右端只依赖 $a_{ij}$，故 $D$ 唯一。

> 续见 proofs/imp.det-exists-unique.3.md
