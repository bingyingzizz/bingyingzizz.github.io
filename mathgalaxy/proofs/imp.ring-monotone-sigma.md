# 环 + 单调类 $\implies$ σ-环
`imp.ring-monotone-sigma` · 推出 · strong 边 · 根 `../`

`def.set-ring` 环与代数 + `def.monotone-class` 单调类 → `thm.ring-monotone-sigma` 环 → σ-环 的判据

设 $\mathfrak{A}$ 是环，且是单调类。要证它对**可数并**封闭。

**① 先换成不交并。** 给定 $A_{1}, A_{2}$ … $\in \mathfrak{A}$，令

$$B_n = A_n \setminus (A_1 \cup \cdots \cup A_{n-1})$$

因为 $\mathfrak{A}$ 是环（对有限并、对差封闭），每个 $B_{n} \in \mathfrak{A}$；而且 $B_{n}$ 两两不交，并且 $\bigcup B_{n} = \bigcup A_{n}$。所以只需证 $\mathfrak{A}$ 对**可数不交并**封闭。

**② 用单调性。** 若 $B_{n}$ 两两不交，则部分并 $C_n = B_1 \cup \cdots \cup B_n$ 是递增列，且 $C_{n} \in \mathfrak{A}$（环对有限并封闭）。由 $\mathfrak{A}$ 是单调类，

$$\bigcup_n C_n = \bigcup_n B_n = \bigcup_n A_n \in \mathfrak{A}$$

> 续见 proofs/imp.ring-monotone-sigma.2.md
