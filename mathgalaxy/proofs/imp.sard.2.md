# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

若 $x$ 是临界点（$Df(x) = 0$），则 $\lvert f(x+h)-f(x)\rvert \le \tfrac12 C\lVert h\rVert^{2}$，即 $f$ 把「以 $x$ 为心、半径 $\delta$ 的球里的临界点」映进长度 $\le C\delta^{2}$ 的区间。

⚠️ **不能直接「取 $\delta\to0$ 得证」**：用边长 $\delta$ 的方块盖 $U$ 有 $N\sim\delta^{-n}$ 块，加起来只给 $m\bigl(f(C)\bigr)\lesssim N\cdot C\delta^{2} = C\delta^{2-n}$ —— $n = 1$ 时才是 $O(\delta)$，$n\ge2$ 时这个上界随 $\delta\to0$ **发散**，跟要证的正好相反。

> 续见 proofs/imp.sard.3.md
