# 指数函数　`def.exp-function`
指数函数 $\exp$（由幂级数定义）
layer 16 · 定义 · 函数列、幂级数与初等函数 · 数学分析
[在星图里打开](../#n=def.exp-function)　·　[节点索引](../index.md)

对 $z \in \mathbb{C}$，定义

$$\exp z := \sum_{n=0}^{\infty} \frac{z^{n}}{n!}$$

该级数对每个 $z$ 都绝对收敛（收敛半径 $+\infty$），并且满足

$$\exp(z + w) = \exp z \cdot \exp w, \qquad \exp 0 = 1, \qquad \frac{d}{dz}\exp z = \exp z$$

## 为什么成立（入边，证明在 proofs/）
- [`def.power-series`](../nodes/def.power-series.md) 幂级数：用到了定义 幂级数　[proofs/dep.powerseries-exp.md](../proofs/dep.powerseries-exp.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.exp-function.2.md](./def.exp-function.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 8

> 说明见 `notes/def.exp-function.md`

引用：`def.exp-function`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
