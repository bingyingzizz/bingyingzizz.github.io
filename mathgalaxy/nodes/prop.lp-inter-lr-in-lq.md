# L^p ∩ L^r ⊆ L^q　`prop.lp-inter-lr-in-lq`
命题（插值）：$L^p \cap L^r \subseteq L^q$
layer 18 · 命题 · L^p 空间 · 分析学

设 $0 < p < q < r \le \infty$。若 $f \in L^p \cap L^r$，则 $f \in L^q$，且

$$\|f\|_q \le \|f\|_p^{\lambda} \, \|f\|_r^{1-\lambda}$$

其中 $\lambda \in (0,1)$ 由下式确定：
> 陈述续见 `nodes/prop.lp-inter-lr-in-lq.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.lp-norm` L^p 范数：用到了定义 L^p 范数　proofs/def-link.lp-norm-interpolation.md
- `def.essential-sup` 本性上界与 L^∞：用到了定义 本性上界与 L^∞　proofs/def-link.essential-sup-interpolation.md

refs: Folland, Real Analysis, Prop. 6.4

> 说明见 `notes/prop.lp-inter-lr-in-lq.md`
