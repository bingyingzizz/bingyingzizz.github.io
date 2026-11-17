# imp.pid-fg-module-structure
`imp.pid-fg-module-structure` · 推出 · strong 边 · 根 `../`

`def.module` 模 + `def.pid` 主理想整环 + `thm.smith-normal-form` Smith 标准形 → `thm.pid-fg-module-structure` PID 上有限生成模的结构

设 $x_1,\ldots,x_n$ 生成 $M$，取满射 $\varphi:R^n\to M$、$e_i\mapsto x_i$。核 $K=\ker\varphi$ 是 $R^n$ 的子模。

先证 $K$ 有限生成且自由（PID 上自由模的子模自由）：对 $n$ 归纳。$n=0$ 显然。$n\ge1$ 时令 $\pi:R^n\to R$ 为最后一个坐标，$\pi(K)$ 是 $R$ 的理想，故 $\pi(K)=(a)$。若 $a=0$，则 $K\subseteq R^{n-1}$，由归纳 $K$ 自由。若 $a\ne0$，取 $k_0\in K$ 使 $\pi(k_0)=a$；对任意 $k\in K$ 有 $\pi(k)=ra$，故 $k-rk_0\in K\cap R^{n-1}$。于是 $K=Rk_0\oplus(K\cap R^{n-1})$，由归纳 $K$ 自由。

> 续见 proofs/imp.pid-fg-module-structure.2.md
