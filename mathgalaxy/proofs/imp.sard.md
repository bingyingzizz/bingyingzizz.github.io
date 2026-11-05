# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

⚠ **这是提纲，不是完整证明** —— 完整证明相当重，节点说明里已声明。以下只把骨架摆清楚，每一步都能在标准参考书中找到细节。

**情形 $m = 1$：直接估，不用 Fubini。** 先设 $U$ 有界（一般 $U$ 是可数并，逐块做）。取 $C := \sup_{U}\lVert D^{2}f\rVert$（**逐块**取：每块用它自己的 $\sup$），对 $x, x+h \in U$ 有带 Lagrange 余项的一阶 Taylor：

$$f(x + h) = f(x) + Df(x)h + R(x, h), \qquad |R(x,h)| \le C\|h\|^{2}$$

> 续见 proofs/imp.sard.2.md
