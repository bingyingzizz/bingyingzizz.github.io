# 有限测度时方向反过来　`prop.lp-inclusion-finite`
命题（只有爆破的场合）：$\mu(X) < \infty$ 时 $L^p(\mu) \supseteq L^q(\mu)$
layer 18 · 命题 · L^p 空间 · 分析学

设 $\mu(X) < \infty$，$0 < p < q \le \infty$。则

$$L^q(\mu) \subseteq L^p(\mu), \qquad \|f\|_p \le \|f\|_q \, \mu(X)^{\,(1/p) - (1/q)}$$

## 为什么成立（入边，证明在 proofs/）
- `def.lp-norm` L^p 范数：用到了定义 L^p 范数　proofs/def-link.lp-norm-finite.md
- `def.measure-space` 有限 / σ-有限 / 半有限：用到了定义 有限 / σ-有限 / 半有限　proofs/def-link.measure-space-lp-finite.md

refs: Folland, Real Analysis, §6.1

> 说明见 `notes/prop.lp-inclusion-finite.md`
