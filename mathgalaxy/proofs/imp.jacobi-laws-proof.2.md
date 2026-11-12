# Jacobi 符号的三条运算法则
`imp.jacobi-laws-proof` · 推出 · strong 边 · 根 `../`

`def.jacobi-symbol` Jacobi 符号 + `def.legendre-symbol` Legendre 符号 + `thm.quadratic-reciprocity` 二次互反律 → `thm.jacobi-laws` Jacobi 符号的计算法则

(3) 设 $\gcd(m,n)=1$，$m=\prod p_i^{a_i}$、$n=\prod q_j^{b_j}$。由 (2) 与 Legendre 互反律，
$$\Bigl(\frac{m}{n}\Bigr)=\prod_{i,j}\Bigl(\frac{p_i}{q_j}\Bigr)^{a_ib_j}=\prod_{i,j}\Bigl((-1)^{\frac{p_i-1}{2}\frac{q_j-1}{2}}\Bigl(\frac{q_j}{p_i}\Bigr)\Bigr)^{a_ib_j}=(-1)^{\frac{m-1}{2}\frac{n-1}{2}}\Bigl(\frac{n}{m}\Bigr).$$
其中用了 $\sum_{i,j}a_ib_j\frac{p_i-1}{2}\frac{q_j-1}{2}=\frac{m-1}{2}\frac{n-1}{2}$；这来自对每个奇素数幂 $p^{a}$ 有 $\frac{p^{a}-1}{2}\equiv a\frac{p-1}{2}\pmod2$，再对 $m,n$ 的因子求和。

> 续见 proofs/imp.jacobi-laws-proof.3.md
