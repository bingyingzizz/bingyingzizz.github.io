# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

若 $x$ 是临界点（$Df(x) = 0$），则 $f$ 在该方块上的像被压进「以 $f(x)$ 为心、半径 $C\delta^{2}$ 的区间」；把它再按 $x_1$ 切片，对每个切片用 $(n-1)$ 维的归纳假设（$f$ 在切片上的临界点集零测），再用 Fubini 把零测性从切片拼回整体。取 $\delta \to 0$ 得证。

**一般 $m$：Whitney 分解。** 令 $S_i := \{ x : \operatorname{rank} Df(x) = i \}$（$i = 0, 1, \ldots, m-1$），临界点集是 $\bigcup_i S_i$。要证每个 $f(S_i)$ 零测。对 $i$ 从大到小归纳（外层对 $m$ 归纳）：

> 续见 proofs/imp.sard.3.md
