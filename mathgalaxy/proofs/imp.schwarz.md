# 全纯 + 最大模原理 $\implies$ Schwarz 引理
`imp.schwarz` · 推出 · strong 边 · 根 `../`

`def.holomorphic` 全纯函数 + `thm.max-modulus` 最大模原理 → `lem.schwarz` Schwarz 引理

**第一步：把因子 $z$ 剥掉。** $f(0) = 0$ 且 $f$ 全纯，故 $f$ 的 Taylor 展开没有常数项，$f(z) = z\,g(z)$，其中

$$g(z) := \begin{cases} \dfrac{f(z)}{z}, & z \ne 0, \\ f'(0), & z = 0 \end{cases}$$

在 $\mathbb{D}$ 上全纯（$0$ 处是**可去**奇点，补上 $f'(0)$ 即可）。

**第二步：在圆周 $|z| = r$ 上用最大模原理。** 对 $0 < r < 1$，$|z| = r$ 时 $|g(z)| = |f(z)|/r \le 1/r$（因为 $|f| \le 1$）。最大模原理给出

$$|g(z)| \le \frac{1}{r} \qquad (|z| \le r).$$

**第三步：令 $r \to 1$。** 固定 $z \in \mathbb{D}$，取 $r > |z|$ 并令 $r \to 1$，得 $|g(z)| \le 1$，即

$$|f(z)| \le |z| \qquad (z \in \mathbb{D}), \qquad |f'(0)| = |g(0)| \le 1.$$

> 续见 proofs/imp.schwarz.2.md
