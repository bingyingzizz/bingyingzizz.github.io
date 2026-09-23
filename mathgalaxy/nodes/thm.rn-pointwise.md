# RN 导数的点态公式　`thm.rn-pointwise`
定理：$\nu(E_{r})/m(E_{r}) \to f(x) \text{a.e.}$，其中 $d\nu = d\lambda + f dm$
layer 26 · 定理 · 微分定理 · 分析学

设 $\nu$ 是 $\mathbb{R}^{n}$ 上的**正则**符号/复 Borel 测度，$d\nu = d\lambda + f\cdot dm$ 是它关于 Lebesgue 测度 $m$ 的 Lebesgue–Radon–Nikodym 表示。则对 **m-a.e.** 的 $x \in \mathbb{R}^n$，

$$\lim_{r\to0} \nu(E_r) / m(E_r) = f(x)$$
> 陈述续见 `nodes/thm.rn-pointwise.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.differentiation-general` 可缩族的微分定理 + `def.regular-measure` 正则 Borel 测度 + `lem.covering` 覆盖引理：微分定理 + 正则性 $\implies RN$ 导数的点态公式　proofs/imp.rn-pointwise.md
- `def.regular-measure` 正则 Borel 测度：用到了定义 正则 Borel 测度　proofs/def-link.regular-pointwise.md
- `def.rn-derivative` RN 导数与 Lebesgue 分解：用到了定义 RN 导数与 Lebesgue 分解　proofs/def-link.rn-pointwise.md

- …另有入边，续页见 `nodes/thm.rn-pointwise.3.md`

refs: Folland, Real Analysis, Theorem 3.22

> 说明见 `notes/thm.rn-pointwise.md`
