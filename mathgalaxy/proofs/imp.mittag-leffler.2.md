# Runge 定理与 Weierstrass 分解 $\implies$ Mittag-Leffler
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 + `thm.runge` Runge 逼近定理 + `thm.weierstrass-convergence` Weierstrass 收敛性定理 → `thm.mittag-leffler` Mittag-Leffler 定理

**第一步：穷竭与分层。** 取 $K_n=\{z\in\Omega: |z|\le n,\ \operatorname{dist}(z,\partial\Omega)\ge1/n\}$（$\Omega=\mathbb{C}$ 时取 $\overline{B}(0,n)$）。则 $K_n$ 紧、$K_n\subset\operatorname{int}K_{n+1}$、$\bigcup K_n=\Omega$，且每个 $K_n$ 只含有限多个 $a_k$。令 $L_k=\min\{n: a_k\in K_n\}$、$n_k=L_k-1$（约定 $K_0=\emptyset$；$L_k=1$ 时 $n_k=0$，$a_k\notin K_0$ 自动成立），则 $a_k\notin K_{n_k}$ 且 $n_k\to\infty$。⚠️ 不能按 $|a_k|$ 排序：$\Omega=\{0<|z

> 续见 proofs/imp.mittag-leffler.3.md
