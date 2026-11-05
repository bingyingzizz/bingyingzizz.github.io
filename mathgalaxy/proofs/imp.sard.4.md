# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

**一般 $m$：Whitney 分解。** 令 $S_i := \{ x : \operatorname{rank} Df(x) = i \}$（$i = 0, 1, \ldots, m-1$；秩为 $m$ 的点不是临界点），临界集是 $\bigcup_{i<m} S_i$。要证每个 $f(S_i)$ 零测。外层对 $m$ 归纳、内层对 $n$ 归纳，而 **$i$ 要从小到大扫**（处理 $S_i$ 时要用到 $j<i$ 的 $S_j$ 已被剥掉；方向写反就循环了）：

> 续见 proofs/imp.sard.5.md
