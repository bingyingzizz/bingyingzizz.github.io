# 过滤　`def.filtration`
过滤（Filtration）
layer 15 · 定义 · 过滤与谱序列 · 同调代数

设 $\mathcal{A}$ 是阿贝尔范畴。$M \in \mathcal{A}$ 上的（**递降**）**过滤**是 $M$ 的子对象沿 $(\mathbb{Z}, \ge)$ 的图：

$$\cdots \subseteq F^{n}M \subseteq F^{n+1}M \subseteq \cdots \subseteq M$$
> 陈述续见 `nodes/def.filtration.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.subobject` 子对象：用到了定义 子对象　proofs/def-dep.subobject-filtration.md

## 它能推出什么 / 谁在用它
- 被 `def.spectral-sequence` 谱序列 用

## 说明
命题：$\mathbf{F}(\mathcal{C}(\mathcal{A})) \cong \mathcal{C}(\mathbf{F}(\mathcal{A}))$ —— **「带过滤」与「取复形」可以交换**。所以可以先把复形过滤好，再逐层算同调。
