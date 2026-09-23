# 复测度的 Radon–Nikodym　`thm.rn-complex`
定理：复测度的 $\nu = \lambda + f d\mu$ 分解
layer 19 · 定理 · 符号测度与分解 · 分析学

设 $\nu$ 是复测度、$\mu$ 是 **$\sigma$有限**测度。则存在复测度 $\lambda$ 与 $f \in L^1(\mu)$
> 陈述续见 `nodes/thm.rn-complex.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.complex-measure` 复测度：用到了定义 复测度　proofs/def-link.complex-rn.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-complex-rn.md

refs: Folland, Real Analysis, Theorem 3.11

## 说明
复测度可以拆成实部与虚部、各自再用符号测度的版本 —— 这是把上一套结论搬到复情形的标准做法。

⚠ 这里 $f \in L^1(\mu)$ 而不再是「广义可积」：因为复测度有限，$f$ 必须真可积。
