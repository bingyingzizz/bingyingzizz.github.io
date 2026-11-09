# Euler–Maclaurin 公式：逐区间分部积分再望远镜
`imp.euler-maclaurin` · 推出 · strong 边 · 根 `../`

`def.bernoulli-number` 伯努利数 + `prop.integration-by-parts` 分部积分 + `def.riemann-integrable` Riemann 可积 → `thm.euler-maclaurin` 欧拉–麦克劳林公式

记 $P_n(x)=B_n(\{x\})$（周期 Bernoulli 多项式），则 $P_1(x)=\{x\}-\frac12$，且对 $n\ge2$，$P_n'=nP_{n-1}$（整数点外），$P_n$ 在整数点连续。
**第一步**：在 $[k,k+1]$ 上分部积分（`prop.integration-by-parts`，$f\in C^{2m}$ 故可积），
$$\int_k^{k+1}P_1(x)f'(x)\,dx=\Bigl[P_1f\Bigr]_k^{k+1}-\int_k^{k+1}P_1'f=\frac{f(k+1)+f(k)}{2}-\int_k^{k+1}f .$$
（$P_1$ 在整数点的跳跃贡献恰为端点值。）移项得
$$f(k)=\int_k^{k+1}f(x)\,dx+\frac{f(k)-f(k+1)}{2}+\int_k^{k+1}P_1(x)f'(x)\,dx .$$
**第二步**：对 $k=a,\ldots,b-1$ 求和，左端加 $f(b)$ 后得
$$\sum_{k=a}^{b}f(k)=\int_a^bf(x)\,dx+\frac{f(a)+f(b)}{2}+\int_a^bP_1(x)f'(x)\,dx .$$
**第三步（归纳）**：设已有 

> 续见 proofs/imp.euler-maclaurin.2.md
