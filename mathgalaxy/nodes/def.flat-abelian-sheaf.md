# 平坦阿贝尔层　`def.flat-abelian-sheaf`
平坦性（Flatness）
layer 19 · 定义 · 阿贝尔层 · 同调代数

拓扑斯 $\mathcal{T}$ 中的阿贝尔群 $P$ 叫**平坦的**，如果函子

$$M \longmapsto P \otimes_{\mathbb{Z}} M$$

是**正合**的。

## 为什么成立（入边，证明在 proofs/）
- `def.tensor-abelian-sheaf` 阿贝尔层的张量积：用到了定义 阿贝尔层的张量积　proofs/def-dep.flat-tensor.md

## 说明
例：**通常的阿贝尔群平坦 $\iff$ 无挠**。由此立刻得到：$\mathbb{Z}\cdot X$ **总是平坦的** —— 先归结到预层、再归结到通常的阿贝尔群，而自由阿贝尔群无挠。
