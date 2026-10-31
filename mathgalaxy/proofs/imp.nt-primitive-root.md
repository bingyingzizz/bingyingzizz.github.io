# 模素数有原根：$\psi(d) \le \varphi(d)$ 且总和相等
`imp.nt-primitive-root` · 推出 · strong 边 · 根 `../`

`thm.order-divides-phi` 阶整除 Euler 函数 → `thm.primitive-root-exists` 模素数有原根

设 $p$ 素，$G = \mathbb{F}_{p}^{\times}$，$|G| = p-1$。对每个 $d \mid p-1$，记 $\psi(d) := \#\{g \in G : \operatorname{ord}(g) = d\}$。

**① 分段互斥**：每个 $g$ 的阶由 `thm.order-divides-phi` 必整除 $p-1$，故 $\sum_{d \mid p-1}\psi(d) = p-1$。

**② 另一侧**：$\sum_{d \mid p-1}\varphi(d) = p-1$（经典恒等式，由「按 $\gcd(k, p-1)$ 分类」可得）。

**③ $\psi(d) \le \varphi(d)$**：若 $\psi(d) = 0$ 显然。否则取阶为 $d$ 的 $g$，则 $g^{t}$（$1 \le t \le d$）全部互异，其中阶恰为 $d$ 的恰是 $\gcd(t, d) = 1$ 的那些，共 $\varphi(d)$ 个 —— 所以阶为 $d$ 的元素不超过 $\varphi(d)$ 个。

> 续见 proofs/imp.nt-primitive-root.2.md
