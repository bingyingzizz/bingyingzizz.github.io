# Чебышёв 估计：$\binom{2n}{n}$ 的上下界
`imp.nt-chebyshev` · 推出 · strong 边 · 根 `../`

`thm.divisor-formula` τ 与 σ 的乘积公式 → `thm.chebyshev-estimate` Чебышёв 估计

**下界**（$\pi$ 不能太小）：取 $N = \binom{2n}{n}$，则 $N \ge \dfrac{4^{n}}{2n+1}$（中间项是最大项，总和 $4^{n}$ 不超过 $(2n+1)$ 倍最大项）。

另一方面 $N \le (2n)^{\pi(2n)}$：因为 $N = \frac{(2n)!}{(n!)^{2}}$ 是整数，它的每个素因子 $\le 2n$，而 $v_{p}(N) \le \frac{\log N}{\log p}$ 的粗估计可换成 $v_{p}(N) \le \frac{\log(2n)}{\log p}$（用 $\lfloor 2x\rfloor - 2\lfloor x\rfloor \in \{0,1\}$ 逐项累加与 $p^{k} \le 2n$ 截断）。

两式合并：$\dfrac{4^{n}}{2n+1} \le (2n)^{\pi(2n)}$，取对数得 $\pi(2n) \ge \dfrac{2n\log 2 - \log(2n+1)}{\log(2n)} \ge c\,\dfrac{n}{\log n}$。

> 续见 proofs/imp.nt-chebyshev.2.md
