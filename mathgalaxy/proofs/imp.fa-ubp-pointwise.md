# 共鸣定理 $\implies$ 逐点极限的范数界
`imp.fa-ubp-pointwise` · 推出 · strong 边 · 根 `../`

`thm.ubp` 共鸣定理 → `cor.ubp-pointwise-limit` 逐点极限的范数界

设 $u_n \in B(E, F)$ 逐点收敛到 $u$。对每个 $x$，收敛数列 $(u_n x)$ 有界，故 $\sup_n \|u_n x\| < \infty$。
由共鸣定理，$C := \sup_n \|u_n\| < \infty$。于是 $\|u x\| = \lim_n \|u_n x\| \le C \|x\|$，且更精确地 $\|u\| \le \liminf_n \|u_n\|$：因为对每个 $\varepsilon > 0$，当 $n$ 充分大时 $\|u_n\| \ge \liminf_k \|u_k\| - \varepsilon$，取极限即得。$\blacksquare$

> 这条把 UBP 的「一致有界」直接翻译成「逐点极限算子的范数不超过原算子列范数的下极限」。
