# L¹ 函数的支撑 σ-有限　`prop.L1-support-sigma-finite`
命题：$f \in L^{1} \implies \{f \ne 0\}$ 是 σ-有限的
layer 19 · 命题 · 积分 · 分析学

若 $f \in L^1(\mu)$，则

$$\{x : f(x) \ne 0\}$$

是 $\sigma$有限的。

## 为什么成立（入边，证明在 proofs/）
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-L1-support.md
- `def.measure-space` 有限 / σ-有限 / 半有限：用到了定义 有限 / σ-有限 / 半有限　proofs/def-link.measure-space-L1-support.md

refs: Folland, Real Analysis, §2.3

## 说明
把「积分有限的后果」分别用到 |f| 上即可：$\{f \ne 0\} = \{|f| > 0\}$。
