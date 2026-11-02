# 逆算子定理 $\implies$ 闭图像定理
`imp.fa-closed-graph` · 推出 · strong 边 · 根 `../`

`thm.bounded-inverse` 逆算子定理 → `thm.closed-graph` 闭图像定理

$G(u) \subseteq E \times F$ 是闭子空间，$E \times F$ 按 $\|(x,y)\| = \|x\| + \|y\|$ 是 Banach，故 $G(u)$ 是 Banach 空间。
两个投影 $\pi_1(x, u(x)) = x$、$\pi_2(x, u(x)) = u(x)$ 都有界。$\pi_1$ 是双射（满射显然；单射：$\pi_1(x, u(x)) = 0 \implies x = 0$），故由逆算子定理 $\pi_1^{-1} : E \to G(u)$ 有界。于是 $u = \pi_2 \circ \pi_1^{-1}$ 有界，$\|u\| \le \|\pi_2\|\,\|\pi_1^{-1}\|$。$\blacksquare$

> 思路极干净：把「$u$ 的图像」当成空间，把「$u$ 有界」化成「$G(u)$ 上的投影有界」。
