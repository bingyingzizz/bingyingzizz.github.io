# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

⚠ **这是提纲，不是完整证明** —— 完整证明相当重，节点说明里已声明。以下只把骨架摆清楚，每一步都能在标准参考书中找到细节。

**情形 $m = 1$：对 $n$ 归纳。** 把 $U$ 用可数多个边长 $\delta$ 的闭方块盖住，在每个方块上对 $f$ 用带 Lagrange 余项的一阶 Taylor：

$$f(x + h) = f(x) + Df(x)h + R(x, h), \qquad |R(x,h)| \le C\|h\|^{2}$$

> 续见 proofs/imp.sard.2.md
