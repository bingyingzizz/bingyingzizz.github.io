# 伽罗瓦基本定理　`thm.galois-correspondence`　·　说明
根 `../`

**引理 3（Artin 定理）**：设 $G$ 是 $K$ 的有限自同构群、$n=|G|$、$F=K^{G}$。则 $[K:F]=n$。证明分两步。先证 $[K:F]\le n$：反设 $m=[K:F]>n$，取 $F$-线性无关的 $x_{1},\ldots,x_{n+1}\in K$。方程组 $\sum_{j=1}^{n+1}\sigma_{i}(x_{j})c_{j}=0$（$i=1,\ldots,n$）是 $n$ 个方程、$n+1$ 个未知量，有非零解 $c\in K^{n+1}$。在所有非零解中取非零分量个数 $r$ 最小者。$r\ge 2$：若只有 $c_{j}\ne 0$，由 $\sigma_{1}=\operatorname{id}$ 的方程得 $c_{j}x_{j}=0$，与 $x_{j}\ne 0$ 矛盾。重排并伸缩，使 $c_{r}=1$（于是 $c_{r}\in F$）；若此时所有分量都落在 $F$，则由 $\sigma_{1}=\operatorname{id}$ 的方程 $\sum c_{j}x_{j}=0$ 与 $x_{j}$ 的 $F$-线性无关得所有 $c_{j}=0$，与非零解矛盾。故有某个分量 $\notin F$，它必不是第 $r$ 个；重排前 $r-1$ 个分量使 $c_{1}\notin F$。取 $\tau\in G$ 使 $\tau(c_{1})\ne c_{1}$。把方程组逐项作用 $\tau$，并由 $\{\tau\sigma_{i}\}=\{\sigma_{i}\}$ 重排，知 $\bigl(\tau(c_{j})\bigr)$ 也是解；相减得解 $d_{j}=c_{j}-\ta

> 续见 notes/thm.galois-correspondence.4.md
