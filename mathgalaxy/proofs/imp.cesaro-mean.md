# Cesàro 平均的极限：由 $a_n\to L$ 推出平均 $\to L$
`imp.cesaro-mean` · 推出 · strong 边 · 根 `../`

`def.sequence-limit` 数列极限 → `thm.cesaro-mean-limit` Cesàro 平均收敛

设 $a_n\to L$，$b_n=\frac1n\sum_{k=1}^{n}a_k$。给定 $\varepsilon>0$，取 $N$ 使 $k>N$ 时 $|a_k-L|<\varepsilon$。于是对 $n>N$，
$$|b_n-L|\le\frac1n\sum_{k=1}^{N}|a_k-L|+\frac{n-N}{n}\varepsilon .$$
第一项当 $n\to\infty$ 时趋于 $0$（分子固定），故 $\limsup|b_n-L|\le\varepsilon$。令 $\varepsilon\to0$，得 $b_n\to L$。$\blacksquare$
**逆命题不真**：$a_n=(-1)^n$ 的平均趋于 $0$，但 $a_n$ 本身不收敛。
📌 与 Stolz–Cesàro 的关系：取 $y_n=n$、$x_n=\sum_{k=1}^{n}a_k$，Stolz 的差商 $\Delta x_n/\Delta y_n=a_{n+1}$，得到的正是本条；Stolz 是它的推广。
