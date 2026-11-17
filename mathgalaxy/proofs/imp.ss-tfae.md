# imp.ss-tfae
`imp.ss-tfae` · 推出 · strong 边 · 根 `../`

`def.semisimple-representation` 半单表示 + `def.subrepresentation` 子表示 + `def.direct-sum-representation` 表示的直和 + `def.irreducible-representation` 不可约表示 + `def.quotient-representation` 商表示 → `thm.semisimple-characterizations` 半单表示的等价刻画

(1)$\implies$(2)：半单表示按定义是不可约表示的直和，特别地是不可约子表示之和。
(2)$\implies$(1)：设 $V=\sum_{i\in I}V_i$，$V_i$ 不可约。取极大子集 $J$ 使 $\sum_{j\in J}V_j$ 为直和（有限维保证直和项数不超过 $\dim V$，故极大者存在）。若 $i\notin J$，则 $V_i\cap\bigoplus_{j\in J}V_j$ 是 $V_i$ 的子表示，故为 $0$ 或 $V_i$；由 $J$ 极大它不能为 $0$，故 $V_i\subseteq\bigoplus_{j\in J}V_j$。于是 $V=\bigoplus_{j\in J}V_j$。
(1)$\implies$(3)：设 $W\subseteq V$ 是子表示，$V=\bigoplus_i V_i$ 不可约。取极大子集 $K$ 使 $W+\sum_{k\in K}V_k$ 为直和。若 $i\notin K$，则 $V_i\cap(W\oplus\bigoplus_{k\in K}V_k)$ 是 $V_i$ 的子表示，

> 续见 proofs/imp.ss-tfae.2.md
