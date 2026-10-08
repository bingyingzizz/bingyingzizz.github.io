# 单满在层化后不变　`prop.precanonical-mono-epi`
预标准拓扑下单态射与满态射不变
layer 16 · 命题 · 拓扑斯 · 范畴论

设 $\mathcal{C}$ 是预拓扑斯、配预标准拓扑。对 $\mathcal{C}$ 中的态射 $f : X \to Y$，

$$f \text{ 是单态射（满态射）} \iff X^{\sharp} \to Y^{\sharp} \text{ 是单态射（满态射）}$$

## 为什么成立（入边，证明在 proofs/）
- `def.sheaf` 层：用到了定义 层　proofs/def-dep.sheaf-mono-epi.md

## 说明
所以「谁是单的、谁是满的」在 $\mathcal{C}$ 里和它在层范畴里问出来是同一个答案。这在后面起作用：Giraud 定理里把 $\mathcal{C}$ 换成 $\mathcal{T}$ 再配标准拓扑时，单满关系不会走样。
