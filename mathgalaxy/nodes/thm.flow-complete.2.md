# 流完备性　`thm.flow-complete`　·　续页（第 2 页）
[在星图里打开](../#n=thm.flow-complete)　·　第 1 页 [nodes/thm.flow-complete.md](./thm.flow-complete.md)

## 陈述（续）
设 $X \in \mathfrak{X}(M)$，$\varphi : \mathcal{W} \to M$ 是它的极大流（`def.flow`），$J_{q} = (a_{q},b_{q})$ 是过 $q$ 的极大积分曲线的存在区间。则：
1. **区间是开的**：$J_{q}$ 是开区间（$a_{q} \in [-\infty,+\infty)$、$b_{q} \in (-\infty,+\infty]$）；
2. **逃逸引理**：若 $b_{q} < +\infty$，则 $t \to b_{q}^{-}$ 时曲线离开每个紧集 
—— 即对任意紧集 $K \subseteq M$ 与任意 $t_{1} < b_{q}$，存在 $t_{2} \in (t_{1},b_{q})$ 使 $\varphi_{t_{2}}(q) \notin K$（$t \to a_{q}^{+}$ 一端同理）；
3. **完备判据**：$X$ 完备（$\
mathcal{W} = \mathbb{R}\times M$）当且仅当对每点 $q$ 有 $a_{q} = -\infty$ 且 $b_{q} = +\infty$。
**推论**：$M$ 紧时**每个** $X \in \mathfrak{X}(M)$ 都完备；$M$ 非紧时可以不完备（$M = (0,1)$、$X = \partial_{x}$；$M = \mathbb{R}$、$X = x^{2}\partial_{x}$）。

> 续见 [nodes/thm.flow-complete.3.md](./thm.flow-complete.3.md)
