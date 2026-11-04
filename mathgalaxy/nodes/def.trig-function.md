# 正弦与余弦　`def.trig-function`
正弦、余弦（由幂级数定义）
layer 17 · 定义 · 函数列、幂级数与初等函数 · 数学分析
[在星图里打开](../#n=def.trig-function)　·　[节点索引](../index.md)

对 $z \in \mathbb{C}$，定义

$$\cos z := \sum_{k=0}^{\infty} \frac{(-1)^{k}}{(2k)!}\, z^{2k}, \qquad \sin z := \sum_{k=0}^{\infty} \frac{(-1)^{k}}{(2k+1)!}\, z^{2k+1}$$

两个级数对每个 $z$ 都绝对收敛（收敛半径 $+\infty$），并且

$$\cos' = -\sin, \qquad \sin' = \cos, \qquad \cos 0 = 1, \qquad \sin 0 = 0$$

## 它能推出什么 / 谁在用它
- 被 [`def.tan-cot-sec`](../nodes/def.tan-cot-sec.md) 正切、余切、正割、余割 用
- 被 [`def.inverse-trig`](../nodes/def.inverse-trig.md) 反三角函数 用

- …另有出边，续页见 [nodes/def.trig-function.3.md](./def.trig-function.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.trig-function.2.md](./def.trig-function.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 8

> 说明见 `notes/def.trig-function.md`

引用：`def.trig-function`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
