# Jacobi 符号的三条运算法则
`imp.jacobi-laws-proof` · 推出 · strong 边 · 根 `../`

`def.jacobi-symbol` Jacobi 符号 + `def.legendre-symbol` Legendre 符号 + `thm.quadratic-reciprocity` 二次互反律 → `thm.jacobi-laws` Jacobi 符号的计算法则

记 $(a/\cdot)$ 为 Jacobi 符号，$m,n$ 正奇数。

(1) 与 (2) 由定义直接展开：若 $n=\prod q_i^{e_i}$，则
$$\Bigl(\frac{ab}{n}\Bigr)=\prod_i\Bigl(\frac{ab}{q_i}\Bigr)^{e_i}=\prod_i\Bigl(\frac{a}{q_i}\Bigr)^{e_i}\prod_i\Bigl(\frac{b}{q_i}\Bigr)^{e_i}=\Bigl(\frac{a}{n}\Bigr)\Bigl(\frac{b}{n}\Bigr);$$
同理 $(a/mn)=\prod_q(a/q)^{v_q(m)+v_q(n)}=(a/m)(a/n)$。

> 续见 proofs/imp.jacobi-laws-proof.2.md
