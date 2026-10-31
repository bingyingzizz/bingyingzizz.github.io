# Lebesgue 微分定理给出平均算子 $A_{r}$ 的极限
`imp.derived-average-limit` · 推出 · strong 边 · 根 `../`

`thm.lebesgue-differentiation` Lebesgue 微分定理 → `def.average-operator` 平均算子 Aᵣ

平均算子定义为

$$A_{r}f(x) := \frac{1}{m\bigl(B(r,x)\bigr)}\int_{B(r,x)} f\,\mathrm{d}m,$$

即 $f$ 在球上的平均值。Lebesgue 微分定理说：对 $f \in L^{1}_{\mathrm{loc}}$，

$$\lim_{r\to 0} A_{r}f(x) = f(x) \qquad \text{a.e.}$$

把定义代进去，这正是「$r \to 0$ 时 $A_{r}f$ 回到 $f$」—— 于是 $\{A_{r}\}_{r>0}$ 是一族在 $r\to 0$ 时收敛到恒等算子的平均算子。

**极限只能是 a.e. 的。** 取 $f = \chi_{\mathbb{Q}}$：$f = 0$ a.e.，故 $A_{r}f(x) \to 0$ a.e.；但 $f(0) = 1$，而 $A_{r}f(0) = 0$ 对每个 $r$ 成立，逐点收敛在 $0$ 处就失败了。所以「$A_{r}f \to f$ 处处」是错的，「a.e.」不能换成「处处」。$\blacksquare$

> 定义本身只写了「怎么平均」，没有写「平均收敛到谁」；后一半是定理的内容，而它恰好就是 Lebesgue 微分定理。
