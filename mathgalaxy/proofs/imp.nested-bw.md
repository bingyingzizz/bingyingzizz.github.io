# 闭区间套定理 $\implies$ Bolzano–Weierstrass
`imp.nested-bw` · 推出 · strong 边 · 根 `../`

`lem.nested-intervals` 闭区间套定理 → `thm.bolzano-weierstrass` Bolzano–Weierstrass 定理

设 $\{x_n\}$ 有界，取 $M > 0$ 使一切 $x_n \in [-M, M]$。二分法：令 $I_0 = [-M, M]$。

归纳地，设 $I_k$ 已作出且其中含有 $\{x_n\}$ 的无穷多项。把 $I_k$ 从中间二等分，两个半区间里至少有一个仍含无穷多项（否则 $I_k$ 里只有有限多项），取它为 $I_{k+1}$。于是

- $I_0 \supseteq I_1 \supseteq \cdots$，每个都闭，长度为 $2M / 2^{k} \to 0$。

由闭区间套定理，$\bigcap_k I_k$ 恰含一点 $x$。

> 续见 proofs/imp.nested-bw.2.md
